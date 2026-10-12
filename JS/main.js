
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm && formStatus) {
    contactForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const submitButton = contactForm.querySelector(
            'button[type="submit"]'
        );

        submitButton.disabled = true;
        submitButton.textContent = "Sending...";

        formStatus.textContent = "";

        const formData = new FormData(contactForm);

        try {
            const response = await fetch(
                "https://formspree.io/f/myekplwq",
                {
                    method: "POST",
                    body: formData,
                    headers: {
                        Accept: "application/json"
                    }
                }
            );

            if (response.ok) {
                formStatus.textContent =
                    "Thank you! Your message has been sent.";
                contactForm.reset();
            } else {
                formStatus.textContent =
                    "Message not sent. Please check the form and try again.";
            }
        } catch (error) {
            formStatus.textContent =
                "Connection error. Please check your internet and try again.";
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = "Send Message →";
        }
    });
}
