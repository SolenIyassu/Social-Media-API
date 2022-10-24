const mongoose = require("mongoose");
const Thought = require("./Thought");

const usersSchema = new mongoose.Schema({
  userName: {
    type: { String, required: true },
    unique: true,
    trim: true,
  },

  emailAddress: {
    type: { String, required: true },
    unique: true,
    trim: true,
  },
  thoughts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: Thought,
    },
  ],

  friend: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
  ],
});

module.exports = User;
