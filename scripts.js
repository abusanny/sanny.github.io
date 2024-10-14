// scripts.js

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // -------------------------------
    // Dark Mode Toggle
    // -------------------------------
    const toggleSwitch = document.getElementById('toggle-switch');
    const moonIcon = document.getElementById('moon');
    const sunIcon = document.getElementById('sun');

    // Function to enable dark mode
    const enableDarkMode = () => {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark');
    };

    // Function to enable light mode
    const enableLightMode = () => {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    };

    // Check for saved user preference on load
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        enableDarkMode();
    } else {
        enableLightMode();
    }

    // Event listener for toggle switch
    toggleSwitch.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');

        // Save user preference to localStorage
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    // -------------------------------
    // Mobile Navigation Menu Toggle
    // -------------------------------
    const menuButton = document.querySelector('.nav-menu-btn i');
    const navMenu = document.getElementById('myNavMenu');

    // Event listener for menu button click
    menuButton.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });

    // Function to toggle the menu (for inline onclick in HTML)
    window.myMenuFunction = function() {
        navMenu.classList.toggle('show');
    };

    // Close mobile menu when a link is clicked
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('show')) {
                navMenu.classList.remove('show');
            }
        });
    });

    // -------------------------------
    // Typed.js Initialization
    // -------------------------------
    if (document.querySelector('.typedText')) {
        const typed = new Typed('.typedText', {
            strings: ['MedTech Student', 'Researcher', 'AI Enthusiast'],
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000,
            loop: true
        });
    }

    // -------------------------------
    // ScrollReveal Initialization
    // -------------------------------
    if (typeof ScrollReveal !== 'undefined') {
        ScrollReveal().reveal('.featured-box, .section', {
            origin: 'bottom',
            distance: '50px',
            duration: 1000,
            easing: 'ease-in-out',
            reset: false,
            interval: 200
        });
    }

    // -------------------------------
    // Form Submission Handling
    // -------------------------------
    const contactForm = document.querySelector('.form-control');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get form values
            const name = contactForm.name.value.trim();
            const email = contactForm.email.value.trim();
            const subject = contactForm.subject.value.trim();
            const message = contactForm.message.value.trim();

            // Basic validation
            if (name === '' || email === '' || subject === '' || message === '') {
                alert('Please fill in all fields.');
                return;
            }

            // Example: Log the form data (replace with actual submission logic)
            console.log('Form Submission:', { name, email, subject, message });

            // Reset the form
            contactForm.reset();

            // Provide feedback to the user
            alert('Your message has been sent successfully!');
        });
    }
});
