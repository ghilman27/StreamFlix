import React, { useState, useEffect } from 'react';
import { Paper } from '@material-ui/core';
import useStyles from './DetailView.styles';
import { MovieBanner, SectionList } from '../../components';
import {
	fetchMovieDetail,
	fetchSimilarMovies,
	fetchRecommendedMovies,
	fetchMovieCasts,
} from '../../api';

const DetailView = () => {
	const id = 24428;
	const page = 1;
	const styles = useStyles();
	const [movie, setMovie] = useState();
	const [casts, setCasts] = useState();
	const [similar, setSimilar] = useState();
	const [recommended, setRecommended] = useState();

	useEffect(() => {
		fetchMovieDetail(id).then((movie) => setMovie(movie));
		fetchSimilarMovies(id, page).then((similar) => setSimilar(similar));
		fetchRecommendedMovies(id, page).then((recommended) =>
			setRecommended(recommended)
		);
		fetchMovieCasts(id).then((casts) => setCasts(casts));
	}, []);

	if (!movie || !similar || !recommended || !casts) {
		return <div>Loading .... </div>;
	}

	return (
		<Paper className={styles.root}>
			<MovieBanner movie={movie} height='65vh' fullDescription />
			<SectionList sectionTitle='Top Casts' height={250} data={casts} />
			<SectionList sectionTitle='Similar Movies' height={250} data={similar} />
			<SectionList sectionTitle='Recommended Movies' height={250} data={recommended} />
		</Paper>
	);
};

export default DetailView;
