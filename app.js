var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const Stocks = require('./Models/stocks');

// Connection URL
const url = 'mongodb://localhost:27017/stockArchives';
const connect = mongoose.connect(url, {
   // useMongoClient: true,
    /* other options */
  });

connect.then((db) => {
    console.log("Connected correctly to MogoDB server");
}, (err) => { console.log(err); });


var index = require('./routes/index');
var users = require('./routes/users');
var _stockRouter = require('./routes/stockRouter');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', index);
app.use('/users', users);
app.use('/stocks', _stockRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
