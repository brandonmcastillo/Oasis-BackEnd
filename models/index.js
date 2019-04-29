const mongoose = require("mongoose");

// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/Oasis-BackEnd",
//   {
//     useNewUrlParser: true
//   }
// );

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://heroku_50knqwb7:m2fhtkfqob2hrvh6j87bcndlf4@ds115971.mlab.com:15971/heroku_50knqwb7",
  {
    useNewUrlParser: true
  }
);


module.exports = {
  City: require("./City"),
  Post: require("./Post"),
  User: require("./User")
};
