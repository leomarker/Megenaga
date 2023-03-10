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

exports.getFeedPosts = async (req, res, next) => {
  try {
    const posts = await Posts.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

exports.getUserPosts = async (req, res, next) => {
  try {
    const { userID } = req.params;
    const posts = await Posts.find({ userID });
    res.status(200).json(posts);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

exports.likePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { userID } = req.body;
    const post = await Posts.findById(id);
    const isLiked = post.likes.get(userID);
    if (isLiked) {
      post.likes.delete(userID);
    } else {
      post.likes.set(userID, true);
    }

    const updatedPost = await Posts.findByIdAndUpdate(
      id,
      {
        likes: post.likes,
      },
      { new: true }
    );

    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};
