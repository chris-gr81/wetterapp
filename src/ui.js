import { fetchApi } from "./api";

export async function renderCurrentWeather() {
  const currentWeatherEl = document.querySelector(".current-weather");
  const current = await fetchApi("current.json", "Mannheim");

  const displayContent = `
        <div class="current-weather__location">${current.location.name}</div>
        <div class="current-weather__temperature">${current.current.temp_c}</div>
        <div class="current-weather__details">${current.current.condition.text}</div>
  `;
  currentWeatherEl.innerHTML = displayContent;
}
