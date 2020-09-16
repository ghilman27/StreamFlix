export const saveToLocalStorage = (state) => {
	try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
	} catch (err) {
        console.log(err);
	}
};
