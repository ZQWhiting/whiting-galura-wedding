import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_STORIES } from '../utils/queries';

function SingleStory() {
	const _id = useParams('_id');
	const { data, loading, error } = useQuery(QUERY_STORIES, {
		variables: _id,
	});

	if (loading) {
		return <div>loading...</div>;
	}
	if (error) {
		return <div>Error: {error.message}</div>;
	}

	const story = data?.stories[0];

	return <div></div>;
}

export default SingleStory;
