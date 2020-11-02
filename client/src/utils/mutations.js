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