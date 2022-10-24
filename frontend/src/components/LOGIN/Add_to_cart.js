import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import img from "../components/LOGIN/empty-shopping-cart-v2.jpg";

const customStyle = {
  padding: 40,
  fontSize: 40,
};
const customStyle2 = {
  height: "180px",
  width: "240px",
};
ReactDOM.render(
  <React.StrictMode>
    <h1 style={customStyle}>Shopping Cart</h1>
    <h2 style={{ padding: 40 }}>0 Courses in Cart</h2>
    <div class="center">
      <img style={customStyle} src={img} alt="shop" />
      <h2>Your cart is empty. Keep shopping to find a course!</h2>
      <button id="button1" className="fluid ui button blue">
        Keep Shopping
      </button>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
