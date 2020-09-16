import React from 'react';
import { NavBar, Footer } from './components';
import { DetailView, HomeView } from './views';
import { Paper } from '@material-ui/core';

const App = (props) => {
	return (
		<Paper>
			<NavBar />
			<HomeView />
			<DetailView />
			<Footer />
		</Paper>
	);
};

export default App;
