const 
  bcrypt = require('bcrypt'),
  db = require('../models'),
  jwt = require('jsonwebtoken')

  module.exports = {
    ///////////////////////////////////////
    ///////////// POST ROUTES /////////////
    ///////////////////////////////////////

    // Get all posts made by a user
    index: (req, res) => {
        db.User.findOne({_id: req.params.id}, (err, foundUser) => {
            if (err) {console.log(err)}
            res.json(foundUser.posts)
        })
    },

    // Get one post made by a user
    get_post: (req, res) => {
        let userId = req.params.userId
        let postId = req.params.id
        db.User.findOne( {_id: userId}, (err, foundUser) => {
            if (err) {console.log(err)}
            let foundPost = foundUser.posts._id(postId)
            res.json(foundPost)
        })
    },

    // Update a post made by a user
    update: (req, res) => {
        let userId = req.params.userId
        let postId = req.params.id
        db.User.findOne({_id: userId}, (err, foundUser) => {
            if (err) {console.log(err)}
            let foundPost = foundUser.posts._id(postId)
            foundPost.title = req.body.title
            foundPost.content = req.body.content
            foundUser.save( (err, savedUser) => {
                if (err) {console.log(err)}
                res.json(foundPost)
            })
        })
    },

    // Remove a post made by a user
    // remove: (req, res) => {
    //     let userId = req.params.userId
    //     let postId = req.params.id
    //     db.User.findOne({_id: userId}, (err, foundUser) => {
    //         if (err) {console.log(err)}
    //         let foundPost = foundUser.posts._id(postId)
    //         foundUser.posts
    //     })
    // },

} 