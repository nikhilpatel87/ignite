const initState = {
	popoular: [],
	newGames: [],
	upcoming: [],
	searched: [],
};

const gamesReducer = (state = initState, action) => {
	switch (action.type) {
		case 'FETCH-GAMES':
			return { ...state, popular: action.payload.popular };
		default:
			return { ...state };
	}
};

export default gamesReducer;
