const User = require("../Model/FormModel");
const mongoose = require("mongoose");

const PostUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    console.error("Error saving user:", err);
    res.status(500).json({ error: "Error saving user" });
  }
};

const GetAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    console.error("Error retrieving users:", err);
    res.status(500).json({ error: "Error retrieving users" });
  }
};

module.exports = {
  PostUser, 
  GetAllUsers
};


