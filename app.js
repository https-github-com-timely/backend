require("dotenv").config();

const express = require("express");
const indexRouter = require("./routes/index");
const apiRouter = require("./routes/api");
const mongoose = require("mongoose");
const app = express();

const bodyParser = require("body-parser");

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

app.use(express.json());
app.use(bodyParser.json())

app.use("/", indexRouter);
app.use("/api", apiRouter);
// app.use("/users", usersRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening on: ${PORT}`);
});

module.exports = app;
