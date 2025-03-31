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

async function fetchDataAsync() {
    try {
        const data = await fetchDataPromise();
        console.log("Data received:", data);
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}

const Task3 = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetchDataAsync();
                setData(result);
            } catch (err) {
                setError("Failed to fetch data"+err);
            }
        };
        fetchData();
    }, []);

    return (
        <div style={{marginLeft:300}}>
            <h2>Fetched Data:</h2>
            {error ? (
                <p>{error}</p>
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

export default Task3