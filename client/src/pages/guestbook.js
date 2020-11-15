// send a message to the couple
// attach your contact;

import { useMutation } from '@apollo/react-hooks';
import { useState } from 'react';
import Loginsuggestion from '../components/loginsuggestion';
import Auth from '../utils/auth';
import { SIGN_GUEST_BOOK, ADD_CONTACT } from '../utils/mutations';

function GuestBook() {
	const [guestContent, setGuestContent] = useState('');
	const [contactContent, setContactContent] = useState({
		email: '',
		address: '',
		phoneNumber: '',
		website: '',
	});
	const [validationError, setValidationError] = useState('');

	const [signGuestBook] = useMutation(SIGN_GUEST_BOOK, {
		variables: { signature: guestContent },
	});
	const [addContacts] = useMutation(ADD_CONTACT, {
		variables: { contact: contactContent },
	});

	function submitGuestBook(e) {
		e.preventDefault();

		signGuestBook();

		setGuestContent('');
	}
	const validateEmail = () => {
		console.log(contactContent.email);

		return !contactContent.email
			? true
			: contactContent.email.match(
					/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
			  )
			? true
			: false;
	};

	const validateWebsite = () =>
		!contactContent.website
			? true
			: contactContent.website.match(
					/^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/
			  )
			? true
			: false;

	const validatePhoneNumber = () =>
		!contactContent.phoneNumber
			? true
			: contactContent.phoneNumber.match(/^\d{3}-\d{3}-\d{4}$/)
			? true
			: false;

	function submitContact(e) {
		e.preventDefault();

		const email = validateEmail();
		const phoneNumber = validatePhoneNumber();
		const website = validateWebsite();

		if (email && phoneNumber && website) {
			try {
				console.log();
				addContacts();
				setContactContent({
					email: '',
					address: '',
					phoneNumber: '',
					website: '',
				});
				setValidationError('');
			} catch (e) {
				console.log(e);
			}
		} else if (!email && !phoneNumber && !website) {
			setValidationError(
				'Email, website, and Phone Number validation failed.'
			);
		} else if (!phoneNumber) {
			setValidationError(
				'Phone Number validation failed. Please use format: ###-###-####'
			);
		} else if (!email) {
			setValidationError('Email validation failed.');
		} else {
			setValidationError('Website validation failed.');
		}
	}
	return (
		<div className='w-70'>
			<Loginsuggestion   />
			<div>
				<h3>Sign the Guest Book</h3>
				{Auth.loggedIn() && (
					<form>
						<div className='my-2 form-group mb-2 row'>
							<textarea
								id='signature'
								name='signature'
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
				<h3>Attach your contacts</h3>
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
								placeholder='Phone Number: ###-###-####'
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
						{validationError && <div>{validationError}</div>}
					</form>
				)}
			</div>
		</div>
	);
}

export default GuestBook;
