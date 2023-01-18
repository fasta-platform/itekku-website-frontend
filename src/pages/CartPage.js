import React, { useEffect } from "react";
import CalculatorHeader from "../components/calculator/CalculatorHeader";
import CartComp from "../components/calculator/CartComp";
import { addFixFormHeader } from "../helpers/customFunctions";

const CartPage = () => {
  useEffect(() => {
    addFixFormHeader();
  }, []);

  return (
    <div className="calculator">
      <div className="calculator_wrapper wrapper_large">
        <CalculatorHeader />

        <CartComp />
      </div>
    </div>
  );
};

export default CartPage;
