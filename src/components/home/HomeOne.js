import React from "react";
import { useNavigate } from "react-router-dom";

const HomeOne = () => {
  const navigate = useNavigate();

  const goToCalculator = () => {
    navigate("/calculator");
  };

  return (
    <div className="HomeOne" id="SocialCommerce">
      <img
        className="HomeOne_fresh"
        src={require("../../assets/img/fresh.png")}
        alt="itekku"
      />
      <div className="HomeOneLeft">
        <h5>
          Shop From Your favourite{" "}
          <span className="grayColor">brands, influencer </span> &{" "}
          <span className="grayColor">Businesses</span>
        </h5>
        <p>
          With our <span className="fontBold">Social Commerce Platform</span>,
          you can shop directly on social media from your favourite{" "}
          <span className="fontBold">Brands Businesses</span> and{" "}
          <span className="fontBold">influencers</span>
          seamlessly.
        </p>

        <div className="" style={{ marginTop: 50, marginBottom: 60 }}>
          <button
            onClick={() => goToCalculator()}
            style={{ paddingLeft: 60, paddingRight: 60 }}
            className="fasta_button"
          >
            Get Started
          </button>
        </div>
      </div>
      <div className="HomeOneRight">
        <div className="banner_logo">
          <div>
            <img
              className=""
              src={require("../../assets/img/vector/logo1.png")}
              alt="itekku"
            />
          </div>
          <div>
            <img
              className=""
              src={require("../../assets/img/vector/logo2.png")}
              alt="itekku"
            />
          </div>

          <div>
            <img
              className=""
              src={require("../../assets/img/vector/logo3.png")}
              alt="itekku"
            />
          </div>
          <div>
            <img
              className=""
              src={require("../../assets/img/vector/logo4.png")}
              alt="itekku"
            />
          </div>
          <div>
            <img
              className=""
              src={require("../../assets/img/vector/logo5.png")}
              alt="itekku"
            />
          </div>
          <div>
            <img
              className=""
              src={require("../../assets/img/vector/logo6.png")}
              alt="itekku"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeOne;
