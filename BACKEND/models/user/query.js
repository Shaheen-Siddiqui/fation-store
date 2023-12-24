const { signUpModel } = require("./index");

const signUpUser = async (userDetail) => {
  const newUser = new signUpModel(userDetail);
  await newUser.save();
  return newUser;
};

const loginUser = async (email, password) => {
  const userExist = await signUpModel.findOne({ email });
  if (!userExist) {
    throw new Error("User not found");
  }
  const isPasswordValid = password === userExist.password;

  if (!isPasswordValid) {
    throw new Error("Invalid password");
  }

  return userExist;
};

module.exports = { signUpUser, loginUser };
