const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routeRss = require('./routes/routes')
dotenv.config()
const app = express();
app.use(express.json())
app.use('/rss',routeRss)

app.listen(process.env.PORT,(req,res)=>{
    console.log('Server is running on port 3000')
})

mongoose.connect(process.env.URL).then(()=>{
    console.log('Connected to MongoDB')
})