import { SAVE_MOVIE } from '../types';

export const saveMovie = (id) => {
    return {
        type: SAVE_MOVIE,
        payload: id,
    }
}