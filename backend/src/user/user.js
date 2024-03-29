const express = require("express");

//controller functions
const { signupUser, loginUser } = require("./userController");

const router = express.Router();

//log in route
router.post("/login", loginUser);

//sign up route
router.post("/signup", signupUser);

module.exports = router;
