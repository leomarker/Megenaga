const Posts = require("../model/posts");
const User = require("../model/user");

exports.createPost = async (req, res, next) => {
  try {
    const { userID, description, picturepath } = req.body;
    const user = await User.findOne({ userID: userID });
    const newPost = new Posts({
      userID,
      firstName: user.firstName,
      latName: user.lastName,
      location: user.location,
      description,
      userPicturePath: user.picturepath,
      picturepath,
      likes: {},
      comments: [],
    });
    await newPost.save();
    const posts = await Posts.find();
    res.status(201).json(posts);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};