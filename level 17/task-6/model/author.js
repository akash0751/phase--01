const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Email is invalid'],
  },
  age: {
    type: Number
  }
},{
    timestamps: true
});

const Author = mongoose.model('Author', authorSchema);

module.exports = Author;
