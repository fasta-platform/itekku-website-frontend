/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

const OAuthLayout = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Outlet />
    </div>
  );
};

export default OAuthLayout;
