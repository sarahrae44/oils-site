const mongoose = require('mongoose');
const Body = require('./bodies.js');

const oilSchema = mongoose.Schema({
  name: String,
  desc: String,
  iconImg: String,
  bodySystemName: String,
  bodySystemText: String,
  bodies: [Body.schema]
});

const Oil = mongoose.model('Oil', oilSchema);

module.exports = Oil;
