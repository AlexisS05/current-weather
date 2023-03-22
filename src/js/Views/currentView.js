import View from './View.js';

class CurrentView extends View {
	_parentElement = document.querySelector('.cur-parent');

	addHandlerToday(handler) {
		['load'].forEach((ev) => window.addEventListener(ev, handler));
	}

	_generateMarkup() {
		return `
			<div class="cur-weather">
					<img src="${this._data.weathercode}" /> <span>${this._data.temperature}</span>
			</div>
    `;
	}
}

export default new CurrentView();
