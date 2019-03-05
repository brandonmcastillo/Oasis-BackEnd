const 
  bcrypt = require('bcrypt'),
  db = require('../models'),
  jwt = require('jsonwebtoken')

  module.exports = {
    index: (req, res) => {
        db.User.find( (err, foundUsers) => {
            if (err) {console.log(err)}
            res.json(foundUsers)
        })
    },
    get_user: (req, res) => {
        let userId = req.params.id
        db.User.findOne( {_id: userId}, (err, foundUser) => {
            if (err) {console.log(err)}
            res.json(foundUser)
        })
    },
    update: (req, res) => {
        let userId = req.params.id
        db.User.findOneAndUpdate( {_id: userId}, req.body, {new: true}, (err, updatedUser) => {
            if (err) {console.log(err)}
            res.json(updatedUser)
        })
    },
    post: (req, res) => {
        const newUser = new db.User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            city: req.body.city,
            dateJoined: req.body.dateJoined
        })
        newUser.save( (err, savedUser) => {
            if (err) {console.log(err)}
            res.json(savedUser)
        })
    },
    remove: (req, res) => {
        let userId= req.params.id
        db.User.findOneAndDelete( {_id: userId}, (err, deletedUser) => {
            if (err) {console.log(err)}
            res.json(deletedUser)
        })
    }
} 