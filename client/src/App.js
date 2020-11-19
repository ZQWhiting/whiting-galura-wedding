import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import Welcome from './pages/welcome';
import NoMatch from './pages/nomatch';
import Header from './components/header';
import Login from './pages/login';
import Signup from './pages/signup';
import GuestBook from './pages/guestbook';
import OurStory from './pages/ourstory';
import Registry from './pages/registry';
import YourStories from './pages/yourstories';
import Ceremony from './pages/ceremony';
import CreateStory from './pages/createstory';
import Contact from './pages/contact';
import Stories from './pages/stories';
import SingleStory from './pages/singlestory';
import Photos from './pages/photos';

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
						<Route exact path='/contact' component={Contact} />
						<Route exact path='/photos' component={Photos} />
						<Route
							exact
							path='/yourstories/createstory'
							component={CreateStory}
						/>
						<Route
							exact
							path='/yourstories/stories'
							component={Stories}
						/>
						<Route
							exact
							path='/yourstories/stories/:_id'
							component={SingleStory}
						/>
						<Route component={NoMatch} />
					</Switch>
				</div>
			</Router>
		</ApolloProvider>
	);
}

export default App;
