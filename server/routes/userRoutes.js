const express = require("express");
const router = express.Router();

// const verify = require("../middleware/auth").verifytoken();
const {
  getUser,
  getUserFriends,
  addRemoveFriend,
} = require("../controllers/user");

//fetch
router.get("/:id", getUser);
router.get("/:id/friends", getUserFriends);

//update data

router.patch("/:id/:friendId", addRemoveFriend);

module.exports = router;
