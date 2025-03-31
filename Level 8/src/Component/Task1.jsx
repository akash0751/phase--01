import React from 'react'
import{ useState, useEffect } from "react";

function fetchData(callback) {
    console.log("Fetching data...");
    setTimeout(() => {
        const mockData = [
            { id: 1, name: "Arnold" },
            { id: 2, name: "Arnav" },
            { id: 3, name: "Bhargav" }
        ];
        callback(mockData);
    }, 2000);
}
const Task1 = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData(setData);
    }, []);

    return (
        <div style={{marginLeft:300}}>
            <h2>Fetched Data:</h2>
            {data.length === 0 ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {data.map(item => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Task1