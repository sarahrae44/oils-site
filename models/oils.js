const mongoose = require('mongoose');
// const Body = require('./bodies.js');

const oilSchema = mongoose.Schema({
  name: { type: String, required: true },
  bgImg: { type: String, required: true },
  iconImg: { type: String, required: true },
  bodySystemName1: { type: String, required: true },
  bodySystemText1: { type: String, required: true },
  // optional below
  bodySystemName2: String,
  bodySystemText2: String,
  bodySystemName3: String,
  bodySystemText3: String,
  bodySystemName4: String,
  bodySystemText4: String
});

const Oil = mongoose.model('Oil', oilSchema);

module.exports = Oil;
