import React from 'react'
import { useEffect,useState } from 'react';

const Task5 = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/todos/2")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not OK");
          }
          return response.json();
        })
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    }, []);
  return (
    <div>
        <div >
      <h2>API Data Fetching</h2>
      
      {loading && <p>Loading...</p>}
      
      {error && <p>Error: {error}</p>}
      
      {data && (
        <div>
          <h3>Todo ID: {data.id}</h3>
          <p><strong>Title:</strong> {data.title}</p>
          <p><strong>Completed:</strong> {data.completed ? "✅" : "❌"}</p>
        </div>
      )}
    </div>
    </div>
  )
}

export default Task5