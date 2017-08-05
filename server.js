const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

app.use(bodyParser.urlencoded({extended: false}))

const oilsController = require('./controllers/oils.js');
app.use('/oils', oilsController);

// index page
app.get('/', (req, res) => {
  // res.send('index page working!')
  res.render('index.ejs');
});

mongoose.connect('mongodb://localhost:27017/oilsSite');
mongoose.connection.once('open', () => {
  console.log('connected to mongo. cha cha cha!');
})

app.listen(3000, () =>{
  console.log('oils site listening');
})
