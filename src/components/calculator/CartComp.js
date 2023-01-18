import React from "react";
import CartItem from "./CartItem";

const CartComp = () => {
  return (
    <div className="cartComp">
      <div className="cartCompLeft">
        <h4 className="calculatorTitle">Cart</h4>
        <div className="cartCompLeftGrid">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
      </div>
      <div className="cartCompRight">
        <h4 className="calculatorTitle">Payment Summary</h4>
        <div className="cartCompRightCard">
          <div className="cartCompRightCardItems">
            <h5>Items (12)</h5>
          </div>
          <div className="cartCompRightCardItems">
            <h5>Subtotal</h5>
            <h3>N12,350-13,560</h3>
          </div>
          <div className="horizontal_dashed"></div>
          <div
            className="button_centered"
            style={{ marginTop: 30, marginBottom: 40 }}
          >
            <button
              type="button"
              style={{
                paddingLeft: 60,
                paddingRight: 60,
                width: 300,
              }}
              className="fasta_button"
            >
              Checkout on whatsapp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartComp;
