const express = require('express');
const router = express.Router();
const Body = require('../models/bodies.js');
const Oil = require('../models/oils.js');

router.get('/', (req, res) => {
  Body.find({}, (err, foundBodies) => {
    res.render('bodies/index.ejs', {
      bodies: foundBodies
    });
  })
});

router.get('/new', (req, res) => {
  Oil.find({}, (err, allOils) => {
    res.render('bodies/new.ejs', {
      oils: allOils
    });
  });
});

router.post('/', (req, res) => {
  Oil.findById(req.body.oilId, (err, foundOil) => {
    Body.create(req.body, (err, createdBody) => {
      foundOil.bodies.push(createdBody);
      foundOil.save((err, data) => {
        res.redirect('/bodies');
      });
    });
  });
});

router.get('/:id', (req, res) => {
  Body.findById(req.params.id, (err, foundBody) => {
    Oil.findOne({'bodies._id':req.params.id}, (err, foundOil) => {
      res.render('bodies/show.ejs', {
        oil:foundOil,
        body:foundBody
      });
    })
  });
});

router.delete('/:id', (req, res) => {
  Body.findByIdAndRemove(req.params.id, (err, foundBody) => {
    Oil.findOne({'bodies._id':req.params.id}, (err, foundOil) => {
      foundOil.bodies.id(req.params.id).remove();
      foundOil.save((err, data) => {
        res.redirect('/bodies');
      });
    });
  });
});

router.get('/:id/edit', (req, res) => {
  Body.findById(req.params.id, (err, foundBody) => {
    Oil.find({}, (err, allOils) => {
      Oil.findOne({'bodies._id':req.params.id}, (err, foundBodyOil) => {
        res.render('bodies/edit.ejs', {
          body: foundBody,
          oils: allOils,
          bodyOil: foundBodyOil
        });
      });
    });
  });
});

router.put('/:id', (req, res) => {
  Body.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedBody) => {
    Oil.findOne({ 'bodies._id': req.params.id }, (err, foundOil) => {
      if(foundOil._id.toString() !== req.body.oilId){
        foundOil.bodies.id(req.params.id).remove();
        foundOil.save((err, savedFoundOil) => {
          Oil.findById(req.body.oilId, (err, newOil) => {
            newOil.bodies.push(updatedBody);
            newOil.save((err, savedNewOil) => {
              res.redirect('/bodies/'+req.params.id);
            });
          });
        });
      } else {
        foundOil.bodies.id(req.params.id).remove();
        foundOil.bodies.push(updatedBody);
        foundOil.save((err, data) => {
          res.redirect('/bodies/'+req.params.id);
        });
      }
    });
  });
});

module.exports = router;
