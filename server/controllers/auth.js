const bcrypt = require("bcrypt");
const { Jwt } = require("jsonwebtoken");
const User = require("../model/user");

exports.register = async (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    password,
    picturePath,
    friends,
    location,
    occupation,
  } = req.body;

  const userExist = await User.findOne({ email: email });
  if (!userExist) {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    let user = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      picturePath,
      friends,
      location,
      occupation,
    });
    await user.save();
    user.password = undefined;

    console.log(user);
    res.status(201).json(user);
  } else {
    res.status(500).json({ error: "user exists" });
  }
};
