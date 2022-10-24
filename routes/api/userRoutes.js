const router = require("express").Router();

const { route } = require(".");
const {
  createUser,
  deleteUser,
  getSingleUser,
  updateUser,
  getUser,
} = require("../../userController");

router.route("/").get(getUser).post(createUser);
router
  .route("/:user_id")
  .get(getSingleUser)
  .delete(deleteUser)
  .post(updateUser);
