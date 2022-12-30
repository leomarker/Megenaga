const mongoose = require("mongoose");

const PostsSchema = mongoose.Schema(
  {
    userID: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    location: String,
    discription: String,
    picturePath: String,
    userPicturePath: String,
    likes: {
      type: Map,
      of: Boolean,
    },
    comment: {
      type: String,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Posts", PostsSchema);
