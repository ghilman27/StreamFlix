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


// Only run 1 page of api requests to similar and recommended movies
const PAGE = 1; 

const DetailView = (props) => {
	const id = props.match.params.id;
	const styles = useStyles();
	const [movie, setMovie] = useState();
	const [casts, setCasts] = useState();
	const [similar, setSimilar] = useState();
	const [recommended, setRecommended] = useState();

	useEffect(() => {
		fetchMovieDetail(id).then((movie) => setMovie(movie));
		fetchSimilarMovies(id, PAGE).then((similar) => setSimilar(similar));
		fetchRecommendedMovies(id, PAGE).then((recommended) =>
			setRecommended(recommended)
		);
		fetchMovieCasts(id).then((casts) => setCasts(casts));
	}, [id]);

	if (!movie || !similar || !recommended || !casts) {
		return <div>Loading .... </div>;
	}

	return (
		<Paper className={styles.root}>
			<MovieBanner movie={movie} height='100vh' fullDescription />
			<Paper className={styles.sectionContainer}>
				<SectionList sectionTitle='Top Casts' height={250} data={casts} />
				<SectionList sectionTitle='Similar Movies' height={250} data={similar} useLink/>
				<SectionList sectionTitle='Recommended Movies' height={250} data={recommended} useLink/>
			</Paper>
		</Paper>
	);
};

export default DetailView;
