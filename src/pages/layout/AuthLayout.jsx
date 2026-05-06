import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";

const AuthLayout = () => {
  return (
    <div className="auth-root">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;