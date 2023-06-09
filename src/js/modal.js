import { API_URL } from './helpers.js';
import { ICON_MAP } from './iconMap.js';
import { DAY_FORMATTER } from './helpers.js';

export const state = {
	currentWeather: {},
	daily: [],
};

export const loadWeather = async function () {
	try {
		const res = await fetch(API_URL);
		const data = await res.json();
		console.log(data);

		state.currentWeather = {
			weathercode: getIconUrl(data.daily.weathercode[0]),
			temperature: Math.round(data.current_weather.temperature),
			highTemp: Math.round(data.daily.temperature_2m_max[0]),
			lowTemp: Math.round(data.daily.temperature_2m_min[0]),
			maxFeelsLike: Math.round(data.daily.apparent_temperature_max[0]),
			minFeelsLike: Math.round(data.daily.apparent_temperature_min[0]),
			precip: Math.round(data.daily.precipitation_sum[0] * 100) / 100,
			windSpeed: Math.round(data.current_weather.windspeed),
		};
	} catch (err) {
		console.error(err);
	}
};

export const loadDailyWeather = async function () {
	try {
		const res = await fetch(API_URL);
		const data = await res.json().then((data) => {
			return {
				daily: parseDailyWeather(data),
			};
		});

		const { daily } = data;
		state.daily = daily.map((el) => {
			return el;
		});
		console.log(state.daily);
	} catch (err) {
		console.error(err);
	}
};

export const parseDailyWeather = function ({ daily }) {
	return daily.time.map((time, index) => {
		return {
			date: DAY_FORMATTER.format(time * 1000),
			icons: getIconUrl(daily.weathercode[index]),
			maxTemp: Math.round(daily.temperature_2m_max[index]),
		};
	});
};

export const getIconUrl = function (iconCode) {
	return `src/icons/${ICON_MAP.get(iconCode)}.svg`;
};
