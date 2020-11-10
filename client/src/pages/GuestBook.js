// send a message to the couple
// attach your contact

import { useState } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

function GuestBook() {
	const [guestContent, setGuestContent] = useState('');
	const [contactContent, setContactContent] = useState({
		email: '',
		address: '',
		phoneNumber: '',
		website: '',
	});

	function submitGuestBook(e) {
		e.preventDefault();
	}
	function submitContact(e) {
		e.preventDefault();
	}
	return (
		<div className='guest-book'>
			{!Auth.loggedIn() && (
				<h2>
					<Link to='/login' previouspath='/guestbook'>
						Sign In
					</Link>{' '}
					or{' '}
					<Link to='/signup' previouspath='/guestbook'>
						Sign Up
					</Link>{' '}
					to:
				</h2>
			)}
			<div>
				<h4>Sign the Guest Book</h4>
				{Auth.loggedIn() && (
					<form>
						<div className='my-2 form-group mb-2 row'>
							<textarea
								id='website'
								name='website'
								className='form-control col mx-3 no-resize'
								rows='8'
								placeholder='Your Message'
								value={guestContent}
								onChange={(e) =>
									setGuestContent(e.target.value)
								}
							/>
						</div>
						<button
							type='submit'
							className='btn button mb-2 submit-btn'
							onClick={submitGuestBook}
						>
							Submit
						</button>
					</form>
				)}
			</div>
			<div>
				<h4>Attach your contacts</h4>
				{Auth.loggedIn() && (
					<form>
						<div className='my-2 form-group mb-2 row'>
							<input
								id='email'
								type='email'
								name='email'
								className='form-control col mx-3'
								placeholder='Email'
								value={contactContent.email}
								onChange={(e) =>
									setContactContent({
										...contactContent,
										email: e.target.value,
									})
								}
							/>
						</div>
						<div className='my-2 form-group mb-2 row'>
							<input
								id='address'
								type='text'
								name='address'
								className='form-control col mx-3'
								placeholder='Address'
								value={contactContent.address}
								onChange={(e) =>
									setContactContent({
										...contactContent,
										address: e.target.value,
									})
								}
							/>
						</div>
						<div className='my-2 form-group mb-2 row'>
							<input
								id='phone-number'
								type='text'
								name='phone-number'
								className='form-control col mx-3'
								placeholder='Phone Number'
								value={contactContent.phoneNumber}
								onChange={(e) =>
									setContactContent({
										...contactContent,
										phoneNumber: e.target.value,
									})
								}
							/>
						</div>
						<div className='my-2 form-group mb-2 row'>
							<input
								id='website'
								type='text'
								name='website'
								className='form-control col mx-3'
								placeholder='Website'
								value={contactContent.website}
								onChange={(e) =>
									setContactContent({
										...contactContent,
										website: e.target.value,
									})
								}
							/>
						</div>
						<button
							type='submit'
							className='btn button mb-2 submit-btn'
							onClick={submitContact}
						>
							Submit
						</button>
					</form>
				)}
			</div>
		</div>
	);
}

export default GuestBook;
