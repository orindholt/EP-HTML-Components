document.addEventListener("DOMContentLoaded", () => {
	const demoElements = document.querySelectorAll("[data-demo='true']");
	const nextButtonElement = document.querySelector("[data-id='demo-next-btn']");
	const demoIndexElement = document.querySelector("[data-id='demo-index']");

	let demoIndex = 0;
	const maxViewCount = Math.max(
		...Array.from(demoElements)
			.map(el => el.getAttribute("data-views").split(","))
			.join()
			.split(",")
	);

	function switchDemo(index) {
		demoIndexElement.textContent = demoIndex + 1;
		demoElements.forEach(el => {
			const elementViews = el.getAttribute("data-views").split(",");

			if (!elementViews.includes((index + 1).toString())) {
				$(el).hide();
			} else $(el).show();
		});
	}

	switchDemo(demoIndex);

	nextButtonElement.addEventListener("click", () => {
		if (demoIndex < maxViewCount - 1) {
			demoIndex++;
		} else demoIndex = 0;
		switchDemo(demoIndex);
	});
});
