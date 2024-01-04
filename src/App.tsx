import React, { Suspense, lazy } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import MainRoute from "./pages/MainRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import AuthContextProvider from "./context/AuthContentprovider";

// const SignupPage = lazy(() => import("./pages/Signup.js"));
// const LoginPage = lazy(() => import("./pages/Login"));

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<MainRoute />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
