const mongoose = require('mongoose');
const Post = require('./Post')

const CitySchema = mongoose.Schema({
    name: String,
    image: String,
    posts: [Post.schema]
})

module.exports = mongoose.model('City', CitySchema)