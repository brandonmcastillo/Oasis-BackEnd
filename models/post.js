const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: String,
    content: String,
    userId: {
        type: mongoose.Schema.type.ObjectId,
        ref: 'User'
    },
    cityId: {
        type: mongoose.Schema.type.ObjectId,
        ref: 'City'
    }
})

module.exports = mongoose.model('Post', PostSchema)