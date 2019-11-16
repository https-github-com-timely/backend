require("dotenv").config();

require("./models/Events");
require("./models/Users");

const express = require("express");
const indexRouter = require("./routes/index");
const apiRouter = require("./routes/api");
const mongoose = require("mongoose");
const app = express();

const bodyParser = require("body-parser");

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

app.use(express.json());
app.use(bodyParser.json())

const User = mongoose.model("users");

const newUser = new User({
  facebook_id: "34tfdcnvk",
  first_name: "Steve",
  last_name: "Jobs",
  email: "blsd@gfd.com",
  interests: ["weed", "pizza", "beer"]
});

newUser.save(err => {
  console.log(err);
});

// const Event = mongoose.model("events");

// const newEvent = new Event({
//   title: "Another",
//   time: moment().format(),
//   location: {
//     lat_long: "234,1234",
//     coordinates: [123, 123]
//   },
//   creator_id: "fgdnkvc123",
//   guest_ids: ["gfdgdf", "dfgidjfnv"]
// });

// newEvent.save(err => {
//   console.log(err);
// });

app.use("/", indexRouter);
app.use("/api", apiRouter);
// app.use("/users", usersRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening on: ${PORT}`);
});

module.exports = app;
