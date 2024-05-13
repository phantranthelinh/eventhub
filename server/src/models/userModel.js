const mongoose = require('mongoose');



const UserSchema = new mongoose.Schema({

    fullName: {
        type: String,

    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    photoUrl: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now()

    },
    updatedAt: {
        type: Date,
        default: Date.now()
    },


})

const UserModel = mongoose.model("Users", UserSchema)

module.exports = UserModel