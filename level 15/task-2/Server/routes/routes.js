const express = require('express')
const router = express.Router()
const JournalEntry = require('../Model/model')

router.post('/add',async(req,res)=>{
    const journal = await JournalEntry.create(req.body)
    res.status(201).json({message:"Journal Added Successfully",data:journal})
})

router.get('/all',async(req,res)=>{
    try{
        const journal = await JournalEntry.find();
        res.json(journal);
    }catch(error){
        res.json({message:"error"})
    }
})

router.get('/user/:_id',async(req,res)=>{
    try{
        const id = req.params._id;
        const journal = await JournalEntry.findById(id);
        res.json(journal);
        }catch(error){
            res.json({message:error.message})
    }
})

router.put('/user/:_id',async(req,res)=>{
    try{
        const id = req.params._id;
        const journal = await JournalEntry.findByIdAndUpdate(id,req.body,{new:true});
        res.json(journal);
    }catch(error){
        res.json({message:error.message})
    }
})

router.delete('/user/:_id',async(req,res)=>{
    try{
        const id = req.params._id;
        await JournalEntry.findByIdAndDelete(id);
        res.json({message:"Journal Deleted Successfully"});
        }catch(error){
            res.json({message:error.message})
            }
})
module.exports = router;