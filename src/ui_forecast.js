import { appEl } from "./main";
import { formatTwoDigit, styleUnitString } from "./util";

export function renderForecast(weatherData) {
  const forecastEl = document.createElement("div");
  const { maxwind_kph, condition } = weatherData.forecast.forecastday[0].day;
  forecastEl.classList.add("forecast");
  forecastEl.innerHTML = getForecastHTML(
    condition.text,
    maxwind_kph,
    weatherData
  );
  appEl.append(forecastEl);
}

function getForecastHTML(conditionDay, maxWind, weatherData) {
  const cardRow = createForecastBar(weatherData);
  return `
  <div class="forecast__upper">Heute ${conditionDay}. Wind bis zu ${maxWind} km/h.</div>
        <div class="forecast__lower">${cardRow}</div>`;
}

function createForecastBar(weatherData) {
  const { location, forecast } = weatherData;
  const matrix = createForecastMatrix(location, forecast.forecastday);

  let forecastBar = "";
  for (const element of matrix) {
    forecastBar += `<div class="hour-card">
        <div class="hour-card__hour">${element.hour}
        </div>
        <img class="hour-card__symbol" src="https:${element.img}" alt="symbol" />
        <div class="hour-card__temperature">${element.temp}</div>
        </div>`;
  }
  return forecastBar;
}

function createForecastMatrix(location, forecastday) {
  const matrix = [];
  const pointer = new Date(location.localtime).getHours();

  pushDayToMatrix(matrix, pointer, 24, forecastday[0]);
  pushDayToMatrix(matrix, 0, pointer, forecastday[1]);
  matrix[0].hour = "Jetzt";

  return matrix;
}

function pushDayToMatrix(matrix, start, end, forecastday) {
  for (let i = start; i < end; i++)
    matrix.push({
      hour: formatTwoDigit(i) + " Uhr",
      img: forecastday.hour[i].condition.icon,
      temp: styleUnitString(forecastday.hour[i].temp_c, 0, "°"),
    });
}
