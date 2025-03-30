import React from 'react'
import useInput from "../Task3/UseInput";
const Task3 = () => {
    const nameInput = useInput("");

    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Enter your name"
          {...nameInput}
          style={{
            padding: "10px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <p style={{ marginTop: "10px" }}>You typed: {nameInput.value}</p>
      </div>
    );
  };

export default Task3