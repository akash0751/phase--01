import express from 'express';

const app = express();
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('<p><center>Home page</center></p>')
})

app.get('/about',(req,res)=>{
    res.send('<p><center>About us page</center></p>')
})

app.get('/contact',(req,res)=>{
    res.send('<p><center>contact us page</center></p>')
})

app.get('/service',(req,res)=>{
    res.send('<p><center>help page</center></p>')
})


app.listen(3000,(req,res)=>{
    console.log('server is running on port 3000');
})