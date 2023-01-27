import React from "react";
import { useDispatch } from "react-redux";
import { setCurrentStep } from "../../store/authSlice/authSlice";

import "./steppers.css";
const CalculatorSteppers = ({
  currentStep,
  completedStep1,
  completedStep2,
}) => {
  const dispatch = useDispatch();

  const moveToStep = (value) => {
    // console.log(value);
    if (value === 1) {
      // navigate("/login");
      dispatch(setCurrentStep(1));
      return;
    }

    if (value === 2 && completedStep1 === true) {
      dispatch(setCurrentStep(2));
      return;
    }
    if (value === 3 && completedStep2 === true) {
      dispatch(setCurrentStep(3));
      return;
    }

    // if (value === 3 && completedStep2 === true) {
    //   dispatch(setCurrentStep(3));
    //   return;
    // }

    // if (value === 4 && completedStep2 === true && completedStep3 === true) {
    //   dispatch(setCurrentStep(4));
    //   return;
    // }
  };
  return (
    <div className="container contaoiner">
      <div className="stepper-wrapper">
        <div className="progress"></div>
        <div
          onClick={() => moveToStep(1)}
          className={`screen-indicator ${currentStep === 1 && "active"} ${
            currentStep > 1 && "completed"
          }`}
        >
          1
        </div>
        <div
          onClick={() => moveToStep(2)}
          className={`screen-indicator ${currentStep === 2 && "active"} ${
            currentStep > 2 && "completed"
          }`}
        >
          2
        </div>
        <div
          onClick={() => moveToStep(3)}
          className={`screen-indicator ${currentStep === 3 && "active"} ${
            currentStep > 3 && "completed"
          }`}
        >
          3
        </div>
        {/* <div
          onClick={() => moveToStep(4)}
          className={`screen-indicator ${currentStep === 4 && "active"} ${
            currentStep > 4 && "completed"
          }`}
        >
          4
        </div> */}
      </div>
      <div className="stepperTitle">
        <span>{currentStep === 1 ? "Sender’s info" : ""}</span>
        <span>{currentStep === 2 ? "Receiver/Item Info" : ""} </span>
        <span></span>
      </div>
    </div>
  );
};

export default CalculatorSteppers;
