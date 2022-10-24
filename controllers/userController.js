const { ObjectId } = require("mongoose").Types;

const { User } = require("../models");

module.exports = {
  getUser: async (req, res) => {
    try {
      const user = await User.find();
      if (!user) {
        res.statu(404).json({ message: "Id not found!" });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getSingleUser: async (req, res) => {
    const user = await User.findOne({ _id: req.params.user_id })
      .select("-__v")
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user found!" })
          : res.json(user)
      )
      .catch((error) => res.status(500).json(error));
  },

  createUser: async (req, res) => {
    try {
      const user = await User.create(req.body);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  deleteUser: async (req, res) => {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.id });
      if (!user) {
        res.status(400).json({ message: "Id not found" });
        return;
      }
      if (!user) {
        res.status(404).json({ message: "Id not found for user!" });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  updateUser: async (req, res) => {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.user_id },
        { $set: req.body },
        { runValidators: true, new: true }
      );
      if (!user) {
        res.status(404).json({ message: "Id not found" });
        return;
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

// const userThoughts = async(userId) =>
// User.aggregate([
//     {
//         {}
//     }
// ])
