const { AuthenticationError } = require('apollo-server-express');
const { User, Story } = require('../models');
const { signToken } = require('../utils/auth');
// replace with environment variable

const resolvers = {
	Query: {
		users: async () => {
			const users = await User.find();

			return users;
		},
		stories: async () => {
			const stories = await Story.find();

			return stories;
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
			if (user) {
				const currentUser = await User.findOneAndUpdate(
					user,
					{ contact: contact },
					{ new: true, runValidators: true }
				);

				return currentUser;
			}
			throw new AuthenticationError('Not Signed In');
		},
		addPhoto: async (parent, { photo }, { user }) => {
			if (user) {
				const currentUser = await User.findOneAndUpdate(
					user,
					{
						$set: { 'detail.photo': photo },
					},
					{ new: true }
				);

				return currentUser;
			}
			throw new AuthenticationError('Not Signed In');
		},
		addRelationship: async (parent, { relationship }, { user }) => {
			if (user) {
				const currentUser = await User.findOneAndUpdate(
					user,
					{
						$set: { 'detail.relationship': relationship },
					},
					{ new: true }
				);

				return currentUser;
			}

			throw new AuthenticationError('Not Signed In');
		},
		signGuestBook: async (parent, { signature }, { user }) => {
			if (user) {
				const currentUser = await User.findOneAndUpdate(
					user,
					{
						guestBook: signature,
					},
					{ new: true }
				);

				return currentUser;
			}
			throw new AuthenticationError('Not Signed In');
		},
		createStory: async (parent, { title, body }, { user }) => {
			if (user) {
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
			}
			throw new AuthenticationError('Not Signed In');
		},
	},
};

module.exports = resolvers;
