const API_KEY = "162d7ac6c706473b97694142251204";
const API_BASE = "https://api.weatherapi.com/v1";

export async function fetchApi(api, location, days) {
  const url = createRequestString(api, "id:" + location, days);
  const response = await fetch(url);
  const result = await response.json();
  return result;
}

export async function fetchSearch(searchValue, signal) {
  const url = createRequestString("search.json", searchValue);
  const response = await fetch(url, { signal });
  const result = await response.json();
  return result;
}

function createRequestString(request, location, days = false) {
  const dayString = days ? `&lang=de&days=${days}` : ``;
  return `${API_BASE}/${request}?key=${API_KEY}&q=${location}${dayString}`;
}
