const express = require("express");
const { create } = require("../controllers/combo.controllers");

const router = express.Router();

router.post("/", create);

module.exports = router;
