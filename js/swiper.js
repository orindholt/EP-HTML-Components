document.addEventListener("DOMContentLoaded", () => {
	document.querySelectorAll(".splide").forEach(el => {
		new Splide(el, {
			arrows: false,
			pagination: false,
			gap: "1rem",
			autoWidth: true,
			mediaQuery: "min",
			breakpoints: {
				768: {
					destroy: true,
				},
			},
		}).mount();
	});
});
