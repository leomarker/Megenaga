const express = require("express");
const verify = require("../middleware/auth");

const router = express.Router();

//fetch
router.get("/:id", verify, getUser);
router.get("/:id/friends", verify, getUserfriends);

//update data

router.patch("/:id/:friendId", verify, addRemoveFriend);

module.exports = router;
