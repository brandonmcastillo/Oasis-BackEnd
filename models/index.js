const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/Wayfarer-BackEnd", {
  useNewUrlParser: true
});

module.exports = {
  City: require("./City"),
  Post: require("./Post"),
  User: require("./User")
};
