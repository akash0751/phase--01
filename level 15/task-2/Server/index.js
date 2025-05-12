const express = require('express');
const { default: mongoose } = require('mongoose');
const journalRoutes = require('./routes/routes')
const app = express();
app.use(express.json())
app.use('/journal',journalRoutes)
app.listen(3000,(req,res)=>{
    console.log('Server is running on port 3000');
})

mongoose.connect("mongodb+srv://akashnewoff05:akash12345@cluster0.k6woe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{console.log("connected")})