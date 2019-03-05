const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const controllers = require("../controllers");

router.post("/signup", controllers.user.signup);

router.post("/login", controllers.user.login);

// router.use((req, res, next) => {
//   console.log("activated");
//   const bearerHeader = req.headers["authorization"];
//   console.log("triggered token check", bearerHeader);

//   if (typeof bearerHeader !== "undefined") {
//     const bearer = bearerHeader.split(" ");
//     const bearerToken = bearer[1];
//     req.token = bearerToken;
//     let verified = jwt.verify(req.token, "");
//     console.log("here is the verified", verified);
//     req.userId = verified._id; //set user id for routes to use
//     next();
//   } else {
//     res.sendStatus(403);
//   }
// });

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
