// Trovill — Editorial Landing Page

(function () {
  'use strict';

  // -- Smooth scroll to waitlist --
  window.scrollToWL = function() {
    var wlSection = document.getElementById('wl-section');
    if (wlSection) {
      wlSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(function() {
        var emailInput = document.getElementById('heroEmail');
        if (emailInput) emailInput.focus();
      }, 600);
    }
  };

  // -- Waitlist form submission --
  var heroEmail = document.getElementById('heroEmail');
  var submitBtn = document.getElementById('heroSubmit');
  var wlSuccess = document.getElementById('wl-success');
  var wlAlready = document.getElementById('wl-already');
  var wlRow = document.querySelector('.wl-row');
  var wlConsent = document.getElementById('wl-consent-check');
  var wlConsentSection = document.querySelector('.wl-consent');

  function showSuccess() {
    wlRow.style.display = 'none';
    if (wlConsentSection) wlConsentSection.style.display = 'none';
    if (wlSuccess) wlSuccess.style.display = 'block';
    heroEmail.value = '';
  }

  function showAlreadySubscribed() {
    wlRow.style.display = 'none';
    if (wlConsentSection) wlConsentSection.style.display = 'none';
    if (wlAlready) wlAlready.style.display = 'block';
    heroEmail.value = '';
  }

  function showError() {
    heroEmail.classList.add('error');
    heroEmail.placeholder = 'Fehler. Bitte versuchen Sie es später erneut.';
    setTimeout(function() {
      heroEmail.classList.remove('error');
      heroEmail.placeholder = 'ihre@email.de';
    }, 2000);
  }

  // MailerLite callback for successful subscription
  window.ml_webform_success_2044177 = function() {
    showSuccess();
  };

  // Listen for MailerLite form messages (including already subscribed)
  window.addEventListener('message', function(event) {
    if (event.data && event.data.type === 'mailerlite') {
      if (event.data.action === 'success') {
        showSuccess();
      } else if (event.data.action === 'already_subscribed') {
        showAlreadySubscribed();
      }
    }
  });

  function handleWL(e) {
    if (e) e.preventDefault();
    
    var email = heroEmail.value.trim();
    if (!email || !isValidEmail(email)) {
      heroEmail.classList.add('error');
      heroEmail.placeholder = 'Bitte geben Sie eine gültige E-Mail-Adresse ein';
      setTimeout(function() {
        heroEmail.classList.remove('error');
        heroEmail.placeholder = 'ihre@email.de';
      }, 1500);
      return;
    }
    
    // Remove error class if present
    heroEmail.classList.remove('error');

    // Check if email was already submitted
    if (isEmailSubscribed(email)) {
      showAlreadySubscribed();
      return;
    }

    // Check consent checkbox
    if (!wlConsent || !wlConsent.checked) {
      if (wlConsentSection) {
        wlConsentSection.classList.add('error');
        setTimeout(function() {
          wlConsentSection.classList.remove('error');
        }, 1500);
      }
      return;
    }
    
    // Remove error classes if present
    if (wlConsentSection) wlConsentSection.classList.remove('error');

    var origText = submitBtn.textContent;
    submitBtn.textContent = 'Sending…';
    submitBtn.disabled = true;

    // Save email to localStorage
    saveSubscribedEmail(email);

    // Use MailerLite embedded form
    triggerMLFallback(email);
    
    // Re-enable button after a short delay
    setTimeout(function() {
      submitBtn.textContent = origText;
      submitBtn.disabled = false;
    }, 2000);
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function isEmailSubscribed(email) {
    try {
      var subscribedEmails = JSON.parse(localStorage.getItem('trovill_subscribed') || '[]');
      return subscribedEmails.indexOf(email.toLowerCase()) !== -1;
    } catch(e) {
      return false;
    }
  }

  function saveSubscribedEmail(email) {
    try {
      var subscribedEmails = JSON.parse(localStorage.getItem('trovill_subscribed') || '[]');
      if (subscribedEmails.indexOf(email.toLowerCase()) === -1) {
        subscribedEmails.push(email.toLowerCase());
        localStorage.setItem('trovill_subscribed', JSON.stringify(subscribedEmails));
      }
    } catch(e) {
      // localStorage not available
    }
  }

  function triggerMLFallback(email) {
    var mlInput = document.querySelector('.ml-embedded input[type="email"]');
    var mlBtn = document.querySelector('.ml-embedded button[type="submit"]');
    if (mlInput && mlBtn) {
      var nativeSetter = Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype, 'value'
      ).set;
      nativeSetter.call(mlInput, email);
      mlInput.dispatchEvent(new Event('input', { bubbles: true }));
      mlInput.dispatchEvent(new Event('change', { bubbles: true }));
      setTimeout(function() { 
        mlBtn.click(); 
        // Show success message after form submission
        setTimeout(function() {
          showSuccess();
        }, 800);
      }, 100);
    } else {
      showError();
    }
  }

  // -- Event listeners --
  if (submitBtn) {
    submitBtn.addEventListener('click', handleWL);
  }

  if (heroEmail) {
    heroEmail.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') handleWL(e);
    });
  }

})();
