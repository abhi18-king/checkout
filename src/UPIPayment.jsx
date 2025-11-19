import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./UPIPayment.css";

function UPIPayment({ amount }) {
  var [upi, setUpi] = useState("");

  function payNow() {
    if (upi.trim() === "") {
      toast.error("Enter valid UPI ID");
      setUpi("")
      return;
    }
    toast.success("Payment Successful via UPI!");
    setUpi("")
  }

  return (
    <div className="upi-box">
      <ToastContainer />

      <h3 className="upi-title">Pay Using UPI</h3>

      <input
        className="upi-input"
        value={upi}
        onChange={(e) => setUpi(e.target.value)}
        placeholder="example@upi"
      />

      <button className="upi-btn" onClick={payNow}>
        Pay ₹{amount}
      </button>
    </div>
  );
}

export default UPIPayment;
