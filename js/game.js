$(document).ready(() => {
	$("[data-id='start-button']").click(function () {
		$("[data-id='game-active']").slideToggle();
		$("[data-id='start-button']").slideToggle();
	});
	$("[data-id='leaderboard-toggle-button']").click(function () {
		$("[data-id='leaderboard-overlay']").fadeToggle();
	});
	$("[data-id='fullscreen-toggle-button']").click(function () {
		$("[data-id='fullscreen-demo']").toggleClass("fullscreen");
	});
	$("[data-id='notification-toggle-button']").click(function () {
		$(this).closest("[data-id='notification']").hide();
	});
});
