export function getConditionImagePath(code, isNight = false) {
  const condition = CONDITION_IMAGES.find((cond) => cond.code === code);

  if (!condition) return null;

  return (
    import.meta.env.BASE_URL +
    "conditionImages/" +
    condition[isNight ? "night" : "day"]
  );
}

const CONDITION_IMAGES = [
  {
    code: 1000,
    day: "day/sunny.jpg",
    night: "night/clear.jpg",
  },
  {
    code: 1003,
    day: "day/partly_cloudy_day.jpg",
    night: "night/partly_cloudy_night.jpg",
  },
  {
    code: 1006,
    day: "day/cloudy_day.jpg",
    night: "night/cloudy_night.jpg",
  },
  {
    code: 1009,
    day: "day/cloudy_day.jpg",
    night: "night/cloudy_night.jpg",
  },
  {
    code: 1030,
    day: "day/foggy_day.jpg",
    night: "night/foggy_night.jpg",
  },
  {
    code: 1063,
    day: "day/rain_day.jpg",
    night: "night/rain_night.jpg",
  },
  {
    code: 1066,
    day: "day/snow_day.jpg",
    night: "night/snow_night.jpg",
  },
  {
    code: 1069,
    day: "day/rain_day.jpg",
    night: "night/rain_night.jpg",
  },
  {
    code: 1072,
    day: "day/rain_day.jpg",
    night: "night/rain_night.jpg",
  },
  {
    code: 1087,
    day: "day/lightning_day.jpg",
    night: "night/lightning_night.jpg",
  },
  {
    code: 1114,
    day: "day/snow_day.jpg",
    night: "night/snow_night.jpg",
  },
  {
    code: 1117,
    day: "day/snow_day.jpg",
    night: "night/snow_night.jpg",
  },
  {
    code: 1135,
    day: "day/foggy_day.jpg",
    night: "night/foggy_night.jpg",
  },
  {
    code: 1147,
    day: "day/foggy_day.jpg",
    night: "night/foggy_night.jpg",
  },
  {
    code: 1150,
    day: "day/rain_day.jpg",
    night: "night/rain_night.jpg",
  },
  {
    code: 1153,
    day: "day/rain_day.jpg",
    night: "night/rain_night.jpg",
  },
  {
    code: 1168,
    day: "day/rain_day.jpg",
    night: "night/rain_night.jpg",
  },
  {
    code: 1171,
    day: "day/heavy_rain_day.jpg",
    night: "night/heavy_rain_night.jpg",
  },
  {
    code: 1180,
    day: "day/rain_day.jpg",
    night: "night/rain_night.jpg",
  },
  {
    code: 1183,
    day: "day/rain_day.jpg",
    night: "night/rain_night.jpg",
  },
  {
    code: 1186,
    day: "day/rain_day.jpg",
    night: "night/rain_night.jpg",
  },
  {
    code: 1189,
    day: "day/heavy_rain_day.jpg",
    night: "night/heavy_rain_night.jpg",
  },
  {
    code: 1192,
    day: "day/heavy_rain_day.jpg",
    night: "night/heavy_rain_night.jpg",
  },
  {
    code: 1195,
    day: "day/heavy_rain_day.jpg",
    night: "night/heavy_rain_night.jpg",
  },
  {
    code: 1198,
    day: "day/heavy_rain_day.jpg",
    night: "night/heavy_rain_night.jpg",
  },
  {
    code: 1201,
    day: "day/heavy_rain_day.jpg",
    night: "night/heavy_rain_night.jpg",
  },
  {
    code: 1204,
    day: "day/rain_day.jpg",
    night: "night/rain_night.jpg",
  },
  {
    code: 1207,
    day: "day/heavy_rain_day.jpg",
    night: "night/heavy_rain_night.jpg",
  },
  {
    code: 1210,
    day: "day/snow_day.jpg",
    night: "night/snow_night.jpg",
  },
  {
    code: 1213,
    day: "day/snow_day.jpg",
    night: "night/snow_night.jpg",
  },
  {
    code: 1216,
    day: "day/snow_day.jpg",
    night: "night/snow_night.jpg",
  },
  {
    code: 1219,
    day: "day/snow_day.jpg",
    night: "night/snow_night.jpg",
  },
  {
    code: 1222,
    day: "day/snow_day.jpg",
    night: "night/snow_night.jpg",
  },
  {
    code: 1225,
    day: "day/snow_day.jpg",
    night: "night/snow_night.jpg",
  },
  {
    code: 1237,
    day: "day/ice_pellets.jpg",
    night: "day/ice_pellets.jpg",
  },
  {
    code: 1240,
    day: "day/heavy_rain_day.jpg",
    night: "night/heavy_rain_night.jpg",
  },
  {
    code: 1243,
    day: "day/heavy_rain_day.jpg",
    night: "night/heavy_rain_night.jpg",
  },
  {
    code: 1246,
    day: "day/heavy_rain_day.jpg",
    night: "night/heavy_rain_night.jpg",
  },
  {
    code: 1249,
    day: "day/heavy_rain_day.jpg",
    night: "night/heavy_rain_night.jpg",
  },
  {
    code: 1252,
    day: "day/heavy_rain_day.jpg",
    night: "night/heavy_rain_night.jpg",
  },
  {
    code: 1255,
    day: "day/snow_day.jpg",
    night: "night/snow_night.jpg",
  },
  {
    code: 1258,
    day: "day/heavy_rain_day.jpg",
    night: "night/heavy_rain_night.jpg",
  },
  {
    code: 1261,
    day: "day/ice_pellets.jpg",
    night: "day/ice_pellets.jpg",
  },
  {
    code: 1264,
    day: "day/ice_pellets.jpg",
    night: "day/ice_pellets.jpg",
  },
  {
    code: 1273,
    day: "day/lightning_day.jpg",
    night: "night/lightning_night.jpg",
  },
  {
    code: 1276,
    day: "day/lightning_day.jpg",
    night: "night/lightning_night.jpg",
  },
  {
    code: 1279,
    day: "day/lightning_day.jpg",
    night: "night/lightning_night.jpg",
  },
  {
    code: 1282,
    day: "day/lightning_day.jpg",
    night: "night/lightning_night.jpg",
  },
];
