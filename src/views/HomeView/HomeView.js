import React, { Fragment, useEffect, useState } from 'react';
import useStyles from './HomeView.styles';
import { Grid, Typography } from '@material-ui/core';
import { MovieBanner, MovieCard } from '../../components';
import { fetchNowPlaying } from '../../api';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { createSlug } from '../../utils/utils';
import Pagination from '@material-ui/lab/Pagination';


const HomeView = () => {
	const location = useLocation();
	const history = useHistory();

	const styles = useStyles();
	const [movies, setMovies] = useState();
	const [page, setPage] = useState(location.search.split('?page=')[1] || 1);

	useEffect(() => {
		fetchNowPlaying(page).then((movies) => setMovies(movies));
	}, [page])

	const handlePageChange = (event, page) => {
		if (!Number.isNaN(page)) {
			history.push(`/?page=${page}`)
			setPage(page)
		}
	}

	if (!movies) return <div>Loading...</div>;
	return (
		<Fragment>
			<MovieBanner 
				movie={movies[Math.floor(Math.random() * movies.length)]}
				height='75vh'
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
						<Link 
							to={`/${movie.id}-${createSlug(movie.original_title)}`}
							style={{textDecoration: 'none'}}
						>
							<MovieCard movie={movie} />
						</Link>
					</Grid>
					))}
				</Grid>
			</Grid>
			<div className={styles.pagination}>
				<Pagination page={parseInt(page)} count={129} color="secondary" onChange={handlePageChange} />
			</div>
		</Fragment>
	);
};

export default HomeView;
