const toggle = document.querySelector(".nav-toggle");
const drawer = document.querySelector(".nav-drawer");
const closeBtn = document.querySelector(".nav-close");
const backdrop = document.querySelector(".nav-backdrop");

function openMenu() {
	document.body.classList.add("menu-open");
	drawer.setAttribute("aria-hidden","false");
	toggle.setAttribute("aria-expanded","true");
	backdrop.hidden = false;
}

function closeMenu() {
	document.body.classList.remove("menu-open");
	drawer.setAttribute("aria-hidden","true");
	toggle.setAttribute("aria-expanded","false");
	backdrop.hidden = true;
}

toggle.addEventListener("click", () => {
	document.body.classList.contains("menu-open") ? closeMenu() : openMenu();
});

closeBtn.addEventListener("click", closeMenu);
backdrop.addEventListener("click", closeMenu);

document.addEventListener("keydown", (e) => {
	if (e.key === "Escape") closeMenu();
});