const mongoose = require('mongoose');
const Post = require('./Post')

const CitySchema = mongoose.Schema({
    name: String,
    image: String,
})

module.exports = mongoose.model('City', CitySchema)