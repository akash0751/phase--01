import React, { useState, useEffect } from "react";
import axios from "axios";

const Task6 = () => {
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
        <div className="container">
            <h2>Fetched Data</h2>
            {loading ? (
                <p className="loading">Loading...</p>
            ) : error ? (
                <p className="error">{error}</p>
            ) : (
                <ul className="product-list">
                    {data.slice(0, 10).map((product) => (
                        <li key={product.id} className="product-item">
                            <span className="product-title">{product.title}</span> -
                            <span className="product-price"> ${product.price}</span>
                        </li>
                    ))}
                </ul>
            )}
            <style>
                {`
                    .container {
                        max-width: 600px;
                        margin: 20px auto;
                        padding: 20px;
                        border: 1px solid #ddd;
                        border-radius: 8px;
                        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
                        text-align: center;
                        font-family: Arial, sans-serif;
                    }
                    h2 {
                        color: #333;
                    }
                    .loading {
                        color: #007bff;
                        font-weight: bold;
                    }
                    .error {
                        color: red;
                        font-weight: bold;
                    }
                    .product-list {
                        list-style-type: none;
                        padding: 0;
                        margin-top: 15px;
                    }
                    .product-item {
                        padding: 10px;
                        background: #f9f9f9;
                        border: 1px solid #ddd;
                        border-radius: 4px;
                        margin-bottom: 8px;
                        display: flex;
                        justify-content: space-between;
                    }
                    .product-title {
                        font-weight: bold;
                        color: #333;
                    }
                    .product-price {
                        color: #28a745;
                    }
                `}
            </style>
        </div>
    );
};

export default Task6