const router = require("router").Router();
const {
  createThought,
  getThought,
  getSingleThoughts,
  updateThought,
  deleteThought,
} = require("../../controllers/thoughtController");
router.route("/").get(getThought).post(createThought);
router
  .route("/:thoughtId")
  .get(getSingleThoughts)
  .put(updateThought)
  .delete(deleteThought);
module.exports = router;
