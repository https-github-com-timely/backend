var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.post('/create_event', (req, res) => {
  const { body } = req;
  const {
    title,
    time,
    loc,
    description,
    creatorName,
    creatorId,
  } = body;
  const hangout = new Hangout({
    title,
    time,
    loc,
    description,
    creatorName,
    creatorId,
  });
  hangout.save((err) => {
    if (err) new Error(err);
    res.sendStatus(200);
  })
})
// TODO
// app.get('/dashboard/all')
// TODO
// app.get('/dashboard/going')
// TODO
// app.get('/dashboard/past')

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
