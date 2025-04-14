import { appEl } from "./main";

export function renderForecast(weatherData) {
  const forecastEl = document.createElement("div");
  forecastEl.classList.add("forecast");
  forecastEl.innerHTML = getForecastHTML();
  appEl.append(forecastEl);

  console.log(weatherData);
}

function getForecastHTML() {
  return `
  <div class="forecast__upper">Heute leicht bewölkt. Wind bis zu 14.4 km/h</div>
        <div class="forecast__lower">
            <div class="hour-card">
                <div class="hour-card__hour">Jetzt
                </div>
                <div class="hour-card__symbol">@</div>
                <div class="hour-card__temperature">20°</div>
            </div>
        </div>`;
}
