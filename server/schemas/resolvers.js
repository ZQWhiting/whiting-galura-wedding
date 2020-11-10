const {
	AuthenticationError,
	ValidationError,
} = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');
// replace with environment variable

const resolvers = {
	Query: {
		users: async () => {
			const users = await User.find();

			return users;
		},
	},
	Mutation: {
		signup: async (parent, args) => {
			const user = await User.create(args);
			const token = signToken(user);

			return { token, user };
		},
		login: async (parent, { name, password }) => {
			const user = await User.findOne({ name });

			if (!user) {
				throw new AuthenticationError('Incorrect credentials');
			}

			const correctPw = await user.isCorrectPassword(password);

			if (!correctPw) {
				throw new AuthenticationError('Incorrect credentials');
			}

			const token = signToken(user);

			return { token, user };
		},
		addContact: async (parent, { contact }, { user }) => {
			console.log(contact);;
			const currentUser = await User.findOneAndUpdate(
				user,
				{ contact: contact },
				{ new: true, runValidators: true }
			);

			return currentUser;
		},
		signGuestBook: async (parent, { signature }, { user }) => {
			const currentUser = await User.findOneAndUpdate(
				user,
				{
					guestBook: signature,
				},
				{ new: true }
			);

			return currentUser;
		},
	},
};

module.exports = resolvers;
