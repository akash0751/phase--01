import express from 'express';

const app = express();
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('<p>Hello world</p>')
})


app.listen(3000,(req,res)=>{
    console.log('server is running on port 3000');
})