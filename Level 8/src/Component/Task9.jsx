import React, { useState, useEffect } from "react";
import axios from "axios";

const Task9 = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const cancelToken = axios.CancelToken.source();

        const fetchData = async () => {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
                    cancelToken: cancelToken.token
                });
                setData(response.data);
            } catch (err) {
                if (axios.isCancel(err)) {
                    console.log("Request canceled:", err.message);
                } else {
                    setError("Failed to fetch data");
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        
        return () => {
            cancelToken.cancel("Request canceled due to component unmount.");
        };
    }, []);

    return (
        <div className="task9-container">
            <h2>Fetched Data from API:</h2>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p style={{ color: "red" }}>{error}</p>
            ) : (
                <ul>
                    {data.map((post) => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Task9;
