import { appEl } from "./main";
import { styleUnitString, formatTimeTo24, createEl } from "./util";

export function renderFurther(weatherData) {
  const furtherEl = createEl("div", "further", getFurtherHTML(weatherData));
  appEl.append(furtherEl);
}

function getFurtherHTML(weatherData) {
  const matrix = getFurtherMatrix(weatherData.forecast.forecastday[0]);
  return matrix
    .map((e) => {
      return `
        <div class="single-card">
            <div class="single-card__name">${e.title}</div>
            <div class="single-card__value">${e.value}</div>
        </div>
    `;
    })
    .join("");
}

function getFurtherMatrix(selectedData) {
  const matrix = [];
  const { day, astro } = selectedData;
  matrix.push(
    { title: "UV-Index", value: day.uv },
    {
      title: "Regen zu",
      value: styleUnitString(day.daily_chance_of_rain, 0, "%"),
    },
    { title: "Sonnenaufgang", value: formatTimeTo24(astro.sunrise) },
    { title: "Sonnenuntergang", value: formatTimeTo24(astro.sunset) },
    { title: "Mondaufgang", value: formatTimeTo24(astro.moonrise) },
    { title: "Monduntergang", value: formatTimeTo24(astro.moonset) }
  );
  return matrix;
}
