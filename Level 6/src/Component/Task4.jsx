import React from 'react'
import { useState } from 'react';

const Task4 = () => {
    const [user, setUser] = useState({ name: "", age: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value }); 
  };
  return (
    <div>
        <div>
      <h2>Enter Your Details</h2>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
        placeholder="Enter your name"
      />
      <input
        type="number"
        name="age"
        value={user.age}
        onChange={handleChange}
        placeholder="Enter your age"
       
      />

      
      <p>Name: <strong>{user.name}</strong></p>
      <p>Age: <strong>{user.age}</strong></p>
    </div>
    </div>
  )
}

export default Task4