import React from "react";
import { useSelector } from "react-redux";
import NavBar from "./NavBar";
import TopHeader from "./TopHeader";

const Header = () => {
  const currentPageName = useSelector((state) => state.oauth.currentPageName);

  return (
    <>
      {["Home", "About", "Contact"].includes(currentPageName) && <TopHeader />}

      <NavBar />
    </>
  );
};

export default Header;
