const router = require("express").Router(); // Get the router instance of Express
const userController = require("../controllers/user"); // Get all exported functions in the user controller
// const authMiddleware = require("../middlewares/auth/verify-user")

router.post("/signup", userController.signUp);
router.post("/login", userController.login);

module.exports = router;
