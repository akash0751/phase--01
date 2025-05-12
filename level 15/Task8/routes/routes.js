const express = require('express');
const Transaction = require('../Model/budget')
const transactionSchema = require('../Model/validate')
const router = express.Router();

router.post('/add', async (req, res) => {
  try {
    const { error } = transactionSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });
    const transaction = new Transaction(req.body);
    await transaction.save();
    res.status(201).json(transaction);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


router.get('/', async (req, res) => {
  try {
    const transactions = await Transaction.find().sort({ date: -1 });
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.get('/filter', async (req, res) => {
  try {
    const { startDate, endDate, category } = req.query;
    let filter = {};

    if (startDate && endDate) {
      filter.date = { $gte: new Date(startDate), $lte: new Date(endDate) };
    }

    if (category) {
      filter.category = category;
    }

    const results = await Transaction.find(filter).sort({ date: -1 });
    res.json(results);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.get('/summary', async (req, res) => {
  try {
    const transactions = await Transaction.find();
    const income = transactions
      .filter(t => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0);
    const expenses = transactions
      .filter(t => t.type === 'expense')
      .reduce((sum, t) => sum + t.amount, 0);
    const balance = income - expenses;

    res.json({ income, expenses, balance });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


module.exports = router