const express = require("express");
const router = express.Router();

const userRouter = require("./user");
const facultyRouter = require("./faculty");

router.use("/user", userRouter);
router.use("/faculty", facultyRouter);

module.exports = router;
