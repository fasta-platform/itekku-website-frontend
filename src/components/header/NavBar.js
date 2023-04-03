import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { setShowMobileMenu } from "../../store/authSlice/authSlice";
import CustomButtonImage from "../customs/CustomButtonImage";

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentPageName = useSelector((state) => state.oauth.currentPageName);
  const showMobileMenu = useSelector((state) => state.oauth.showMobileMenu);

  useEffect(() => {}, [showMobileMenu]);

  const scrollElement = (e, ele) => {
    e.preventDefault();

    let element = document.getElementById(ele);
    console.log("ID", ele);
    console.log("element", element);
    closeMenu();

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
      navigate("/calculator");
      // navigate("/");
    }
    // console.log(buttonType);
    // navigate("/calculator");
  };

  const toggleMenu = () => {
    dispatch(setShowMobileMenu(!showMobileMenu));
  };

  const closeMenu = () => {
    dispatch(setShowMobileMenu(false));
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

      <div
        className={`menu_wrapper_div  ${
          showMobileMenu === true ? "showMenu" : ""
        }`}
        onClick={() => closeMenu()}
      ></div>

      <div
        className={`navbar_middle  ${
          showMobileMenu === true ? "showMenu" : ""
        }`}
      >
        <div className="menu_close_div">
          <div className="menu_close">
            <NavLink to="/" style={{ padding: 0 }}>
              <img
                style={{ width: 120, height: 32 }}
                src={require("../../assets/img/itekku.png")}
                alt="itekku logo"
              />
            </NavLink>

            <i className="bx bx-x" onClick={() => closeMenu()}></i>
          </div>
        </div>

        <NavLink to="/about" className="top_link showOnMobile">
          <span className="d-block">About Us </span>
          <span style={{ color: "#313131", fontWeight: 300 }}>
            Learn about us{" "}
          </span>
        </NavLink>
        <NavLink to="/contact" className="top_link showOnMobile">
          <span className="d-block">Contact Us</span>
          <span style={{ color: "#313131", fontWeight: 300 }}>
            Learn about us{" "}
          </span>
        </NavLink>
        <a
          href="true"
          onClick={(e) => scrollElement(e, "SocialCommerce")}
          className="top_link scroll active hideSmall"
        >
          Social Commerce
        </a>
        <a
          href="true"
          onClick={(e) => scrollElement(e, "BuyNowPaylater")}
          className="top_link scroll active hideSmall"
        >
          Buy Now Paylater
        </a>
        <a
          href="true"
          onClick={(e) => scrollElement(e, "Logistics")}
          className="top_link scroll active hideSmall"
        >
          Logistics
        </a>
        <a
          href="true"
          onClick={(e) => scrollElement(e, "ItekkuForBusiness")}
          className="top_link scroll active hideSmall"
        >
          iTEKKU For Business
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
        {["Home", "About", "Contact"].includes(currentPageName) && (
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
        )}

        <div className="navbar_right_bugr">
          <i className="bx bx-menu" onClick={() => toggleMenu()}></i>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
