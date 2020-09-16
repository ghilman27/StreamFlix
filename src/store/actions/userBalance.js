import { REDUCE_BALANCE } from '../types';

export const reduceBalance = (value) => {
    return {
        type: REDUCE_BALANCE,
        payload: value,
    }
}