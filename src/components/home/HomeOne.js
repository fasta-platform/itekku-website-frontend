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
          Open your online store now
          <span className="grayColor">brands, influencer </span> &{" "}
          <span className="grayColor">Businesses</span>
        </h5>
        <p>
          iTEKKU is Commerce done right. We’ve combined site development,
          payment, shipping and shop management into a single beautiful
          platform.
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
