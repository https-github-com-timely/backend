require("dotenv").config();

const express = require("express");
const apiRoutes = require("./routes/api");

const app = express();
app.use(express.json());

// Mongoose
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
require("./models/Events");
require("./models/Users");

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

// Routes
app.use("/api", apiRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening on: ${PORT}`);
});

module.exports = app;
