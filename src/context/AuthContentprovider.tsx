import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hook/useLocalStorage";

import { useUser } from "../hook/useUser";
import { AuthContext } from "./AuthContext";
import useRequestLogin from "../hook/requests/useRequestLogin";
import { User } from "../utils/common.type";
import { useNavigate } from "react-router-dom";

const AuthContextProvider = (props: { children: React.ReactElement }) => {
  const { addUser, removeUser } = useUser();
  const [user, setUser] = useState<User | null>(null);
  const { getItem } = useLocalStorage();
  const { sendLoginRequest, user: userData } = useRequestLogin();
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function checkUser() {
      const user_ = getItem("user");

      if (user_ !== null && user_ !== "") {
        setUser(JSON.parse(user_));
        addUser(JSON.parse(user_));

        setIsAuthenticated(true);
        setIsLoading(false);
      } else setIsLoading(false);
    }

    checkUser();
  }, []);

  useEffect(() => {
    async function checkLogin() {
      if (userData && userData.authToken) {
        setUser(userData);
        await addUser(userData);
        setIsAuthenticated(true);
        setIsLoading(false);
        navigate("/");
      } else return "";
    }

    checkLogin();
  }, [userData]);

  const login = async (user: User) => {
    setUser(user);
    await sendLoginRequest(user);
  };

  const logout = () => {
    removeUser();
    setIsAuthenticated(false);
    setIsLoading(false);
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, login, logout, isLoading, isAuthenticated }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
