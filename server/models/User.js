const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const contactSchema = new Schema({
	email: {
		type: String,
		match: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
		default: null,
	},
	address: {
		type: String,
		default: null,
	},
	phoneNumber: {
		type: String,
		match: /@"^\d{10}$"/,
		default: null,
	},
	website: {
		type: String,
		default: null,
	},
});

const detailSchema = new Schema({
  photo: {
    type: String,
    default: null
  },
  relationship: {
    type: String,
    default: null
  }
})

const activitiesSchema = new Schema({
  contact: {
    type: Boolean,
    default: false
  },
  detail: {
    type: Boolean,
    default: false
  },
  guestBook: {
    type: Boolean,
    default: false
  },
  ourStory: {
    type: Boolean,
    default: false
  }
})

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
	contact: contactSchema,
	details: detailSchema,
	activities: activitiesSchema,
});

// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
