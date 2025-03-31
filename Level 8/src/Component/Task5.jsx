import React, { useState } from "react";
import axios from "axios";

const Task5 = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [responseMessage, setResponseMessage] = useState(null);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setResponseMessage(null);
        setError(null);

        try {
            const response = await axios.post("https://jsonplaceholder.typicode.com/posts", formData);
            setResponseMessage("Form submitted successfully!");
            setFormData({ name: "", email: "", message: "" });
            console.log(response)
        } catch (err) {
            setError("Failed to submit form. Please try again."+err);
        }
    };

    return (
        <div className="container">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit} className="contact-form">
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required />
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" required></textarea>
                <button type="submit">Submit</button>
            </form>
            {responseMessage && <p className="success">{responseMessage}</p>}
            {error && <p className="error">{error}</p>}

            <style>
                {`
                    .container {
                        max-width: 400px;
                        margin: 0 auto;
                        padding: 20px;
                        border: 1px solid #ccc;
                        border-radius: 5px;
                        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
                        text-align: center;
                    }
                    h2 {
                        margin-bottom: 15px;
                    }
                    .contact-form {
                        display: flex;
                        flex-direction: column;
                        gap: 10px;
                    }
                    .contact-form input, .contact-form textarea {
                        width: 100%;
                        padding: 10px;
                        border: 1px solid #ccc;
                        border-radius: 4px;
                        font-size: 16px;
                    }
                    .contact-form textarea {
                        height: 100px;
                        resize: none;
                    }
                    .contact-form button {
                        background-color: #007bff;
                        color: white;
                        padding: 10px;
                        border: none;
                        border-radius: 4px;
                        cursor: pointer;
                        font-size: 16px;
                    }
                    .contact-form button:hover {
                        background-color: #0056b3;
                    }
                    .success {
                        color: green;
                        margin-top: 10px;
                    }
                    .error {
                        color: red;
                        margin-top: 10px;
                    }
                `}
            </style>
        </div>
    );
};

export default Task5