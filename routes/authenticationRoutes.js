const express = require("express")
const {signupUser, showUser, loginUser } = require("../controllers/authenticationController")
const { hashPassword } = require("../middlewares/passwordbcrypt")

const router = express.Router()

router.get('/users',showUser)

router.post("/signup",hashPassword,signupUser)

router.post("/login",loginUser)

module.exports = router