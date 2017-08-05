const mongoose = require('mongoose');
// const Body = require('./bodies.js');

const oilSchema = mongoose.Schema({
  name: String,
  bgImg: String,
  iconImg: String,
  bodySystemName1: String,
  bodySystemText1: String
  // optional below
});

const Oil = mongoose.model('Oil', oilSchema);

module.exports = Oil;
