require("dotenv").config();

const express = require("express");
const apiRoutes = require("./routes/api");
const mongoose = require("mongoose");
const app = express();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

app.use(express.json());

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Routes
app.use("/api", apiRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening on: ${PORT}`);
});

module.exports = app;
