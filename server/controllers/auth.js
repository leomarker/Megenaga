import bcrypt from "bcrypt";
import { Jwt } from "jsonwebtoken";
import User from "../model/user";

export const register = async (req, res, next) => {
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

  const user = User.findOne({ email: email });
  if (!user) {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
  }
};
