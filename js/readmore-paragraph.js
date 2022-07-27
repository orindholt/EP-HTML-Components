$(document).ready(() => {
	const readmoreElement = $("[data-id='readmore-paragraph']");
	readmoreElement.find("[data-id='readmore-button']").click(function () {
		let parentElement = $(this).parents("[data-id='readmore-paragraph']");
		let contentElement = parentElement.find("[data-id='readmore-content']");
		let overlayElement = parentElement.find("[data-id='readmore-overlay']");

		let contentHeight = contentElement.prop("scrollHeight");

		if (contentElement.css("max-height") !== `${contentHeight}px`) {
			contentElement.css("max-height", `${contentHeight}px`);
		} else {
			contentElement[0].style.removeProperty("max-height");
			if (!contentElement[0].style.length)
				contentElement[0].removeAttribute("style");
		}

		overlayElement.fadeToggle();
		parentElement.toggleClass("active");
		const buttonText = $(this).text();
		if (/read more|read less/i.test(buttonText)) {
			if (buttonText.includes("Read more")) {
				$(this).text(buttonText.replace("Read more", "Read less"));
				if (buttonText.includes("+")) {
					$(this).text($(this).text().replace("+", "-"));
				}
			} else if (buttonText.includes("Read less")) {
				$(this).text(buttonText.replace("Read less", "Read more"));
				if (buttonText.includes("-")) {
					$(this).text($(this).text().replace("-", "+"));
				}
			}
		}
	});
});
