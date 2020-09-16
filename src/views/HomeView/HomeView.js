import React, { Fragment, useEffect, useState } from 'react';
import useStyles from './HomeView.styles';
import { Grid, Typography } from '@material-ui/core';
import { MovieBanner, MovieCard } from '../../components';
import { fetchNowPlaying } from '../../api';



const HomeView = () => {
	const styles = useStyles();
	const [movies, setMovies] = useState();

	const fetchMovies = async (page) => {
		const result = await fetchNowPlaying(page);
		return result;
	}

	useEffect(() => {
		fetchMovies(1).then((movies) => setMovies(movies));
	}, [])


	if (!movies) return <div>Loading...</div>;
	return (
		<Fragment>
			<MovieBanner 
				movie={movies[Math.floor(Math.random() * movies.length)]}
				height='60vh'
			/>
			<Grid container spacing={2} className={styles.movieList}>
				<Grid item xs={12}>
					<Typography className={styles.title} variant="h2" color="secondary">
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
					<Grid key={movie.id} item className={styles.fullWidth}>
						<MovieCard movie={movie} />
					</Grid>
					))}
				</Grid>
			</Grid>
		</Fragment>
	);
};

export default HomeView;
