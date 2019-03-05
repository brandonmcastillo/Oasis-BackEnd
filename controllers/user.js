const bcrypt = require("bcrypt"),
  db = require("../models"),
  jwt = require("jsonwebtoken");

function signupUser(req, res) {
  console.log(req.body);
  //first see if a user with this email already exists
  db.User.find({ email: req.body.email })
    .exec()
    .then(user => {
      //if we are found a user, its length will be greater than or equal to 1
      if (user.length >= 1) {
        return res.status(409).json({
          message: "A user with this email already exists."
        });
        // if we don't find a user with this email
      } else {
        console.log("above bcrypt", req.body);
        // we will first need to hash the password
        bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
          //if something bad happens, just send the error on over to the front end
          if (err) {
            console.log(err);
            res.status(200).json({ error: err });
          } else {
            //if no error, lets use mongoose to create a new user with the email and our hashed version of their password.  Safety first!
            db.User.create(
              {
                username: req.body.username,
                city: req.body.city,
                dateJoined: new Date(),
                email: req.body.email,
                password: hashedPassword
              },
              (err, newUser) => {
                if (err) {
                  res.status(500).json({ err: err });
                }
                console.log("the newly created user is", newUser);
                //lets send our new user info back to the front end
                let user = {
                  username: newUser.username,
                  city: newUser.city,
                  dateJoined: newUser.dateJoined,
                  email: newUser.email,
                  _id: newUser._id
                };
                //sign the JWT before sending back and pass over the above user object
                //.sign takes the user object, the secret, any options, and a callback
                jwt.sign(
                  user,
                  "secret",
                  { expiresIn: "1h" },
                  (err, signedJwt) => {
                    res.status(200).json({
                      message: "User Created",
                      user: user,
                      signedJwt: signedJwt
                    });
                  }
                );
              }
            );
          }
        });
      }
    })
    .catch(err => {
      console.log("idk something went wrong");
      console.log(err);
      res.status(500).json({ err: err });
    });
}

function loginUser(req, res) {
  //ping db to find all users with req.body.email
  db.User.find({ email: req.body.email })
    .select("+password") //adding .select("+password") overrides the select: false atrribute in the model.. so it includes the password on the return
    .exec()
    .then(users => {
      //this returns an array of the results, there should be at least 1 returned
      if (users.length < 1) {
        return res.status(401).json({
          message: "Email/Password incorrect"
        });
      }
      console.log(users);
      //at this point we have a user object that matches the provided email
      //now we can compare their password with our hash
      bcrypt.compare(req.body.password, users[0].password, (err, match) => {
        console.log(match);
        if (err) {
          console.log(err);
          return res.status(500).json({ err: err });
        }
        //match will be a boolean, if the compare function returns true, the hash and password are same
        if (match) {
          //time to make our user object, to sign with jwt and send back to browser
          let user = {
            email: users[0].email,
            username: users[0].username,
            city: users[0].city,
            _id: users[0]._id
          };
          //.sign takes an object, secret word, options object, and callback
          jwt.sign(user, "secret", { expiresIn: "1h" }, (err, signedJwt) => {
            res.status(200).json({
              message: "Auth confirmed",
              user: user,
              signedJwt: signedJwt
            });
          });
          //if there wasn't a match
        } else {
          console.log("no match");
          res.status(401).json({ message: "Email/Password invalid" });
        }
      });
    })
    .catch(err => {
      console.log("idk something bad happened");
      res.status(500).json({ err });
    });
}

module.exports = {
  index: (req, res) => {
    db.User.find((err, foundUsers) => {
      if (err) {
        console.log(err);
      }
      res.json(foundUsers);
    });
  },
  get_user: (req, res) => {
    let userId = req.params.id;
    db.User.findOne({ _id: userId }, (err, foundUser) => {
      if (err) {
        console.log(err);
      }
      res.json(foundUser);
    });
  },
  update: (req, res) => {
    let userId = req.params.id;
    db.User.findOneAndUpdate(
      { _id: userId },
      req.body,
      { new: true },
      (err, updatedUser) => {
        if (err) {
          console.log(err);
        }
        res.json(updatedUser);
      }
    );
  },
  remove: (req, res) => {
    let userId = req.params.id;
    db.User.findOneAndDelete({ _id: userId }, (err, deletedUser) => {
      if (err) {
        console.log(err);
      }
      res.json(deletedUser);
    });
  },
  //create new users / signup
  signup: signupUser,
  //login user / login
  login: loginUser
};
