const mongoose = require('mongoose');
const { isEmail } = require('validator');
const { Schema } = mongoose;


const UserSchema = new Schema({
    pseudo: {
        type: String,
        require: true,
        min: 3,
        max: 100,
        trim: true
    },
    email: {
        type: String,
        require: true,
        max: 100,
        validate: [isEmail],
        lowercase: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        min: 8,
        max: 1000
    },
    picture: {
        type: String,
        default: ""
    },
    description: {
        type: String,
        max: 1000
    },
    followers: {
        type: Array,
        default: []
    },
    following: {
        type: Array,
        default: []
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    city: {
        type: String,
        max: 100
    },
    country: {
        type: String,
        max: 100
    }
},
{
    timestamps: true
}
);

const User = mongoose.model("User", UserSchema);
module.exports = User;