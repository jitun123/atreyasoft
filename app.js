var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var tasks = require('./routes/tasks');
//var port = 3000;
var app = express();

// View engine

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Set static folder
app.use(express.static(path.join(__dirname, 'client')));

//Set Body parser

app.use('/', index);
app.use('/api', tasks);

app.listen(() => {
  console.log('Server Started');
});
