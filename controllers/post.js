const db = require('../models')

module.exports = {
    index: (req, res) => {
        db.User.findOne({_id: req.params.id}, (err, foundUser) => {
            if (err) {console.log(err)}
            res.json(foundUser.posts)
        })
    },
    get_post: (req, res) => {
        let postId = req.params.id
        db.Post.findOne( {_id: postId}, (err, foundPost) => {
            if (err) {console.log(err)}
            res.json(foundPost)
        })
    },
    update: (req, res) => {
        let postId = req.params.id
        db.Post.findOneAndUpdate({_id: postId}, req.body, {new: true}, (err, updatedPost) => {
            if (err) {console.log(err)}
            res.json(updatedPost)
        })
    },
    create: (req, res) => {
        let newPost = new db.Post({
            title: req.body.title,
            content: req.body.content
        })
        newPost.save( (err, savedPost) => {
            if (err) {console.log(err)}
            res.json(savedPost)
        })
    },
    remove: (req, res) => {
        let postId = req.params.id
        db.Post.findOneAndDelete({_id: postId}, (err, deletedPost) => {
            if (err) {console.log(err)}
            res.json(deletedPost)
        })
    },

}