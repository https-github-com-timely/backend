const express = require("express");
const router = express.Router();
const Hangout = require("../models/Events");
const moment = require('moment');

router.get("/", function(req, res, next) {
  res.send({
    test: 123,
    anotherThing: "Pizza",
    andAnother: true,
    anArray: [1, 2, 3, 4, 5]
  });
});

router.get("/all", (req, resp) => {
  const { category } = req.params;
  Hangout.find({ category, time: { $gte: moment() } }, (err, events) => {
    if (err) throw new Error(err);
    resp.send(events);
  });
})

router.get("/going", (req, resp) => {
  const { user_id } = req.params;
  Hangout.find({ guest_ids: { $in: [user_id] } }, (err, events) => {
    if (err) throw new Error(err);
    resp.send(events);
  })
})

router.post("/create_event", (req, res) => {
  const {
    title,
    time,
    loc,
    description,
    creator_name,
    creator_id,
    guest_ids,
  } = req.body;
  const hangout = new Hangout({
    title,
    time,
    loc,
    description,
    creator_name,
    creator_id,
    guest_ids
  });
  hangout.save((err) => {
    if (err) throw new Error(err);
    res.sendStatus(200);
  })
})

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
      if (err) throw new Error(err)
      resp.sendStatus(200);
    }
  )
});

router.post("/bail", (req, resp) => {
  const { event_id, user_id } = req.body;
  Hangout.updateOne(
    { event_id: event_id },
    { $pull: { guest_ids: user_id } },
    (err, status) => {
      if (err) throw new Error(err);
      resp.send(200)
    }
  )
});


module.exports = router;
