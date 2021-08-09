const express = require('express');
const router = express.Router();
const favoriteMusicController = require('../controllers/favorite.controller');

router.put('/favorite-music', favoriteMusicController.upsert);

module.exports = router;