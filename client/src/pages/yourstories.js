// import { Link } from 'react-router-dom';

function YourStories() {
	return (
		<>
			<div className='text-center'>
				<h2>Your Stories</h2>
				<p>
					Hello and welcome to the Your Stories page, a place for our
					guests to share their favorite experiences relating to the
					couple or their parents with one another. A bit of self
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
				{/* <Link to='yourstories/createstory' className='font-eng-i h4'>
					Tell a story
				</Link> */}
				<h5>
					Your Stories is currently a work in progress and will be
					released as the date of the wedding is closer. Until then,
					please prepare your stories to share!
				</h5>
			</div>
		</>
	);
}

export default YourStories;
