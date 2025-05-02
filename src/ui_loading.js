import { appEl } from "./main";

export function renderLoadingScreen(location = false) {
  appEl.innerHTML = "";
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
