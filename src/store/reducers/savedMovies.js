import { SAVE_MOVIE } from '../types';

const initialState = {};

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case SAVE_MOVIE:
            return {
                ...state,
                [payload]: true,
            };
        default:
            return state;
    }
}