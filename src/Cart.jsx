import React, { useState } from "react";
import PaymentOptions from "./PaymentOptions";
import "./Cart.css";

function Cart({ cartData }) {
  var [showPayment, setShowPayment] = useState(false);

  var total = cartData.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Cart</h1>

      <div className="cart-items">
        {cartData.map((item) => (
          <div className="cart-item" key={item.id}>
            <img className="cart-img" src={item.image} alt="" />
            <h3 className="cart-item-title">{item.title}</h3>
          </div>
        ))}
      </div>

      {cartData.length > 0 && (
        <button className="checkout-btn" onClick={() => setShowPayment(true)}>
          Checkout (₹{total.toFixed(2)})
        </button>
      )}

      {showPayment && <PaymentOptions amount={total} />}
    </div>
  );
}

export default Cart;
