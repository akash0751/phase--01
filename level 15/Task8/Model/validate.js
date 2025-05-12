const Joi = require('joi');

const transactionSchema = Joi.object({
    type: Joi.string().valid('income', 'expense').required(),
    amount: Joi.number().positive().required(),
    category: Joi.string().min(3).max(50).required(),
    date: Joi.date().optional(),
    note: Joi.string().max(100).allow('', null) 
  });

  module.exports = transactionSchema;