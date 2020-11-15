import { Link } from 'react-router-dom';

function YourStories() {
	return (
		<>
			<div className='text-center'>
				<h2>Your Stories</h2>
				<p>
					Hello and welcome to the Your Stories Section, a place for
					our guests to share their favorite experiences relating to
					the couple or their parents with one another. A bit of self
					introduction is encouraged (though not necessary), as are
					positive, light-filled messages.
				</p>
				<p>
					The stories posted on this page will be saved by the couple,
					so we would appreciate it if you took the time to share
					something. Also, all submissions posted here will be seen
					publicly, so personal messages to the couple should be
					posted in the Guest Book.
				</p>
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

export default YourStories;
