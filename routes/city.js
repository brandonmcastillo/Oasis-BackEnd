const express = require("express");
const router = express.Router();
const controllers = require("../controllers");

router.get("/", controllers.city.index);

router.get("/", controllers.city.get_city);

module.exports = router;
