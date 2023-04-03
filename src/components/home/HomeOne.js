import React from "react";
import { useNavigate } from "react-router-dom";
import { setShowMerchantModal } from "../../store/authSlice/authSlice";
import { useDispatch } from "react-redux";

const HomeOne = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goToCalculator = () => {
    navigate("/calculator");
  };

  const showBecomeAPartner = () => {
    dispatch(setShowMerchantModal(true));
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
          <span className="grayColor"> brands, influencer </span> &{" "}
          <span className="grayColor">Businesses</span>
        </h5>
        <p>
          iTEKKU is Commerce done right. We’ve combined site development,
          payment, shipping and shop management into a single beautiful
          platform.
        </p>

        <div className="" style={{ marginTop: 20, marginBottom: 60 }}>
          <div className="mobileGS">
            <button
              onClick={() => goToCalculator()}
              style={{ paddingLeft: 60, paddingRight: 60 }}
              className="fasta_button"
            >
              Get Started
            </button>
          </div>
          <div className="mobileBAM">
            <button
              onClick={() => showBecomeAPartner()}
              style={{ paddingLeft: 60, paddingRight: 60 }}
              className="fasta_button"
            >
              <b> Become A Merchant</b>
            </button>
          </div>
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
