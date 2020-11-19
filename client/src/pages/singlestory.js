import { useParams, Link } from 'react-router-dom';
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

	return (
		<>
			<article className='article'>
				<h2 className='align-center name-padding'>{story.title}</h2>
				<div>
					{story.body
						.split(/\r?\n/)
						.filter((paragraph) => paragraph)
						.map((paragraph, index) => (
							<p key={index}>{paragraph}</p>
						))}
				</div>
				<h3 className='align-center font-eng-i'>~{story.user.name}</h3>
				<h3 className='align-center font-eng-i line-break'>
					{story.user.detail.relationship}
				</h3>
			</article>
			<div>
				<h4>
					<Link to='yourstories/createstory' className='font-eng-i'>
						Share a Story
					</Link>
				</h4>
				<h4>
					<Link to='yourstories/stories' className='font-eng-i'>
						Read Stories
					</Link>
				</h4>
			</div>
		</>
	);
}

export default SingleStory;
