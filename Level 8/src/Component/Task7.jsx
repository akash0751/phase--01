import React, { useState, useEffect } from "react";
import axios from "axios";

const api = axios.create({
    baseURL: "https://dummyjson.com",
});

api.interceptors.request.use(
    (config) => {
        config.headers["Authorization"] = "Bearer Token123"; 
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        console.log("Response Data:", response.data);
        return response;
    },
    (error) => {
        if (error.response) {
            if (error.response.status === 401) {
                console.error("Unauthorized: Please log in");
            } else if (error.response.status === 404) {
                console.error("Not Found: Invalid API endpoint");
            } else if (error.response.status === 500) {
                console.error("Server Error: Try again later");
            }
        }
        return Promise.reject(error);
    }
);

const Task7 = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await api.get("/products");
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
            <h2>Axios Interceptors </h2>
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
                        background-color: #f8f9fa;
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
                        background: #fff;
                        border: 1px solid #ddd;
                        border-radius: 4px;
                        margin-bottom: 8px;
                        display: flex;
                        justify-content: space-between;
                        transition: background 0.3s;
                    }
                    .product-item:hover {
                        background: #e9ecef;
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

export default Task7;
