// ===================================
// Theme Toggle Functionality
// ===================================

const themeToggle = document.getElementById('themeToggle');
const mainBody = document.getElementById('mainBody');

// Load theme from localStorage
const savedTheme = localStorage.getItem('theme') || 'light-mode';
mainBody.classList.add(savedTheme);
updateThemeToggleIcon(savedTheme);

// Theme toggle button click handler
themeToggle.addEventListener('click', () => {
    if (mainBody.classList.contains('dark-mode')) {
        mainBody.classList.remove('dark-mode');
        mainBody.classList.add('light-mode');
        localStorage.setItem('theme', 'light-mode');
        updateThemeToggleIcon('light-mode');
    } else {
        mainBody.classList.remove('light-mode');
        mainBody.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
        updateThemeToggleIcon('dark-mode');
    }
});

function updateThemeToggleIcon(theme) {
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark-mode') {
        icon.className = 'fas fa-sun';
        themeToggle.title = 'Switch to Light Mode';
    } else {
        icon.className = 'fas fa-moon';
        themeToggle.title = 'Switch to Dark Mode';
    }
}

// ===================================
// Navigation Menu Interactivity
// ===================================

const navbar = document.getElementById('navbar');
const navMenu = document.getElementById('navMenu');
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelectorAll('.nav-link');

// ===================================
// Scroll Detection - Change Navbar Style
// ===================================
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        // Add scrolled class when user scrolls down more than 100px
        navbar.classList.add('scrolled');
    } else {
        // Remove scrolled class when user scrolls back to top
        navbar.classList.remove('scrolled');
    }
});

// ===================================
// Hamburger Menu Toggle
// ===================================
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===================================
// Active Link Highlight on Scroll
// ===================================
window.addEventListener('scroll', () => {
    updateActiveLink();
});

function updateActiveLink() {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
}

// ===================================
// Hover Effects on Menu Items
// ===================================
navLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
        // Add subtle scale effect on hover
        this.style.transform = 'scale(1.05)';
    });

    link.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// ===================================
// Program Card Hover Effects
// ===================================
const programCards = document.querySelectorAll('.program-card');
programCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 12px 25px rgba(13, 71, 161, 0.3)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.boxShadow = '0 4px 12px rgba(13, 71, 161, 0.1)';
    });
});

// ===================================
// Testimonial Card Hover Effects
// ===================================
const testimonialCards = document.querySelectorAll('.testimonial-card');
testimonialCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 12px 25px rgba(13, 71, 161, 0.3)';
        this.style.borderLeft = '4px solid #0d47a1';
    });

    card.addEventListener('mouseleave', function() {
        this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        this.style.borderLeft = 'none';
    });
});

// ===================================
// Form Submission
// ===================================
const applicationForm = document.querySelector('.application-form');
if (applicationForm) {
    applicationForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const program = document.getElementById('program').value;

        // Basic validation
        if (name.trim() === '' || email.trim() === '' || program === '') {
            alert('Please fill in all fields');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }

        // Show success message
        showSuccessMessage();

        // Reset form
        applicationForm.reset();
    });
}

function showSuccessMessage() {
    const form = document.querySelector('.application-form');
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.innerHTML = `
        <p style="
            background-color: #4caf50;
            color: white;
            padding: 1rem;
            border-radius: 5px;
            margin-bottom: 1rem;
            text-align: center;
            animation: slideDown 0.4s ease;
        ">
            ✓ Application submitted successfully! We'll be in touch soon.
        </p>
    `;

    form.insertBefore(successMessage, form.firstChild);

    // Remove success message after 4 seconds
    setTimeout(() => {
        successMessage.remove();
    }, 4000);
}

// ===================================
// CTA Button Click Handler
// ===================================
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', function() {
        // Scroll to the application section
        document.getElementById('apply').scrollIntoView({ behavior: 'smooth' });
    });
}

// ===================================
// Smooth Scroll for Anchor Links
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Page Load - Update Active Link
// ===================================
window.addEventListener('load', () => {
    updateActiveLink();
});

// ===================================
// Add Scroll Animation to Elements
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all program cards and testimonial cards
document.querySelectorAll('.program-card, .testimonial-card').forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
});

// ===================================
// Mobile Menu Close on Outside Click
// ===================================
document.addEventListener('click', (e) => {
    const isClickInsideNav = navbar.contains(e.target);
    if (!isClickInsideNav && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ===================================
// Navbar Color Change on Hover (Additional Effect)
// ===================================
navbar.addEventListener('mouseenter', function() {
    if (!this.classList.contains('scrolled')) {
        this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    }
});

navbar.addEventListener('mouseleave', function() {
    if (!this.classList.contains('scrolled')) {
        this.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    }
});

// ===================================
// Console Log for Development
// ===================================
console.log('Landing page interactive menu loaded successfully!');
console.log('Features: Scroll detection, Hover effects, Mobile responsive menu, Dark/Light theme toggle');

