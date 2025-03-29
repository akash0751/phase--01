import React from "react";

function ChildComponent({ onClick }) {
  console.log("Re-rendered!");

  return (
    <div>
      <h3>Child Component</h3>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}

export default React.memo(ChildComponent);