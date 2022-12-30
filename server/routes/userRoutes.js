const express = require("express");
const { getUser, addRemoveFriend } = require("../controllers/user");
const verify = require("../middleware/auth");
const {
  getUser,
  getUserfriends,
  addRemoveFriend,
} = require("../controllers/user");

const router = express.Router();

//fetch
router.get("/:id", verify, getUser);
router.get("/:id/friends", verify, getUserfriends);

//update data

router.patch("/:id/:friendId", verify, addRemoveFriend);

module.exports = router;
