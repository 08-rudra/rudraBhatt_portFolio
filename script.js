/* ============================================
   RUDRA BHATT PORTFOLIO — script.js
   Hidden keyword theme system + UI interactions
   ============================================ */

// ─── THEME SYSTEM ───────────────────────────

const THEMES = ['light-theme', 'dark-theme', 'blue-theme', 'grey-theme'];

const KEYWORD_MAP = {
  // Dark
  'dark':    'dark-theme',
  'black':   'dark-theme',
  'night':   'dark-theme',
  'noir':    'dark-theme',
  'dim':     'dark-theme',

  // Light
  'light':   'light-theme',
  'white':   'light-theme',
  'bright':  'light-theme',
  'clean':   'light-theme',

  // Blue
  'blue':    'blue-theme',
  'sky':     'blue-theme',
  'skyblue': 'blue-theme',
  'ocean':   'blue-theme',
  'navy':    'blue-theme',

  // Grey
  'grey':    'grey-theme',
  'gray':    'grey-theme',
  'minimal': 'grey-theme',
  'mono':    'grey-theme',
  'stone':   'grey-theme',
};

const BUFFER_SIZE = 10;
let keyBuffer = '';
let bufferTimer = null;

function applyTheme(theme) {
  const body = document.body;
  THEMES.forEach(t => body.classList.remove(t));
  body.classList.add(theme);
  try { localStorage.setItem('rb-theme', theme); } catch(e) {}
}

function loadSavedTheme() {
  try {
    const saved = localStorage.getItem('rb-theme');
    if (saved && THEMES.includes(saved)) applyTheme(saved);
  } catch(e) {}
}

function detectThemeKeyword(buffer) {
  const lower = buffer.toLowerCase();
  for (const [keyword, theme] of Object.entries(KEYWORD_MAP)) {
    if (lower.includes(keyword)) {
      applyTheme(theme);
      showThemeToast(theme);
      return true;
    }
  }
  return false;
}

function showThemeToast(theme) {
  const labels = {
    'light-theme': 'Light',
    'dark-theme':  'Dark',
    'blue-theme':  'Blue',
    'grey-theme':  'Grey',
  };

  let toast = document.getElementById('theme-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'theme-toast';
    toast.style.cssText = `
      position: fixed; bottom: 28px; left: 50%; transform: translateX(-50%) translateY(60px);
      background: var(--text-primary); color: var(--bg);
      font-family: 'DM Sans', sans-serif; font-size: 0.78rem; font-weight: 500;
      padding: 8px 18px; border-radius: 20px; z-index: 9999;
      opacity: 0; transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
      pointer-events: none; letter-spacing: 0.04em;
      white-space: nowrap;
    `;
    document.body.appendChild(toast);
  }

  toast.textContent = labels[theme] + ' theme';
  setTimeout(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateX(-50%) translateY(0)';
  }, 10);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(60px)';
  }, 2000);
}

// Global key listener — buffer tracks last N chars typed anywhere
document.addEventListener('keydown', function(e) {
  // Ignore modifier-key combos and special keys
  if (e.metaKey || e.ctrlKey || e.altKey) return;
  if (e.key.length > 1) return; // ignore Enter, Escape, etc.

  // Don't intercept if user is typing in an input/textarea/select
  const tag = document.activeElement && document.activeElement.tagName;
  if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;

  keyBuffer += e.key;
  if (keyBuffer.length > BUFFER_SIZE) {
    keyBuffer = keyBuffer.slice(keyBuffer.length - BUFFER_SIZE);
  }

  clearTimeout(bufferTimer);
  bufferTimer = setTimeout(() => { keyBuffer = ''; }, 3000);

  detectThemeKeyword(keyBuffer);
});


// ─── MOBILE NAV ─────────────────────────────

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger && hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});


// ─── SCROLL REVEAL ──────────────────────────

function initScrollReveal() {
  const targets = document.querySelectorAll(
    '.stat-card, .skill-group, .timeline-item, .project-card, .award-card, .contact-card, .about-text, .about-stats, .section-title, .section-label'
  );

  targets.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger children of grids
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, parseInt(delay));
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  // Add stagger delays for grid children
  document.querySelectorAll('.stat-card, .skill-group, .project-card, .award-card, .contact-card').forEach((el, i) => {
    const siblings = el.parentElement.querySelectorAll(
      '.stat-card, .skill-group, .project-card, .award-card, .contact-card'
    );
    const index = Array.from(siblings).indexOf(el);
    el.dataset.delay = index * 80;
  });

  targets.forEach(el => observer.observe(el));
}


// ─── NAV SCROLL EFFECT ───────────────────────

window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  if (window.scrollY > 20) {
    nav.style.boxShadow = '0 1px 12px rgba(0,0,0,0.06)';
  } else {
    nav.style.boxShadow = 'none';
  }
});


// ─── ACTIVE NAV LINK ─────────────────────────

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === `#${id}`
          ? 'var(--text-primary)'
          : '';
        link.style.fontWeight = link.getAttribute('href') === `#${id}` ? '500' : '';
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => navObserver.observe(s));


// ─── INIT ────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  loadSavedTheme();
  initScrollReveal();
});
