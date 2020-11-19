import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import { dims } from '../utils/helpers';

function Nav({ showDropdown, setShowDropdown }) {
	const { width } = dims();
	const dropdown = () => {
		if (width < 768) {
			setShowDropdown(!showDropdown);
		}
	};
	const dropdownLogout = () => {
		if (width < 768) {
			setShowDropdown(!showDropdown);
		}
		Auth.logout();
	};
	return (
		<nav className='row text-center mt-5 font-eng-i h3 align-center'>
			{width < 768 &&
				(Auth.loggedIn() ? (
					<>
						<Link to='/' className='col p-3' onClick={dropdown}>
							Welcome
						</Link>{' '}
						<Link
							to='/'
							className='col p-3'
							onClick={dropdownLogout}
						>
							Logout
						</Link>
					</>
				) : (
					<>
						<Link to='/' className='col p-3' onClick={dropdown}>
							Welcome
						</Link>{' '}
						<Link
							to='/login'
							className='col p-3'
							onClick={dropdown}
						>
							Sign In
						</Link>{' '}
						<Link
							to='/signup'
							className='col p-3'
							onClick={dropdown}
						>
							Sign Up
						</Link>
					</>
				))}
			<>
				<Link to='/ourstory' className='col p-3' onClick={dropdown}>
					Our Story
				</Link>
				<Link to='/photos' className='col p-3' onClick={dropdown}>
					Photos
				</Link>
				<Link to='/yourstories' className='col p-3' onClick={dropdown}>
					Your Stories
				</Link>
				<Link to='/ceremony' className='col p-3' onClick={dropdown}>
					Ceremony
				</Link>
				<Link to='/guestbook' className='col p-3' onClick={dropdown}>
					Guest Book
				</Link>
				<Link to='/registry' className='col p-3' onClick={dropdown}>
					Registry
				</Link>
				<Link to='/contact' className='col p-3' onClick={dropdown}>
					Contact Us
				</Link>
			</>
		</nav>
	);
}

export default Nav;
