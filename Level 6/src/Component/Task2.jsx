import React, { useState } from 'react'

export const Task2 = () => {
    const [isModelOpen, setIsModelOpen] = useState(false)

    const handleButton =()=>{
        setIsModelOpen(prevState => !prevState)    
    }
  return (
    <>
    <div>
    
    <button onClick={handleButton}>{isModelOpen ? 'Close' : 'Open'}</button>

    </div>
    <div>
        {isModelOpen && (
            <div>
                <h1>Hello</h1>
                <p>I'm Here because you clicked</p>
            </div>

        )}
    </div>
    
    </>

  )
}
