import React, { useState, useEffect } from "react";
import axios from "axios";

const Task4 = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://dummyjson.com/products");
                setData(response.data.products);
            } catch (err) {
                setError("Failed to fetch data"+err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h2>Fetched Data:</h2>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p style={{ color: "red" }}>{error}</p>
            ) : (
                <ul>
                    {data.slice(0, 10).map((product) => (
                        <li key={product.id}>{product.title} - ${product.price}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Task4