$(document).ready(() => {
	$("[data-id='start-button']").click(function () {
		$("[data-id='game-active']").slideToggle();
		$("[data-id='start-button']").slideToggle();
	});
});
