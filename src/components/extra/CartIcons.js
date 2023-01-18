import React from "react";
import { useNavigate } from "react-router-dom";
import Alert from "../alert/Alert";

const CartIcons = ({ alertStatus }) => {
  const navigate = useNavigate();

  const goToCart = () => {
    navigate("/cart");
  };

  return (
    <div style={{ position: "relative" }}>
      <div className="shopping_cart" onClick={() => goToCart()}>
        <span className="shopping_cart_count">1</span>
        <img src={require("../../assets/img/vector/cart.png")} alt="itekku" />
        <Alert
          status={alertStatus}
          icon="fa fa-shopping-cart"
          message="Your Item has been added to cart "
        />
      </div>
    </div>
  );
};

export default CartIcons;
