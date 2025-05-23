const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title: String,
    link: { type: String, unique: true },
    content: String,
    pubDate: Date,
    source: String
  });

  const Article = mongoose.model('Article', articleSchema);
  module.exports = Article;