const express = require("express");
const router = express.Router();
const validatorController = require("../controllers/validatorController");

router.get("/", validatorController.getAll);

module.exports = router;
