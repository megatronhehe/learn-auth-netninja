const express = require("express");

// controller functions
const {
	loginUser,
	signupUser,
	getUsers,
} = require("../controllers/userController");

const router = express();

// login route
router.get("/", getUsers);

// login route
router.post("/login", loginUser);

// signup route
router.post("/signup", signupUser);

module.exports = router;
