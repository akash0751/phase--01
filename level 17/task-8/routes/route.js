const express = require('express');
const router = express.Router();
const Product = require('../model/Product');

router.get('/category', async (req, res) => {
  const stats = await Product.aggregate([
    { $group: {
      _id: '$category',
      totalProducts: { $sum: 1 },
      totalStock: { $sum: '$stock' },
      avgPrice: { $avg: '$price' }
    }},
    { $sort: { totalProducts: -1 } }
  ]);
  res.json(stats);
});

router.get('/filter', async (req, res) => {
  const { minPrice, maxPrice, inStock, category } = req.query;
  const query = {
    price: { $gte: parseFloat(minPrice || 0), $lte: parseFloat(maxPrice || Infinity) }
  };
  if (inStock === 'true') query.stock = { $gt: 0 };
  if (category) query.category = category;

  const products = await Product.find(query);
  res.json(products);
});


router.get('/search', async (req, res) => {
  const { q } = req.query;
  const products = await Product.find({ $text: { $search: q  } });
  res.json(products);
});


router.get('/avg-price', async (req, res) => {
  const result = await Product.aggregate([
    { $group: {
      _id: '$category',
      avgPrice: { $avg: '$price' }
    }},
    { $sort: { avgPrice: -1 } }
  ]);
  res.json(result);
});

router.get('/', async (req, res) => {
  const { sortBy = 'price', order = 'asc', minStock = 0 } = req.query;
  const sortOrder = order === 'desc' ? -1 : 1;
  const products = await Product.find({ stock: { $gte: parseInt(minStock) } })
    .sort({ [sortBy]: sortOrder });
  res.json(products);
});

module.exports = router;
