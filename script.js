document.addEventListener('DOMContentLoaded', () => {
    // Scroll Animation Observer section
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in, .fade-in-up');
    animatedElements.forEach(el => observer.observe(el));

    // Sticky Navbar
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle (Basic implementation)
    const hamburger = document.querySelector('.hamburger');
    // Note: To fully implement, we would need a mobile menu container.
    // For this 'sophisticated' version, we assume desktop-first focus, 
    // but the hamburger hook is here for future expansion.
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            alert('Mobile menu clicked - Implementation placeholder');
        });
    }
});
