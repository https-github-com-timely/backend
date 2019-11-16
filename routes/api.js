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

router.post('/create_event', (req, res) => {
  const {
    title,
    time,
    loc,
    description,
    creator_name,
    creator_id,
  } = body;
  const hangout = new Hangout({
    title,
    time,
    loc,
    description,
    creator_name,
    creator_id,
  });
  hangout.save((err) => {
    if (err) throw new Error(err);
    res.sendStatus(200);
  })
})

router.get('/all', (req, resp) => {
  const { category } = req.params;
  Hangout.find({ category }, (err, events) => {
    if (err) throw new Error(err);
    resp.send(events);
  });
})

module.exports = router;
