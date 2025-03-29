import React, { useState } from 'react'

export const Task1 = () => {

    const [counter,setCounter]= useState(0)
  return (
    <>
    <div>
        <p>{counter}</p>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
        <button onClick={() => setCounter(counter - 1)}>Decrement</button>
    </div>
    </>
  )
}


