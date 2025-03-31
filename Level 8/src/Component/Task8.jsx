import React, { useState, useEffect } from "react";
import axios from "axios";

const Task8 = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const [usersResponse, postsResponse] = await Promise.all([
                    axios.get("https://jsonplaceholder.typicode.com/users"),
                    axios.get("https://jsonplaceholder.typicode.com/posts")
                ]);
                const combinedData = {
                    users: usersResponse.data,
                    posts: postsResponse.data
                };
                setData(combinedData);
            } catch (err) {
                setError("Failed to fetch data"+err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="task8-container">
            <h2>Combined Data from Multiple APIs:</h2>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p style={{ color: "red" }}>{error}</p>
            ) : (
                <div>
                    <h3>Users:</h3>
                    <ul>
                        {data.users.slice(0, 5).map((user) => (
                            <li key={user.id}>{user.name}</li>
                        ))}
                    </ul>
                    <h3>Posts:</h3>
                    <ul>
                        {data.posts.slice(0, 5).map((post) => (
                            <li key={post.id}>{post.title}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Task8;
