import { API_URL } from './helpers.js';

export const state = {
	currentWeather: {},
};

export const loadWeather = async function () {
	try {
		const res = await fetch(API_URL);
		const data = await res.json();
		console.log(data);

		state.currentWeather = {
			temperature: Math.round(data.current_weather.temperature),
			highTemp: Math.round(data.daily.temperature_2m_max[0]),
			lowTemp: Math.round(data.daily.temperature_2m_min[0]),
			maxFeelsLike: Math.round(data.daily.apparent_temperature_max[0]),
			minFeelsLike: Math.round(data.daily.apparent_temperature_min[0]),
			precip: Math.round(data.daily.precipitation_sum[0] * 100) / 100,
			windSpeed: Math.round(data.current_weather.windspeed),
		};
		console.log(state.currentWeather);
	} catch (err) {
		console.error(err);
	}
};
