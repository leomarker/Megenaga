const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../model/user");

exports.register = async (req, res, next) => {
  try {
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
    console.log(userExist);
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
      const savedUser = await user.save();
      user.password = undefined;
      res.status(201).json(savedUser);
    } else {
      res.status(500).json({ error: "user exists" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });
  // console.log(user);
  console.log(email);
  console.log(password);

  console.log(user);

  if (user) {
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      const secret = "this is jwt";
      const token = jwt.sign({ id: user._id }, secret);
      user.password = undefined;
      res.status(200).json({ token, user });
    } else {
      return res.status(400).json({ error: "Invalid  credentials." });
    }
  } else {
    return res.status(400).json({ error: "User dose not exist" });
  }
};
