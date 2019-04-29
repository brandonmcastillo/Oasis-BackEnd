const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/Oasis-BackEnd",
  {
    useNewUrlParser: true
  }
);

module.exports = {
  City: require("./City"),
  Post: require("./Post"),
  User: require("./User")
};
