const User = require("../model/user");

exports.getUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findOne(id);
    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.getUserFriends = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
  } catch (err) {}
};