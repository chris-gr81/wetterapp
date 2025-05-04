import "./styles.scss";
import { renderCurrentWeather } from "./ui_city_view";
import { fetchApi } from "./api";
import { renderLoadingScreen } from "./ui_loading";
import { renderForecast } from "./ui_forecast";
import { renderThreeDays } from "./ui_threedays";
import { renderFurther } from "./ui_further";
import { getFavList, setFavList } from "./localStorage";
import { buildFavMatrix } from "./util";
import { renderLandingPage } from "./ui_landingpage";
import { renderNavbar } from "./ui_navbar";

export const appEl = document.querySelector(".app");

export async function renderMainMenu(favourites) {
  renderLoadingScreen();
  const matrix = await buildFavMatrix(favourites);
  renderLandingPage(matrix);
}

export async function renderAppCurrent(locationCode, locationName) {
  renderLoadingScreen(locationName);
  const weatherData = await fetchApi("forecast.json", locationCode, 3);
  renderNavbar(locationCode, locationName);
  renderCurrentWeather(weatherData);
  renderForecast(weatherData);
  renderThreeDays(weatherData);
  renderFurther(weatherData);
}

// Playground
const favourites = [
  { city: "Mannheim", id: 601849 },
  { city: "Helsinki", id: 742591 },
  { city: "Chicago", id: 2566581 },
];
setFavList(favourites);

console.log(getFavList().some((e) => e.city === "Mannhei"));

// End of Playground
renderMainMenu(getFavList());
