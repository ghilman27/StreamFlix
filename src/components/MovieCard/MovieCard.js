import React from 'react';
import { Paper, Typography, Box, ButtonBase } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import useStyles from './MovieCard.styles';
import { textTruncate } from '../../utils/utils';

const MovieCard = (props) => {
	const { movie } = props;
	const styles = useStyles();

	return (
		<ButtonBase style={{textAlign: 'unset'}} component='a'>
			<Paper className={styles.movieCard} elevation={20}>
				<div className={styles.infoSection}>
					<div className={styles.movieHeader}>
						<Typography
							className={styles.movieTitle}
							variant='h1'
							color='inherit'
						>
							{movie.title}
						</Typography>
						<Box className={styles.rating} component="fieldset" mb={3} borderColor="transparent">
							<Rating 
								name="read-only" 
								value={7.6} 
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
							{movie.saved ? 'Saved' : `Rp ${movie.price}`}
						</Typography>
						<Typography 
							className={styles.genre} 
							variant='body1' 
							color='inherit'
						>
							{movie.genre}
						</Typography>
					</div>

					<div className={styles.description}>
						<Typography
							className={styles.descriptionText}
							variant='body1'
							color='inherit'
						>
							{textTruncate(movie.description, 250)}
							{/* {movie.description} */}
						</Typography>
					</div>
				</div>
				<div
					className={styles.blurBackground}
					style={{
						backgroundImage: `url(${movie.image})`,
					}}
				/>
			</Paper>
		</ButtonBase>
	);
};

export default MovieCard;
