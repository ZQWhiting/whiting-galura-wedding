import { Link } from 'react-router-dom';

function Stories() {
	return (
		<div>
			<h5>
				Your Stories is currently a work in progress and will be updated
				as the date of the wedding is closer. Until then, please share
				your own stories!
			</h5>
			<h4>
				<Link to='/yourstories/createstory' className='font-eng-i'>
					Share a Story
				</Link>
			</h4>
		</div>
	);
}

export default Stories;
