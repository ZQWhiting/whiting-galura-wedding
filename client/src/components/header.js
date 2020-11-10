import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Nav from './nav';

import { dims } from '../utils/helpers';
import Auth from '../utils/auth';
import { useState } from 'react';

const Header = () => {
	const { width } = dims();
	const [showDropdown, setShowDropdown] = useState(false);

	return (
		<>
			<div>
				{width >= 768 ? (
					<div className='top-right-menu'>
						{Auth.loggedIn() ? (
							<Link to='/' onClick={Auth.logout}>
								Logout
							</Link>
						) : (
							<>
								<Link to='/login'>Sign In</Link>{' '}
								<Link to='/signup'>Sign Up</Link>
							</>
						)}
					</div>
				) : (
					<>
						<button
							className='btn top-right-menu'
							id='nav-toggle'
							onClick={() => setShowDropdown(!showDropdown)}
							style={{ background: 'rgba(255,255,255,0.7)' }}
						>
							<FontAwesomeIcon icon={faBars} />
						</button>
						{showDropdown && (
							<div className='dropdown-nav'>
								<Nav
									setShowDropdown={setShowDropdown}
									showDropdown={showDropdown}
								/>
							</div>
						)}
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
		</>
	);
};

export default Header;
