import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import Welcome from './pages/Welcome';
import NoMatch from './pages/NoMatch';
import Header from './components/Header';
import Login from './pages/Login';
import Signup from './pages/Signup';
import GuestBook from './pages/GuestBook';
import OurStory from './pages/OurStory';
import Registry from './pages/Registry';
import YourStories from './pages/YourStories';
import Ceremony from './pages/Ceremony';
import CreateStory from './pages/CreateStory';

const client = new ApolloClient({
	request: (operation) => {
		const token = localStorage.getItem('id_token');
		operation.setContext({
			headers: {
				authorization: token ? `Bearer ${token}` : '',
			},
		});
	},
	uri: '/graphql',
});

function App() {
	return (
		<ApolloProvider client={client}>
			<Router>
				<div className='container'>
					<Header />
					<Switch>
						<Route exact path='/' component={Welcome} />
						<Route exact path='/login' component={Login} />
						<Route exact path='/signup' component={Signup} />
						<Route exact path='/ourstory' component={OurStory} />
						<Route exact path='/registry' component={Registry} />
						<Route
							exact
							path='/yourstories'
							component={YourStories}
						/>
						<Route exact path='/guestbook' component={GuestBook} />
						<Route exact path='/ceremony' component={Ceremony} />
						<Route
							exact
							path='/yourstories/createstory'
							component={CreateStory}
						/>
						<Route component={NoMatch} />
					</Switch>
				</div>
			</Router>
		</ApolloProvider>
	);
}

export default App;
