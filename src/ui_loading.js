import { appEl } from "./main";

export function renderLoadingScreen(location) {
  appEl.innerHTML = `
      <div class="loading">
          <div class="loading__text">
              Lade Wetter für ${location}...
          </div>
          <div class="loading__lds-ring">
              <div></div><div></div><div></div><div></div>
          </div>
          
      </div>
      `;
}
