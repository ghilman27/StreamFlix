import axios from 'axios';
import { dateFormatter } from '../utils/utils';
require('dotenv').config();

const BASE_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;
const MAX_RECOMMENDATION_SIZE = 16;

/* 
	I'm using discover API, because `now_playing` API only return like 4 values
	(of course, it's PSBB)
	&sort_by=primary_release_date.desc
*/
export const fetchNowPlaying = async (page) => {
	try {
		const date = dateFormatter(new Date());
		const url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&region=ID&primary_release_date.lte=${date}&page=${page}`;
		const { data: { results: movies } } = await axios.get(url);
		movies.forEach(movie => {
			movie.price = !movie.vote_average 
					? null
					: movie.vote_average <= 3 
						? 3500
						: movie.vote_average <=6
							? 8250
							: movie.vote_average <= 8
								? 16530
								: 21250
		})
		return movies.filter((result) => result.price );
	} catch (error) {
		return error;
	}
};

export const fetchMovieDetail = async (id) => {
	try {
		const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}`;
		const { data: movie } = await axios.get(url);
		movie.price = !movie.vote_average 
						? 0	// preventing toLocaleString error!
						: movie.vote_average <= 3 
							? 3500
							: movie.vote_average <=6
								? 8250
								: movie.vote_average <= 8
									? 16530
									: 21250
		return movie;
	} catch (error) {
		return error;
	}
};

export const fetchSimilarMovies = async (id, page) => {
	try {
		const url = `${BASE_URL}/movie/${id}/similar?api_key=${API_KEY}&page${page}`;
		let { data: { results : movies } } = await axios.get(url);

		movies = movies.slice(MAX_RECOMMENDATION_SIZE);

		return movies.map(({id, title, vote_count, poster_path}) => ({
			id,
			title,
			subtitle: `${vote_count.toLocaleString()} people like this`,
			image: poster_path,
		}));
	} catch (error) {
		return error;
	}
};

export const fetchRecommendedMovies = async (id, page) => {
	try {
		const url = `${BASE_URL}/movie/${id}/recommendations?api_key=${API_KEY}&page${page}`;
		let { data: { results : movies } } = await axios.get(url);

		movies = movies.slice(MAX_RECOMMENDATION_SIZE);

		return movies.map(({id, title, vote_count, poster_path}) => ({
			id,
			title,
			subtitle: `${vote_count.toLocaleString()} people like this`,
			image: poster_path,
		}));
	} catch (error) {
		return error;
	}
};

export const fetchMovieCasts = async (id) => {
	try {
		const url = `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`;
		let { data: { cast : casts } } = await axios.get(url);

		casts = casts.slice(MAX_RECOMMENDATION_SIZE);

		return casts.map(({cast_id, name, character, profile_path}) => ({
			id: cast_id,
			title: name,
			subtitle: character,
			image: profile_path,
		}));
	} catch (error) {
		return error;
	}
};
