document.addEventListener("DOMContentLoaded", () => {
	const emailFormElements = document.querySelectorAll("[data-id='email-form']");

	const emailRegEx =
		/^([^.][a-z,0-9,!#$%&'*+\-/=?^_`{|}~.]{1,64})([^.,\s]@)([a-z\-]{1,255})(\.[a-z0-9]{2,})$/i;

	// Demo client-side validation
	emailFormElements.forEach(el => {
		let formSubmitted = false;
		const form = el;
		const inputEl = form.querySelector("[data-id='input']");
		const errorEl = form.querySelector("[data-id='error']");

		const errorAttribute = inputEl.attributes["aria-invalid"];

		function testInput(inputValue = inputEl.value) {
			errorAttribute.value = emailRegEx.test(inputValue).toString();
			isInvalid = errorAttribute.value == "true" ? true : false;

			if (isInvalid) {
				errorEl.style.display = "none";
				inputEl.classList.remove("error");
			} else {
				errorEl.style.removeProperty("display");
				inputEl.classList.add("error");
			}
		}

		inputEl.addEventListener(
			"input",
			e => formSubmitted && testInput(e.target.value)
		);

		form.addEventListener("submit", e => {
			e.preventDefault();
			testInput();
			formSubmitted = true;
		});
	});

	const goldPartnerOverlay = document.querySelector("[data-id='tab-overlay']");
	const goldPartnerBtn = document.querySelector(
		"[data-id='gold-partner-button']"
	);
	const goldPartnerVisibleAttribute =
		goldPartnerOverlay.attributes["data-visible"];

	function toggleOverlay(boolean) {
		if (boolean) {
			goldPartnerVisibleAttribute.value = "false";
			goldPartnerOverlay.style.removeProperty("display");
		} else {
			goldPartnerVisibleAttribute.value = "true";
			goldPartnerOverlay.style.display = "none";
		}
	}

	goldPartnerBtn.addEventListener("click", () => toggleOverlay(true));

	// Tabs
	const tabFormElements = document.querySelectorAll("[data-id='tab-form']");

	tabFormElements.forEach(el => {
		const form = el;
		const tabButtons = form.querySelectorAll("[data-id='tab-button']");
		const tabInput = form.querySelector("[data-id='input']");
		const closeButton = form.querySelector("[data-id='close-button']");

		closeButton.addEventListener("click", () => toggleOverlay(false));

		tabButtons.forEach(button =>
			button.addEventListener("click", e => {
				const button = e.currentTarget;
				const currentType = button.attributes["data-type"].value;

				const isEmail = currentType === "email";
				const isPhone = currentType === "phone";

				const inputType = isEmail ? "email" : isPhone ? "tel" : "text";
				const inputPlaceholder = isEmail
					? "mail@mail.com"
					: isPhone
					? "+12345678"
					: "piperka_suva44";

				// Resets tab active class
				tabButtons.forEach(
					tab =>
						tab.classList.contains("active") && tab.classList.remove("active")
				);

				const isActive = button.classList.contains("active");
				if (!isActive) button.classList.add("active");

				tabInput.value = "";
				tabInput.type = inputType;
				tabInput.placeholder = inputPlaceholder;
			})
		);
	});
});
