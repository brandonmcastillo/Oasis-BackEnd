const db = require("../models");

module.exports = {
  index: (req, res) => {
    db.Post.find((err, foundPosts) => {
      if (err) {
        console.log(err);
      }
      res.json(foundPosts);
    });
  },
  get_post: (req, res) => {
    let postId = req.params.id;
    db.Post.findOne({ _id: postId }, (err, foundPost) => {
      if (err) {
        console.log(err);
      }
      res.json(foundPost);
    });
  },
  // get_user: (req, res) => {
  //     let postId = req.params.id
  //     // let userId = req.params.userId
  //     db.Post.findOne( {_id: postId}, (err, foundPost) => {
  //         if (err) {console.log(err)}
  //         res.json(foundUser.userId)
  //     })
  // },
  // get_city: (req, res) => {
  //     let postId = req.params.id
  //     // let userId = req.params.userId
  //     db.Post.findOne( {_id: postId}, (err, foundPost) => {
  //         if (err) {console.log(err)}
  //         res.json(foundUser.cityId)
  //     })
  // },
  find_by_user: (req, res) => {
    let userId = req.params.userId;
    db.Post.find({ userId: userId }, (err, foundPosts) => {
      if (err) {
        console.log(err);
      }
      res.json(foundPosts);
    });
  },
  find_by_city: (req, res) => {
    let cityId = req.params.cityId;
    db.Post.find({ cityId: cityId }, (err, foundPosts) => {
      if (err) {
        console.log(err);
      }
      res.json(foundPosts);
    });
  },
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
  create: (req, res) => {
    let userId = req.params.userId
    let cityId = req.params.cityId
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
