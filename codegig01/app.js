const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

// Database
const db = require('./config/database');

// Test DB
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err))


const app = express();

//app.get('/', (req, res) => res.render('index', { layout: 'landing' }));
app.get('/', (req, res) => res.send('index'));


// Gig routes
app.use('/gigs', require('./routes/gigs'));

const PORT = process.env.PORT || 8080;

app.listen(PORT, 
  console.log('http://localhost:8080'),
  console.log('http://localhost:8080/gigs'),
  console.log('http://localhost:8080/gigs/add'),
  console.log(`Server started on port ${PORT}`));