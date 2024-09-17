document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.hero-nav-toggle');
    const navLinks = document.querySelector('.hero-nav-links');

    navToggle.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });
});
