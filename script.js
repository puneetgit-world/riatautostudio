// ==================== SCROLL ANIMATIONS ==================== //

// Intersection Observer for scroll reveal animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all fade-in-up elements on page load
document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.fade-in-up');
    
    revealElements.forEach((element, index) => {
        // Add scroll-reveal class for elements that need scroll observation
        if (element.offsetTop > window.innerHeight) {
            element.classList.add('scroll-reveal');
            observer.observe(element);
        }
    });
});

// ==================== SMOOTH SCROLL FOR NAVIGATION ==================== //

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== PARALLAX EFFECT ==================== //

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const shapes = document.querySelectorAll('.animated-shape');
    
    shapes.forEach((shape, index) => {
        const speed = 0.5 + index * 0.1;
        shape.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ==================== MOBILE MENU TOGGLE ==================== //

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// ==================== FORM SUBMISSION ==================== //

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = {
            name: contactForm.querySelector('input[type="text"]').value,
            email: contactForm.querySelector('input[type="email"]').value,
            phone: contactForm.querySelectorAll('input[type="text"]')[1].value,
            message: contactForm.querySelector('textarea').value
        };
        
        // Show success message
        showNotification('Message sent successfully! We will get back to you soon.', 'success');
        
        // Reset form
        contactForm.reset();
        
        // In a real application, you would send this data to a server
        console.log('Form Data:', data);
    });
}

// ==================== NOTIFICATION SYSTEM ==================== //

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    const styles = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? '#4caf50' : '#2196F3'};
        color: white;
        border-radius: 5px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
        z-index: 2000;
        animation: slideInRight 0.5s ease-out;
        font-weight: 500;
    `;
    
    notification.style.cssText = styles;
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideInRight 0.5s ease-out reverse';
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

// ==================== SCROLL TO TOP BUTTON ==================== //

const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.id = 'scrollToTopBtn';
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #c9a961;
    color: #0a0a0a;
    border: 2px solid #c9a961;
    cursor: pointer;
    font-size: 1.2rem;
    box-shadow: 0 5px 15px rgba(201, 169, 97, 0.4);
    transition: all 0.3s ease;
    z-index: 999;
    font-weight: bold;
`;

document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.display = 'flex';
        scrollToTopBtn.style.alignItems = 'center';
        scrollToTopBtn.style.justifyContent = 'center';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollToTopBtn.addEventListener('mouseenter', () => {
    scrollToTopBtn.style.transform = 'translateY(-5px)';
    scrollToTopBtn.style.boxShadow = '0 8px 25px rgba(201, 169, 97, 0.5)';
    scrollToTopBtn.style.background = '#d4b896';
});

scrollToTopBtn.addEventListener('mouseleave', () => {
    scrollToTopBtn.style.transform = 'translateY(0)';
    scrollToTopBtn.style.boxShadow = '0 5px 15px rgba(201, 169, 97, 0.4)';
    scrollToTopBtn.style.background = '#c9a961';
});

// ==================== STAGGER ANIMATION FOR SERVICE CARDS ==================== //

const serviceCards = document.querySelectorAll('.service-card');
const observer2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const delay = entry.target.getAttribute('data-delay');
            entry.target.style.animationDelay = `${delay * 0.1}s`;
            entry.target.classList.add('fade-in-up');
        }
    });
}, { threshold: 0.1 });

serviceCards.forEach(card => {
    observer2.observe(card);
});

// ==================== COUNTER ANIMATION (Optional Enhancement) ==================== //

function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const range = target - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ==================== ACTIVE NAV LINK HIGHLIGHTING ==================== //

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ==================== ADD CSS FOR ACTIVE LINK ==================== //

const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: #c9a961;
    }
    
    .nav-link.active::after {
        width: 100%;
    }
    
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(60px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;
document.head.appendChild(style);

// ==================== PERFORMANCE OPTIMIZATION ==================== //

// Lazy loading images (for future image implementation)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img.lazy').forEach(img => imageObserver.observe(img));
}

// ==================== MOBILE RESPONSIVE ENHANCEMENTS ==================== //

const isMobile = () => window.innerWidth <= 768;

// Adjust animation delays on mobile for better performance
if (isMobile()) {
    document.querySelectorAll('[data-delay]').forEach(el => {
        el.style.animationDelay = '0s';
    });
}

// ==================== PAGE LOAD ANIMATION ==================== //

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Add subtle animation to hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.classList.add('fade-in-up');
    }
});
