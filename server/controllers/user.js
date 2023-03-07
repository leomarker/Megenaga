const User = require("../model/user");

exports.getUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json({ user });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ msg: err.message });
  }
};

exports.getUserFriends = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    const friends = await Promise.all(
      user.friends.map((id) => {
        User.findById(id);
      })
    );

    const formattedFriends = friends.map(
      ({ id, firstName, lastName, occupation, location, picturePath }) => {
        return { id, firstName, lastName, occupation, location, picturePath };
      }
    );
    return res.status(200).json({ formattedFriends });
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

exports.addRemoveFriend = async (req, res, next) => {
  try {
    const { id, friendId } = req.params;
    const user = await User.findById(id);
    const friend = await User.findById(friendId);

    if (user.friends.includes(friendId)) {
      user.friends = user.friends.filter((id) => id !== friendId);
      friend.friends = friend.friends.filter((id) => id !== id);
    } else {
      user.friends.push(friendId);
      friend.friends.push(id);
    }
    await user.save();
    await friend.save();

    const friends = await Promise.all(
      user.friends.map((id) => {
        User.findById(id);
      })
    );

    const formattedFriends = friends.map(
      ({ id, firstName, lastName, occupation, location, picturePath }) => {
        return { id, firstName, lastName, occupation, location, picturePath };
      }
    );
    return res.status(200).json({ formattedFriends });
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};
