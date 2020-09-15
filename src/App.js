import React from 'react';
import { NavBar, Footer } from './components';
import { Paper } from '@material-ui/core';

const App = () => {
	return (
		<Paper>
			<NavBar />
			<div>Hello World!</div>
			<Footer />
		</Paper>
	);
};

export default App;
