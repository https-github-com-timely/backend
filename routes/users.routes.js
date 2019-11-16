const express = require('express');
const router = express.Router();
const User = require('../models/User.model');

//Create user
router.post('/', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();

    res.status(200).send({ user });
  } catch (error) {
    res.status(400).send(error);
  }
});

//Sign in

//Delete account

//Log out

module.exports = router;
