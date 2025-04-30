document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Basic Contact Form Feedback (replace with actual submission logic)
    const contactForm = document.getElementById('contact-form');
    const formFeedback = document.getElementById('form-feedback');

    if (contactForm && formFeedback) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent actual form submission for this example

            // Simulate form submission
            formFeedback.textContent = 'Thank you for your message! I will get back to you soon.';
            formFeedback.style.display = 'block';
            contactForm.reset(); // Clear the form

            // Hide the message after a few seconds
            setTimeout(() => {
                formFeedback.style.display = 'none';
            }, 5000);

            // In a real scenario, you would send the data here using fetch()
            // to a backend service or an email service like EmailJS/Formspree.
            /*
            const formData = new FormData(contactForm);
            fetch('/your-backend-endpoint', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                formFeedback.textContent = 'Message sent successfully!';
                formFeedback.style.display = 'block';
                contactForm.reset();
            })
            .catch((error) => {
                console.error('Error:', error);
                formFeedback.textContent = 'An error occurred. Please try again.';
                formFeedback.style.color = 'red'; // Indicate error
                formFeedback.style.display = 'block';
            });
            */
        });
    }

    // Add subtle hover effect to sections (optional)
    const sections = document.querySelectorAll('main > section.glass-pink');
    sections.forEach(section => {
        section.addEventListener('mouseenter', () => {
            // Example: slightly increase border intensity or add subtle glow
            // section.style.borderColor = 'rgba(255, 105, 180, 0.5)';
        });
        section.addEventListener('mouseleave', () => {
            // Reset style
            // section.style.borderColor = 'var(--glass-border)';
        });
    });

});
