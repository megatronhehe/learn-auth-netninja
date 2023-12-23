const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
});

// static signup method
userSchema.statics.signup = async function (email, password) {
	const errorsArray = [];

	// validation
	if (!email || !password) {
		errorsArray.push("All fields must be filled");
		// throw Error("All fields must be filled");
	}

	if (!validator.isEmail(email)) {
		errorsArray.push("Email is not valid");
		// throw Error("Email is not valid");
	}

	if (!validator.isStrongPassword(password)) {
		errorsArray.push("Password is not strong enough");
		// throw Error("Password is not strong enough");
	}

	const exists = await this.findOne({ email });

	if (exists) {
		errorsArray.push("Email already in use");
		// throw Error("Email already in use");
	}

	if (errorsArray.length > 0) {
		throw Error(errorsArray);
	}

	const salt = await bcrypt.genSalt(10);
	const hash = await bcrypt.hash(password, salt);

	const user = await this.create({ email, password: hash });

	return user;
};

// static login method
userSchema.statics.login = async function (email, password) {
	if (!email || !password) {
		throw Error("All fields must be filled");
	}

	const user = await this.findOne({ email });

	if (!user) {
		throw Error("Incorrect email");
	}

	const match = await bcrypt.compare(password, user.password);

	if (!match) {
		throw Error("Incorrect password");
	}

	return user;
};

module.exports = mongoose.model("User", userSchema);
