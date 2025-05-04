const LOCAL_KEY = "waFavData";

export function getFavList() {
  try {
    const favList = JSON.parse(localStorage.getItem(LOCAL_KEY));
    return favList ?? [];
  } catch (e) {
    console.warn("LocalStorage kann nicht geparsed werden:", e);
    return [];
  }
}

export function setFavList(favList) {
  localStorage.setItem(LOCAL_KEY, JSON.stringify(favList));
}

export function pushFavList(locationCode, locationName) {
  const favList = getFavList();
  favList.push({ city: locationName, id: Number(locationCode) });
  setFavList(favList);
}

export function deleteElement(locationCode) {
  const newList = getFavList().filter((e) => {
    return e.id !== Number(locationCode);
  });
  setFavList(newList);
  console.log(getFavList());
}
