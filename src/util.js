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

export function getPictureUrl(weatherData) {
  const condition = weatherData.current.condition.code;
  const isDay = Boolean(weatherData.current.is_day);
  return getConditionImagePath(condition, !isDay);
}
