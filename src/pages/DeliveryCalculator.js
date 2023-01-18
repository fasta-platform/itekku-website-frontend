import React, { useEffect } from "react";
import CalculatorForm from "../components/calculator/CalculatorForm";
import CalculatorHeader from "../components/calculator/CalculatorHeader";
import { addFixFormHeader } from "../helpers/customFunctions";

const DeliveryCalculator = () => {
  useEffect(() => {
    addFixFormHeader();
  }, []);

  return (
    <div className="calculator">
      <div className="calculator_wrapper">
        <CalculatorHeader />

        <CalculatorForm />
      </div>
    </div>
  );
};

export default DeliveryCalculator;
