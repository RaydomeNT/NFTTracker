const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const projectSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      required: false,
    },
    date: {
      type: Date,
      required: false,
    },
    time: {
      type: String,
      required: false,
    },
    wl: {
      type: String,
      required: false,
    },
    walletSub: {
      type: String,
      required: false,
    },
    maxAmount: {
      type: Number,
      required: false,
    },
    twitterLink: {
      type: String,
      required: false,
    },
    user_id: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
