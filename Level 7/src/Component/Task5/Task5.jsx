import React from 'react'
import UseFetch from '../Task5/UseFetch';

const Task5 = () => {
    const { data, loading, error } = UseFetch("https://catfact.ninja/fact");

    return (
      <div style={{ textAlign: "center", marginTop: "20px", padding: "20px", border: "1px solid #ddd", borderRadius: "10px", maxWidth: "400px", margin: "auto" }}>
        <h2>Random Cat Fact</h2>
  
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>Error: {error}</p>}
  
        {data && (
          <p style={{ fontSize: "18px", fontStyle: "italic" }}>
            "{data.fact}"
          </p>
        )}
  
        <button 
          onClick={() => window.location.reload()} 
          style={{ padding: "10px", marginTop: "10px", cursor: "pointer", borderRadius: "5px", border: "none", backgroundColor: "#ff9800", color: "white", fontSize: "16px" }}
        >
          Get Another Fact
        </button>
      </div>
    );
  };

export default Task5