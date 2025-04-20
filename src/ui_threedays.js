import { appEl } from "./main";
import { getNextTwoWeeknames, styleUnitString } from "./util";

export function renderThreeDays(weatherData) {
  const threeDaysEl = document.createElement("div");
  threeDaysEl.classList.add("three-days");
  threeDaysEl.innerHTML = getThreeDaysHTML(weatherData);
  appEl.append(threeDaysEl);
}

function getThreeDaysHTML(weatherData) {
  return `
        <div class="three-days__header">Vorhersage für die nächsten 3 Tage:</div>
    <ul class="three-days__list">${createThreeDayList(weatherData)}</ul>
    `;
}

function createThreeDayList(weatherData) {
  const { forecast } = weatherData;
  const today = "Heute";
  const [tommorow, dayTwo] = getNextTwoWeeknames();

  return (
    createDayRow(forecast.forecastday[0], today) +
    createDayRow(forecast.forecastday[1], tommorow) +
    createDayRow(forecast.forecastday[2], dayTwo)
  );
}

function createDayRow(forecastday, dayName) {
  const { maxtemp_c, mintemp_c, maxwind_kph } = forecastday.day;
  const icon = forecastday.day.condition.icon;

  return `
    <li class="list-day">
        <span class="list-day__day">${dayName}</span>
        <img class="list-day__symbol" src="https:${icon}"/>
        <span class="list-day__high">H:${styleUnitString(
          maxtemp_c,
          0,
          "°"
        )}</span>
        <span class="list-day__low">T:${styleUnitString(
          mintemp_c,
          0,
          "°"
        )}</span>
        <span class="list-day__wind">Wind: ${styleUnitString(
          maxwind_kph,
          1,
          " km/h"
        )}</span>
    </li>
    `;
}
