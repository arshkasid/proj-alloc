const express = require("express");
const jwt = require("jsonwebtoken");
const { JWT_KEY: key } = require("../config");
const router = express.Router();

const { User } = require("../database/db");

router.post("/signup", async (req, res) => {
  const object = req.body;
  console.log(object);

  const check = await User.findOne({
    regno: req.body.regno,
  });

  if (check) {
    res.status(400).json({
      message: "user already exists",
    });
  } else {
    const userObject = new User(object);
    await userObject.save();
    res.status(200).json({
      message: "user account created successfully",
    });
  }
});

router.post("/login", async (req, res) => {
  //expect: body{regno: String, password: String}

  const regno = req.body.regno;
  const pass = req.body.password;

  const findUser = await User.findOne({
    regno: regno,
    password: pass,
  });

  if (findUser) {
    const object = {
      regno: regno,
    };

    const token = jwt.sign(object, key);
    res.status(200).json({
      message: "user found",
      token: token,
    });
  } else {
    res.status(400).json({
      message: "user not found",
    });
  }
});

module.exports = router;
