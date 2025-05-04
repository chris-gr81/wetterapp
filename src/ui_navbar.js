import { appEl, renderMainMenu } from "./main";
import { getFavList, pushFavList } from "./localStorage";
import { createEl } from "./util";

export function renderNavbar(locationCode, locationName) {
  appEl.innerHTML = ""; // overwrtie loading screen after await was successfull
  const navbarEl = createEl("div", "navbar");
  renderBackButton(navbarEl);

  if (!getFavList().some((e) => e.id === Number(locationCode)))
    renderFavButton(navbarEl, locationCode, locationName);

  appEl.append(navbarEl);
}

function renderBackButton(navbarEl) {
  const backEl = createEl("div", "navbar__back");

  backEl.addEventListener("click", () => {
    renderMainMenu(getFavList());
  });

  backEl.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke-width="1.5" 
            stroke="currentColor" 
            class="navbar__back-btn">
            <path stroke-linecap="round" 
            stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
    `;
  navbarEl.append(backEl);
}

function renderFavButton(navbarEl, locationCode, locationName) {
  const favContent = `
        <svg xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            troke-width="1.5" 
            stroke="currentColor" 
            class="navbar__fav-btn">
            <path stroke-linecap="round" 
            stroke-linejoin="round" 
            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
        </svg>
    `;
  const favEl = createEl("div", "navbar__fav", favContent);
  favEl.addEventListener("click", () => {
    pushFavList(locationCode, locationName);
    favEl.remove();
  });

  navbarEl.append(favEl);
}
