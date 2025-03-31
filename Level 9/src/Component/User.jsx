import React, { useEffect, useState } from 'react'
import axios from 'axios'
const User = () => {
    const [userData, setUserData] = useState([]);
  
    const handleData = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
  
    useEffect(() => {
      handleData();
    }, []);
  
    return (
      <div className="user-container">
        <h1 className="user-title">Authors</h1>
        <div className="user-list">
          {userData.length > 0 ? (
            userData.map((user) => (
              <div key={user.id} className="user-card">
                <h2 className="user-name">{user.name}</h2>
                <p className="user-email">{user.email}</p>
              </div>
            ))
          ) : (
            <p className="loading-text">Loading users...</p>
          )}
        </div>
      </div>
    );
  };

export default User