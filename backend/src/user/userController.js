const User = require('./model')

//log in user
const loginUser = async (req, res) => {
    res.json({mssg: 'login user'})
}

//sign up user
const signupUser = async (req, res) => {
    res.json({mssg: 'signup user'})
}

module.exports = { signupUser, loginUser }