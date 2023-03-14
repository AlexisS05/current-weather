export const state = {
	currentWeather: {},
};

export const loadWeather = async function () {
	try {
		const res = await fetch(
			'https://api.open-meteo.com/v1/forecast?latitude=40.64&longitude=-73.98&hourly=temperature_2m,apparent_temperature,precipitation_probability,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum,windspeed_10m_max&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timeformat=unixtime&timezone=America%2FNew_York'
		);
		const data = await res.json();
		console.log(data);

		state.currentWeather = {
			temperature: data.current_weather.temperature,
		};
		console.log(state.currentWeather);
	} catch (err) {
		console.error(err);
	}
};
