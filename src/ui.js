import { fetchApi } from "./api";
const appEl = document.querySelector(".app");

export function renderAppMain() {
  renderLoadingScreen();
  renderCurrentWeather();
}

export async function renderCurrentWeather() {
  const current = await fetchApi("forecast.json", "Mannheim");

  renderWeatherScreen(); // overwrite loading after await was successfull
  const currentWeatherEl = document.querySelector(".current-weather");

  const currentTemperature = styleTemperature(current.current.temp_c, 0);
  const high = styleTemperature(
    current.forecast.forecastday[0].day.maxtemp_c,
    0
  );
  const low = styleTemperature(
    current.forecast.forecastday[0].day.mintemp_c,
    0
  );
  const displayContent = `
        <div class="current-weather__location">${current.location.name}</div>
        <div class="current-weather__temperature">${currentTemperature}</div>
        <div class="current-weather__details">
            <span>${current.current.condition.text}</span>
            <span>H:${high} T:${low}</span>
        </div>
  `;
  currentWeatherEl.innerHTML = displayContent;
}

export function renderLoadingScreen() {
  appEl.innerHTML = `
    <div class="loading">
        <div class="loading__text">
            Lade Wetter für TODO...
        </div>
        <div class="loading__lds-ring">
            <div></div><div></div><div></div><div></div>
        </div>
        
    </div>
    `;
}

export function renderWeatherScreen() {
  appEl.innerHTML = `
        <div class="current-weather"></div>`;
}

function styleTemperature(value, decimalPlace) {
  const factor = Math.pow(10, decimalPlace);
  value = Math.floor(value * factor) / factor;
  return (value += "°");
}
