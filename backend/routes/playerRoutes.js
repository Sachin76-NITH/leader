const express = require('express');
const Player = require('../models/Player');
const router = express.Router();

// Get all players sorted by score
router.get('/', async (req, res) => {
  try {
    const players = await Player.find().sort({ score: -1 });
    res.json(players);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new player
router.post('/', async (req, res) => {
  try {
    const { name, score } = req.body;
    const newPlayer = new Player({ name, score });
    await newPlayer.save();
    res.json(newPlayer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update a player's score
router.put('/:id', async (req, res) => {
  try {
    const { score } = req.body;
    const player = await Player.findByIdAndUpdate(req.params.id, { score }, { new: true });
    res.json(player);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
