import { Link } from 'react-router-dom';

import Nav from './Nav';

import { dims } from '../utils/helpers';
import Auth from '../utils/auth';

const Header = () => {
	const { width } = dims();

	return (
		<div>
			<div className='top-right-menu'>
				{Auth.loggedIn() ? (
					<Link to='/' onClick={Auth.logout}>
						Logout
					</Link>
				) : (
					<>
						<Link to='/login'>Login</Link>{' '}
						<Link to='/signup'>Sign Up</Link>
					</>
				)}
			</div>
			<div className='name-padding'>
				<h1 className='text-center'>
					<Link to='/' className='font-ja' role='button'>
						Ashley & Zachary
					</Link>
				</h1>
				{width >= 768 && <Nav />}
			</div>
		</div>
	);
};

export default Header;
