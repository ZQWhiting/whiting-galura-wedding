import gql from 'graphql-tag';

export const LOGIN = gql`
	mutation login($name: String!, $password: String!) {
		login(name: $name, password: $password) {
			token
			user {
				_id
			}
		}
	}
`;

export const SIGNUP = gql`
	mutation signup($name: String!, $password: String!) {
		signup(name: $name, password: $password) {
			token
			user {
				_id
			}
		}
	}
`;

export const ADD_CONTACT = gql`
	mutation addContact($contact: ContactInput) {
		addContact(contact: $contact) {
			name
			contact {
				email
				address
				phoneNumber
				website
			}
		}
	}
`;

export const SIGN_GUEST_BOOK = gql`
	mutation signGuestBook($signature: String!) {
		signGuestBook(signature: $signature) {
			name
			guestBook
		}
	}
`;

export const ADD_RELATIONSHIP = gql`
	mutation addRelationship($relationship: String!) {
		addRelationship(relationship: $relationship) {
			name
			detail {
				relationship
			}
		}
	}
`;

export const ADD_PHOTO = gql`
	mutation addPhoto($photo: String!) {
		addPhoto(photo: $photo) {
			name
			detail {
				photo
			}
		}
	}
`;
