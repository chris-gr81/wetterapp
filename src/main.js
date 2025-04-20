import "./styles.scss";
import { renderCurrentWeather } from "./ui_city_view";
import { fetchApi } from "./api";
import { renderLoadingScreen } from "./ui_loading";
import { renderForecast } from "./ui_forecast";
import { renderThreeDays } from "./ui_threedays";

export const appEl = document.querySelector(".app");

async function renderAppCurrent(location) {
  renderLoadingScreen(location);
  const weatherData = await fetchApi("forecast.json", location, 3);
  renderCurrentWeather(weatherData);
  renderForecast(weatherData);
  renderThreeDays(weatherData);
}

renderAppCurrent("Mannheim");
