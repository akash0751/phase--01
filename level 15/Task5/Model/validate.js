const Joi = require('joi');

const contactSchema = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().pattern(/^[0-9]{10}$/).required(),
  address: Joi.string().max(100).allow('', null)
});

module.exports = contactSchema;
