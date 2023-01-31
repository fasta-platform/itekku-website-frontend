import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { setShowMobileMenu } from "../../store/authSlice/authSlice";

const Footer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const closeMenu = () => {
    dispatch(setShowMobileMenu(false));
  };

  return (
    <div className="footer">
      <div className="footer_grid">
        <div className="footer_item">
          {/* <NavLink to="/"> */}
          <img
            src={require("../../assets/img/itekku2.png")}
            alt="itekku logo"
          />
          {/* </NavLink> */}
        </div>
        <div className="footer_item">
          <h4>ITEKKU</h4>
          <div className="footer_item_links">
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
            {/* <NavLink to="/">FAQ</NavLink> */}
            {/* <NavLink to="/">Itekku for shopper</NavLink> */}

            {/*  */}
            <NavLink to="/calculator">Delivery calculator</NavLink>
          </div>
        </div>
        <div className="footer_item">
          <h4>OUR PRODUCTS</h4>
          <div className="footer_item_links">
            <a href="true" onClick={(e) => scrollElement(e, "SocialCommerce")}>
              Social Commerce
            </a>
            <a href="true" onClick={(e) => scrollElement(e, "Logistics")}>
              Logistics
            </a>
            <a href="true" onClick={(e) => scrollElement(e, "BuyNowPaylater")}>
              Buy Now Paylater
            </a>
          </div>
        </div>
        <div className="footer_item">
          <h4>CONNECT WITH US</h4>
          <div className="footer_item_links_social">
            <a href="https://www.linkedin.com/company/fasta-ng/">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="https://instagram.com/getitekku?igshid=Zjc2ZTc4Nzk=">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://twitter.com/getitekku?s=21&t=vuCqwbm95Wl4YnBTELIWIg">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/company/fasta-ng/">
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer_copyright">
        <h6>Copyright © ITEKKU Limited 2023</h6>
        <h6>
          This website uses cookies to improve your experience. We'll assume
          you're ok with this, but you can opt-out if you wish.
        </h6>
      </div>
    </div>
  );
};

export default Footer;
