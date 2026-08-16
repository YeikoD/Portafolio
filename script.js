// Performance utility functions
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

const throttle = (func, limit) => {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
};

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

function toggleMenu() {
    const isActive = navLinks.classList.toggle('active');
    const spans = hamburger.querySelectorAll('span');
    
    // Animate hamburger
    spans[0].style.transform = isActive ? 'rotate(45deg) translate(5px, 5px)' : 'none';
    spans[1].style.opacity = isActive ? '0' : '1';
    spans[2].style.transform = isActive ? 'rotate(-45deg) translate(7px, -6px)' : 'none';
    
    // Update ARIA attributes
    hamburger.setAttribute('aria-expanded', isActive);
    navLinks.setAttribute('aria-hidden', !isActive);
}

if (hamburger) {
    hamburger.addEventListener('click', toggleMenu);
    
    // Keyboard accessibility
    hamburger.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleMenu();
        }
    });
}

// Close mobile menu when clicking on a link (event delegation)
document.addEventListener('click', (e) => {
    if (e.target.closest('.nav-links a')) {
        navLinks.classList.remove('active');
        const spans = hamburger.querySelectorAll('span');
        if (spans.length) {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    }
});

// Smooth scroll for navigation links
document.addEventListener('click', (e) => {
    const anchor = e.target.closest('a[href^="#"]');
    if (anchor) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// Header scroll effect (throttled for performance)
const header = document.querySelector('.header');
const handleScroll = throttle(() => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
}, 100);

window.addEventListener('scroll', handleScroll, { passive: true });

// Intersection Observer for animations (optimized)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target); // Stop observing once animated
        }
    });
}, observerOptions);

// Observe elements for animation
const animateElements = () => {
    document.querySelectorAll('.project, .contact-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
};

// Delay animation initialization for better performance
setTimeout(animateElements, 100);

// Active navigation highlighting (throttled for performance)
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

const updateActiveNav = throttle(() => {
    let current = '';
    const scrollPosition = window.scrollY + 200;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    // Handle end of page
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
        const lastSection = sections[sections.length - 1];
        if (lastSection) {
            current = lastSection.getAttribute('id');
        }
    }
    
    navItems.forEach(a => {
        a.style.color = '';
        a.setAttribute('aria-current', 'false');
        if (a.getAttribute('href').slice(1) === current) {
            a.style.color = '#1e3a5f';
            a.setAttribute('aria-current', 'true');
        }
    });
}, 100);

window.addEventListener('scroll', updateActiveNav, { passive: true });

// Typing effect for hero section (optimized with requestAnimationFrame)
const heroText = document.querySelector('.hero-content h2');
if (heroText) {
    const text = heroText.textContent;
    heroText.textContent = '';
    let i = 0;
    let lastTime = 0;
    const typingSpeed = 30;
    
    function typeWriter(currentTime) {
        if (!lastTime) lastTime = currentTime;
        const deltaTime = currentTime - lastTime;
        
        if (deltaTime >= typingSpeed && i < text.length) {
            heroText.textContent += text.charAt(i);
            i++;
            lastTime = currentTime;
        }
        
        if (i < text.length) {
            requestAnimationFrame(typeWriter);
        }
    }
    
    // Start typing effect after a short delay
    setTimeout(() => requestAnimationFrame(typeWriter), 500);
}

// Loading animation optimized
window.addEventListener('load', () => {
    requestAnimationFrame(() => {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.3s ease';
        
        requestAnimationFrame(() => {
            document.body.style.opacity = '1';
        });
    });
});

// Console welcome message
console.log('%c¡Bienvenido a mi portafolio!', 'color: #1e3a5f; font-size: 20px; font-weight: bold;');
console.log('%cDesarrollador enfocado en rendimiento y sistemas de gestión livianos.', 'color: #4a4a4a; font-size: 14px;');
console.log('%cGitHub: https://github.com/YeikoD', 'color: #1e3a5f; font-size: 12px;');
