const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: false}));

const oilsController = require('./controllers/oils.js');
app.use('/oils', oilsController);

const bodiesController = require('./controllers/bodies.js');
app.use('/bodies', bodiesController);

app.use(express.static('public'));

// index page
app.get('/', (req, res) => {
  // res.send('index page working!')
  res.render('index.ejs');
});

const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/oilsSite';

// mongoose.connect('mongodb://localhost:27017/oilsSite');
mongoose.connection.once('open', () => {
  console.log('connected to mongo. cha cha cha!');
})

mongoose.connect(mongoUri);

const port = process.env.PORT || 3000;

app.listen(port);
  console.log('oils site listening');
  console.log('oils site listening with the heroku update');

// app.listen(3000, () =>{
//    console.log('oils site listening');
//  })
