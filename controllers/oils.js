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
  Body.findById(req.body.bodyId, (err, foundBody) => {
    Oil.create(req.body, (err, createdOil) => {
      foundBody.oils.push(createdOil);
      foundBody.save((err, data) => {
        res.redirect('/oils');
      });
    });
  });
});

router.get('/new', (req, res) => {
  Body.find({}, (err, allBodies) => {
    res.render('oils/new.ejs', {
      bodies: allBodies
    });
  });
});

router.get('/:id', (req, res) => {
  Oil.findById(req.params.id, (err, foundOil) => {
    Body.findOne({'oils._id':req.params.id}, (err, foundBody) => {
      res.render('oils/show.ejs', {
        body: foundBody,
        oil: foundOil
      });
    })
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
  Oil.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedOil) => {
    Body.findOne({ 'oils._id':req.param.id }, (err, foundBody) => {
      foundBody.oils.id(req.params.id).remove();
      foundBody.oils.push(updatedOil);
      foundBody.save((err, data) => {
        res.redirect('/oils/'+req.params.id);
      });
    });
  });
});

module.exports = router;
