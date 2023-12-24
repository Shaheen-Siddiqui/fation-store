const jwt = require("jsonwebtoken");
require("dotenv").config();

async function sign(body) {
  const accessToken = await jwt.sign(body, process.env.JWT_SECRET_KEY);
  return accessToken;
}

module.exports = { sign };
