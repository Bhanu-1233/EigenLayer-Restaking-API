// routes/rewards.js
const express = require("express");
const router = express.Router();
const rewardController = require("../controllers/rewardController");

router.get("/:address", rewardController.getByAddress);

module.exports = router;
