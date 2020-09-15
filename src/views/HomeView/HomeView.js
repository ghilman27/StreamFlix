import React, { Fragment } from 'react';
import useStyles from './HomeView.styles';
import { Grid, Typography } from '@material-ui/core';
import { MovieBanner, MovieCard } from '../../components';

const movie = {
	title: 'The Avengers',
	director: 'chris evans',
	duration: '21,250',
	genre: 'Action',
	description: 'nick fury is compelled to launch the avengers initiative when loki poses a threat to planet earth. his squad of superheroes put their minds together to accomplish the task.',
	image: 'https://image.tmdb.org/t/p/original/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg',
	saved: true,
}

const movies = [movie, movie, movie, movie, movie, movie];

const HomeView = () => {
	const styles = useStyles();

	return (
		<Fragment>
			<MovieBanner 
				backgroundImage="https://image.tmdb.org/t/p/original/wzJRB4MKi3yK138bJyuL9nx47y6.jpg"
				height='80vh'
			/>
			<Grid container spacing={2} className={styles.movieList}>
				<Grid item xs={12}>
					<Typography className={styles.title} variant="h2" color="inherit">
					Now Playing
					</Typography>
				</Grid>
				<Grid
					container
					item
					xs={12}
					direction="column"
					alignItems="center"
					justify="center"
					spacing={2}>
					{movies.map(movie => (
					<Grid key={movie._id} item className={styles.fullWidth}>
						<MovieCard movie={movie} />
					</Grid>
					))}
				</Grid>
			</Grid>
		</Fragment>
	);
};

export default HomeView;
