const mongoose = require("mongoose");

const signupUserSchema = new mongoose.Schema({
  fullName: { type: String, default: null },
  email: { type: String, unique: true },
  password: { type: String },
  phoneNumber: { type: Number },
  token: { type: String },
});



const signUpModel = mongoose.model("user", signupUserSchema);


module.exports = { signUpModel };
