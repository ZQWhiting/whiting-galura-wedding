const { AuthenticationError } = require('apollo-server-express');
const { User, Story } = require('../models');
const { signToken } = require('../utils/auth');
const find = require('list-files');
const path = require('path');
const fs = require('fs');

const resolvers = {
	Query: {
		users: async () => {
			const users = await User.find().populate('stories').exec();

			return users;
		},
		stories: async (parent, args) => {
			const stories = await Story.find(args).populate('user').exec();

			return stories;
		},
		photos: async () => {
			const photos = {
				ashley: [],
				zachary: [],
				couple: [],
			};

			const addDir = (files, pathType) => {
				return files.map((file) => {
					let path = '';
					switch (pathType) {
						case 'ashley':
							path = 'AshleySlide';
							break;
						case 'zachary':
							path = 'ZacharySlide';
							break;
						case 'couple':
							path = 'CoupleSlide';
							break;
						default:
							break;
					}
					return `/images/${path}/${file}`;
				});
			};

			const getFiles = (path) => {
				return fs.readdirSync(path, function (err, files) {
					if (err) {
						return console.log('Unable to scan directory: ' + err);
					}
					return files;
				});
			};

			const getDirectory = (directory) => {
				return path.join(
					__dirname,
					`../../client/public/images/${directory}`
				);
			};

			const directoryPathAshley = getDirectory('AshleySlide');
			const directoryPathZachary = getDirectory('ZacharySlide');
			// const directoryPathCouple = getDirectory('CoupleSlide');

			const AshleyFiles = getFiles(directoryPathAshley);
			const ZacharyFiles = getFiles(directoryPathZachary);
			// const CoupleFiles = getFiles(directoryPathCouple);

			photos.ashley = addDir(AshleyFiles, 'ashley');
			photos.zachary = addDir(ZacharyFiles, 'zachary');
			// photos.couple = addDir(CoupleFiles, 'couple');

			return photos;
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

				const story = await Story.create({
					title,
					body,
					user,
				});

				currentUser.stories.push(story._id);

				console.log(currentUser.stories, story._id);

				currentUser.save();

				return story.populate('user').execPopulate();
			}
			throw new AuthenticationError('Not Signed In');
		},
	},
};

module.exports = resolvers;
