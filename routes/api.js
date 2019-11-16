const express = require("express");
const router = express.Router();
const Hangout = require("../models/Events");
const User = require("../models/Users");
const moment = require("moment");

// const TODAY = momentmoment().startOf('day');

router.get("/", function(req, res, next) {
  res.send({
    test: 123,
    anotherThing: "Pizza",
    andAnother: true,
    anArray: [1, 2, 3, 4, 5]
  });
});

router.post("/create_event", (req, res) => {
  const {
    title,
    time,
    location,
    description,
    creator_name,
    creator_id,
    guest_ids,
    category,
    hidden
  } = req.body;

  const hangout = new Hangout({
    title,
    time,
    location,
    description,
    creator_name,
    creator_id,
    guest_ids,
    category,
    hidden
  });

  hangout.save(err => {
    if (err) throw new Error(err);
    res.sendStatus(200);
  });
});

router.post("/join", (req, resp) => {
  const { user_id, event_id } = req.body;
  Hangout.findOneAndUpdate(
    { event_id: event_id },
    {
      $push: {
        guest_ids: user_id
      }
    },
    (err, success) => {
      if (err) throw new Error(err);
      resp.sendStatus(200);
    }
  );
});

router.get("/all", (req, resp) => {
  const { category } = req.body;
  Hangout.find({ category, time: { $gte: moment() } }, (err, events) => {
    if (err) throw new Error(err);
    resp.send(events);
  });
});

router.get("/going", (req, resp) => {
  const { user_id } = req.body;
  Hangout.find({ guest_ids: { $in: [user_id] } }, (err, events) => {
    if (err) throw new Error(err);
    resp.send(events);
  });
});

router.get("/my_events", (req, resp) => {
  const { user_id } = req.body;
  Hangout.find({ creator_id: user_id }, (err, events) => {
    if (err) throw new Error(err);
    resp.send(events);
  });
});

router.get("/check_user", (req, resp) => {
  const { email } = req.body;
  User.find({ email }, (err, account) => {
    if (err) throw new Error(err);
    resp.send(account);
  });
});

module.exports = router;
