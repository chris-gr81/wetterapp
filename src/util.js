import { fetchApi } from "./api";
import { getConditionImagePath } from "./conditions";

export function styleUnitString(value, decimalPlace, unit) {
  const factor = Math.pow(10, decimalPlace);
  value = Math.floor(value * factor) / factor;
  return (value += unit);
}

export function getCurrentTimeEpoch() {
  const current = new Date();
  return current;
}

export function formatTwoDigit(value) {
  if (value < 10) {
    return "0" + String(value);
  } else {
    return String(value);
  }
}

export function getNextWeeknames() {
  const weekdays = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa", "So", "Mo"];
  const today = new Date().getDay();
  return ["Heute", weekdays[today + 1], weekdays[today + 2]];
}

export function formatTimeTo24(timeString) {
  const [time, factor] = timeString.split(" ");
  let [hours, minutes] = time.split(":");
  hours = parseInt(hours, 10);

  if (factor === "PM" && hours !== 12) hours += 12;
  if (factor === "AM" && hours === 12) hours = 0;

  return `${String(hours).padStart(2, "0")}:${minutes} Uhr`;
}

export function setBackground(condition, isDay, currentNode) {
  /* const condition = weatherData.current.condition.code;
  const isDay = Boolean(weatherData.current.is_day); */
  const bgUrl = getConditionImagePath(condition, !isDay);
  const activeClass = `${currentNode.classList[0]}--withBG`;
  currentNode.classList.add(activeClass);
  currentNode.style.setProperty("--bg-url", `url(${bgUrl})`);
}

export async function buildFavMatrix(favourites) {
  const matrix = await Promise.all(
    favourites.map(async (e) => {
      const cities = await fetchApi("forecast.json", e.id, 0);
      const { location, current, forecast } = cities;
      const { maxtemp_c, mintemp_c } = forecast.forecastday[0].day;
      return {
        id: e.id,
        city: location.name,
        country: location.country,
        condition: current.condition.text,
        code: current.condition.code,
        isDay: current.is_day,
        temperature: styleUnitString(current.temp_c, 0, "°"),
        highLow: `H:${styleUnitString(maxtemp_c, 0, "°")} T:${styleUnitString(
          mintemp_c,
          0,
          "°"
        )}`,
      };
    })
  );
  return matrix;
}

export function createEl(tag, className = "", content = "") {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (content) element.innerHTML = content;

  return element;
}
