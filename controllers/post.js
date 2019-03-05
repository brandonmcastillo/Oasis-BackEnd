const db = require('../models')

module.exports = {
    index: (req, res) => {
        db.Post.find()
    },
    get_post: (req, res) => {

    },
    update: (req, res) => {

    },
    show: (req, res) => {

    },
    remove: (req, res) => {

    },

}