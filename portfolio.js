/* =============================================
   PORTFOLIO WEBSITE - JAVASCRIPT
   ============================================= */

// DOM Elements
const mainBody = document.getElementById('mainBody');
const themeToggle = document.getElementById('themeToggle');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const navbar = document.getElementById('navbar');
const sections = document.querySelectorAll('section[id]');

// =============================================
// THEME TOGGLE FUNCTIONALITY
// =============================================

// Load theme preference from localStorage
function loadTheme() {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme === 'dark') {
        mainBody.classList.add('dark-mode');
        updateThemeToggleIcon('dark');
    } else {
        updateThemeToggleIcon('light');
    }
}

// Update theme toggle icon
function updateThemeToggleIcon(theme) {
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        themeToggle.title = 'Toggle Light Mode';
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        themeToggle.title = 'Toggle Dark Mode';
    }
}

// Theme toggle click handler
themeToggle.addEventListener('click', () => {
    mainBody.classList.toggle('dark-mode');
    
    const isDarkMode = mainBody.classList.contains('dark-mode');
    localStorage.setItem('portfolio-theme', isDarkMode ? 'dark' : 'light');
    updateThemeToggleIcon(isDarkMode ? 'dark' : 'light');
});

// =============================================
// SCROLL EFFECTS
// =============================================

window.addEventListener('scroll', () => {
    // Add scrolled class to navbar
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Update active nav link based on scroll position
    updateActiveLink();
});

// Update active navigation link
function updateActiveLink() {
    let current = '';

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
}

// =============================================
// MOBILE MENU TOGGLE
// =============================================

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when a link is clicked
navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// =============================================
// SMOOTH SCROLL FOR NAVIGATION LINKS
// =============================================

navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// =============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// =============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.animation = 'fadeInUp 0.6s ease-out';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe project cards and skill categories
document.querySelectorAll('.project-card, .skill-category, .about-stats, .contact-card').forEach((el) => {
    el.style.opacity = '0';
    observer.observe(el);
});

// =============================================
// HOVER EFFECTS FOR CARDS
// =============================================

const cards = document.querySelectorAll('.project-card, .contact-card, .skill-category');

cards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
        card.style.transition = 'all 0.3s ease';
    });
});

// =============================================
// INITIALIZE
// =============================================

document.addEventListener('DOMContentLoaded', () => {
    loadTheme();
    updateActiveLink();
});

// Update active link on page load
window.addEventListener('load', () => {
    updateActiveLink();
});

// =============================================
// SCROLL ANIMATIONS FOR ELEMENTS
// =============================================

const scrollElements = document.querySelectorAll(
    '.hero-text, .about-text, .about-highlight, .timeline-item, .social-links'
);

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const displayScrollElements = () => {
    scrollElements.forEach((element) => {
        if (elementInView(element, 1.25)) {
            element.classList.add('scrolled');
            element.style.opacity = '1';
        }
    });
};

window.addEventListener('scroll', () => {
    displayScrollElements();
});

// =============================================
// SMOOTH CLICK BEHAVIOR FOR CTA BUTTONS
// =============================================

const ctaButtons = document.querySelectorAll('.cta-button');

ctaButtons.forEach((button) => {
    button.addEventListener('click', function() {
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
});

// =============================================
// PREVENT SMOOTH SCROLL ON HASH LINKS FOR FASTER ANIMATION
// =============================================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// =============================================
// PERFORMANCE OPTIMIZATION - DEBOUNCE SCROLL
// =============================================

function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

const debouncedScroll = debounce(() => {
    updateActiveLink();
}, 50);

window.addEventListener('scroll', debouncedScroll);

// =============================================
// ACCESSIBILITY - KEYBOARD NAVIGATION
// =============================================

document.addEventListener('keydown', (e) => {
    // Close mobile menu on Escape key
    if (e.key === 'Escape') {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// =============================================
// CONSOLE LOG FOR DEBUGGING (Remove in production)
// =============================================

console.log('🎯 Portfolio website loaded successfully!');
console.log('📱 Theme:', mainBody.classList.contains('dark-mode') ? 'Dark' : 'Light');
console.log('🔗 Social profiles connected');
