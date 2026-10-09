
"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const status = document.getElementById("formStatus");

    if (!form || !status) {
        console.error("Contact form or status message not found.");
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const message = document.getElementById("message");

        if (!name.value.trim() ||
            !email.value.trim() ||
            !message.value.trim()) {
            status.textContent = "Please complete all fields.";
            return;
        }

        if (!email.checkValidity()) {
            status.textContent = "Please enter a valid email address.";
            email.focus();
            return;
        }

        status.textContent =
            "Form submitted successfully! Note: Your message has not been sent.";

        form.reset();
    });
});