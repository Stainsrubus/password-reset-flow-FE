import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/login";
import Signup from "../pages/signup";
import Home from "../pages/home";
import Forgetpassword from "../pages/forgetpassword";
import Resetpassword from "../pages/resetpassword"
import Checkmail from "../pages/checkmail";
function AppRoutes() {
  return (
    <>
      <Routes>
        <Route
          path="/sign-up"
          element={
            <>
              {" "}
              <Signup />
            </>
          }
        ></Route>
        <Route
          path="/forgetpassword"
          element={
            <>
              {" "}
              <Forgetpassword />
            </>
          }
        ></Route>
          <Route
          path="/reset-password/:id/:token"
          element={
            <>
              {" "}
              <Resetpassword />
            </>
          }
        ></Route>
        <Route
          path="/checkmail"
          element={
            <>
              {" "}
              <Checkmail />
            </>
          }
        ></Route>
        <Route
          path="/home"
          element={
            <>
              {" "}
              <Home />
            </>
          }
        ></Route>
        <Route
          path="/"
          element={
            <>
              <Login />
            </>
          }
        ></Route>
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
