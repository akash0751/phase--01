import React from 'react'
import useCounter from "../Task2/UseCounter";
const Task2 = () => {
    const [count, increment, decrement, reset] = useCounter(0);
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Counter: {count}</h2>
      <button onClick={increment} style={buttonStyle}>Increment</button>
      <button onClick={decrement} style={buttonStyle}>Decrement</button>
      <button onClick={reset} style={buttonStyle}>Reset</button>
    </div>
  );
};

const buttonStyle = {
  margin: "5px",
  padding: "10px",
  fontSize: "16px",
  cursor: "pointer",
};
export default Task2