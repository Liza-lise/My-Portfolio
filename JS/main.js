const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm && formStatus) {
    contactForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        if (!contactForm.reportValidity()) return;
        const submitButton = contactForm.querySelector('button[type="submit"]');
        if (submitButton.disabled) return;
        const originalLabel = submitButton.textContent;
        submitButton.disabled = true;
        submitButton.textContent = 'Sending…';
        contactForm.setAttribute('aria-busy', 'true');
        formStatus.dataset.state = 'pending';
        formStatus.textContent = 'Sending your message…';
        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: new FormData(contactForm),
                headers: { Accept: 'application/json' },
                signal: AbortSignal.timeout(15000)
            });
            if (!response.ok) throw new Error('Submission failed');
            formStatus.dataset.state = 'success';
            formStatus.textContent = 'Thank you! Your message has been sent.';
            contactForm.reset();
        } catch (error) {
            formStatus.dataset.state = 'error';
            formStatus.textContent = 'Your message could not be sent. Please try again, or connect with me on LinkedIn using the link below.';
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = originalLabel;
            contactForm.removeAttribute('aria-busy');
        }
    });
}
