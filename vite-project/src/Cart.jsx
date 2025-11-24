import { useState } from "react";
import React from "react";
import "./App.css";

export default function Cart() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="cart-container">
        <img src=".\public\shoppingcart.png" className="cart" />
        <div className="red">{count}</div>
      </div>
      <div className="btn">
        <button onClick={() => setCount((add) => add + 1)}>Add</button>
        <button onClick={() => setCount((sub) => sub - 1)}>Delete</button>
      </div>
    </>
  );
}
