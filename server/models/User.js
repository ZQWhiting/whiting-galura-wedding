const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const contactSchema = new Schema({
	email: {
		type: String,
		match: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
		default: null,
	},
	address: {
		type: String,
		default: null,
	},
	phoneNumber: {
		type: String,
		match: /^\d{3}-\d{3}-\d{4}$/,
		default: null,
	},
	website: {
		type: String,
		default: null,
		match: /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/,
	},
});

const detailSchema = new Schema({
	photo: {
		type: String,
		default: null,
	},
	relationship: {
		type: String,
		default: null,
	},
});

const activitiesSchema = new Schema({
	contact: {
		type: Boolean,
		default: false,
	},
	detail: {
		type: Boolean,
		default: false,
	},
	guestBook: {
		type: Boolean,
		default: false,
	},
	ourStory: {
		type: Boolean,
		default: false,
	},
});

const userSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true,
		trim: true,
	},
	password: {
		type: String,
		required: true,
		minlength: 5,
	},
	guestBook: {
		type: String,
	},
	contact: contactSchema,
	details: detailSchema,
	activities: activitiesSchema,
});

// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
	if (this.isNew || this.isModified('password')) {
		const saltRounds = 10;
		this.password = await bcrypt.hash(this.password, saltRounds);
	}

	next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
	return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
