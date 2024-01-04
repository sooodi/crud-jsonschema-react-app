import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Button from "@mui/material/Button";

const LogoutButton = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="flex flex-col p-5 justify-items-center">
      <div className="mb-4 text-xs">{user?.email}</div>
      <Button variant="outlined" style={{ maxWidth: "100px" }} onClick={logout}>
        Logout
      </Button>
    </div>
  );
};

export default LogoutButton;
