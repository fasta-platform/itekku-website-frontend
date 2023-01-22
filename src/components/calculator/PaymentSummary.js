import React from "react";
import { formatValue } from "../../helpers/customFunctions";

const PaymentSummary = ({ summaryDelivery }) => {
  return (
    <div className="cartCompRightCard">
      <div className="cartCompRightCardItems">
        <h5>Items ({summaryDelivery?.destinations?.length || 1})</h5>
      </div>
      <div className="cartCompRightCardItems">
        <h5>Subtotal</h5>
        <h3>
          N
          {summaryDelivery?.pricing
            ? formatValue(summaryDelivery?.pricing)
            : 10}
        </h3>
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
            // width: 300,
          }}
          className="fasta_button"
        >
          Checkout on whatsapp
        </button>
      </div>
    </div>
  );
};

export default PaymentSummary;
