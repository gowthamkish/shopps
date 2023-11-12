const User = require("../model/userModel");

const asyncHandler = require("express-async-handler");

const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});

const createUser = asyncHandler(async (req, res) => {
  if (!req.body.username && !req.body.email && !req.body.password) {
    res.status(400).json({ message: "Please enter mandatory fields" });
  }
  const newUser = await User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  res.status(200).json(newUser);
});

const updateUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update user ${req.params.id}` });
});

const deleteUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete user ${req.params.id}` });
});

module.exports = { getUsers, createUser, updateUser, deleteUser };
