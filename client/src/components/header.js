import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, Navbar } from 'react-bootstrap';
import Auth from '../utils/auth';

const Header = () => {

	return (
		<Navbar bg='dark' expand='lg' variant='dark'>
			<Navbar.Brand>
				<Link to='/' className='text-light' role='button'>
					Whiting Galura Wedding
				</Link>
			</Navbar.Brand>
			<Nav className='flex-row ml-auto'>
				{!Auth.loggedIn() ? (
					<>
						<LinkContainer to='/login'>
							<Nav.Item className='text-light mx-2' role='button'>
								Login
							</Nav.Item>
						</LinkContainer>
						<LinkContainer to='/signup'>
							<Nav.Item className='text-light mx-2' role='button'>
								Signup
							</Nav.Item>
						</LinkContainer>
					</>
				) : (
					<>
						<LinkContainer to='/' onClick={Auth.logout}>
							<Nav.Item className='text-light mx-2' role='button'>
								Logout
							</Nav.Item>
						</LinkContainer>
						<LinkContainer to='/dashboard'>
							<Nav.Item className='text-light mx-2' role='button'>
								DashBoard
							</Nav.Item>
						</LinkContainer>
					</>
				)}
			</Nav>
		</Navbar>
	);
};;

export default Header;

