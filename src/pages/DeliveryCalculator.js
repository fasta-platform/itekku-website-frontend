import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import CalculatorForm from "../components/calculator/CalculatorForm";
import { addFixFormHeader } from "../helpers/customFunctions";
import {
  setCurrentPageName,
  setCurrentStep,
  setShowMobileMenu,
} from "../store/authSlice/authSlice";

const DeliveryCalculator = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    addFixFormHeader();
    dispatch(setCurrentPageName("DeliveryCalculator"));
    // eslint-disable-next-line react-hooks/exhaustive-deps

    return () => {
      dispatch(setCurrentStep(1));
      dispatch(setShowMobileMenu(false));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="calculator">
      <CalculatorForm />
    </div>
  );
};

export default DeliveryCalculator;
