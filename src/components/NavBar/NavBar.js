import React, { useEffect, useState } from 'react';
import {
	AppBar,
	Toolbar,
	Link,
	IconButton,
	Typography,
} from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import useStyles from './NavBar.styles';
import { useSelector } from 'react-redux';
import cx from 'classnames';

const NavBar = () => {
	const userBalance = useSelector((state) => state.userBalance);
	const [showMenu, setShowMenu] = useState(false);
	const styles = useStyles();

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
				<Typography variant='h5' component='span' className={styles.balance}>
					Saldo anda Rp {userBalance.toLocaleString()}
				</Typography>
				<IconButton
					aria-label='account of current user'
					aria-controls='menu-appbar'
					aria-haspopup='true'
					color='inherit'
				>
					<AccountCircle className={styles.icon} />
				</IconButton>
			</Toolbar>
		</AppBar>
	);
};

export default NavBar;
