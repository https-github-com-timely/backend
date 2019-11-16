const express = require('express');
const router = express.Router();
const Event = require('../models/Event.model');

router.post('/', async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save();

    console.log('hey');
    return res.status(200).send({ message: 'Event created', event });
  } catch (error) {
    return res.status(400).send({ error });
  }
});

//I don't know the difference between put and patch
router.put('/event/:id', (req, res) => {});

router.post('/event/:id', (req, res) => {});

router.delete('/event/:id', (req, res) => {});

module.exports = router;
