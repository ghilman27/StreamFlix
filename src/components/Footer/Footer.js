import React from 'react';
import { Typography, Paper } from '@material-ui/core';
import useStyles from './Footer.styles';
import { useTheme } from '@material-ui/core/styles';

const Footer = () => {
    const theme = useTheme();
	const styles = useStyles(theme);

	return (
        <Paper className={styles.root}>
            <Typography
                color='inherit'
                variant='h6'
            >
                Copyright &#169; 2020 StreamFlix
            </Typography>
        </Paper>
	);
}

export default Footer;
