const User = require('./model');
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}

//log in user
const loginUser = async (req, res) => {
    const {username, email, password} = req.body

    try {
        const user = await User.login(username, email, password)

        //create a token
        const token = createToken(user._id)

        res.status(200).json({ email, token })
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//sign up user
const signupUser = async (req, res) => {
    const { username, email, password } = req.body

    try {
        const user = await User.signup(username, email, password)

        //create a token
        const token = createToken(user._id)

        res.status(200).json({ email, token })
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = { signupUser, loginUser }