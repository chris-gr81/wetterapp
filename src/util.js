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

export function getNextTwoWeeknames() {
  const weekdays = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa", "So", "Mo"];
  const today = new Date().getDay();
  return [weekdays[today + 1], weekdays[today + 2]];
}
