$(document).ready(() => {
	$("[data-id='readmore']")
		.find("[data-id='readmore-button']")
		.click(function () {
			$(this)
				.parents("[data-id='readmore']")
				.find("[data-id='readmore-content']")
				.slideToggle();
			$(this).parent().toggleClass("active");
		});
});
