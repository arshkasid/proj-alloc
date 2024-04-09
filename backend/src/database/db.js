const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGODB_STRING);

const userSchema = mongoose.Schema({
  name: String,
  regno: String,
  email: String,
  password: String,
  pno: Number,
  branch: String,
  year: Number,
  mentorId: String,
});

const facultySchema = mongoose.Schema({
  name: String,
  facultyId: String,
  phoneNumber: Number,
  email: String,
  password: String,
  students: [String],
  driveLink: String,
});

const User = mongoose.model("User", userSchema);
const Faculty = mongoose.model("Faculty", facultySchema);

module.exports = { User, Faculty };
