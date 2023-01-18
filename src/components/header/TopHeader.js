import React from "react";
import { NavLink } from "react-router-dom";

const TopHeader = () => {
  return (
    <div className="itekku-top-header">
      <div className="left_top_header"></div>
      <div className="middle_top_header">
        <span
          className="fa fa-phone top_link"
          style={{ marginRight: 10 }}
        ></span>
        <span className="top_link">+234 000 000 000</span>
      </div>
      <div className="right_top_header">
        <NavLink to="/contact" className="top_link">
          Contact Us
        </NavLink>
      </div>
    </div>
  );
};

export default TopHeader;
