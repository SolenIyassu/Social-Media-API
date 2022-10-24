const { ObjectId } = require("mongoose").Types;
const { Thought } = require("../models");

module.exports = {
  getThought: async (req, res) => {
    try {
      const thought = await Thought.find();
      if (!thought) {
        res.status(404).json({ message: "Thought was not found!" });
      }
      res.status(200).json(thought);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getSingleThoughts: async (req, res) => {
    const thought = await Thought.findOne({ _id: req.params.thoughtId })
      .select("-__")
      .then((thoughts) =>
        !thoughts
          ? res.status(404).json({ msg: `This thought doesn't exist` })
          : res.json(thoughts)
      )
      .catch((error) => res.status(500).json(error));
  },
  createThought: async (req, res) => {
    try {
      const thought = await Thought.create(req.body);
      res.status(200).json(thought);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  deleteThought: async (req, res) => {
    try{
    const thought = await Thought.findOneAndDelete({
      _id: req.params.thought_Id,
    })
    if(!thought){
      res.status(404).json({message: 'No id found for thought'})
    }
     res.status(200).json(thought)
  }catch(error){
    res.status(500).json(error)
  },
  updateThought:async(req, res) =>{
    try{
    const thought = await Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    );
      if(!thought){
        res.status(404).json({message: 'No id found!'})
      }
      res.status(200).json(thought)
  } catch(error){
    res.status(500).json(error)
  }
}
};
