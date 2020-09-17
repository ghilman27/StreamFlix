import React from 'react';
import { NavBar, Footer } from './components';
import { DetailView, HomeView } from './views';
import { Paper } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
	return (
		<Router>
			<Paper style={{minHeight: '100vh', position:'relative'}}>
				<NavBar />
				<Switch>
					<Route path="/" exact component={HomeView}/>
					<Route path="/?page=:page" component={HomeView}/>
					<Route path="/:id-:slug" component={DetailView}/>
				</Switch>
				<Footer />
			</Paper>
		</Router>
	);
};

export default App;
