const mongoose = require('mongoose');
// const Oil = require('./oils.js');

const bodySchema = mongoose.Schema({
  name: { type: String, required: true },
  bgImg: { type: String, required: true },
  iconImg: { type: String, required: true },
  oilEffectName1: { type: String, required: true },
  oilEffectText1: { type: String, required: true },
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
