const express = require('express');
const Contact = require('../Model/contact');
const contactSchema = require('../Model/validate')
const router = express.Router();

router.post('/add',async(req,res)=>{
    try{
        const {error} = contactSchema.validate(req.body);
        if (error) {
            return res.status(400).send(error.details[0].message);
            }
        const newContact = await Contact.create(req.body);
        res.status(201).json(newContact);
    }catch(error){
        res.status(400).json({message:error.message});
    }
})

router.get('/',async(req,res)=>{
    try{
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    }catch(error){
        res.status(400).json({message:error.message});
    }
})

router.get('/search', async (req, res) => {
    try {
      const { name, email, phone } = req.query;
  
      let query = {};
  
      if (name) query.name = new RegExp(name, 'i'); 
      if (email) query.email = new RegExp(email, 'i');
      if (phone) query.phone = phone; 
  
      const contacts = await Contact.find(query);
  
      if (contacts.length === 0) {
        return res.status(404).json({ message: "No contacts found" });
      }
  
      res.status(200).json(contacts);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

router.get('/:_id',async(req,res)=>{
    try{
        const id = req.params._id;
        const contact = await Contact.findById(id);
        if(!contact){
            res.status(404).json({message:'Contact not found'});
            }
            res.status(200).json(contact);
    }catch(error){
        res.status(400).json({message:error.message});
    }
})

router.put('/change/:_id',async(req,res)=>{
    try{
        const {error} = contactSchema.validate(req.body);
        if (error) {
            return res.status(400).send(error.details[0].message);
            }
        const id = req.params._id;
        const contact = await Contact.findByIdAndUpdate(id,req.body,{new:true});
        if(!contact){
            res.status(404).json({message:'Contact not found'});
            }
            res.status(200).json(contact);
    }catch(error){
        res.status(400).json({message:error.message});
    }
})

router.delete('/remove/:_id',async(req,res)=>{
    try{
        const id = req.params._id;
        await Contact.findByIdAndDelete(id);
        res.status(200).json({message:'Contact deleted successfully'});

    }catch(error){
        res.status(400).json({message:error.message});
    }
})


  
module.exports = router;
