const mongoose = require('mongoose');
const Oil = require('./oils.js');

const bodySchema = mongoose.Schema({
  name: String,
  desc: String,
  iconImg: String,
  oilEffectName: String,
  oilEffectText: String,
});

const Body = mongoose.model('Body', bodySchema);

module.exports = Body;
