import React from "react";
import { useNavigate } from "react-router-dom";

const HomeThree = () => {
  const navigate = useNavigate();

  const goToCalculator = () => {
    navigate("/calculator");
  };

  return (
    <div className="HomeThree" id="Logistics">
      <div className="HomeThreeLeft">
        <h5>
          Enjoy a <span className="grayColor">cheaper, faster</span> and more{" "}
          <span className="grayColor">seamless</span> delivery to your doorstep.
        </h5>
        <p>
          Our we have a cutting edge delivery service that ensures goods gets
          delivered to you in no more than 50 mins after you’ve made your
          orders, at a cheaper rate compared to what you’ve experienced in the
          past
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
      <div className="HomeThreeRight">
        <img
          className="HomeThree_fresh"
          src={require("../../assets/img/dman.png")}
          alt="itekku"
        />
      </div>
    </div>
  );
};

export default HomeThree;
