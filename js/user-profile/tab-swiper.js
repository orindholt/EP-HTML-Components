document.addEventListener("DOMContentLoaded", () => {
	document.querySelectorAll("[data-slider='tab']").forEach(el => {
		new Splide(el, {
			arrows: false,
			pagination: false,
			padding: { left: "5%", right: "5%" },
			autoWidth: true,
			gap: "1rem",
			mediaQuery: "min",
			breakpoints: {
				768: {
					destroy: true,
				},
			},
		}).mount();
	});
});
