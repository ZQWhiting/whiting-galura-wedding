import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

function Nav() {
	return (
		<nav className='row text-center mt-5 font-eng-i h3 align-center'>
			{!Auth.loggedIn() ? (
				<>
					<Link to='/' className='col p-3'>


						Login


					</Link>
					<Link to='/signup' className='col p-3'>


						Signup


					</Link>
				</>
			) : (
				<>
					<Link to='/ourstory' className='col p-3'>


						Our Story


					</Link>
					<Link to='/yourstories' className='col p-3'>


						Your Stories


					</Link>
					<Link to='/ceremony' className='col p-3'>


						Ceremony


					</Link>
					<Link to='/guestbook' className='col p-3'>


						Guest Book


					</Link>
					<Link to='/registry' className='col p-3'>


						Registry


					</Link>
					{/* Move Logout Elsewhere */}
					{/* <Link to='/' onClick={Auth.logout} className='col'>
						Logout
					</Link> */}
				</>
			)}
		</nav>
	);
}

export default Nav;
