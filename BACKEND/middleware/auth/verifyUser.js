const jwt = require("jsonwebtoken");
require("dotenv").config();

const authVerify = (req, res, next) => {
  // Get the token from the request header
  const token = req.header("Authorization");

  // Check if token is present
  if (!token) {
    return res.status(401).json({ error: "Access denied. No token provided." });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log(decoded, "decoded token");
    // Attach the decoded user data to the request object for use in protected routes
    req.user = decoded;

    next();
  } catch (error) {
    res.status(400).json({ error: "Invalid token." });
  }
};

module.exports = { authVerify };
