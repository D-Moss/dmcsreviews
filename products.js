const navToggle = document.querySelector(".nav-toggle");
const navClose = document.querySelector(".nav-close");
const navBackdrop = document.querySelector(".nav-backdrop");

if (navToggle && navClose && navBackdrop) {
	navToggle.addEventListener("click", () => {
		document.body.classList.add("menu-open");
		navToggle.setAttribute("aria-expanded", "true");
	});

	const closeMenu = () => {
		document.body.classList.remove("menu-open");
		navToggle.setAttribute("aria-expanded", "false");
	};

	navClose.addEventListener("click", closeMenu);
	navBackdrop.addEventListener("click", closeMenu);
}

const filterButtons = document.querySelectorAll(".products-filter__btn");
const productCards = document.querySelectorAll(".products-card");
const emptyMessage = document.querySelector(".products-empty");

function filterProducts(category) {
	let visibleCount = 0;

	productCards.forEach((card) => {
		const categories = card.dataset.category.split(" ");

		if (category === "all" || categories.includes(category)) {
			card.classList.remove("is-hidden");
			visibleCount += 1;
		} else {
			card.classList.add("is-hidden");
		}
	});

	if (emptyMessage) {
		emptyMessage.hidden = visibleCount !== 0;
	}
}

filterButtons.forEach((button) => {
	button.addEventListener("click", () => {
		filterButtons.forEach((btn) => btn.classList.remove("is-active"));
		button.classList.add("is-active");

		const selectedFilter = button.dataset.filter;
		filterProducts(selectedFilter);
	});
});

const toggleButtons = document.querySelectorAll(".products-card__toggle");

toggleButtons.forEach((button) => {
	button.addEventListener("click", () => {
		const fullReview = button.closest(".products-card__body").querySelector(".products-card__full");
		const isExpanded = button.getAttribute("aria-expanded") === "true";

		if (isExpanded) {
			fullReview.hidden = true;
			button.setAttribute("aria-expanded", "false");
			button.textContent = "Read More";
		} else {
			fullReview.hidden = false;
			button.setAttribute("aria-expanded", "true");
			button.textContent = "Show Less";
		}
	});
});