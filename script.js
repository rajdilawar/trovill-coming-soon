// Trovill Coming Soon - JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initLoader();
    initCountdown();
    initEmailSubscription();
    initAnimations();
    initParallaxEffect();
});

// Loading Screen
function initLoader() {
    const loadingScreen = document.getElementById('loadingScreen');
    
    // Hide loading screen after content loads
    window.addEventListener('load', function() {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
            // Remove from DOM after animation
            setTimeout(() => {
                loadingScreen.remove();
            }, 500);
        }, 1000); // Show loader for at least 1 second
    });
}

// Countdown Timer
function initCountdown() {
    // Set launch date (30 days from now - you can customize this)
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 30);
    launchDate.setHours(12, 0, 0, 0); // Set to noon
    
    const countdownElements = {
        days: document.getElementById('days'),
        hours: document.getElementById('hours'),
        minutes: document.getElementById('minutes'),
        seconds: document.getElementById('seconds')
    };
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = launchDate.getTime() - now;
        
        if (distance > 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            // Update display with smooth transition
            updateCountdownElement(countdownElements.days, days);
            updateCountdownElement(countdownElements.hours, hours);
            updateCountdownElement(countdownElements.minutes, minutes);
            updateCountdownElement(countdownElements.seconds, seconds);
        } else {
            // Countdown finished
            countdownElements.days.textContent = '00';
            countdownElements.hours.textContent = '00';
            countdownElements.minutes.textContent = '00';
            countdownElements.seconds.textContent = '00';
            
            // Show launch message
            showLaunchMessage();
        }
    }
    
    function updateCountdownElement(element, value) {
        if (!element) return; // Add null check
        const formattedValue = value.toString().padStart(2, '0');
        if (element.textContent !== formattedValue) {
            element.style.transform = 'scale(1.1)';
            element.textContent = formattedValue;
            setTimeout(() => {
                element.style.transform = 'scale(1)';
            }, 150);
        }
    }
    
    function showLaunchMessage() {
        const countdownContainer = document.querySelector('.countdown-container');
        countdownContainer.innerHTML = `
            <div class="launch-message">
                <h3 class="launch-title">🎉 We're Live!</h3>
                <p class="launch-subtitle">Thank you for your patience. Explore our collection now!</p>
                <button class="launch-btn" onclick="window.open('#', '_blank')">Visit Store</button>
            </div>
        `;
    }
    
    // Update every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Email Subscription
function initEmailSubscription() {
    const form = document.getElementById('subscriptionForm');
    const emailInput = document.getElementById('email');
    const messageDiv = document.getElementById('formMessage');
    const submitBtn = form.querySelector('.submit-btn');
    
    form.addEventListener('submit', function(e) {
        // Always prevent default form submission
        e.preventDefault();
        
        const email = emailInput.value.trim();
        
        if (!email) {
            showMessage('Please enter your email address.', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showMessage('Please enter a valid email address.', 'error');
            return;
        }
        
        // Check if email is already subscribed (localStorage simulation)
        const subscribers = JSON.parse(localStorage.getItem('trovillSubscribers') || '[]');
        if (subscribers.includes(email)) {
            showMessage('You\'re already subscribed! We\'ll notify you soon.', 'error');
            return;
        }
        
        // Add to local storage
        subscribers.push(email);
        localStorage.setItem('trovillSubscribers', JSON.stringify(subscribers));
        
        // Show loading state
        submitBtn.style.pointerEvents = 'none';
        submitBtn.innerHTML = `
            <span class="btn-text">Subscribing...</span>
            <div class="btn-spinner"></div>
        `;
        
        // Check if running locally
        const isLocalhost = window.location.hostname === 'localhost' || 
                            window.location.hostname === '127.0.0.1' || 
                            window.location.port === '8000';
        
        if (isLocalhost) {
            // Local testing - just simulate success and redirect
            setTimeout(() => {
                window.location.href = '/success.html';
            }, 1000);
        } else {
            // Production - submit form data to Netlify
            const formData = new FormData(form);
            
            fetch('/', {
                method: 'POST',
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData).toString()
            })
            .then(() => {
                // Redirect to success page after successful submission
                window.location.href = '/success.html';
            })
            .catch((error) => {
                showMessage('Something went wrong. Please try again.', 'error');
                // Reset button on error
                submitBtn.innerHTML = `
                    <span class="btn-text">Notify Me</span>
                    <i class="fas fa-arrow-right btn-icon"></i>
                `;
                submitBtn.style.pointerEvents = 'auto';
            });
        }
    });
    
    function showMessage(text, type) {
        messageDiv.textContent = text;
        messageDiv.className = `form-message ${type}`;
        
        // Clear message after delay
        setTimeout(() => {
            messageDiv.textContent = '';
            messageDiv.className = 'form-message';
        }, 5000);
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function trackSubscription(email) {
        // You can integrate with Google Analytics, Mixpanel, etc.
        console.log('New subscription:', email);
        
        // Example: Send to your backend
        // fetch('/api/subscribe', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ email: email })
        // });
    }
}

// Animations and Scroll Effects
function initAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe animated elements
    const animatedElements = document.querySelectorAll('.feature-item, .countdown-item');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
    
    // Add CSS for animation
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            animation: slideInUp 0.6s ease-out forwards;
        }
        
        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .btn-spinner {
            width: 16px;
            height: 16px;
            border: 2px solid rgba(255,255,255,0.2);
            border-top: 2px solid currentColor;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }
        
        .launch-message {
            text-align: center;
            padding: 2rem;
            background: rgba(76, 175, 80, 0.1);
            border-radius: 16px;
            border: 1px solid rgba(76, 175, 80, 0.3);
            backdrop-filter: blur(10px);
        }
        
        .launch-title {
            font-size: 2rem;
            margin-bottom: 1rem;
            color: #4CAF50;
        }
        
        .launch-subtitle {
            margin-bottom: 2rem;
            color: var(--text-secondary);
        }
        
        .launch-btn {
            padding: 1rem 2rem;
            background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);
            border: none;
            border-radius: 25px;
            color: white;
            font-weight: 600;
            cursor: pointer;
            transition: var(--transition-smooth);
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }
        
        .launch-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(76, 175, 80, 0.3);
        }
    `;
    document.head.appendChild(style);
}

// Parallax Effect
function initParallaxEffect() {
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.feature-item');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.02 + (index * 0.01);
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);
}

// Social Media Integration
function initSocialIntegration() {
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const platform = this.querySelector('i').classList[1].split('-')[1];
            
            // You can add your actual social media links here
            const socialUrls = {
                instagram: 'https://instagram.com/trovill',
                facebook: 'https://facebook.com/trovill',
                twitter: 'https://twitter.com/trovill',
                pinterest: 'https://pinterest.com/trovill'
            };
            
            if (socialUrls[platform]) {
                window.open(socialUrls[platform], '_blank');
            }
        });
    });
}

// Keyboard Navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && e.target === document.getElementById('email')) {
        document.getElementById('subscriptionForm').dispatchEvent(new Event('submit'));
    }
});

// Performance Monitoring
function initPerformanceMonitoring() {
    // Monitor page load performance
    window.addEventListener('load', function() {
        const perfData = performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        
        console.log('Page load time:', pageLoadTime + 'ms');
        
        // You can send this data to your analytics service
        // analytics.track('page_load_time', { duration: pageLoadTime });
    });
}

// Error Handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // You can send error reports to your monitoring service
});

// Initialize performance monitoring
initPerformanceMonitoring();

// Utility Functions
const Utils = {
    // Debounce function for performance
    debounce: function(func, wait, immediate) {
        let timeout;
        return function executedFunction() {
            const context = this;
            const args = arguments;
            const later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    },
    
    // Throttle function for scroll events
    throttle: function(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
};

// Export utilities for use in other scripts
window.TrovillUtils = Utils;