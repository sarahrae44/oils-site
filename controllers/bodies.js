const express = require('express');
const Body = require('../models/bodies.js');
// const Oil = require('../models/oils.js');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('bodies/index.ejs');
});

module.exports = router;
