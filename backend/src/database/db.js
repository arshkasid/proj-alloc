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

const facultySchema = mongoose.Schema({
  name: String,
  facultyId: String,
  phoneNumber: Number,
  email: String,
  password: String,
  students: [String],
  driveLink: String,
});

const requestsSchema = mongoose.Schema({
  regno:String,
  facultyId:String,
  time : { type : Date, default: Date.now },
  proposal:String,
  project_name:String,
  accepted:Boolean


})

const User = mongoose.model("User", userSchema);
const Faculty = mongoose.model("Faculty", facultySchema);
const Requests = mongoose.model("Requests",requestsSchema)

module.exports = { User, Faculty ,Requests};
