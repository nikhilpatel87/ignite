//Base URL
const baseUrl = 'https://api.rawg.io/api/';

//Getting Month
const getCurrentMonth = () => {
	const month = new Date().getMonth() + 1;
	if (month < 10) {
		return `0${month}`;
	} else {
		return month;
	}
};

//Getting the Day
const getCurrentDay = () => {
	const Day = new Date().getDay();
	if (day < 10) {
		return `0${day}`;
	} else {
		return day;
	}
};

//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular Games
const popularGames = `games?date=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

export const popularGamesURL = () => `${baseURL}${popularGames}`;
