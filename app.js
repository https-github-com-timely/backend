require("dotenv").config();

const express = require("express");
const apiRoutes = require("./routes/api");
const moment = require("moment");

const app = express();
app.use(express.json());

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
// Mongoose
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
require("./models/Events");

// Routes
app.use("/api", apiRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening on: ${PORT}`);
});

module.exports = app;
