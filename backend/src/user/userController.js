const User = require('./model')

//log in user
const loginUser = async (req, res) => {
    res.json({mssg: 'login user'})
}

//sign up user
const signupUser = async (req, res) => {
    const { username, email, password } = req.body

    try {
        const user = await User.signup(username, email, password)
        res.status(200).json({username, email, password, user})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = { signupUser, loginUser }