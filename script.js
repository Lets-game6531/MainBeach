document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Gallery Reveal Logic
    const revealBtn = document.getElementById('reveal-booking');
    const bookingOptions = document.getElementById('booking-options');

    if (revealBtn && bookingOptions) {
        revealBtn.addEventListener('click', () => {
            // Hide the initial button
            revealBtn.style.display = 'none';
            // Show the Airbnb/Booking options
            bookingOptions.style.display = 'flex';
        });
    }
});
