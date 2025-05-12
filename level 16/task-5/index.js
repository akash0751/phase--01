const express = require('express');
const data = require('./data.json');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    try {
        return res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get('/users', (req, res) => {
    try {
        const { name, email, sortBy } = req.query;
        let filtered = data;
        if (name) {
            filtered = filtered.filter(user =>
                user.name.toLowerCase().includes(name.toLowerCase())
            );
        }

        if (email) {
            filtered = filtered.filter(user =>
                user.email.toLowerCase().includes(email.toLowerCase())
            );
        }
        res.json(filtered);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});