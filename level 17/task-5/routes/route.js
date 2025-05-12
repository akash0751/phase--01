const express = require('express');
const router = express.Router();
const User = require('../model/user');

router.get('/', async (req, res) => {
    try {
      const { name, email, limit = 10, skip = 0 } = req.query;
  
      const filter = {};
      if (name) filter.name = new RegExp(name, 'i'); 
      if (email) filter.email = new RegExp(email, 'i');
  
      const users = await User.find(filter)
        .skip(parseInt(skip))
        .limit(parseInt(limit));
  
      const total = await User.countDocuments(filter);
  
      res.json({ total, users });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });


  router.put('/update/:id',async(req,res)=>{
    try{
    const {id} = req.params;
    const user = await User.findByIdAndUpdate(id,req.body,{new:true});
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
        }
        res.json({message:"Updated successfully",user})}
        catch(error){
            console.error(error);
            res.status(500).json({ error: 'Server error' });
            }
  })

  router.delete('/remove/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
            }
            res.json({message:"Deleted successfully",user});
            }
            catch(error){
                console.error(error);
                res.status(500).json({ error: 'Server error' });
                }
  })
module.exports = router;