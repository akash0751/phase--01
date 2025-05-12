const express = require('express');
const Article = require('../Model/rss')
const fetchAndStoreFeed = require('../utils/rss')
const router = express.Router();

router.post('/fetch', async (req, res) => {
    const { url } = req.body;
    if (!url) return res.status(400).json({ message: 'Feed URL is required' });
  
    try {
      const result = await fetchAndStoreFeed(url);
      res.json({ message: 'Feed processed', ...result });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  router.get('/articles', async (req, res) => {
    try {
      const { source, keyword, startDate, endDate } = req.query;
      let filter = {};
  
      if (source) filter.source = new RegExp(source, 'i');
      if (keyword) filter.$or = [
        { title: new RegExp(keyword, 'i') },
        { content: new RegExp(keyword, 'i') }
      ];
      if (startDate && endDate) {
        filter.pubDate = {
          $gte: new Date(startDate),
          $lte: new Date(endDate)
        };
      }
  
      const articles = await Article.find(filter).sort({ pubDate: -1 });
      res.json(articles);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  

module.exports = router