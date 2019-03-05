const mongoose = require('mongoose')

mongoose.connect('mongod://localhost/Wayfarer-BackEnd')

module.exports = {
    City: require('./City'),
    Post: require('./Post'),
    User: require('./User')
}