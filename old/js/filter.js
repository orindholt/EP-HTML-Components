$(document).ready(() => {
	function toggleMenu() {
		$("[data-id='menu']").toggleClass("active");
	}

	$("[data-id='menu-exit']").click(function () {
		toggleMenu();
	});

	$("[data-id='menu-toggle']").click(function () {
		toggleMenu();
	});
});
