import React from "react";
import { useNavigate } from "react-router-dom";
import { setShowMerchantModal } from "../../store/authSlice/authSlice";
import { useDispatch } from "react-redux";

const HomeTwo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goToCalculator = () => {
    navigate("/calculator");
  };

  const showBecomeAPartner = () => {
    dispatch(setShowMerchantModal(true));
  };

  return (
    <div className="HomeTwo" id="BuyNowPaylater">
      <img
        className="HomeTwo_fresh"
        src={require("../../assets/img/girl_blue.png")}
        alt="itekku"
      />
      <div className="HomeTwoLeft">
        <div className="HomeTwoLeft_wrapper">
          <img
            className="HomeTwoLeftImg1"
            src={require("../../assets/img/p5.png")}
            alt="itekku"
          />
          {/* <img
            className="HomeTwoLeftImg2"
            src={require("../../assets/img/p6.png")}
            alt="itekku"
          /> */}
          <img
            className="HomeTwoLeftImg3"
            src={require("../../assets/img/p7.png")}
            alt="itekku"
          />
        </div>
      </div>
      <div className="HomeTwoRight">
        <h5>
          spread your <span className="grayColor">payment</span> across multiple{" "}
          <span className="grayColor">installments</span>
        </h5>
        <p>
          You don’t have all the money upfront?, dont worry With{" "}
          <span className="lightColor">ITEKKU PAY</span> you can easily spread
          your payment across multiple installment to ease the pressure on you.
        </p>

        <div className="">
          <div className="mobileGS" style={{ marginTop: 50, marginBottom: 60 }}>
            <button
              onClick={() => goToCalculator()}
              style={{ paddingLeft: 60, paddingRight: 60 }}
              className="fasta_outline_button"
            >
              Get Started
            </button>
          </div>
          <div
            className="mobileBAM"
            style={{ marginTop: 20, marginBottom: 60 }}
          >
            <button
              onClick={() => showBecomeAPartner()}
              className="fasta_outline_button"
            >
              Become A Merchant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTwo;
