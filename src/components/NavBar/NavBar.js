import React, { useEffect, useState } from 'react';
import {
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	Menu,
	MenuItem,
	useMediaQuery,
} from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import useStyles from './NavBar.styles';
import { useSelector } from 'react-redux';
import cx from 'classnames';
import { Link } from 'react-router-dom';

const NavBar = () => {
	const userBalance = useSelector((state) => state.userBalance);
	const [showMenu, setShowMenu] = useState(false);
	const [anchorEl, setAnchorEl] = useState(null);
	const styles = useStyles();
	const smallScreen = useMediaQuery(theme => theme.breakpoints.down('sm'));

	const handleClick = (event) => {
	  setAnchorEl(event.currentTarget);
	};
  
	const handleClose = () => {
	  setAnchorEl(null);
	};

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
				<Link to='/' className={styles.appLogo}>
					<Typography
						color='secondary'
						variant='h5'
						underline='none'
					>
						StreamFlix
					</Typography>
				</Link>
				{!smallScreen &&
				<Typography variant='h6' component='span' className={styles.balance}>
					Balance: Rp {userBalance.toLocaleString()}
				</Typography>
				}

				<IconButton
					aria-label='account of current user'
					aria-controls='menu-appbar'
					aria-haspopup='true'
					color='inherit'
					onClick={handleClick}
				>
					<AccountCircle className={styles.icon} />
				</IconButton>
				<Menu
					id="simple-menu"
					anchorEl={anchorEl}
					keepMounted
					open={Boolean(anchorEl)}
					onClose={handleClose}
				>
					<MenuItem onClick={handleClose}>Balance: Rp {userBalance.toLocaleString()}</MenuItem>
				</Menu>
			</Toolbar>
		</AppBar>
	);
};

export default NavBar;
