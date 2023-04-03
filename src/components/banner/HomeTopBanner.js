import React from "react";
import { useNavigate } from "react-router-dom";
import { setShowMerchantModal } from "../../store/authSlice/authSlice";
import { useDispatch } from "react-redux";

const HomeTopBanner = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goToCalculator = () => {
    navigate("/calculator");
  };

  const showBecomeAPartner = () => {
    dispatch(setShowMerchantModal(true));
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
          <div className="mobileMAD">
            <button
              className="fasta_button"
              onClick={() => navigate("/calculator")}
            >
              <span className="button_group text-center justify-content-center">
                <span>
                  <b>Make A Delivery</b>
                </span>
                <img
                  style={{ width: 18 }}
                  src={require("../../assets/img/vector/dashboardd.png")}
                  alt="itekku"
                />
              </span>
            </button>
          </div>
          <div className="mobileGS">
            <button
              onClick={() => goToCalculator()}
              style={{ paddingLeft: 60, paddingRight: 60 }}
              className="fasta_outline_button"
            >
              Get Started
            </button>
          </div>
          <div className="mobileBAM mt-3">
            <button
              onClick={() => showBecomeAPartner()}
              style={{ paddingLeft: 60, paddingRight: 60, fontSize: 14 }}
              className="fasta_outline_button btnLight"
            >
              <b> Become A Merchant</b>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTopBanner;
