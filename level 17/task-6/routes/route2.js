const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Post = require('../model/post');
const Author = require('../model/author');

router.post('/add',async(req,res)=>{
    try {
        const author = await Author.create(req.body)
        res.json(author)
        } catch (error) {
            res.status(400).json({ message: error.message })}
})

router.get('/',async(req,res)=>{
    try {
        const author = await Author.find()
        res.json(author)
        } catch (error) {
            res.status(400).json({ message: error.message })}
})

module.exports = router;

