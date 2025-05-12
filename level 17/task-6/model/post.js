const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Post title is required'],
  },
  content: {
    type: String,
    required: [true, 'Post content is required'],
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author',
    required: [true, 'Author is required'],
  }
},{
    timestamps: true
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
