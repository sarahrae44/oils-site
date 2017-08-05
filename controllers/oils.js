const express = require('express');
const Oil = require('../models/oils.js');
// const Body = require('../models/bodies.js');
const router = express.Router();

router.get('/', (req, res) =>{
  Oil.find({}, (err, foundOils) => {
    res.render('oils/index.ejs', {
      oils: foundOils
    });
  })
});

router.post('/', (req, res) => {
  Oil.create(req.body, (err, createdOil) => {
    res.redirect('/oils');
  });
});

router.get('/new', (req, res) => {
  res.render('oils/new.ejs');
});

router.get('/:id', (req, res) => {
  Oil.findById(req.params.id, (err, foundOil) => {
    res.render('oils/show.ejs', {
      oil: foundOil
    });
  });
});

module.exports = router;
