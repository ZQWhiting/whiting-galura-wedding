import { Link } from 'react-router-dom';

import Nav from './Nav';

const Header = () => {
	return (
		<>
			<h1>
				<Link to='/' className='' role='button'>
					Ashley + Zachary
				</Link>
			</h1>
			<Nav />
		</>
	);
};

export default Header;
