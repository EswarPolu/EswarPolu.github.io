/* =============================================================================
   PORTFOLIO - MAIN JAVASCRIPT
   Cinematic Monochrome | Chakra Petch + JetBrains Mono
   ============================================================================= */

(function () {
  'use strict';

  /* ===========================================================================
     THEME TOGGLE
     =========================================================================== */
  const html = document.documentElement;
  const themeToggle = document.getElementById('theme-toggle');
  const iconSun = themeToggle ? themeToggle.querySelector('.icon-sun') : null;
  const iconMoon = themeToggle ? themeToggle.querySelector('.icon-moon') : null;

  function setTheme(theme) {
    html.classList.remove('dark', 'light');
    html.classList.add(theme);
    localStorage.setItem('theme', theme);
    updateThemeIcons(theme);
  }

  function updateThemeIcons(theme) {
    if (!iconSun || !iconMoon) return;
    if (theme === 'dark') {
      iconSun.style.display = 'block';
      iconMoon.style.display = 'none';
    } else {
      iconSun.style.display = 'none';
      iconMoon.style.display = 'block';
    }
  }

  // Initialize theme
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
  setTheme(initialTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      const current = html.classList.contains('dark') ? 'dark' : 'light';
      setTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  /* ===========================================================================
     NAVBAR SCROLL BEHAVIOR
     =========================================================================== */
  const navbar = document.getElementById('navbar');

  function handleNavbarScroll() {
    if (!navbar) return;
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  handleNavbarScroll();

  /* ===========================================================================
     ACTIVE SECTION SCROLL SPY
     =========================================================================== */
  const navLinks = document.querySelectorAll('.navbar-nav a');
  const sections = document.querySelectorAll('section[id]');

  function updateActiveLink() {
    const scrollPos = window.scrollY + 120;

    sections.forEach(function (section) {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(function (link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });

  /* ===========================================================================
     MOBILE HAMBURGER MENU
     =========================================================================== */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];

  function openMenu() {
    if (!hamburger || !mobileMenu) return;
    hamburger.classList.add('active');
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    if (!hamburger || !mobileMenu) return;
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (hamburger) {
    hamburger.addEventListener('click', function () {
      if (mobileMenu.classList.contains('active')) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  // Close on link click
  mobileLinks.forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('active')) {
      closeMenu();
    }
  });

  /* ===========================================================================
     SCROLL REVEAL ANIMATIONS
     =========================================================================== */
  const revealElements = document.querySelectorAll('.reveal');

  if (revealElements.length > 0 && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    revealElements.forEach(function (el) {
      revealObserver.observe(el);
    });
  }

  /* ===========================================================================
     EXPERIENCE ACCORDIONS
     =========================================================================== */
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(function (header) {
    header.addEventListener('click', function () {
      const isActive = this.classList.contains('active');

      // Close all accordions in the same experience card
      const card = this.closest('.experience-card');
      if (card) {
        card.querySelectorAll('.accordion-header.active').forEach(function (h) {
          h.classList.remove('active');
          h.setAttribute('aria-expanded', 'false');
        });
      }

      // Toggle clicked accordion
      if (!isActive) {
        this.classList.add('active');
        this.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* ===========================================================================
     HERO COUNTER ANIMATION
     =========================================================================== */
  const metricValues = document.querySelectorAll('.hero-metric-value[data-target]');

  function animateCounter(el) {
    const target = parseFloat(el.getAttribute('data-target'));
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1200;
    const start = performance.now();

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;

      if (target % 1 !== 0) {
        // Decimal target (e.g., 99.9)
        el.textContent = current.toFixed(1) + suffix;
      } else {
        el.textContent = Math.round(current) + suffix;
      }

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }

  if (metricValues.length > 0 && 'IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    metricValues.forEach(function (el) {
      counterObserver.observe(el);
    });
  }

  /* ===========================================================================
     DYNAMIC CONTENT
     =========================================================================== */

  // Footer year
  const footerYear = document.getElementById('footer-year');
  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }

  // Dynamic experience years (base year 2024)
  const baseYear = 2024;
  const currentYear = new Date().getFullYear();
  const yearsExp = currentYear - baseYear;
  const yearsText = yearsExp + '+';

  // Update skill years
  document.querySelectorAll('.skill-years').forEach(function (el) {
    el.textContent = yearsText;
  });

  // Update skills note with current quarter
  const skillsNote = document.querySelector('.skills-note');
  if (skillsNote) {
    const month = new Date().getMonth();
    const quarter = Math.floor(month / 3) + 1;
    skillsNote.textContent = 'Last Updated: Q' + quarter + ' ' + currentYear;
  }

  /* ===========================================================================
     SMOOTH SCROLL FOR ANCHOR LINKS
     =========================================================================== */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const offset = navbar ? navbar.offsetHeight : 0;
        const top = target.offsetTop - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

})();
