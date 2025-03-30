import React from 'react'
import useToggle from "../Task1/UseToggle";
const Task1 = () => {
  const [isVisible, toggleVisibility] = useToggle(false);
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button onClick={toggleVisibility} style={{ padding: "10px", fontSize: "16px" }}>
        {isVisible ? "Hide Content" : "Show Content"}
      </button>
      {isVisible && <p style={{ marginTop: "20px" }}>This is the toggled content!</p>}
    </div>
  )
}

export default Task1