import React from "react";
import { useNavigate } from "react-router-dom";

const CalculatorHeader = () => {
  const navigate = useNavigate();

  const goToPrevious = () => {
    navigate(-1);
  };
  const goToHome = () => {
    navigate("/");
  };

  return (
    <div className="calculatorHeader">
      <span
        className="fa fa-chevron-left"
        onClick={() => goToPrevious()}
      ></span>
      <h4>Make A Delivery</h4>
      <span className="fa fa-times" onClick={() => goToHome()}></span>
    </div>
  );
};

export default CalculatorHeader;
