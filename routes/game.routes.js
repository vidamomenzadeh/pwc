const fs = require('fs');
const express = require("express");

const router = express.Router();

const gameController = require('../controllers/game.controller')

router.post('/add', gameController.saveResult);


module.exports = router;
