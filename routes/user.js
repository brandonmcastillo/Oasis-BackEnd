const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const controllers = require("../controllers");

router.post("/signup", controllers.user.signup);

router.post("/login", controllers.user.login);

// Get all the users
router.get("/", controllers.user.index);

// Get one user
router.get("/:id", controllers.user.get_user);

// Update a user
router.put("/:id", controllers.user.update);

// Create a new user
// router.post("/", controllers.user.create);

// Delete a user
router.delete("/:id", controllers.user.remove);

module.exports = router;
