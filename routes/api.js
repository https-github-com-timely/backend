const express = require("express");
const router = express.Router();
const Hangout = require("../models/Events");

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

router.get("/all", (req, resp) => {
  const { category } = req.body;
  Hangout.find({ category }, (err, events) => {
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

module.exports = router;
