import { Fragment, useContext } from "react";
import { Navigate, Outlet, Route } from "react-router-dom";

import Spinner from "../components/Spinner";
import { AuthContext } from "../context/AuthContext";
import LogoutButton from "../components/LogoutButton";

const MainRoute = ({ component, ...rest }: any) => {
  const { isAuthenticated, isLoading } = useContext(AuthContext);

  return !isLoading ? (
    isAuthenticated ? (
      <Fragment>
        <LogoutButton />
        <Outlet />
      </Fragment>
    ) : (
      <Navigate to="/signin" replace />
    )
  ) : (
    <Spinner />
  );
};

export default MainRoute;
