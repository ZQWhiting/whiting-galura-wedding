const { gql } = require('apollo-server-express');

const typeDefs = gql`
	input ContactInput {
		email: String
		address: String
		phoneNumber: String
		website: String
	}
	type Story {
		_id: ID
		title: String!
		body: String!
		username: String!
		relationship: String
	}
	type Contact {
		email: String
		address: String
		phoneNumber: String
		website: String
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
		guestBook: String
		stories: [Story]
	}
	type Auth {
		token: ID
		user: User
	}
	type Query {
		users: [User]
	}
	type Mutation {
		signup(name: String!, password: String!): Auth
		login(name: String!, password: String!): Auth
		addContact(contact: ContactInput): User
		addPhoto(photo: String!): User
		addRelationship(relationship: String!): User
		signGuestBook(signature: String!): User
		createStory(title: String!, body: String!): Story
	}
`;

module.exports = typeDefs;
