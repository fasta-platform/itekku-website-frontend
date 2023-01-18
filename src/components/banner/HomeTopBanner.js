import React from "react";
import { useNavigate } from "react-router-dom";

const HomeTopBanner = () => {
  const navigate = useNavigate();

  const goToCalculator = () => {
    navigate("/calculator");
  };

  return (
    <div className="homeTopBanner">
      <img
        className="banner_img banner_img_one"
        src={require("../../assets/img/p1.png")}
        alt="itekku"
      />
      <img
        className="banner_img banner_img_two"
        src={require("../../assets/img/p2.png")}
        alt="itekku"
      />
      <img
        className="banner_img banner_img_three"
        src={require("../../assets/img/p3.png")}
        alt="itekku"
      />
      <img
        className="banner_img banner_img_four"
        src={require("../../assets/img/p4.png")}
        alt="itekku"
      />
      <div className="homeTopBannerContent">
        <h5>
          All Your <span className="grayColor">shopping needs</span> in one
          place{" "}
        </h5>

        <p>
          Our suite of <span className="grayLightColor">Bespoke Products</span>{" "}
          will make your online shopping experience{" "}
          <span className="grayLightColor">Seamless, Memorable</span> and{" "}
          <span className="grayLightColor">Delightful</span>
        </p>

        <div className="" style={{ marginTop: 50, marginBottom: 60 }}>
          <button
            onClick={() => goToCalculator()}
            style={{ paddingLeft: 60, paddingRight: 60 }}
            className="fasta_outline_button"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeTopBanner;
