import React from 'react';
import { Paper, Typography, Box, ButtonBase, useMediaQuery } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import useStyles from './MovieCard.styles';
import { textTruncate } from '../../utils/utils';
import cx from 'classnames';
import { useSelector } from 'react-redux';


require('dotenv').config();
const IMAGE_BASE_URL = process.env.REACT_APP_API_IMAGE_BASE_URL;


const MovieCard = (props) => {
	const savedMovies = useSelector((state) => state.savedMovies);
	const styles = useStyles();
	const smallScreen = useMediaQuery(theme => theme.breakpoints.down('sm'));
	const { movie } = props;
	let isThisMovieSaved = savedMovies[movie.id];

	return (
		<ButtonBase style={{textAlign: 'unset'}}>
			<Paper className={styles.movieCard} elevation={20}>
				<div className={styles.infoSection}>
					<div className={styles.movieHeader}>
						<Typography
							className={styles.movieTitle}
							variant='h1'
							color='inherit'
						>
							{movie.original_title}
						</Typography>
						<Box className={styles.rating} component="fieldset" mb={3} borderColor="transparent">
							<Rating 
								name="read-only" 
								value={movie.vote_average} 
								max={10} 
								size='small'
								readOnly 
							/>
						</Box>
						<Typography
							className={styles.price}
							variant='body1'
							color='inherit'
						>
							Rp {movie.price ? movie.price.toLocaleString() : ''},-
						</Typography>
						<Typography
							className={cx({
								[styles.price]: true,
								[styles.notSaved]: true,
								[styles.saved]: isThisMovieSaved,
							})}
							variant='body1'
							color='inherit'
						>
							{isThisMovieSaved ? 'Saved' : `Not Saved`}
						</Typography>
					</div>

					<div className={styles.description}>
						<Typography
							className={styles.descriptionText}
							variant={smallScreen ? 'body2' : 'body1'}
							color='inherit'
						>
							{textTruncate(movie.overview, smallScreen ? 175 : 250)}
						</Typography>
					</div>
				</div>
				<div
					className={styles.blurBackground}
					style={{
						backgroundImage: `url(${IMAGE_BASE_URL}${movie.poster_path})`,
					}}
				/>
			</Paper>
		</ButtonBase>
	);
};

export default MovieCard;
