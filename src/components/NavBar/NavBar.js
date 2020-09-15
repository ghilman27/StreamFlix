import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Link } from '@material-ui/core';
import useStyles from './NavBar.styles';
import cx from 'classnames';

const NavBar = () => {
	const [showMenu, setShowMenu] = useState(false);

	const handleScroll = () => {
		window.pageYOffset ? setShowMenu(true) : setShowMenu(false);
	};

	useEffect(() => {
		// componentDidMount
		window.addEventListener('scroll', handleScroll);

		// componentWillUnmount
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const styles = useStyles();

	return (
		<AppBar
			position='fixed'
			color='primary'
			className={cx({
				[styles.root]: true,
				[styles.navHidden]: !showMenu,
			})}
		>
			<Toolbar>
				<Link
					className={styles.appLogo}
					href='#'
					color='secondary'
					variant='h4'
					underline='none'
				>
					StreamFlix
				</Link>
			</Toolbar>
		</AppBar>
	);
};

export default NavBar;
