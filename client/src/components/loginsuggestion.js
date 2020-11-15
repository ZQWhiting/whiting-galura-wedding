import Auth from '../utils/auth';
import { Link } from 'react-router-dom';

const Loginsuggestion = () => {
	return (
		<>
			{!Auth.loggedIn() && (
				<h3>
					<Link to='/login' previouspath='/guestbook'>
						Sign In
					</Link>{' '}
					or{' '}
					<Link to='/signup' previouspath='/guestbook'>
						Sign Up
					</Link>{' '}
					to:
				</h3>
			)}
		</>
	);
};

export default Loginsuggestion;
