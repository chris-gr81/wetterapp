import { styleUnitString, setBackground } from "./util";
import { appEl } from "./main";

export async function renderCurrentWeather(weatherData) {
  const { location, current, forecast } = weatherData;
  setBackground(current.condition.code, current.is_day, appEl);

  const currentWeatherEl = document.createElement("div");
  currentWeatherEl.classList.add("current-weather");

  const currentTemperature = styleUnitString(current.temp_c, 0, "°");
  const high = styleUnitString(forecast.forecastday[0].day.maxtemp_c, 0, "°");
  const low = styleUnitString(forecast.forecastday[0].day.mintemp_c, 0, "°");
  const displayContent = `
        <div class="current-weather__location">${location.name}</div>
        <div class="current-weather__temperature">${currentTemperature}</div>
        <div class="current-weather__details">
            <span>${current.condition.text}</span>
            <span>H:${high} T:${low}</span>
        </div>
  `;
  currentWeatherEl.innerHTML = displayContent;
  appEl.append(currentWeatherEl);
}
