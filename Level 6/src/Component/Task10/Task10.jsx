import React from 'react'
import { useCallback,useState } from 'react';
import ChildComponent from './ChildComponent';
const Task10 = () => {
    const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handleClick = useCallback(() => {
    console.log("Button clicked in child component!");
  }, []);
  return (
    <div>
         <div>
      <h2>useCallback - Memoized Callback</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment Count
      </button>
      <br />
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <ChildComponent onClick={handleClick} />
    </div>
    </div>
  )
}

export default Task10