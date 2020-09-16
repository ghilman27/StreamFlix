import React from 'react';
import { Paper, Typography, Box, Button } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import useStyles from './MovieBanner.styles';
import { textTruncate } from '../../utils/utils';
import cx from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { reduceBalance, saveMovie } from '../../store/actions';

const MovieBanner = (props) => {
	const savedMovies = useSelector((state) => state.savedMovies);
	let userBalance = useSelector((state) => state.userBalance);
	const dispatch = useDispatch();
	const styles = useStyles(props);
	const { fullDescription, movie } = props;
	let isThisMovieSaved = savedMovies[movie.id];

	const handleBuyMovie = () => {
		if (isThisMovieSaved) {
			alert("You have purchased this movie");
			return;
		}
		if (userBalance < movie.price) {
			alert("You don't have sufficient balance for purchasing this movie");
			return;
		}

		dispatch(saveMovie(movie.id));
		dispatch(reduceBalance(movie.price));
		isThisMovieSaved = true;
	}

	return (
		<Paper className={styles.root}>
			{fullDescription && (
				<div className={styles.infoSection}>
					<header className={styles.movieHeader}>
					{fullDescription && (
						<Box mb={3} display="flex" alignItems="center" flexWrap="wrap">
						{movie.genres.map((genre) => (
							<Typography
							key={`${genre.id}`}
							className={styles.tag}
							variant="body1"
							color="inherit">
							{genre.name}
							</Typography>
						))}
							<Rating 
								name="read-only" 
								value={movie.vote_average} 
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
						{movie.original_title}
					</Typography>
					<Typography
						className={styles.descriptionText}
						variant="body1"
						color="inherit">
						{textTruncate(movie.overview, 450)}
					</Typography>
					<Typography className={styles.voteCount} variant="h4" color="inherit">
						{movie.vote_count.toLocaleString()} people liked this
					</Typography>
					<Typography
						className={styles.duration}
						variant="body1"
						color="inherit">
						{movie.runtime} min
					</Typography>
					<Typography
						className={cx({
							[styles.price]: true,
						})}
						variant="body1"
						color="inherit">
						Rp {movie.price.toLocaleString()},-
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
					<br/>
					<Button onClick={handleBuyMovie} variant="contained" color="secondary" className={styles.button}>
						Buy Movie
					</Button>
					</header>
				</div>
				
			)}
		</Paper>
	);
};

export default MovieBanner;
