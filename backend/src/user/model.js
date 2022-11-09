const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//static signup method
userSchema.statics.signup = async function(username, email, password) {
  
  const userExists = await this.findOne({ username })

  if (userExists) {
    throw Error('Username already in use')
  }

  const emailExists = await this.findOne({ email })

  if (emailExists) {
    throw Error('Email already in use')
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  const user = await this.create({ username, email, password: hash })

  return user

}

module.exports = mongoose.model("User", userSchema);