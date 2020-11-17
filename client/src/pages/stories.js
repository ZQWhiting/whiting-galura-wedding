import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_STORIES } from '../utils/queries';

function Stories() {
	const { data, error, loading } = useQuery(QUERY_STORIES);

	if (loading) {
		return <div>loading...</div>;
	}
	if (error) {
		return <div>error: {error}</div>;
	}

	const stories = data?.stories;

	return (
		<div>
			<h3 className='font-eng-i'>Read Stories:</h3>
			<div className='story-list w-70'>
				{stories.map(
					({
						_id,
						title,
						createdAt,
						updatedAt,
						user: { name, detail },
					}) => (
						<Link
							to={'/yourstories/stories/' + _id}
							className='story-card'
							key={_id}
						>
							<h5 className='story-card-title'>{title}</h5>
							{/* {detail?.photo && <div>{detail?.photo}</div>} */}
							<div className='story-card-author'>By: {name}</div>
							{detail?.relationship && (
								<div className='story-card-relationship'>
									{detail?.relationship}
								</div>
							)}
						</Link>
					)
				)}
			</div>
			<h4>
				<Link to='/yourstories/createstory' className='font-eng-i'>
					Share a Story
				</Link>
			</h4>
		</div>
	);
}

export default Stories;
