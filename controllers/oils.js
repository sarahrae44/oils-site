const express = require('express');
const Oil = require('../models/oils.js');
// const Body = require('../models/bodies.js');
const router = express.Router();

router.get('/', (req, res) =>{
  res.render('oils/index.ejs');
});

router.post('/', (req, res) => {
  Oil.create(req.body, (err, createdOil) => {
    res.redirect('/oils');
  });
});

router.get('/new', (req, res) => {
  res.render('oils/new.ejs');
});

module.exports = router;
