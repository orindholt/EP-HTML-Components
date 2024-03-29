document.addEventListener("DOMContentLoaded", () => {
	document.querySelectorAll("[data-slider='cards']").forEach(el => {
		new Splide(el, {
			arrows: false,
			pagination: false,
			padding: { left: "5%", right: "15%" },
			gap: "1rem",
			focus: "center",
			mediaQuery: "min",
			breakpoints: {
				768: {
					destroy: true,
				},
			},
		}).mount();
	});
});
