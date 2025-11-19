import React, { useState } from "react";
import UPIPayment from "./UPIPayment";
import CardPayment from "./CardPayment";
import "./PaymentOptions.css";

function PaymentOptions({ amount }) {
  var [mode, setMode] = useState("");

  return (
    <div className="pay-box">
      <h2 className="pay-title">Choose Payment Method</h2>

      <select className="pay-select" onChange={(e) => setMode(e.target.value)}>
        <option value="">Select</option>
        <option value="UPI">UPI</option>
        <option value="CARD">Debit / Credit Card</option>
      </select>

      <div className="pay-method-box">
        {mode === "UPI" && <UPIPayment amount={amount} />}
        {mode === "CARD" && <CardPayment amount={amount} />}
      </div>
    </div>
  );
}

export default PaymentOptions;
