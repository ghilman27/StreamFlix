import { combineReducers } from 'redux';
import userBalance from './userBalance';
import savedMovies from './savedMovies';

export default combineReducers({
   userBalance, 
   savedMovies,
});