import { Link } from 'react-router-dom';

function YourStories () {
    return (
		<>
			<div>
				<h2>
					<Link to='/stories'>Stories of the couple</Link>
				</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Vestibulum rhoncus blandit ipsum vel rutrum. Integer
					ullamcorper erat non nisi convallis, ac accumsan ante
					malesuada. Sed porta hendrerit scelerisque.
				</p>
			</div>
			<div>
				<h2>
					<Link to='/createstory'>Tell a story</Link>
				</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Vestibulum rhoncus blandit ipsum vel rutrum. Integer
					ullamcorper erat non nisi convallis, ac accumsan ante
					malesuada. Sed porta hendrerit scelerisque.
				</p>
			</div>
		</>
	);
}

export default YourStories