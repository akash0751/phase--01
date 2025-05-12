const express = require('express');
const {uploadFiles} = require('./middleware/imageAuth'); 

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post('/image', uploadFiles, (req, res) => {
    const image = req.file;
    if (!image) {
        return res.status(400).json({ message: 'Please upload an image' });
    }
    res.status(201).json({ message: 'Image added successfully', image });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
