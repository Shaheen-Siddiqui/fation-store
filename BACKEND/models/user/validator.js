const Joi = require("joi");

const signupUserValidate = (user) => {
  const schema = Joi.object({
    fullName: Joi.string().required(),
    phoneNumber: Joi.string().pattern(/^\d{10}$/) .message('Phone number must be exactly 10 digits').required(),
    email: Joi.string().required(),
    password: Joi.string().min(6).message('Password must be at least 6 characters long').required(),
  });
  return schema.validate(user);
};

const loginUserValidate = (user) => {
  const schema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
  });
  return schema.validate(user);
};

module.exports = { signupUserValidate, loginUserValidate };
