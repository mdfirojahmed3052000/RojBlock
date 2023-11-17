import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../Models/user.js";

export const userRegister = async (req, res) => {
  //console.log(req.body);

  const { name, email, password } = req.body;

  let userexist = await User.findOne({ email });
  if (userexist)
    return res.status(200).json({
      success: false,
      massage: "User already exist .....",
    });
  const hashPassword = await bcrypt.hash(password, 12);
  const user = await User.create({
    name,
    email,
    password: hashPassword,
  });

  const token = jwt.sign({ _id: user._id }, "FIROJ");
  res
    .status(201)
    .cookie("token", token, {
      expires: new Date(Date.now() + 1000 * 60 * 5),
      httpOnly: true,
    })
    .json({
      success: false,
      massage: "User register successfull",
      user,
    });
};
export const userLogin = async (req, res) => {
  //console.log(req.body);

  const { email, password } = req.body;

  let userexist = await User.findOne({ email });
  if (!userexist)
    return res.status(400).json({
      success: false,
      massage: "User do not exist .....",
    });
  const ismatch = await bcrypt.compare(password, userexist.password);

  if (!ismatch)
    return res.status(400).json({
      success: false,
      massage: "password or email do not match .....",
    });
  const token = jwt.sign({ _id: userexist._id }, "FIROJ");
  res
    .status(201)
    .cookie("token", token, {
      expires: new Date(Date.now() + 1000 * 60 * 5),
      httpOnly: true,
    })
    .json({
      success: true,
      massage: `Welcome ${userexist.name} and your email is ${userexist.email}`,
    });
};
export const userLogout = (req, res) => {
  res
    .status(200)
    .cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    })
    .json({
      success: true,
      massage: "successfully Logout",
    });
};
