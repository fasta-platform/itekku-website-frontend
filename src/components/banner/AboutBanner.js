import React from "react";

const AboutBanner = () => {
  return (
    <div className="aboutBanner">
      <div className="aboutBannerGrid">
        <div className="aboutBannerGridleft">
          <h5>
            Get To Know Us <span className="grayColor">Better</span>
          </h5>
          <p>
            We are your all in one business solution set out to make your
            business grow effortlessly.
          </p>
        </div>
        <div className="aboutBannerGridRight">
          <img
            className=""
            src={require("../../assets/img/womanformalshirt.png")}
            alt="itekku"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
