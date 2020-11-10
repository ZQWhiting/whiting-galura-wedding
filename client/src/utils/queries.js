import gql from 'graphql-tag';

export const QUERY_USERS = gql`
	{
		users {
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
		}
	}
`;
