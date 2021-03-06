import gql from 'graphql-tag';

export const QUERY_USERS = gql`
	{
		users {
			_id
			name
			guestBook
			contact {
				email
				address
				phoneNumber
				website
			}
			detail {
				photo
				relationship
			}
			activities {
				contact
				detail
				guestBook
				ourStory
			}
			stories {
				_id
				title
				body
			}
		}
	}
`;

export const QUERY_STORIES = gql`
	query stories($_id: ID) {
		stories(_id: $_id) {
			_id
			title
			body
			user {
				_id
				name
				detail {
					relationship
					photo
				}
			}
			createdAt
			updatedAt
		}
	}
`;

export const QUERY_PHOTOS = gql`
	{
		photos {
			zachary
			ashley
			couple
		}
	}
`;