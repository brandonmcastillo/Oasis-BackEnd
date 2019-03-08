//comment
// const mongoose = require('mongoose')
const db = require("../models/index");

const city_list = [
  {
    name: "San Francisco",
    image: "https://www.metromba.com/wp-content/uploads/2017/06/san-fran-e1497970033257-600x200.jpg"
  },
  {
    name: "London",
    image: "https://render.fineartamerica.com/images/rendered/default/print/8.000/2.625/break/images-medium/panorama-of-tower-bridge-and-tower-of-london-clearlens-images.jpg"
  },
  {
    name: "New York",
    image: "https://static1.squarespace.com/static/593899a76b8f5b550f146917/t/5bd0a012e4966b41957f1adc/1540491007091/new-york-landscape-photography-prints"
  },
  {
    name: "Sydney",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCxMk3y1QsKc1lsguzIgl7pTvDyBW88XRuMNz64OziFcb5U9EKbg"
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
    content: "This place is so expensive!!!!",
    userId: "Michael",
    cityId: "San Francisco"
  },
  {
    title: "Michael's new post - Michael",
    content: "Definitely coming back here next Summer!",
    userId: "Michael",
    cityId: "London"
  },
  {
    title: "Amberly's new post - Amberly",
    content: "This place was really loud for New Years! 10/10",
    userId: "Amberly",
    cityId: "New York"
  },
  {
    title: "Brandon's new post - Brandon",
    content: "Wow. I was born here. It's nice being back.",
    userId: "Brandon",
    cityId: "San Francisco"
  },
  {
    title: "Another new post, nice - Michael",
    content: "It's summer of 2019 and I came back! Highly advise going here!",
    userId: "Michael",
    cityId: "London"
  },
  {
    title: "And even more posts - Karma",
    content: "General Assembly is based here and I love it.",
    userId: "Karma",
    cityId: "San Francisco"
  },
  {
    title: "Another post from MICHAEL",
    content: "Spent about a week here and I'm flabbergasted",
    userId: "Michael",
    cityId: "London"
  },
  {
    title: "Amberly's another post",
    content: "I went here for vacation!",
    userId: "Amberly",
    cityId: "London"
  },
  {
    title: "even another post form michael for the seed data",
    content: "The pizza is yummy",
    userId: "Michael",
    cityId: "New York"
  },
  {
    title: "Go Karma",
    content: "I went here for vacation!",
    userId: "Karma",
    cityId: "Sydney"
  },
  {
    title: "Brandons first post",
    content: "I went here for vacation too!",
    userId: "Brandon",
    cityId: "Sydney"
  },
  {
    title: "Brandons second post!",
    content: "I went here and became broke!!",
    userId: "Brandon",
    cityId: "Sydney"
  },
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
