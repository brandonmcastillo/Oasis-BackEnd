const db = require("../models");

module.exports = {
  // get all the posts
  index: (req, res) => {
    db.Post.find()
      .populate("userId")
      .populate("cityId")
      .exec((err, foundPosts) => {
        if (err) {
          console.log(err);
        }
        res.json(foundPosts);
      });
  },
  // get one post
  get_post: (req, res) => {
    let postId = req.params.id;
    db.Post.findOne({ _id: postId })
      .populate("userId")
      .populate("cityId")
      .exec((err, foundPost) => {
        if (err) {
          console.log(err);
        }
        res.json(foundPost);
      });
  },
  // get all the posts by one user
  find_by_user: (req, res) => {
    let userId = req.params.userId;
    db.Post.find({ userId: userId })
      .populate("userId")
      .populate("cityId")
      .exec((err, foundPosts) => {
        if (err) {
          console.log(err);
        }
        res.json(foundPosts);
      });
  },
  // get all the posts from one city
  find_by_city: (req, res) => {
    let cityId = req.params.cityId;
    db.Post.find({ cityId: cityId })
      .populate("userId")
      .populate("cityId")
      .exec((err, foundPosts) => {
        if (err) {
          console.log(err);
        }
        res.json(foundPosts);
      });
  },
  // update a post
  update: (req, res) => {
    let postId = req.params.id;
    db.Post.findOneAndUpdate(
      { _id: postId },
      req.body,
      { new: true },
      (err, updatedPost) => {
        if (err) {
          console.log(err);
        }
        res.json(updatedPost);
      }
    );
  },
  // create a new post
  create: (req, res) => {
    let userId = req.params.userId;
    let cityId = req.params.cityId;
    let newPost = new db.Post({
      title: req.body.title,
      content: req.body.content,
      userId: userId,
      cityId: cityId
    });
    newPost.save((err, savedPost) => {
      if (err) {
        console.log(err);
      }
      res.json(savedPost);
    });
  },
  // delete a post
  remove: (req, res) => {
    let postId = req.params.id;
    db.Post.findOneAndDelete({ _id: postId }, (err, deletedPost) => {
      if (err) {
        console.log(err);
      }
      res.json(deletedPost);
    });
  }
};
