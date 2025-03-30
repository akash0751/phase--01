import React ,{useState} from 'react'
import UseDocumentTitle from '../Task6/UseDocumentTitle';
const Task6 = () => {
    const [count, setCount] = useState(0);

    UseDocumentTitle(`Count: ${count}`); 
  
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h2>Document Title Updater</h2>
        <p>Click the button to update the document title.</p>
        <h3>Current Count: {count}</h3>
  
        <button
          onClick={() => setCount(count + 1)}
          style={{
            padding: "10px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#4CAF50",
            color: "white",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          Increment Count
        </button>
      </div>
    );
  };
export default Task6