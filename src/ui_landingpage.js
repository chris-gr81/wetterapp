import { appEl, renderAppCurrent } from "./main";
import { setBackground } from "./util";

export function renderLandingPage(matrix) {
  const mainMenuEl = document.createElement("div");
  mainMenuEl.classList.add("main-menu");
  console.log(matrix);
  const content = [renderHeader(), renderSearch()].join("\n");
  mainMenuEl.innerHTML = content;
  mainMenuEl.append(createFavs(matrix));
  appEl.innerHTML = "";
  appEl.append(mainMenuEl);
}

function renderHeader() {
  return `
        <div class="main-menu__header">
          <h1>Wetter</h1>
          <span>Bearbeiten</span>
        </div>
    `;
}

function renderSearch() {
  return `
        <div class="main-menu__search">
          <input
            type="text"
            class="main-menu__search-input"
            placeholder="Nach Stadt suchen..."
          />
        </div>
    `;
}

function createFavs(matrix) {
  const favouritesEl = document.createElement("div");
  favouritesEl.classList.add("main-menu__favourites");
  const cards = matrix.map((e) => {
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
    favouritesEl.append(cardEl);
  });
  return favouritesEl;
}
