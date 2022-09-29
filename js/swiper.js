document.addEventListener("DOMContentLoaded", () => {
	const deviceType = () => {
		const ua = navigator.userAgent;
		if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
			return "tablet";
		} else if (
			/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
				ua
			)
		) {
			return "mobile";
		}
		return "desktop";
	};
	console.log(deviceType());
	// Sliders
	if (deviceType() === "mobile") {
		document.querySelectorAll(".splide").forEach(el => {
			new Splide(el, {
				/* type: "loop",
				perPage: deviceType() === "desktop" ? 2 : 1, */
				arrows: false,
				pagination: false,
				gap: "1rem",
				autoWidth: true,
				/* fixedWidth: deviceType() === "desktop" ? "44%" : "75%", */
			}).mount();
		});
	}
});
