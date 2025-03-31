import React, { useState } from "react";
import useAxios from "./UseAxios";

const Task10 = () => {
    const [forceRefresh, setForceRefresh] = useState(false);
    const { data, loading, error, refreshData } = useAxios(
        "https://jsonplaceholder.typicode.com/posts",
        {},
        forceRefresh
    );

    const handleRefresh = () => {
        setForceRefresh(!forceRefresh);
        refreshData();
    };

    return (
        <div className="task10-container">
            <h2>Fetched Data:</h2>
            <button className="refresh-btn" onClick={handleRefresh}>
                {forceRefresh ? "Cancel Refresh" : "Force Refresh"}
            </button>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p style={{ color: "red" }}>{error}</p>
            ) : (
                <ul>
                    {data.slice(0, 5).map((post) => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Task10;
