import React from 'react';
import { Paper } from '@material-ui/core';
import useStyles from './MovieBanner.styles';

const MovieBanner = (props) => {
	const styles = useStyles(props);

	return <Paper className={styles.root}></Paper>;
};

export default MovieBanner;
