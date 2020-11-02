import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import Welcome from './pages/welcome';
import NoMatch from './pages/NoMatch';
import Header from './components/Header';

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
				<div>
					<Header />
					<Switch>
						<Route exact path='/' component={Welcome} />
						{/* <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} /> */}
						<Route component={NoMatch} />
					</Switch>
				</div>
			</Router>
		</ApolloProvider>
	);
}

export default App;