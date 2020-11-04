import { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Link, Redirect } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

function Login() {
	const [formState, setFormState] = useState({ name: '', password: '' });
	const [login, { error }] = useMutation(LOGIN);

	const handleFormSubmit = async (event) => {
		event.preventDefault();
		try {
			const mutationResponse = await login({
				variables: {
					name: formState.name,
					password: formState.password,
				},
			});
			const token = mutationResponse.data.login.token;
			Auth.login(token);
		} catch (e) {
			console.log(e);
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormState({
			...formState,
			[name]: value,
		});
	};

	if (Auth.loggedIn()) {
		return <Redirect to='/' />;
	}

	return (
		<div className='container-sm my-3 mx-auto'>
			<h2>Login</h2>
			<form onSubmit={handleFormSubmit}>
				<div className='my-2 form-group mb-2 row'>
					<label htmlFor='name' className='col-12 col-md-2'>
						Name:
					</label>
					<input
						placeholder='your name'
						name='name'
						type='name'
						id='name'
						onChange={handleChange}
						className='form-control col mx-3'
					/>
				</div>
				<div className='my-2 form-group mb-2 row'>
					<label htmlFor='pwd' className='col-12 col-md-2'>
						Password:
					</label>
					<input
						placeholder='******'
						name='password'
						type='password'
						id='pwd'
						onChange={handleChange}
						className='form-control col mx-3'
					/>
				</div>
				{error ? (
					<div>
						<p className='error-text mb-2'>Incorrect Credentials</p>
					</div>
				) : null}
				<div>
					<button type='submit' className='btn btn-primary mb-2'>
						Submit
					</button>
				</div>
			</form>
			<Link to='/signup'>← Go to Signup</Link>
		</div>
	);
}

export default Login;
