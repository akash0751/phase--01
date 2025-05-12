const express = require('express');
const data = require('./data.json');

const app = express();

app.use(express.json())

app.get('/users',(req,res)=>{
    try{
    return res.json(data)
}catch(error){
    res.status(500).json({message:error.message})
}
})

app.listen(3000,(req,res)=>{
    console.log('Server is running on port 3000');
})