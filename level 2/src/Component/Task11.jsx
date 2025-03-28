import React from 'react'

const Task11 = () => {
    const items = ["Apple", "Banana", "orange", "Mango"];
  return (
    <div>
    <h2>Fruit List</h2>
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
  )
}

export default Task11