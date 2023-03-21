import View from './View.js';

class WeatherView extends View {
	_parentElement = document.querySelector('.cur-weather-data');

	addHandlerRender(handler) {
		['load'].forEach((ev) => window.addEventListener(ev, handler));
	}

	_generateMarkup() {
		return `
    	  <div class="weather-cur">
						<span>High</span>
						<span>${this._data.highTemp}</span>
					</div>
					<div class="weather-cur">
						<span>FL High</span>
						<span>${this._data.maxFeelsLike}</span>
					</div>
					<div class="weather-cur">
						<span>Wind</span>
						<span>${this._data.windSpeed}</span>
					</div>
					<div class="weather-cur">
						<span>Low</span>
						<span>${this._data.lowTemp}</span>
					</div>
					<div class="weather-cur">
						<span>FL Low</span>
						<span>${this._data.minFeelsLike}</span>
					</div>
					<div class="weather-cur">
						<span>PRECIP</span>
						<span>${this._data.precip}</span>
				</div>
    `;
	}
}

export default new WeatherView();
