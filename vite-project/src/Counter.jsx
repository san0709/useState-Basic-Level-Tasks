import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  function add() {
    setCount((prevCount) => prevCount + 1);
  }
  function subtract() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <>
      <button onClick={subtract}>-</button>
      <p>{count}</p>
      <button onClick={add}>+</button>
    </>
  );
}
export default Counter;
