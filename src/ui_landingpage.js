import { appEl, renderAppCurrent } from "./main";
import { setBackground } from "./util";

export function renderLandingPage(matrix) {
  const mainMenuEl = document.createElement("div");
  mainMenuEl.classList.add("main-menu");

  mainMenuEl.append(createHeader());
  mainMenuEl.append(createSearch());
  mainMenuEl.append(createFavs(matrix));

  appEl.innerHTML = "";
  appEl.append(mainMenuEl);
}

function createHeader() {
  const headerEl = document.createElement("div");
  headerEl.classList.add("main-menu__header");

  const headingEl = document.createElement("h1");
  headingEl.innerText = "Wetter";
  headerEl.append(headingEl);

  const settingsEl = document.createElement("span");
  settingsEl.classList.add("main-menu__settings");
  settingsEl.innerText = "Bearbeiten";

  settingsEl.addEventListener("click", () => {
    console.log("Trump ist Hurensohn");
  });

  headerEl.append(settingsEl);

  return headerEl;
}

function createSearch() {
  const searchEl = document.createElement("div");
  searchEl.classList.add("main-menu__search");
  searchEl.innerHTML = `
        <input
            type="text"
            class="main-menu__search-input"
            placeholder="Nach Stadt suchen..."
        />
    `;
  return searchEl;
}

function createFavs(matrix) {
  const favouritesEl = document.createElement("div");
  favouritesEl.classList.add("main-menu__favourites");

  const cards = matrix.map((e) => {
    const rowEl = document.createElement("div");
    rowEl.classList.add("main-menu__fav-row");
    const delEl = createDeleteBtn(e);
    const cardEl = createCard(e);
    rowEl.append(delEl);
    rowEl.append(cardEl);
    favouritesEl.append(rowEl);
  });

  return favouritesEl;
}

function createDeleteBtn(e) {
  const deleteEl = document.createElement("div");
  deleteEl.classList.add("fav-delete");
  deleteEl.addEventListener("click", () => {
    console.log("delete delete");
  });
  deleteEl.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke-width="1.5" 
        stroke="currentColor" 
        class="fav-delete__icon">
        <path stroke-linecap="round" 
        stroke-linejoin="round" 
        d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>

    `;
  return deleteEl;
}

function createCard(e) {
  const cardEl = document.createElement("div");
  cardEl.classList.add("fav-card");
  cardEl.setAttribute("data-code", `${e.id}`);
  cardEl.addEventListener("click", () => {
    renderAppCurrent(e.id, e.city);
  });
  setBackground(e.code, e.isDay, cardEl);
  cardEl.innerHTML = `
            <div class="fav-card__locals">
              <div class="fav-card__geo-wrapper">
                <div class="fav-card__city">${e.city}</div>
                <div class="fav_card__nation">${e.country}</div>
              </div>
              <div class="fav-card__condition">${e.condition}</div>
            </div>
            <div class="fav-card__temperature">
              <div class="fav-card__current">${e.temperature}</div>
              <div class="fav-card__maximums">${e.highLow}</div>
            </div>   
    `;
  return cardEl;
}
