const express = require("express");
// cors = require('cors')
const userRoutes = require("./routes/user");
const postRoutes = require("./routes/post");
const cityRoutes = require("./routes/city");
const bodyParser = require("body-parser");

const app = express();

// app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.use("/api/posts", postRoutes);
app.use("/user", userRoutes);
app.use("/api/city", cityRoutes);

app.listen(3001, () => console.log("Listening on port 3001 :)"));
