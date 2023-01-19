/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import CalculatorHeader from "../components/calculator/CalculatorHeader";
import CartComp from "../components/calculator/CartComp";
import { addFixFormHeader } from "../helpers/customFunctions";
import { setCurrentPageName } from "../store/authSlice/authSlice";

const CartPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    addFixFormHeader();
    dispatch(setCurrentPageName("CartPage"));
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
