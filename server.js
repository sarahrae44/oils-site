const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

const oilsController = require('./controllers/oils.js');
app.use('/oils', oilsController);

const bodiesController = require('./controllers/bodies.js');
app.use('/bodies', bodiesController);

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
