const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
	return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

// get users
const getUsers = async (req, res) => {
	try {
		const users = await User.find({}).sort({ createdAt: -1 });
		return res.status(200).json(users);
	} catch (error) {
		return res.status(400).json({ error: error.message });
	}
};

// login user
const loginUser = async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = await User.login(email, password);

		// create a token
		const token = createToken(user._id);

		res.status(200).json({ email, token });
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// signup user
const signupUser = async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = await User.signup(email, password);

		// create a token
		const token = createToken(user._id);

		res.status(200).json({ email, token });
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

module.exports = { loginUser, signupUser, getUsers };
