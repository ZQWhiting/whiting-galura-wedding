const { gql } = require('apollo-server-express');

const typeDefs = gql`
	type User {
		name: String!
		password: String!
		email: String
		address: String
		number: Int
		photo: String
	}
	type Query {
		user: User
	}
	type Mutation {
		user: User
	}
`;

module.exports = typeDefs;
