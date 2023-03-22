import * as modal from './modal.js';
import currentView from './Views/currentView.js';
import weatherView from './Views/weatherView.js';
import weeklyView from './Views/weeklyView.js';

const loadCurrentWeather = async function () {
	try {
		await modal.loadWeather();

		weatherView.render(modal.state.currentWeather);
		currentView.render(modal.state.currentWeather);
	} catch (err) {
		console.error(err);
	}
};

const loadWeeklyWeather = async function () {
	try {
		await modal.loadDailyWeather();

		weeklyView.render(modal.state.daily);
	} catch (err) {
		console.error(err);
	}
};

const init = function () {
	weatherView.addHandlerRender(loadCurrentWeather);
	weeklyView.addHandlerWeekly(loadWeeklyWeather);
};
init();
