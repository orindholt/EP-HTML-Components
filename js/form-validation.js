const formElements = document.querySelectorAll("[data-id='email-form']");

const emailRegEx =
	/^([^.][a-z,0-9,!#$%&'*+\-/=?^_`{|}~.]{1,64})([^.,\s]@)([a-z\-]{1,255})(\.[a-z0-9]{2,})$/i;

formElements.forEach(el => {
	el.addEventListener("submit", e => {
		e.preventDefault();
		const formEl = e.currentTarget;
		const inputEl = formEl.querySelector("[data-id='input']");
		const errorEl = formEl.querySelector("[data-id='error']");

		const errorAttribute = inputEl.attributes["aria-invalid"];
		errorAttribute.value = emailRegEx.test(inputEl.value).toString();

		const invalid = errorAttribute.value == "true" ? true : false;

		if (invalid) {
			errorEl.style.display = "none";
			inputEl.classList.remove("error");
		} else {
			errorEl.style.removeProperty("display");
			inputEl.classList.add("error");
		}
	});
});
