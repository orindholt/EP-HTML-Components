document.addEventListener("DOMContentLoaded", () => {
	// Demo filter toggle
	document.querySelectorAll("[data-id='filter-toggle-button']").forEach(btn => {
		btn.addEventListener("click", e => {
			let target = e.currentTarget;
			target.classList.toggle("active");
		});
	});
});
