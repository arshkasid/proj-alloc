const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://arshkasid046:1234@cluster0.txl0ebl.mongodb.net/proj-alloc"
);

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

const User = mongoose.model("User", userSchema);

module.exports = { User };
