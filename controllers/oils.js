const express = require('express');
const Oil = require('../models/oils.js');
const Body = require('../models/bodies.js');
const router = express.Router();

router.get('/', (req, res) => {
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

router.delete('/:id', (req, res) => {
  Oil.findByIdAndRemove(req.params.id, (err, foundOil) => {
    const bodyIds = [];
    for(let i = 0; i < foundOil.bodies.length; i++) {
      bodyIds.push(foundOil.bodies[i]._id);
    }
    Body.remove(
      {
        _id: {
          $in: bodyIds
        }
      },
      (err, data) => {
        res.redirect('/oils');
      }
    );
  });
});

router.get('/:id/edit', (req, res) => {
  Oil.findById(req.params.id, (err, foundOil) => {
    res.render('oils/edit.ejs', {
      oil: foundOil
    });
  });
});

router.put('/:id', (req, res) => {
  Oil.findByIdAndUpdate(req.params.id, req.body, () => {
    res.redirect('/oils');
  });
});

module.exports = router;
