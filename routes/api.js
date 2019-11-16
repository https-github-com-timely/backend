const express = require("express");
const router = express.Router();
const Hangout = require("./models/Events");

router.post('/create_event', (req, res) => {
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
// router.get('/dashboard/all')
// TODO
// router.get('/dashboard/going')
// TODO
// router.get('/dashboard/past')

/* GET home page. */
router.get("/", function(req, res, next) {
  res.send({
    test: 123,
    anotherThing: "Pizza",
    andAnother: true,
    anArray: [1, 2, 3, 4, 5]
  });
});

module.exports = router;
