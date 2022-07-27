$(document).ready(() => {
	const readmoreElement = $("[data-id='readmore']");
	readmoreElement.find("[data-id='readmore-button']").click(function () {
		let parentElement = $(this).parents("[data-id='readmore']");
		let contentElement = parentElement.find("[data-id='readmore-content']");

		contentElement.slideToggle();
		parentElement.toggleClass("active");
		const buttonText = $(this).text();
		if (/Read more|Read less/i.test(buttonText)) {
			if (buttonText.includes("Read more")) {
				$(this).text(buttonText.replace("Read more", "Read less"));
			} else if (buttonText.includes("Read less"))
				$(this).text(buttonText.replace("Read less", "Read more"));
		}
	});
});
