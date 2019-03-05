const mongoose = require("mongoose");

const CitySchema = mongoose.Schema({
  name: String,
  image: String
});

module.exports = mongoose.model("City", CitySchema);
