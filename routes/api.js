var express = require("express");
var router = express.Router();

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
