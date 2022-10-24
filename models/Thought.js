const mongoose = require("mongoose");
const moment = require("moment");
const User = require("./User");
const Reaction = require("./Reaction");

const ThoughtsSchema = new schema({
  thoughtId: {
    type: { String, required: true },
  },
  thoughtsText: {
    type: { String, required: true },
    trim: true,
  },
  username: {
    type: { String, required: true },
  },
  userId: {
    type: { Number, required: true },
  },
  postedBy: {
    type: { String, required: true },
  },
  postDate: {
    type: { string, required: true },
    today: () => {
      let now = moment().toDate();
      return thoughtsText.find({ postDate: { $gte: now } });
    },
    reactions: [ReactionSchema],
  },

  toJSON: {
    getters: true,
    virtuals: true,
  },
});
ThoughtsSchema.virtual("reactionCount").get(function () {
  return this.reaction.length;
});

const Thought = model("Thought", ThoughtsSchema);

module.exports = Thought;
