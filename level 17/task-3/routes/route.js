const express = require('express');
const router = express.Router();
const User = require('../model/user');

router.post('/add',async(req,res)=>{
    try {
        const {name, email, age} = req.body
        const user = new User({name, email, age});
        if(!name || !email || !age){
            return res.status(400).json({message: 'Please fill in all fields'});
            }
        await user.save();
        res.send(user);
        } catch (error) {
            res.status(400).send(error);
            }
})

module.exports = router;