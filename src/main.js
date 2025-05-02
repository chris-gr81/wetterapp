import "./styles.scss";
import { renderCurrentWeather } from "./ui_city_view";
import { fetchApi } from "./api";
import { renderLoadingScreen } from "./ui_loading";
import { renderForecast } from "./ui_forecast";
import { renderThreeDays } from "./ui_threedays";
import { renderFurther } from "./ui_further";
import { favourites } from "./localStorage";
import { buildFavMatrix } from "./util";
import { renderLandingPage } from "./ui_landingpage";

export const appEl = document.querySelector(".app");

async function renderMainMenu(favourites) {
  renderLoadingScreen();
  const matrix = await buildFavMatrix(favourites);
  renderLandingPage(matrix);
}

export async function renderAppCurrent(locationCode, locationName) {
  renderLoadingScreen(locationName);
  const weatherData = await fetchApi("forecast.json", locationCode, 3);
  renderCurrentWeather(weatherData);
  renderForecast(weatherData);
  renderThreeDays(weatherData);
  renderFurther(weatherData);
}

renderMainMenu(favourites);
