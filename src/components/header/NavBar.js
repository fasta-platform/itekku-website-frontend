import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import CustomButtonImage from "../customs/CustomButtonImage";

const NavBar = () => {
  const navigate = useNavigate();
  const currentPageName = useSelector((state) => state.oauth.currentPageName);

  const scrollElement = (e, ele) => {
    e.preventDefault();

    let element = document.getElementById(ele);
    console.log("ID", ele);
    console.log("element", element);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");

      setTimeout(() => {
        let newElement = document.getElementById(ele);
        newElement.scrollIntoView({ behavior: "smooth" });

        // window.scrollTo({ top: 0 });
      }, 300);
    }
  };

  // const goToCalculator = () => {
  //   navigate("/calculator");
  // };

  const handleButtonClick = (buttonType) => {
    if (buttonType === true) {
      navigate("/calculator");
    } else {
      navigate("/");
    }
    // console.log(buttonType);
    // navigate("/calculator");
  };

  return (
    <div className="navbar" id="top_header">
      <div className="navbar_left">
        <div className="logo scroll">
          <NavLink to="/">
            <img
              src={require("../../assets/img/itekku.png")}
              alt="itekku logo"
            />
          </NavLink>
        </div>
        <NavLink to="/about" className="top_link logo_link scroll">
          About Us
        </NavLink>
      </div>

      <div className="navbar_middle">
        <a
          href="true"
          onClick={(e) => scrollElement(e, "SocialCommerce")}
          className="top_link scroll active"
        >
          Social Commerce
        </a>
        <a
          href="true"
          onClick={(e) => scrollElement(e, "BuyNowPaylater")}
          className="top_link scroll active"
        >
          Buy Now Paylater
        </a>
        <a
          href="true"
          onClick={(e) => scrollElement(e, "Logistics")}
          className="top_link scroll active"
        >
          Logistics
        </a>
        <a
          href="true"
          onClick={(e) => scrollElement(e, "ItekkuForBusiness")}
          className="top_link scroll active"
        >
          Itekku For Business
        </a>
        {/* <NavLink to="/" className="top_link scroll">
          Social Commerce
        </NavLink> */}
        {/* <NavLink to="/" className="top_link scroll">
          Buy Now Paylater
        </NavLink>
        <NavLink to="/" className="top_link scroll">
          Logistics
        </NavLink>

        <NavLink to="/" className="top_link scroll">
          Itekku For Business
        </NavLink> */}
      </div>

      <div className="navbar_right">
        <CustomButtonImage
          handleClick={handleButtonClick}
          text={
            ["Home", "About", "Contact"].includes(currentPageName)
              ? "Make A Delivery"
              : "Make A Delivery"
          }
          dark={
            ["Home", "About", "Contact"].includes(currentPageName)
              ? true
              : false
          }
          imageSrc={
            ["Home", "About", "Contact"].includes(currentPageName)
              ? require("../../assets/img/vector/dashboardd.png")
              : require("../../assets/img/vector/dashboardd2.png")
          }
        />
      </div>
    </div>
  );
};

export default NavBar;
