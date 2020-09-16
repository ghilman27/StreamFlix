import { createStore } from 'redux';
import rootReducer from './reducers';
import { loadFromLocalStorage, saveToLocalStorage } from './localStorage';

const persistedState = loadFromLocalStorage();

const store = createStore(
	rootReducer,
	persistedState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
