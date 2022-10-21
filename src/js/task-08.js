const form = document.querySelector('.login-form');

form.addEventListener("submit", handleSumbit);

function handleSumbit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("Please fill the all fields")
    }

    console.log(`Email: ${email.value}, Password:${password.value}`)
    event.currentTarget.reset()
}
