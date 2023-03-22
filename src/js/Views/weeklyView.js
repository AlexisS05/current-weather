import View from './View.js';

class WeeklyView extends View {
	_parentElement = document.querySelector('.weekly-card');

	addHandlerWeekly(handler) {
		['load'].forEach((ev) => window.addEventListener(ev, handler));
	}

	_generateMarkup() {
		return this._data.map(this._generateMarkupDates).join('');
	}

	_generateMarkupDates(date) {
		return `
          <div class="card">
						<img src="${date.icons}" class="weather-img" />
            <span>${date.date}</span>
            <span>${date.maxTemp}</span>
					</div>
    `;
	}
}
export default new WeeklyView();
