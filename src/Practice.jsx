// import React, { useState } from "react";
// import UPIPayment from "./UPIPayment";
// import CardPayment from "./CardPayment";
// import NetBanking from "./NetBanking";
// import COD from "./COD";
// import "./PaymentOptions.css";

// function PaymentOptions({ amount }) {
//   const [mode, setMode] = useState("");

//   return (
//     <div className="payment-box">
//       <h2 className="payment-title">Choose Payment Method</h2>

//       <select
//         className="payment-select"
//         onChange={(e) => setMode(e.target.value)}
//       >
//         <option value="">Select</option>
//         <option value="UPI">UPI</option>
//         <option value="CARD">Debit / Credit Card</option>
//         <option value="NET">Net Banking</option>
//         <option value="COD">Cash On Delivery</option>
//       </select>

//       <div className="payment-content">
//         {mode === "UPI" && <UPIPayment amount={amount} />}
//         {mode === "CARD" && <CardPayment amount={amount} />}
//         {mode === "NET" && <NetBanking amount={amount} />}
//         {mode === "COD" && <COD amount={amount} />}
//       </div>
//     </div>
//   );
// }

// export default PaymentOptions;



// import React, { useEffect, useState } from "react";
// import Card from "./Card";
// import UPI from "./UPI"; // <-- create this component
// import "./Cart.css";

// function Cart(props) {
//   const [result, setResult] = useState(props.cartData);
//   const [total, setTotal] = useState(0);
//   const [show, setShow] = useState(false);
//   const [paymentOptions, setPaymentOptions] = useState(false);
//   const [selectedMethod, setSelectedMethod] = useState("");

//   useEffect(() => {
//     setResult(props.cartData);
//   }, [props.cartData]);

//   function calculateTotal() {
//     const sum = props.cartData.reduce((acc, item) => acc + item.price, 0);
//     setTotal(sum);
//     setShow(true);
//   }

//   function payment() {
//     setPaymentOptions(true);
//   }

//   function chooseMethod(method) {
//     setSelectedMethod(method);
//   }

//   return (
//     <div className="cart-container">
//       <h1 className="cart-title">Cart</h1>

//       {result.map((item) => (
//         <div className="cart-item" key={item.id}>
//           <h3>{item.title}</h3>
//           <img src={item.image} alt="" />
//         </div>
//       ))}

//       {result.length > 0 && (
//         <button className="checkout-btn" onClick={calculateTotal}>
//             Checkout
//         </button>
//       )}

//       {show && (
//         <div className="total-box">
//           <h2>Total: ₹{total.toFixed(2)}</h2>
//           <button className="pay-btn" onClick={payment}>
//             Pay
//           </button>
//         </div>
//       )}

//       {/* ---- Payment Options ---- */}
//       {paymentOptions && !selectedMethod && (
//         <div className="payment-options">
//           <h3>Select Payment Method</h3>
//           <button onClick={() => chooseMethod("card")}>Card</button>
//           <button onClick={() => chooseMethod("upi")}>UPI</button>
//         </div>
//       )}

//       {/* ---- Load Respective Component ---- */}
//       {selectedMethod === "card" && <Card amount={total} />}
//       {selectedMethod === "upi" && <UPI amount={total} />}
//     </div>
//   );
// }

// export default Cart;


/// sir told this code 


// import React, { useEffect, useState } from "react";
// import Card from "./Card";
// import "./Cart.css";

// function Cart(props) {
//   const [result, setResult] = useState(props.cartData);
//   const [total, setTotal] = useState(0);
//   const [show, setShow] = useState(false);
//   const [upi, setUpi] = useState(false);

//   useEffect(() => {
//     setResult(props.cartData);
//   }, [props.cartData]);

//   function calculateTotal() {
//     const sum = props.cartData.reduce((acc, item) => acc + item.price, 0);
//     setTotal(sum);
//     setShow(true);
//   }

//   function payment() {
//     setUpi(true);
//   }

//   return (
//     <div className="cart-container">
//       <h1 className="cart-title">Cart</h1>

//       {result.map((item) => (
//         <div className="cart-item" key={item.id}>
//           <h3>{item.title}</h3>
//           <img src={item.image} alt="" />
//         </div>
//       ))}

//       {result.length > 0 && (
//         <button className="checkout-btn" onClick={calculateTotal}>
//           Checkout
//         </button>
//       )}

//       {show && (
//         <div className="total-box">
//           <h2>Total: ₹{total.toFixed(2)}</h2>
//           <button className="pay-btn" onClick={payment}>
//             Pay
//           </button>
//         </div>
//       )}

//       {upi && <Card />}
//     </div>
//   );
// }

// export default Cart;



// import React, { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "./Card.css";
// import "react-toastify/dist/ReactToastify.css";

// function Card() {
//   const [input, setInput] = useState("");

//   function proceedPay() {
//     if (input === "example@upi") {
//       toast.success("Payment Successful!");
//       setInput("");
//     } else {
//       toast.error("Invalid UPI ID");
//       setInput("");
//     }
//   }

//   return (
//     <div className="payment-box">
//       <ToastContainer />

//       <label>Enter UPI ID</label>
//       <input
//         value={input}
//         className="payment-input"
//         onChange={(e) => setInput(e.target.value)}
//         type="text"
//         placeholder="example@upi"
//       />

//       <button className="payment-btn" onClick={proceedPay}>
//         Proceed
//       </button>
//     </div>
//   );
// }

// export default Card;
