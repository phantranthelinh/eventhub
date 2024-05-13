

const asyncHandler = require('express-async-handler')
const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

const getJsonWebToken = async (email, userId) => {

    const payload = {
        email, userId,

    }
    const token = jwt.sign(payload, process.env.SECRET_KEY, {
        expiresIn: "7d"
    })


    return token
}

const AuthController = {
    register: asyncHandler(async (req, res) => {
        const { email, password, fullName } = req.body



        const userExist = await UserModel.findOne({ email })
        if (userExist) {
            throw new Error("User has already exist!!")
        }

        const salt = await bcrypt.genSalt(10)

        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = UserModel({
            email,
            password: hashedPassword,
            fullName
        })

        await newUser.save()
        res.status(200).json({
            message: "Register user successfully",
            data: {
                email: newUser.email,
                fullName: newUser.fullName,
                id: newUser._id,
                accessToken: await getJsonWebToken(email, newUser?._id)
            }
        })


    })

}


module.exports = AuthController