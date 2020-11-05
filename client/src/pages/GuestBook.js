// send a message to the couple
// attach your contact

import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

function GuestBook() {
	return (
		<div className='guest-book'>
			{!Auth.loggedIn() && (
				<h2>
					<Link to='/login' previousPath='/guestbook'>
						Login
					</Link>{' '}
					or{' '}
					<Link to='/signup' previousPath='/guestbook'>
						Signup
					</Link>{' '}
					to:
				</h2>
			)}
			<div>
				<h4>Send a message to the couple</h4>
				{Auth.loggedIn() && (
					<form>
						<div className='my-2 form-group mb-2 row'>
							<textarea
								id='website'
								name='website'
								className='form-control col mx-3 no-resize'
								rows='8'
								placeholder='Your Message'
							/>
						</div>
						<button type='submit' className='btn mb-2 submit-btn'>
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
							></input>
						</div>
						<div className='my-2 form-group mb-2 row'>
							<input
								id='address'
								type='text'
								name='address'
								className='form-control col mx-3'
								placeholder='Address'
							></input>
						</div>
						<div className='my-2 form-group mb-2 row'>
							<input
								id='phone-number'
								type='text'
								name='phone-number'
								className='form-control col mx-3'
								placeholder='Phone Number'
							></input>
						</div>
						<div className='my-2 form-group mb-2 row'>
							<input
								id='website'
								type='text'
								name='website'
								className='form-control col mx-3'
								placeholder='Website'
							></input>
						</div>
						<button type='submit' className='btn mb-2 submit-btn'>
							Submit
						</button>
					</form>
				)}
			</div>
		</div>
	);
}

export default GuestBook;
