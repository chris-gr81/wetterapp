import { styleTemperature } from "./util";
import { appEl } from "./main";

export async function renderCurrentWeather(weatherData) {
  const { location, current, forecast } = weatherData;

  renderWeatherScreen(); // overwrite loading after await was successfull
  const currentWeatherEl = document.querySelector(".current-weather");

  const currentTemperature = styleTemperature(current.temp_c, 0);
  const high = styleTemperature(forecast.forecastday[0].day.maxtemp_c, 0);
  const low = styleTemperature(forecast.forecastday[0].day.mintemp_c, 0);
  const displayContent = `
        <div class="current-weather__location">${location.name}</div>
        <div class="current-weather__temperature">${currentTemperature}</div>
        <div class="current-weather__details">
            <span>${current.condition.text}</span>
            <span>H:${high} T:${low}</span>
        </div>
  `;
  currentWeatherEl.innerHTML = displayContent;
}

export function renderWeatherScreen() {
  appEl.innerHTML = `
        <div class="current-weather"></div>`;
}
