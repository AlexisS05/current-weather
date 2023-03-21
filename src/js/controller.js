import * as modal from './modal.js';
import currentView from './Views/currentView.js';
import View from './Views/View.js';
import weatherView from './Views/weatherView.js';

const loadDailyWeather = async function () {
	try {
		await modal.loadWeather();

		weatherView.render(modal.state.currentWeather);
	} catch (err) {
		console.error(err);
	}
};

const loadTodayWeather = async function () {
	try {
		await modal.loadWeather();

		currentView.render(modal.state.currentWeather);
	} catch (err) {
		console.error(err);
	}
};

const init = function () {
	weatherView.addHandlerRender(loadDailyWeather);
	currentView.addHandlerToday(loadTodayWeather);
};
init();
