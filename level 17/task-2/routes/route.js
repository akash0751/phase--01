const express = require('express');
const router = express.Router();
const User = require('../model/user');

router.get('/', (req, res) => {
  const schemaPath = Object.keys(User.schema.paths).reduce((acc, key) => {
    acc[key] = User.schema.paths[key].instance;
    return acc;
  }, {});
  res.json({
    model: 'User',
    schema: schemaPath,
  });
});

module.exports = router;
