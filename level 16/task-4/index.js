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

app.get('/user/:id', (req, res) => {
    try {
        const id = req.params.id;
        const user = data.find(user => user.id == id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
