import axios from "axios";

import { useUser } from "../useUser";
import { actionRequestPost } from "../../service/actionRequest";
import { LOGIN } from "../../service/api-endpoint";
import { useDispatch } from "react-redux";
import { AxiosRequestConfig } from "axios";
import { useCallback, useEffect, useState } from "react";
import { User } from "../../utils/common.type";

// let baseURL='http://localhost:3000/'
// const headers = {
//   'Content-Type': 'application/json; charset=UTF-8',

// }
axios.defaults.baseURL = process.env.REACT_APP_FRONT_URL;

const useRequestLogin = () => {
  const [error, setError] = useState<any>(null);
  const [user, setUser] = useState<User | null>();
  const [loading, setLoading] = useState<boolean>(true);

  const sendLoginRequest = useCallback(async (userObj: User | null) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.request(actionRequestPost(LOGIN, userObj));

      if (userObj && response.status === 200)
        setUser({ ...userObj, authToken: response.data?.accessToken });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError("Axios Error with Message: " + error.message);
      } else {
        setError(error);
      }

      setUser(null);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }, []);
  // useEffect(() => {
  //   const HandleData = (data: any) => {};
  //   if(userObj)
  //   sendLoginRequest(actionRequestPost(LOGIN, userObj), HandleData);
  // }, [sendRequest]);

  return {
    loading,
    error,
    user,
    sendLoginRequest,
  };
};

export default useRequestLogin;
