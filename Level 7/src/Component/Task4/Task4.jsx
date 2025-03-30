import React from 'react'
import useLocalStorage from "./UseLocalStorage";
const Task4 = () => {
    const [name, setName] = useLocalStorage("username", "Akash");

    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            padding: "10px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <p style={{ marginTop: "10px" }}>Stored Name: {name}</p>
      </div>
    );
  };

export default Task4