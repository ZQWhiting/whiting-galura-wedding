// send a message to the couple
// attach your contact

import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

function GuestBook() {
	return (
		<div>
			{!Auth.loggedIn() && (
				<h2>
					<Link to='/login'>Login</Link> or{' '}
					<Link to='/signup'>Signup</Link> to
				</h2>
			)}
			<div>
				<h4>Send a message to the couple</h4>
				{Auth.loggedIn() && <form></form>}
			</div>
			<div>
				<h4>Attach your contacts</h4>
				{Auth.loggedIn() && <form></form>}
			</div>
		</div>
	);
}

export default GuestBook;
