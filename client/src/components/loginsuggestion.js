import Auth from '../utils/auth';
import { Link } from 'react-router-dom';

const Loginsuggestion = () => {
	return (
		<>
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
		</>
	);
};

export default Loginsuggestion;
