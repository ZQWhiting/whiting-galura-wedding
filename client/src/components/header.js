import { Link } from 'react-router-dom';

import Nav from './Nav';

import { dims } from '../utils/helpers';

const Header = () => {
	const { width } = dims();
	return (
		<div className='name-padding'>
			<h1 className='text-center'>
				<Link to='/' className='font-ja' role='button'>
					Ashley & Zachary
				</Link>
			</h1>
			{width >= 768 && <Nav />}
		</div>
	);
};

export default Header;
