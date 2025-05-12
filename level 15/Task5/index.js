const express  = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const routeContact = require('./routes/routes');
dotenv.config()
const app = express();
app.use(express.json())

app.use('/contact',routeContact)
app.listen(process.env.PORT,(req,res)=>{
    console.log('server is running on port 3000')
})

mongoose.connect(process.env.URL).then(()=>{
    console.log('connected to database')
})