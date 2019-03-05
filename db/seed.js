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
  },
  {
    username: "Amberly",
    email: "amberly@amberly.amberly",
    password: "123",
    city: "San Francisco",
    dateJoined: new Date()
  },
  {
    username: "Brandon",
    email: "Bra@ndon.come",
    password: "123",
    city: "San Francisco",
    dateJoined: new Date()
  }
];

const post_list = [
  {
    title: "Karma's new post - Karma",
    content: "This is a nice post",
    userId: "Karma",
    cityId: "San Francisco"
  },
  {
    title: "Michael's new post - Michael",
    content: "Oh nice",
    userId: "Michael",
    cityId: "London"
  },
  {
    title: "Amberly's new post - Amberly",
    content: "APIs",
    userId: "Amberly",
    cityId: "New York"
  },
  {
    title: "Brandon's new post - Brandon",
    content: "Another new post - React",
    userId: "Brandon",
    cityId: "San Francisco"
  },
  {
    title: "Another new post, nice - Michael",
    content: "Oh nice",
    userId: "Michael",
    cityId: "London"
  },
  {
    title: "And even more posts - Karma",
    content: "Oh nice",
    userId: "Karma",
    cityId: "San Francisco"
  },
  {
    title: "Another post from MICHAEL",
    content: "cool",
    userId: "Michael",
    cityId: "London"
  },
  {
    title: "Amberly's another post",
    content: "Oh nice",
    userId: "Amberly",
    cityId: "London"
  },
  {
    title: "even another post form michael for the seed data",
    content: "Oh nice",
    userId: "Michael",
    cityId: "New York"
  }
];

db.User.deleteMany({}, (err, user) => {
  console.log("removed all user");
  db.User.create(user_list, (err, users) => {
    if (err) throw err;
    console.log(users.length, "users have been created");
    db.City.deleteMany({}, (err, city) => {
      console.log("removed all cities");
      db.City.create(city_list, (err, cities) => {
        if (err) throw err;
        console.log(cities.length, "cities have been created");
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
          console.log(post_list.length, "new posts created");
        });
      });
    });
    // good up til here
  });
});
