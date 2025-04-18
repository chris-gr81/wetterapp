const API_KEY = "162d7ac6c706473b97694142251204";
const API_BASE = "https://api.weatherapi.com/v1";

export async function fetchApi(api, location, days) {
  const url = createRequestString(api, location, days);
  const response = await fetch(url);
  const result = await response.json();
  return result;
}

function createRequestString(request, location, days) {
  return `${API_BASE}/${request}?key=${API_KEY}&q=${location}&lang=de&days=${days}`;
}
