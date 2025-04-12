const API_KEY = "162d7ac6c706473b97694142251204";
const API_BASE = "http://api.weatherapi.com/v1";

export async function fetchApi() {
  const url = createRequestString("current.json", "Mannheim");
  console.log(url);
  const response = await fetch(url);
  const result = await response.json();
  console.log(result);
}

function createRequestString(request, location) {
  return `${API_BASE}/${request}?key=${API_KEY}&q=${location}`;
}
