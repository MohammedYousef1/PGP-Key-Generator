const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
      
})

userSchema.methods.hashPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}

userSchema.methods.comparePasswords = (password, hash) => {
    return bcrypt.compareSync(password,hash)
}

let User = mongoose.model('User', userSchema, 'users')

module.exports = User