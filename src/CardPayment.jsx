import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./CardPayment.css";   // <-- external styling

function CardPayment({ amount }) {
  var [card, setCard] = useState("");
  var [cvv, setCvv] = useState("");
  var [name, setName] = useState("");

  function pay() {
    if (!card || !cvv || !name) {
      toast.error("Fill all card details");
      setCard("")
      setCvv("")
      setName("")
      return;
    }
    toast.success("Payment Successful using Card!");
    setCard("")
    setCvv("")
    setName("")
  }

  return (
    <div className="card-box">
      <ToastContainer />

      <h3 className="card-title">Debit / Credit Card</h3>

      <input
        className="card-input"
        placeholder="Card Number"
        value={card}
        onChange={(e) => setCard(e.target.value)}
      />

      <input
        className="card-input"
        placeholder="Card Holder Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="card-input"
        placeholder="CVV"
        type="password"
        value={cvv}
        onChange={(e) => setCvv(e.target.value)}
      />

      <button className="card-btn" onClick={pay}>
        Pay ₹{amount}
      </button>
    </div>
  );
}

export default CardPayment;
