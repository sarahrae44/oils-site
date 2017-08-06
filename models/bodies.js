const mongoose = require('mongoose');
const Oil = require('./oils.js');

const bodySchema = mongoose.Schema({
  name: String,
  desc: String,
  bgImg: String,
  iconImg: String,
  oilEffectName1: String,
  oilEffectText1: String,
  // optional below
  oilEffectName2: String,
  oilEffectText2: String,
  oilEffectName3: String,
  oilEffectText3: String,
  oilEffectName4: String,
  oilEffectText4: String,
});

const Body = mongoose.model('Body', bodySchema);

module.exports = Body;
