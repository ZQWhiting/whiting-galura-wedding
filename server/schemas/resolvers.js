const { AuthenticationError } = require('apollo-server-express');
const { User, Product, Category, Order } = require('../models');
const { signToken } = require('../utils/auth');
// replace with environment variable

const resolvers = {
	Query: {},
	Mutation: {},
};

module.exports = resolvers;
