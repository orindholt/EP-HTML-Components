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

	/* 	const viewButtons = document.querySelectorAll("[data-id='view-button']");
	const cardGrid = document.querySelector("[data-id='card-grid']");

	const toggleView = e => {
		let target = e.currentTarget;
		let targetType = target.dataset.type;
		if (!target.classList.contains("active")) {
			viewButtons.forEach(button => button.classList.remove("active"));
			target.classList.add("active");
			if (targetType === "grid") {
				if (cardGrid.classList.contains("list-view"))
					cardGrid.classList.remove("list-view");
				cardGrid.classList.add("grid-view");
			} else if (targetType === "list") {
				if (cardGrid.classList.contains("grid-view"))
					cardGrid.classList.remove("grid-view");
				cardGrid.classList.add("list-view");
			}
		}
	};

	viewButtons.forEach(button => button.addEventListener("click", toggleView)); */
});
