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
        const navLinks = document.querySelector('.nav-links');
        const links = document.querySelectorAll('.nav-links a');

        hamburger.addEventListener('click', () => {
            // Toggle Nav
            navLinks.classList.toggle('nav-active');
            hamburger.classList.toggle('toggle');
            
            // Animate Links (Optional refinement if we want staggered animation, 
            // currently handled via CSS transition delay)
        });

        // Close menu when a link is clicked
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('nav-active');
                hamburger.classList.remove('toggle');
            });
        });
    }
});
