import React from 'react'
import { useState } from 'react';
import './Filter.css'
const Filter = () => {
    const [search, setSearch] = useState("");
    const items = ["Time to Leave", "Hardwork", "Self-control", "Peace"];
  
    const filteredItems = items.filter((item) =>
      item.toLowerCase().includes(search.toLowerCase())
    );
  
  return (
    <div className='container'>
    <input className='input'
      type="text"
      placeholder="Search..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
    <ul className='ul'>
      {filteredItems.length > 0 ? (
        filteredItems.map((item, index) => <li className="li" key={index}>{item}</li>)
      ) : (
        <li>No items are there!</li>
      )}
    </ul>
  </div>
);

  
}

export default Filter