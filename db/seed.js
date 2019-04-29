//comment
const mongoose = require('mongoose')
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
    image: "https://www.aso2018sydney.com.au/wp-content/uploads/sydney_slider_02-600x200_c.jpg"
  }
];

const user_list = [
  {
    username: "Karma",
    email: "karma@email.com",
    password: "123",
    city: "San Francisco",
    dateJoined: new Date()
  },
  {
    username: "Michael",
    email: "michael@email.com",
    password: "123",
    city: "San Francisco",
    dateJoined: new Date()
  },
  {
    username: "Amberly",
    email: "amberly@email.com",
    password: "123",
    city: "San Francisco",
    dateJoined: new Date()
  },
  {
    username: "Brandon",
    email: "brandon@email.com",
    password: "123",
    city: "San Francisco",
    dateJoined: new Date()
  }
];

const post_list = [
  {
    title: "My pockets are empty and so is my patience",
    content: "This place is so expensive! Traffic sucks!",
    userId: "Michael",
    cityId: "San Francisco"
  },
  {
    title: "This was an amazing trip!",
    content: "Definitely coming back here next Summer!",
    userId: "Karma",
    cityId: "London"
  },
  {
    title: "So great. Go here.",
    content: "This place was really loud for New Years! 10/10",
    userId: "Amberly",
    cityId: "New York"
  },
  {
    title: "I love San Francisco",
    content: "Wow. I was born here. It's nice being back.",
    userId: "Brandon",
    cityId: "San Francisco"
  },
  {
    title: "Beautiful area",
    content: "I went here for vacation and I loved every second of it. !",
    userId: "Michael",
    cityId: "London"
  },
  {
    title: "General Assembly",
    content: "General Assembly is based here and I would go back here in a heartbeat.",
    userId: "Karma",
    cityId: "San Francisco"
  },
  {
    title: "I'm back!",
    content: "Spent about a week here again and I'm flabbergasted",
    userId: "Michael",
    cityId: "London"
  },
  {
    title: "Foodie!",
    content: "Check out the pubs! Always a good time with friends",
    userId: "Amberly",
    cityId: "London"
  },
  {
    title: "Busy area",
    content: "New York is super busy and a fast paced environment. The pizza is yummy. Can't go wrong.",
    userId: "Michael",
    cityId: "New York"
  },
  {
    title: "Live your best life!",
    content: "I went here for vacation and it was a pleasant experience!",
    userId: "Karma",
    cityId: "Sydney"
  },
  {
    title: "Also living your best life",
    content: "I went here for vacation too and it was also a pleasant experience!",
    userId: "Brandon",
    cityId: "Sydney"
  },
  {
    title: "Went home tired and broke!",
    content: "I had a great time and it was worth every penny.",
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
