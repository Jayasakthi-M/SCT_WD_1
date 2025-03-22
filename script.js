function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener("DOMContentLoaded", function () {
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const messageField = document.getElementById("message");
    const nextToEmail = document.getElementById("nextToEmail");
    const nextToMessage = document.getElementById("nextToMessage");
    const submitButton = document.querySelector(".contact-form button[type='submit']");

    // Initially show only the name field
    nameField.style.display = "block";
    nextToEmail.style.display = "block";

    nextToEmail.addEventListener("click", function () {
        if (nameField.value.trim() !== "") {
            nameField.style.display = "none";
            nextToEmail.style.display = "none";

            emailField.style.display = "block";
            nextToMessage.style.display = "block";
        }
    });

    nextToMessage.addEventListener("click", function () {
        if (emailField.value.trim() !== "") {
            emailField.style.display = "none";
            nextToMessage.style.display = "none";

            messageField.style.display = "block";
            submitButton.style.display = "block";
        }
    });

    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();
        const successMessage = document.getElementById("successMessage");
        successMessage.style.display = "block";

        setTimeout(() => {
            successMessage.style.display = "none";
            nameField.style.display = "block";
            nextToEmail.style.display = "block";

            emailField.style.display = "none";
            nextToMessage.style.display = "none";

            messageField.style.display = "none";
            submitButton.style.display = "none";

            event.target.reset();
        }, 3000);
    });
});
