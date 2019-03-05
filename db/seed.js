//comment
// const mongoose = require('mongoose')
const db = require("../models/index");

const city_list = [
  {
    name: "San Francisco",
    image: ""
  },
  {
    name: "London",
    image: ""
  },
  {
    name: "New York",
    image: ""
  }
];

const user_list = [
  {
    username: "Karma",
    email: "email@email.email",
    password: "123",
    city: "San Francisco",
    dateJoined: new Date()
  },
  {
    username: "Michael",
    email: "email@michae.mike",
    password: "123",
    city: "San Francisco",
    dateJoined: new Date()
  }
];

const post_list = [
  {
    title: "new post",
    content: "lorem",
    userId: "Karma",
    cityId: "San Francisco"
  },
  {
    title: "Another new post",
    content: "hello",
    userId: "Michael",
    cityId: "London"
  }
];

db.User.deleteMany({}, (err, user) => {
  console.log("removed all user");
  db.User.create(user_list, (err, users) => {
    if (err) throw err;
    console.log(users.length, "have been created");
    db.City.deleteMany({}, (err, city) => {
      console.log("removed all cities");
      db.City.create(city_list, (err, cities) => {
        if (err) throw err;
        console.log(cities.length, "have been created");
        db.Post.deleteMany({}, (err, Posts) => {
          if (err) throw err;
          console.log("deleted posts");
          post_list.forEach(post => {
            let newPost = new db.Post({
              title: post.title,
              content: post.content
            });
            db.User.findOne({ username: post.userId }, (err, foundUser) => {
              if (err) throw err;
              newPost.userId = foundUser;
              db.City.findOne({ name: post.cityId }, (err, foundCity) => {
                if (err) throw err;
                newPost.cityId = foundCity;
                newPost.save((err, savedPost) => {
                  if (err) throw err;
                  console.log(
                    `saved ${savedPost.title} by ${savedPost.userId.username}`
                  );
                });
              });
            });
          });
        });
      });
    });
    // good up til here
  });
});
