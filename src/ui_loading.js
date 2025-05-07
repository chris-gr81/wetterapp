import { appEl } from "./main";
import { getFindingBase } from "./ui_landingpage";
import { createEl } from "./util";

export function renderLoadingScreen(location = false) {
  appEl.innerHTML = "";
  appEl.classList.remove("app--withBG");
  const infoText = location
    ? `Lade Wetter für ${location}...`
    : "Lade Übersicht...";

  appEl.innerHTML = `
      <div class="loading">
          <div class="loading__text">
              ${infoText}
          </div>
          <div class="loading__lds-ring">
              <div></div><div></div><div></div><div></div>
          </div>
          
      </div>
      `;
}

export function renderLoadingSearch() {
  const { motherEl, findingsEl } = getFindingBase();
  const loadingEl = createEl("div", "finding__loading", "Lade Vorschläge...");
  findingsEl.append(loadingEl);
  motherEl.append(findingsEl);
}
