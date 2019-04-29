const express = require("express");
cors = require("cors");
const userRoutes = require("./routes/user");
const postRoutes = require("./routes/post");
const cityRoutes = require("./routes/city");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.use("/api/posts", postRoutes);
app.use("/user", userRoutes);
app.use("/api/city", cityRoutes);

app.get("/api", (req, res) => {
  res.json({
    message: "Wayfarer API",
    documentationURL:
      "https://github.com/brandonmcastillo/Oasis-BackEnd/blob/master/README.md",
    baseURL: "https://radiant-tor-11139.herokuapp.com/",
    apiEndpoint: {
      method: "GET",
      path: "/api",
      description: "All api routes and descriptions"
    },
    userEndpoints: [
      { method: "GET", path: "/user", description: "Get all the users" },
      { method: "GET", path: "/user/:id", description: "Get one user by ID" },
      {
        method: "POST",
        path: "/user/signup",
        description: "Signup a new user"
      },
      {
        method: "POST",
        path: "/user/login",
        description: "Login an existing user"
      },
      {
        method: "PUT",
        path: "/user/:id",
        description: "Update user information"
      },
      { method: "DELETE", path: "/user/:id", description: "Delete a user" }
    ],
    postEndpoints: [
      { method: "GET", path: "/api/posts", description: "Get all the posts" },
      {
        method: "GET",
        path: "/api/posts/user/:userId",
        description: "Get all the posts made by one user"
      },
      {
        method: "GET",
        path: "/api/posts/city/:cityId",
        description: "Get all the posts for one city"
      },
      { method: "PUT", path: "/api/posts/:id", description: "Update a post" },
      {
        method: "POST",
        path: "/api/posts/user/:userId/city/:cityId",
        description: "Create a new post"
      },
      { method: "DELETE", path: "/api/posts/:id", description: "Delete a post" }
    ],
    cityEndpoints: [
      { method: "GET", path: "/api/city", description: "Get all the cities" },
      { method: "GET", path: "/api/city/:id", description: "Get one city" }
    ]
  });
});

app.listen(process.env.PORT || 3001, () =>
  console.log("Listening on port 3001 :)")
);
