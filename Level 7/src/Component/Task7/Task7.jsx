import React from 'react'
import UseWindowResize from '../Task7/UseWindowResize';
const Task7 = () => {
    const { width, height } = UseWindowResize();

    return (
      <div style={{ textAlign: "center", marginTop: "20px", padding: "20px", border: "1px solid #ddd", borderRadius: "10px", maxWidth: "400px", margin: "auto" }}>
        <h2>Window Size Tracker</h2>
        <p>Resize your window to see live updates!</p>
        <h3>Width: {width}px</h3>
        <h3>Height: {height}px</h3>
      </div>
    );
  };
export default Task7