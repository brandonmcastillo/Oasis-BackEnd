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
