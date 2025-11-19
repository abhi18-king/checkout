import React, { useEffect, useState } from "react";
import Cart from "./Cart";
import "./App.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  var [data, setData] = useState([]);
  var [cart, setCart] = useState([]);

  async function fetchData() {
    var result = await fetch("https://fakestoreapi.com/products");
    var myResult = await result.json();
    setData(myResult);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function addToCart(product) {
    setCart([...cart, product]);
    toast.success(`${product.title.substring(0, 20)}... added to cart`, {
      position: "top-right",
      autoClose: 1500,
    });
  }

  return (
    <div className="app-container">
      <ToastContainer />

      <h1 className="heading">Products</h1>

      <div className="product-grid">
        {data.map((item) => (
          <div className="product-card" key={item.id}>
            <h3 className="product-title">{item.title}</h3>
            <img className="product-img" src={item.image} alt="" />
            <button className="btn-add" onClick={() => addToCart(item)}>
              Add To Cart
            </button>
          </div>
        ))}
      </div>

      <Cart cartData={cart} />
    </div>
  );
}

export default App;
