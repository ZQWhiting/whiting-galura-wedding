const {
	AuthenticationError,
	ValidationError,
} = require('apollo-server-express');
const { User, Story } = require('../models');
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
			console.log(contact);
			const currentUser = await User.findOneAndUpdate(
				user,
				{ contact: contact },
				{ new: true, runValidators: true }
			);

			return currentUser;
		},
		addPhoto: async (parent, { photo }, { user }) => {
			const currentUser = await User.findOneAndUpdate(
				user,
				{
					$set: { 'detail.photo': photo },
				},
				{ new: true }
			);

			return currentUser;
		},
		addRelationship: async (parent, { relationship }, { user }) => {
			const currentUser = await User.findOneAndUpdate(
				user,
				{
					$set: { 'detail.relationship': relationship },
				},
				{ new: true }
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
		createStory: async (parent, { title, body }, { user }) => {
			const currentUser = await User.findOne(user);

			const {
				name,
				detail: { relationship },
			} = currentUser;

			const story = await Story.create({
				title,
				body,
				username: name,
				relationship,
			});

			currentUser.stories.push(story);

			currentUser.save(
				{ validateBeforeSave: true },
				(err) => err && console.log(err)
			);

			return story;
		},
	},
};

module.exports = resolvers;
