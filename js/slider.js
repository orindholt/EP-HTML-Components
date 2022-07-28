document.addEventListener("DOMContentLoaded", () => {
	const slider = document.querySelector("[data-id='slider']");
	const sliderPages = slider.querySelectorAll(
		"[data-id='slider-content'] [data-id='slider-page']"
	);
	const sliderPaginationIcons = slider.querySelectorAll(
		"[data-id='slider-pagination'] > *"
	);
	const sliderButtons = slider.querySelectorAll("[data-id='slider-button']");

	let slideIndex = 0;

	function clearPaginationIcons() {
		sliderPaginationIcons.forEach(icon => {
			if (icon.classList.contains("active")) icon.classList.remove("active");
		});
	}
	function clearSliderPages() {
		sliderPages.forEach(page => {
			if (page.style.display !== "none") page.style.display = "none";
		});
	}

	function turnSlide(isNext) {
		clearPaginationIcons();
		clearSliderPages();
		if (isNext) {
			if (slideIndex < sliderPages.length - 1) {
				slideIndex++;
			} else slideIndex = 0;
		} else if (!isNext) {
			if (slideIndex > 0) {
				slideIndex--;
			} else slideIndex = sliderPages.length - 1;
		}
		let activeSliderPage = sliderPages[slideIndex];
		activeSliderPage.style.removeProperty("display");
		if (!activeSliderPage.style.length) {
			activeSliderPage.removeAttribute("style");
		}

		let activePaginationIcon = sliderPaginationIcons[slideIndex];
		activePaginationIcon.classList.add("active");
	}

	sliderButtons.forEach(el => {
		el.addEventListener("click", e => {
			let target = e.currentTarget;
			const direciton = target.getAttribute("data-direction");
			const isNext = direciton === "next";
			turnSlide(isNext);
		});
	});
});
