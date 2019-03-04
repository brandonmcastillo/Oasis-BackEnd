const mongoose = require('mongoose')

mongoose.connect('mongod://localhost/Wayfarer-BackEnd')

module.exports = {
    City: require('./city'),
    Post: require('./post'),
    User: require('./user')
}