const express = require('express')
const AuthController = require('../controllers/AuthController')
const router = express.Router()
// middleware that is specific to this router
const timeLog = (req, res, next) => {
    console.log('Time: ', Date.now())
    next()
}
router.use(timeLog)

router.post("/register", AuthController.register)

module.exports = router