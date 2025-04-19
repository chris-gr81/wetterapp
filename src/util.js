export function styleTemperature(value, decimalPlace) {
  const factor = Math.pow(10, decimalPlace);
  value = Math.floor(value * factor) / factor;
  return (value += "°");
}

export function getCurrentTimeEpoch() {
  const current = new Date();
  return current;
}

export function getCurrentDayEpoch() {
  const now = new Date();
  return `${now.getFullYear()}-${now.getMonth() + 1}`;
}
