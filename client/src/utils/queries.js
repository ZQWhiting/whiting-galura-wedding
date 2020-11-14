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
        username
        relationship
      }
		}
	}
`;

export const QUERY_STORIES = gql`
  {
    stories {
      _id
      title
      body
      username
      relationship
    }
  }
`