const express = require("express");
const router = express.Router();

const {PostUser, GetAllUsers} = require("../Controller/FormController");

  router.post("/", PostUser); 
  router.get("/", GetAllUsers); 

  module.exports = router;