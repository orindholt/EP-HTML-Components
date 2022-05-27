document.addEventListener("DOMContentLoaded", () => {
	const filterButton = document.querySelector("[data-id='menu-toggle']");
	const filterExit = document.querySelector("[data-id='menu-exit']");
	const filterMenu = document.querySelector("[data-id='menu']");

	const toggleEl = el => el.classList.toggle("active");

	filterExit.addEventListener("click", () => toggleEl(filterMenu));
	filterButton.addEventListener("click", () => toggleEl(filterMenu));

	const readMoreButtons = document.querySelectorAll(
		"[data-id='readmore-button']"
	);

	readMoreButtons.forEach(el =>
		el.addEventListener("click", e => toggleEl(e.currentTarget.parentNode))
	);
});
