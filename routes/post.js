const express = require("express"),
  router = express.Router();
controllers = require("../controllers");

// Get all the posts
router.get("/", controllers.post.index);

// Get a post by id
router.get("/:id", controllers.post.get_post);

// router.get('/:id/user', controllers.post.get_user)

// router.get('/:id/city', controllers.post.get_city)

// Get all posts made by a user
router.get("/user/:userId", controllers.post.find_by_user);

// Get all posts for a city
router.get("/city/:cityId", controllers.post.find_by_city);

// Update a post
router.put("/:id", controllers.post.update);

// Create a post
router.post("/user/:userId/city/:cityId", controllers.post.create);

// Delete a post
router.delete("/:id", controllers.post.remove);

module.exports = router;
