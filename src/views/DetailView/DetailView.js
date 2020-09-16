import React, { Fragment } from 'react';
import { Paper, Container } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import useStyles from './DetailView.styles';
import { MovieBanner, SectionList } from '../../components';
import castsData from './TestDataCasts';
import similarData from './TestDataSimilar';
import recommendationsData from './TestDataRecommendations';


const movie = {
	title: 'The Avengers',
	director: 'chris evans',
	price: '21,250',
	duration: 120,
	genre: 'Action',
	description: 'nick fury is compelled to launch the avengers initiative when loki poses a threat to planet earth. his squad of superheroes put their minds together to accomplish the task.',
	image: 'https://image.tmdb.org/t/p/original/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg',
	saved: true,
	rating: 7.6,
}

const DetailView = () => {
	const styles = useStyles();
	const casts = castsData.map(({cast_id, name, character, profile_path}) => ({
		id: cast_id,
		title: name,
		subtitle: character,
		image: profile_path,
	}))
	const similar = similarData.map(({id, title, vote_average, poster_path}) => ({
		id,
		title,
		subtitle: <Rating name="read-only" value={vote_average} max={10} size='small' readOnly style={{fontSize: '0.8215rem'}} />,
		image: poster_path,
	}))
	const recommended = recommendationsData.map(({id, title, vote_average, poster_path}) => ({
		id,
		title,
		subtitle: <Rating name="read-only" value={vote_average} max={10} size='small' readOnly style={{fontSize: '0.8215rem'}} />,
		image: poster_path,
	}))

	return (
		<Paper className={styles.root}>
			<MovieBanner movie={movie} height='65vh' fullDescription/>
			<SectionList 
				sectionTitle="Top Casts"
				height={250}
				data={casts}
			/>
			<SectionList 
				sectionTitle="Similar Movies"
				height={250}
				data={similar}
			/>
			<SectionList 
				sectionTitle="Recommended Movies"
				height={250}
				data={recommended}
			/>
		</Paper>
	);
};

export default DetailView;
