import React from 'react'
import { useState } from "react";
const Task8 = () => {
    const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="p-4">
      <button
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? "Hide" : "Show"} Content
      </button>
      {isVisible && (
        <div>
          This is the toggled content!
        </div>
      )}
    </div>
  )
}

export default Task8