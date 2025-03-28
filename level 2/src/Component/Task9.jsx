import React from 'react'
import {  useState } from 'react'
const Task9 = () => {
    const [text,setText] = useState('')
  return (
    <>
    <div>Task9</div>
    <div>
        <input type='text' value={text} onChange={(e) => setText(e.target.value)}></input>
        <p>you typed :{text}</p>
    </div>
    </>
  )
}

export default Task9