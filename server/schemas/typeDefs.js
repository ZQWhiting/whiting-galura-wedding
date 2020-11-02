const { gql } = require('apollo-server-express');

const typeDefs = gql`
	type Contact {
		email: String
		address: String
		phoneNumber: String
	}
	type Detail {
		photo: String
		relationship: String
	}
	type Activities {
		contact: Boolean
		detail: Boolean
		guestBook: Boolean
		ourStory: Boolean
	}
	type User {
		_id: ID
		name: String!
		password: String!
		contact: Contact
		detail: Detail
		activities: Activities
	}
	type Auth {
		token: ID
		user: User
	}
	type Query {
		user: User
	}
	type Mutation {
		signup(name: String!, password: String!): Auth
		login(name: String!, password: String!): Auth
	}
`;

module.exports = typeDefs;
