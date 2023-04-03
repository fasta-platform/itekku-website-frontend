import React from "react";
import { useNavigate } from "react-router-dom";
import { setShowMerchantModal } from "../../store/authSlice/authSlice";
import { useDispatch } from "react-redux";

const HomeThree = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goToCalculator = () => {
    navigate("/calculator");
  };

  const showBecomeAPartner = () => {
    dispatch(setShowMerchantModal(true));
  };

  return (
    <div className="HomeThree" id="Logistics">
      <div className="HomeThreeLeft">
        <h5>
          {/* Enjoy a <span className="grayColor">cheaper, faster</span> and more{" "}
          <span className="grayColor">seamless</span> delivery to your doorstep. */}
          Enjoy Affordable, Faster And More Seamless Delivery To Your Doorstep.
        </h5>
        <p>
          We have a cutting-edge delivery service that ensures goods gets
          delivered in no more than 50 mins after you’ve made your orders, at a
          competitive rate compared to others.
        </p>

        <div className="">
          {/* <button
            onClick={() => goToCalculator()}
            style={{ paddingLeft: 60, paddingRight: 60 }}
            className="fasta_outline_button"
          >
            Get Started
          </button> */}

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
            style={{ marginTop: 30, marginBottom: 60 }}
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
      <div className="HomeThreeRight">
        <img
          className="HomeThree_fresh"
          src={require("../../assets/img/dman.png")}
          alt="itekku"
        />
        <img
          className="HomeThree_fresh2"
          src={require("../../assets/img/diveryDeal.png")}
          alt="itekku"
        />
      </div>
    </div>
  );
};

export default HomeThree;
