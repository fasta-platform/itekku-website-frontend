import React from "react";

const CalculatorHeader = ({ currentStep, goToPrevious }) => {
  // const goToHome = () => {
  //   navigate("/");
  // };

  return (
    <div className="calculatorHeader">
      {/* {currentStep !== 1 ? (
        <span
          className="fa fa-chevron-left"
          onClick={() => goToPrevious()}
        ></span>
      ) : (
        <div></div>
      )} */}
      <span
        className="fa fa-chevron-left"
        onClick={() => goToPrevious()}
      ></span>

      <h4>
        {currentStep === 1 && "Make A Delivery"}
        {currentStep === 2 && "You’re Almost Done"}
        {currentStep === 3 && "Review/Checkout "}
      </h4>
      <div></div>
      {/* <span className="fa fa-times" onClick={() => goToHome()}></span> */}
    </div>
  );
};

export default CalculatorHeader;
