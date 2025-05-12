const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config()
const app = express();

app.listen(process.env.PORT,(req,res)=>{
    console.log('server is running on port 3000')
})

mongoose.connect(process.env.URL).then(()=>{
    console.log('connected to database')
})


