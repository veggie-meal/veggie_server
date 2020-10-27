var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");

var indexRouter = require('../routes/api/index');

var app = express();

//CORS 허용.
app.use(cors());

// view engine setup //todo change to reactJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//todo change for react js
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

//db connection test
var db = require('./db');
db((conn) => {
  conn.query("show tables", (err, result) => {
    conn.release(); // 연결세션 반환.
    if (err) {
      console.log(err)
      throw err;
    }

    console.log("connect success! : ", result);
  });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    result : false,
    code : 500
  });
});

module.exports = app;
