import React from 'react'
import { useState,useEffect } from 'react';
const Task6 = () => {
    const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning) return;

    console.log("Timer started...");
    const interval = setInterval(() => {
      console.log(`Timer running: ${count + 1}`);
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      console.log("Timer stopped.");
      clearInterval(interval);
    };
  }, [isRunning, count]);
  return (
    <div>
      <h2>useEffect Cleanup </h2>
      <p>Timer Count: {count}</p>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "Stop Timer" : "Start Timer"}
      </button>
    </div>
  );
}

export default Task6