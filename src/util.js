export function styleTemperature(value, decimalPlace) {
  const factor = Math.pow(10, decimalPlace);
  value = Math.floor(value * factor) / factor;
  return (value += "°");
}
