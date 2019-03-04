const mongoose = require('mongoose');
const Post = require('./post')

const CitySchema = mongoose.Schema({
    name: String,
    image: String,
    posts: [Post.schema]
})

module.exports = mongoose.model('City', CitySchema)