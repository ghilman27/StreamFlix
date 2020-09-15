import React from 'react';
import { NavBar, Footer } from './components';
import { HomeView } from './views';
import { Paper } from '@material-ui/core';

const App = (props) => {
	return (
		<Paper>
			<NavBar />
			<HomeView />
			<Footer />
		</Paper>
	);
};

export default App;
