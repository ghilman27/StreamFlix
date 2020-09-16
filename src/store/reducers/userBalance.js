import { REDUCE_BALANCE } from '../types';

const initialState = 100000;

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case REDUCE_BALANCE:
            return state - payload;
        default:
            return state;
    }
}