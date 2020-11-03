import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

function Nav() {
	return (
		<nav>
			{!Auth.loggedIn() ? (
				<>
					<Link to='/'>Login</Link>
					<Link to='/signup'>Signup</Link>
				</>
			) : (
				<>
					<Link to='/ourstory'>Our Story</Link>
					<Link to='/yourstories'>Your Stories</Link>
					<Link to='/guestbook'>Guest Book</Link>
					<Link to='/registry'>Registry</Link>
					<Link to='/' onClick={Auth.logout}>
						Logout
					</Link>
				</>
			)}
		</nav>
	);
}

export default Nav;
