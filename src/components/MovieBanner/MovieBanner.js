import React from 'react';
import { Paper, Typography, Box, Button } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import useStyles from './MovieBanner.styles';
import { textTruncate } from '../../utils/utils';
import cx from 'classnames';

const MovieBanner = (props) => {
	const { fullDescription, movie } = props;
	const styles = useStyles(props);

	return (
		<Paper className={styles.root}>
			{fullDescription && (
				<div className={styles.infoSection}>
					<header className={styles.movieHeader}>
					{fullDescription && (
						<Box mb={3} display="flex" alignItems="center" flexWrap="wrap">
						{movie.genre.split(',').map((genre, index) => (
							<Typography
							key={`${genre}-${index}`}
							className={styles.tag}
							variant="body1"
							color="inherit">
							{genre}
							</Typography>
						))}
							<Rating 
								name="read-only" 
								value={movie.rating} 
								max={10} 
								size='small'
								readOnly 
							/>
						</Box>
					)}
					<Typography
						className={styles.movieTitle}
						variant="h1"
						color="inherit">
						{movie.title}
					</Typography>
					<Typography
						className={styles.descriptionText}
						variant="body1"
						color="inherit">
						{textTruncate(movie.description, 450)}
					</Typography>
					<Typography className={styles.director} variant="h4" color="inherit">
						By: {movie.director}
					</Typography>
					<Typography
						className={styles.duration}
						variant="body1"
						color="inherit">
						{movie.duration} min
					</Typography>
					<Typography
						className={cx({
							[styles.price]: true,
							[styles.saved]: movie.saved,
						})}
						variant="body1"
						color="inherit">
						{movie.saved ? 'Saved' : `Rp ${movie.price}`}
					</Typography>
					<br/>
					<Button variant="contained" color="secondary" className={styles.button}>
						Buy Tickets
					</Button>
					</header>
				</div>
				
			)}
		</Paper>
	);
};

export default MovieBanner;
