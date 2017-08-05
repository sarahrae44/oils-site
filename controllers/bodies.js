const express = require('express');
const Body = require('../models/bodies.js');
// const Oil = require('../models/oils.js');
const router = express.Router();

router.get('/', (req, res) => {
  Body.find({}, (err, foundBodies) => {
    res.render('bodies/index.ejs', {
      bodies: foundBodies
    });
  })
});

router.post('/', (req, res) => {
  Body.create(req.body, (err, createdBody) => {
    res.redirect('/bodies');
  });
});

router.get('/new', (req, res) => {
  res.render('bodies/new.ejs');
});

router.get('/:id', (req, res) => {
  Body.findById(req.params.id, (err, foundBody) => {
    res.render('bodies/show.ejs', {
      body: foundBody
    });
  });
});

router.put(':/id', (req, res) => {
  res.redirect('/bodies');
});

module.exports = router;
