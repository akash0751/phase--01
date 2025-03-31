import React, { useState, useEffect } from "react";

function fetchDataPromise() {
    console.log("Fetching data...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const mockData = [
                { id: 1, name: "Arnold" },
                { id: 2, name: "Arnav" },
                { id: 3, name: "Bhargav" }
            ];
            resolve(mockData);
        }, 2000);
    });
}

const Task2 = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchDataPromise()
            .then(setData)
            .catch(err => setError("Failed to fetch data"+err));
    }, []);

    return (
        <div style={{marginLeft:300}}>
            <h2>Fetched Data:</h2>
            {error ? (
                <p style={{ color: "red" }}>{error}</p>
            ) : data.length === 0 ? (
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

export default Task2