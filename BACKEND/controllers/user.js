const { signUpUser, loginUser } = require("../models/user/query.js");
const { signupUserValidate, loginUserValidate } = require("../models/user/validator.js");
const { sign } = require("../utils/jwt");

const signUp = async (req, res) => {
  try {
    const { error } = signupUserValidate(req.body);
    if (error)
      return res.status(400).json({
        success: false,
        message: "Validation error",
        error: error.details[0].message,
      });
    const result = await signUpUser(req.body);
    const token = await sign({ _id: result._id });

    res.status(200).json({ message: `user is created.`, data:result, token });
  } 
  catch (error) {
    if (error.code === 11000 && error.keyPattern.email) {
      res.status(400).json({ error: "Email already exists" });
    }
     else {
      res.status(500).json({ error: "Internal server error" });
    }
  }
};


const login = async (req, res) => {
  try {
    const { error } = loginUserValidate(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: "Validation error",
        error: error.details[0].message,
      });
    }
    const { email, password } = req.body;
    const user = await loginUser(email, password);
    const token = await sign({ _id: user._id }); 

    res.status(200).json({ message: "Login successful", data:user, token });
  } catch (error) {
    if (error.message === "User not found") {
      res.status(404).json({ error: "User not found" });
    } 
    else if (error.message === "Invalid password") {
      res.status(400).json({ error: "Invalid password" });
    } 
    else {
      res.status(500).json({ error: "Internal server error" });
    }
  }
};



module.exports = { signUp, login };
