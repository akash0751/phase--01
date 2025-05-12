const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const schemaRoute = require('./routes/route');
dotenv.config()
const app = express();
app.use(express.json())
app.use('/schema',schemaRoute)
app.listen(process.env.PORT,(req,res)=>{
    console.log('server is running on port 3000')
})

mongoose.connect(process.env.URL).then(()=>{
    console.log('connected to database')
})