import React from "react";
import { useState } from "react";

function counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button>-</button>
      <p>{count}</p>
      <button>+</button>
    </>
  );
}

