const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");
inputEl.addEventListener("input", event => {
    const trimmedInput = inputEl.value.trim();
	if (trimmedInput === '') {
        outputEl.textContent = "Anonymous";
} else {
        outputEl.textContent = inputEl.value;
}
});
