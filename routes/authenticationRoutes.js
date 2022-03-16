const express = require("express")
const { showHome, signupUser } = require("../controllers/authenticationController")

const router = express.Router()

// router.get('/',showHome)

router.post("/signup",signupUser)

module.exports = router