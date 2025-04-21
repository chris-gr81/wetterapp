import { appEl } from "./main";
import { styleUnitString, formatTimeTo24 } from "./util";

export function renderFurther(weatherData) {
  const furtherEl = document.createElement("div");
  furtherEl.classList.add("further");
  furtherEl.innerHTML = getFurtherHTML(weatherData);
  appEl.append(furtherEl);
}

function getFurtherHTML(weatherData) {
  const matrix = getFurtherMatrix(weatherData.forecast.forecastday[0]);
  return matrix
    .map((e) => {
      const [[key, value]] = Object.entries(e);
      return `
        <div class="single-card">
            <div class="single-card__name">${key}</div>
            <div class="single-card__value">${value}</div>
        </div>
    `;
    })
    .join("");
}

function getFurtherMatrix(selectedData) {
  const matrix = [];
  const { day, astro } = selectedData;
  matrix.push(
    { "UV-Index": day.uv },
    {
      "Regen zu": styleUnitString(day.daily_chance_of_rain, 0, "%"),
    },
    { Sonnenaufgang: formatTimeTo24(astro.sunrise) },
    { Sonnenuntergang: formatTimeTo24(astro.sunset) },
    { Mondaufgang: formatTimeTo24(astro.moonrise) },
    { Monduntergang: formatTimeTo24(astro.moonset) }
  );
  return matrix;
}
