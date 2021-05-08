var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var HospitalRouter = require('./routes/hospitallistRouter');
var HospitalRegisterRouter = require('./routes/HospitalRegisterRouter');
var userRouter = require('./routes/userlistRouter');
var userRegisterRouter = require('./routes/userRegisterRouter');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Home route
app.route("/")
.get((req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

// Admin login route

app.route("/login")
.get((req, res) => {
    res.render("Admin-login");
})
.post((req, res) => {

    const email = req.body.email;
    const pass = req.body.password;
  
    if(email === "admin@bookmydose.com" && pass === "1234")
    {
      //console.log("Success!");
      res.sendFile(__dirname + "/public/Admin-dashboard.html");
    }
    else {
      res.sendFile(__dirname + "/public/login-failure.html")
      //console.log("Failure!");
    }
});

// Users-registration DB
app.use('/register',userRegisterRouter);

//   User route
app.use('/users', userRouter);

// Hospital route
app.use('/hospital',HospitalRouter);

// Hospital-registration route
app.use('/hospital-registration',HospitalRegisterRouter);


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
  res.render('error');
});

module.exports = app;

// "C:\Program Files\MongoDB\Server\4.4\bin\mongod.exe" --dbpath="c:\data\db"
