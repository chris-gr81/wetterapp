import { appEl } from "./main";

export function renderForecast(weatherData) {
  const forecastEl = document.createElement("div");
  const { maxwind_kph, condition } = weatherData.forecast.forecastday[0].day;
  forecastEl.classList.add("forecast");
  forecastEl.innerHTML = getForecastHTML(condition.text, maxwind_kph);
  appEl.append(forecastEl);
}

function getForecastHTML(conditionDay, maxWind) {
  return `
  <div class="forecast__upper">Heute ${conditionDay}. Wind bis zu ${maxWind} km/h.</div>
        <div class="forecast__lower">
            <div class="hour-card">
                <div class="hour-card__hour">Jetzt
                </div>
                <div class="hour-card__symbol">@</div>
                <div class="hour-card__temperature">20°</div>
            </div>
        </div>`;
}
