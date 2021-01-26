const initState = {
	popoular: [],
	newGames: [],
	upcoming: [],
	searched: [],
};

const gamesReducer = (state = initState, action) => {
	switch (action.type) {
		case 'FETCH-GAMES':
			return { ...state };
		default:
			return { ...state };
	}
};

//action creator

export default gamesReducer;
