import React, { useState } from 'react'

export const Task3 = () => {
    const [text , setText] = useState('')
    
  return (
    <>
     <div>
      <h2>Type Something</h2>
      <input
        type="text"
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Enter text here..."
       
      />
      <p >You typed: <strong>{text}</strong></p>
    </div>
    </>
  )
}
