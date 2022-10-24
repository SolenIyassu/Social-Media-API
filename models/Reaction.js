const { default: mongoose } = require("mongoose");
const Thought = require("./Thought");

const ReactionSchema = new schema({
  ReactionId: {
    type: { Number, required: true },
    unique: true,
    trim: true,
  },
  reactionText: {
    type: { String, required: true },
    trim: true,
  },
  postedBy: {
    type: { String, required: true },
    trim: true,
  },
  postedDate: {
    type: { Number, required: true },
    today: () => {
      let now = moment().toDate();
      return ReactionId.find({ postDate: { $gte: now } });
    },
  },
  toJSON: {
    getters: true,
  },
});

module.exports = Reaction;
