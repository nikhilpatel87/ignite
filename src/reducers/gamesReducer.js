const initState = {
	popoular: [],
	newGames: [],
	upcoming: [],
	searched: [],
};

const gamesReducer = (state = initState, action) => {
	switch (action.type) {
		case 'FETCH-GAMES':
            return { ...state, 
                popular: action.payload.popular,
                upcoming: action.payload.upcoming,
                newGames: action.payload.newGames,
		default:
			return { ...state };
	}
};

export default gamesReducer;
