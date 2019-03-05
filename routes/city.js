const express = require("express");
const router = express.Router();
const controllers = require("../controllers");

// Get all the cities
router.get("/", controllers.city.index);

// Get one city
router.get("/:id", controllers.city.get_city);

module.exports = router;
