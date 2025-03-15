const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", event => {
    event.preventDefault();
    const inputsEl = formEl.querySelectorAll('input');
    for (const inputEl of inputsEl) {
        const trimmedInput = inputEl.value.trim();
        if (trimmedInput === '') {
            alert("All form fields must be filled in");
            return;
        };
    };
            const inputEmail = formEl.elements.email;
            const inputPassword = formEl.elements.password;
            const object = {
            email: inputEmail.value.trim(),
            password: inputPassword.value.trim()
        };
            console.log(object);
            formEl.reset();
    
});   
