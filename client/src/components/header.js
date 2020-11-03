import { Link } from 'react-router-dom';

import Nav from './Nav';

const Header = () => {
	return (
		<>
			<Link to='/' className='' role='button'>
				<h1>Ashley + Zachary</h1>
			</Link>
			<Nav />
		</>
	);
};

export default Header;
