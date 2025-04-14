import "./styles.scss";
import { renderCurrentWeather } from "./ui_city_view";
import { fetchApi } from "./api";
import { renderLoadingScreen } from "./ui_loading";
import { renderForecast } from "./ui_forecast";

export const appEl = document.querySelector(".app");

async function renderAppCurrent(location) {
  renderLoadingScreen(location);
  const weatherData = await fetchApi("forecast.json", location);
  renderCurrentWeather(weatherData);
  renderForecast(weatherData);
}

renderAppCurrent("Mannheim");
