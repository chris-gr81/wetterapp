import { fetchSearch } from "./api";
import { deleteElement } from "./localStorage";
import { appEl, renderAppCurrent } from "./main";
import { renderLoadingSearch } from "./ui_loading";
import { createEl, debounce, setBackground, validateInput } from "./util";

export function renderLandingPage(matrix, isSettings) {
  const mainMenuEl = createEl("div", "main-menu");
  const header = createHeader(isSettings);
  mainMenuEl.append(header);
  mainMenuEl.append(createSearch());
  mainMenuEl.append(
    matrix.length > 0
      ? createFavs(matrix)
      : createEl(
          "span",
          "main-menu__empty-msg",
          "Noch keine Favoriten gespeichert."
        )
  );

  appEl.innerHTML = "";
  appEl.append(mainMenuEl);

  if (isSettings) {
    settingsOn(header.querySelector(".main-menu__settings"));
  }
}

function createHeader(isSettings) {
  const headerEl = createEl("div", "main-menu__header");
  const headingEl = createEl("h1", "", "Wetter");
  headerEl.append(headingEl);

  const settingsEl = createEl("span", "main-menu__settings", "Bearbeiten");
  settingsEl.dataset.state = isSettings ? "open" : "closed";
  settingsEl.addEventListener("click", () => {
    toggleSettings(settingsEl.dataset.state === "closed", settingsEl);
  });

  headerEl.append(settingsEl);
  return headerEl;
}

function createSearch() {
  const searchInputEl = createEl("input", "main-menu__search-input", "", {
    type: "text",
    placeholder: "Nach Stadt suchen...",
  });
  const searchEl = createEl("div", "main-menu__search");
  searchEl.append(searchInputEl);

  searchEl.addEventListener("focusin", () => {
    const targetWrapper = document.querySelector(".main-menu__search");
    const findingsResult = document.querySelector(".main-menu__findings");
    if (!findingsResult) return;
    findingsResult.classList.remove("main-menu__findings--hidden");
  });

  document.removeEventListener("click", bodyClickHandler); // avoid doubles
  document.addEventListener("click", bodyClickHandler);

  searchInputEl.addEventListener(
    "input",
    debounce(async (e, signal) => {
      const inputValue = validateInput(e.target.value);
      if (inputValue === null) return;
      if (inputValue === "") {
        renderFindings([]);
        return;
      }
      renderLoadingSearch();
      const suggestions = await fetchSearch(inputValue, signal);
      renderFindings(suggestions);
    }, 300)
  );

  return searchEl;
}

function bodyClickHandler(e) {
  const targetWrapper = document.querySelector(".main-menu__search");
  const findingsResult = document.querySelector(".main-menu__findings");
  if (!targetWrapper || !findingsResult) return;

  if (!targetWrapper.contains(e.target)) {
    findingsResult.classList.add("main-menu__findings--hidden");
  }
}

function createFavs(matrix) {
  const favouritesEl = createEl("div", "main-menu__favourites");

  matrix.forEach((e) => {
    const rowEl = createEl("div", "main-menu__fav-row");
    rowEl.append(createDeleteBtn(e, matrix), createCard(e));
    favouritesEl.append(rowEl);
  });

  return favouritesEl;
}

function createDeleteBtn(e, matrix) {
  const deleteContent = `
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
  const deleteEl = createEl("div", "fav-delete", deleteContent);
  deleteEl.dataset.locationName = e.city;
  deleteEl.dataset.locationCode = e.id;

  deleteEl.addEventListener("click", () => {
    deleteElement(deleteEl.dataset.locationCode);
    const newMatrix = matrix.filter((e) => {
      return e.id !== Number(deleteEl.dataset.locationCode);
    });
    renderLandingPage(newMatrix, true);
  });

  return deleteEl;
}

function createCard(e) {
  const cardContent = `
            <div class="fav-card__locals">
              <div class="fav-card__geo-wrapper">
                <div class="fav-card__city">${e.city}</div>
                <div class="fav-card__nation">${e.country}</div>
              </div>
              <div class="fav-card__condition">${e.condition}</div>
            </div>
            <div class="fav-card__temperature">
              <div class="fav-card__current">${e.temperature}</div>
              <div class="fav-card__maximums">${e.highLow}</div>
            </div>   
    `;
  const cardEl = createEl("div", "fav-card", cardContent, {
    "data-code": e.id,
  });
  cardEl.addEventListener("click", () => {
    renderAppCurrent(e.id, e.city);
  });
  setBackground(e.code, e.isDay, cardEl);

  return cardEl;
}

function toggleSettings(isClosed, settingsEl) {
  if (isClosed) {
    settingsOn(settingsEl);
  } else {
    settingsOff(settingsEl);
  }
}

function settingsOn(settingsEl) {
  const favEls = document.querySelectorAll(".fav-delete");
  settingsEl.innerText = "Fertig";
  settingsEl.dataset.state = "open";
  favEls.forEach((fav) => fav.classList.add("fav-delete--active"));
}

function settingsOff(settingsEl) {
  const favEls = document.querySelectorAll(".fav-delete");
  settingsEl.innerText = "Bearbeiten";
  settingsEl.dataset.state = "closed";
  favEls.forEach((fav) => fav.classList.remove("fav-delete--active"));
}

function renderFindings(entries) {
  const { motherEl, findingsEl } = getFindingBase();
  if (!entries.length) return;

  entries.forEach((entry) => {
    const findingEl = createEl("div", "finding", "", { "data-id": entry.id });
    findingEl.append(createEl("div", "finding__city", `${entry.name}`));
    findingEl.append(
      createEl("div", "finding__country", `${entry.region}  (${entry.country})`)
    );
    findingEl.addEventListener("click", () => {
      renderAppCurrent(entry.id, entry.name, 3);
    });
    findingsEl.append(findingEl);
  });
  motherEl.append(findingsEl);
}

export function getFindingBase() {
  const old = document.querySelector(".main-menu__findings");
  if (old) old.remove();
  const motherEl = document.querySelector(".main-menu__search");
  const findingsEl = createEl("div", "main-menu__findings");
  return { motherEl, findingsEl };
}
