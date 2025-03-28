import React from 'react'
import { useState } from 'react'
const Task7 = () => {
    const [counter,setCounter] = useState(0);

    const handleButton =()=>{
        setCounter(counter+1);
    }

    const handleButtondec =()=>{
        setCounter(counter-1);
    }
  return (
    <>
    <div>Simple Counter</div>
    <div>
        <p>{counter}</p>
        <button onClick={handleButton}>+</button>
        <button onClick={handleButtondec}>-</button>
    </div>
    </>
  )
}

export default Task7