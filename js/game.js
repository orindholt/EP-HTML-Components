$(document).ready(() => {
	$("[data-id='leaderboard-toggle-button']").click(function () {
		$("[data-id='leaderboard-overlay']").fadeToggle();
	});
	$("[data-id='notification-toggle-button']").click(function () {
		$(this).closest("[data-id='notification']").hide();
	});
});
