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


// const UserForm = require("../Model/FormModel");
// const mongoose = require("mongoose");

// // Post_users
// const PostUsers = async (req, res) =>{
//     try {
//         const newUser = await new User(req.body);
//         const savedUser = await newUser.save();
//         res.status(200).json(savedUser);
//       } catch (error) {
//         console.log('Error creating user:', error);
//         res.status(400).json({ error: error.message });
//       }
// }

// // User

// // Get_all_users
// const GetAllUsers = async (req, res) => {
//   try {
//     const users = await UserForm.find();
//     res.json(users);
//   } catch (error) {
//     console.error("Error fetching users:", error);
//     res.status(500).json({ error: "Server error" });
//   }
// };

// module.exports = {
//     GetAllUsers,
//     PostUsers
// };
