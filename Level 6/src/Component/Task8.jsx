import React from 'react'
import { useReducer } from "react";

function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
}
const Task8 = () => {
    const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  return (
    <div>
         <div>
      <h1>useReducer Counter</h1>
      <p>{state.count}</p>
      <div>
        <button  onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
        <button  onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      </div>
    </div>
    </div>
  )
}

export default Task8