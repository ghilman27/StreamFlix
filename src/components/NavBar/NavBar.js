import React from 'react';
import { AppBar, Toolbar, Link } from '@material-ui/core';
import useStyles from './NavBar.styles';

const NavBar = () => {
	const styles = useStyles();

	return (
		<AppBar position='relative' color='primary' className={styles.root}>
			<Toolbar>
				<Link
					className={styles.appLogo}
					href='#'
					color='secondary'
					variant='h5'
					underline='none'
				>
					StreamFLIX
				</Link>
			</Toolbar>
		</AppBar>
	);
};

export default NavBar;
