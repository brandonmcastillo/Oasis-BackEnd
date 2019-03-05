const mongoose =  require ('mongoose');
const Post = require('./Post')

const UserSchema = mongoose.Schema({
    username: String,
    email: { 
        type: String, 
        required: true, 
        unique: true, 
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/ ,
        },
    password: { type: String, required: true , select: false},
    city: String,
    dateJoined: Date,
    // posts: [ Post.schema ]
})

userSchema.set('toJSON', {
    transform: function(doc, ret, opt) {
        delete ret['password']
        return ret
    }
  })

module.exports = mongoose.model('User', UserSchema);