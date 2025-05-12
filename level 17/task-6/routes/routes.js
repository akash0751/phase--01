// routes/postRoutes.js
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Post = require('../model/post');
const Author = require('../model/author');

router.post('/', async (req, res) => {
  try {
    const { title, content, author } = req.body;

    if (!title || !content || !author) {
      return res.status(400).json({ error: 'Title, content, and author are required' });
    }

    const userExists = await Author.findById(author);
    if (!userExists) {
      return res.status(404).json({ error: 'Author (user) not found' });
    }

    const newPost = new Post({ title, content, author });
    const savedPost = await newPost.save();

    res.status(201).json(savedPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({message:error.message});
  }
});

router.get('/', async (req, res) => {
  try {
    const { author } = req.query;
    const filter = {};

    if (author && mongoose.Types.ObjectId.isValid(author)) {
      filter.author = author;
    }

    const posts = await Post.find(filter).populate('author', 'name email');
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});


router.get('/user/:id', async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }

  try {
    const user = await User.findById(id);
    if (!user) return res.status(404).json({ error: 'User not found' });

    const posts = await Post.find({ author: id }).populate('author', 'name email');
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
