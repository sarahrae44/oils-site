const mongoose = require('mongoose');
const Body = require('./bodies.js');

const oilSchema = mongoose.Schema({
  name: String,
  desc: String,
  bgImg: String,
  iconImg: String,
  bodySystemName: String,
  bodySystemText: String,
  // optional below
  bodySystemName2: String,
  bodySystemText2: String,
  bodySystemName3: String,
  bodySystemText3: String,
  bodySystemName4: String,
  bodySystemText4: String,
  bodies: [Body.schema]
});

const Oil = mongoose.model('Oil', oilSchema);

module.exports = Oil;
