const express = require("express");
const router = express.Router();

//CONTROLLER
// const controller = require("../../controller/user.controller");

//MODEL
const User = require("../../models/User");
const { findOne } = require("../../models/User");

// @route   GET api/users
// @desc    Get all users
// @access  Public
router.get("/", async (req, res, next) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    next(error);
  }
});

// @route   GET api/users/"id"
// @desc    Get all users
// @access  Public
router.get("/:idUser", async (req, res, next) => {
  const idUser = req.params.idUser;
  try {
    const user = await User.findOne({ _id: idUser });
    res.json(user);
  } catch (error) {
    next(error);
  }
});

// @route   POST api/users
// @desc    Add an user
// @access  Public
router.post("/", async (req, res, next) => {
  const { name, level } = req.body;
  try {
    await User.create({
      name,
      level,
    });

    res.json("Add successfully");
  } catch (error) {
    next(error);
  }
});

// @route   PUT api/user/:idUser
// @desc    Edit info of user
// @access  Public
router.put("/:idUser", async (req, res, next) => {
  const { idUser } = req.params;
  const { name, level } = req.body;
  try {
    await User.findOneAndUpdate(
      { _id: idUser },
      {
        name,
        level,
      },
      {
        new: true,
      }
    );

    res.json("Edit succesfully!!!");
  } catch (error) {
    next(error);
  }
});

// @route   DELETE api/user/:idUser
// @desc    Delete  user
// @access  Public
router.delete("/:idUser", async (req, res, next) => {
  const { idUser } = req.params;
  try {
    await User.deleteOne({ _id: idUser });

    res.json("Delete succesfully!!!");
  } catch (error) {
    next(error);
  }
});
module.exports = router;
