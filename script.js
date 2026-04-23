/* =============================================
   RUDRA BHATT PORTFOLIO v2 — script.js
   Hidden keyword themes + hover polish + UI
   ============================================= */

// ─── THEME SYSTEM ─────────────────────────────

const THEMES = ['light-theme', 'dark-theme', 'blue-theme', 'grey-theme'];

const KEYWORD_MAP = {
  'dark':    'dark-theme',  'black':   'dark-theme',
  'night':   'dark-theme',  'noir':    'dark-theme',  'dim': 'dark-theme',
  'light':   'light-theme', 'white':   'light-theme',
  'bright':  'light-theme', 'clean':   'light-theme',
  'brown':   'light-theme', // Brown is the accent in light theme
  'blue':    'blue-theme',  'sky':     'blue-theme',
  'skyblue': 'blue-theme',  'ocean':   'blue-theme',  'navy': 'blue-theme',
  'grey':    'grey-theme',  'gray':    'grey-theme',
  'minimal': 'grey-theme',  'mono':    'grey-theme',  'stone': 'grey-theme',
};

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
    'light-theme': '☀ Light',
    'dark-theme':  '◑ Dark',
    'blue-theme':  '◈ Blue',
    'grey-theme':  '▣ Grey',
  };

  let toast = document.getElementById('theme-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'theme-toast';
    Object.assign(toast.style, {
      position: 'fixed', bottom: '30px', left: '50%',
      transform: 'translateX(-50%) translateY(70px)',
      fontFamily: "'DM Sans', sans-serif",
      fontSize: '0.78rem', fontWeight: '500',
      padding: '9px 20px', borderRadius: '24px',
      zIndex: '9999', opacity: '0',
      transition: 'all 0.4s cubic-bezier(0.34,1.56,0.64,1)',
      pointerEvents: 'none', letterSpacing: '0.06em',
      whiteSpace: 'nowrap',
      background: 'var(--text-primary)', color: 'var(--bg)',
      boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
    });
    document.body.appendChild(toast);
  }

  toast.textContent = labels[theme] + ' theme activated';
  requestAnimationFrame(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateX(-50%) translateY(0)';
  });
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(60px)';
  }, 2200);
}

document.addEventListener('keydown', function(e) {
  if (e.metaKey || e.ctrlKey || e.altKey) return;
  if (e.key.length > 1) return;
  const tag = document.activeElement && document.activeElement.tagName;
  if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;

  keyBuffer += e.key;
  if (keyBuffer.length > 12) keyBuffer = keyBuffer.slice(-12);

  clearTimeout(bufferTimer);
  bufferTimer = setTimeout(() => { keyBuffer = ''; }, 3000);

  detectThemeKeyword(keyBuffer);
});

// ─── MOBILE NAV ──────────────────────────────

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger && hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});

// ─── ACTIVE NAV LINK ─────────────────────────

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        const isActive = link.getAttribute('href') === `#${id}`;
        link.classList.toggle('active', isActive);
      });
    }
  });
}, { threshold: 0.45 });

sections.forEach(s => navObserver.observe(s));

// ─── NAV SCROLL SHADOW ───────────────────────

window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  nav.style.boxShadow = window.scrollY > 20
    ? '0 1px 16px rgba(0,0,0,0.07)'
    : 'none';
}, { passive: true });

// ─── SCROLL REVEAL ───────────────────────────

function initScrollReveal() {
  const targets = document.querySelectorAll(
    '.stat-card, .skill-group, .timeline-item, .project-card, .award-card, .contact-card, .about-text, .about-stats, .section-title, .section-label'
  );

  targets.forEach(el => el.classList.add('reveal'));

  // Add stagger delays for grid children
  ['.stat-card', '.skill-group', '.project-card', '.award-card', '.contact-card'].forEach(sel => {
    document.querySelectorAll(sel).forEach((el, i) => {
      el.dataset.delay = i * 85;
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = parseInt(entry.target.dataset.delay || 0);
        setTimeout(() => entry.target.classList.add('visible'), delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -36px 0px' });

  targets.forEach(el => observer.observe(el));
}

// ─── ORBIT TILT ON MOUSE MOVE ────────────────
// Subtle parallax on hero graphic when mouse moves
const heroSection = document.getElementById('hero');
const heroGraphic = document.getElementById('heroGraphic');

if (heroSection && heroGraphic) {
  heroSection.addEventListener('mousemove', (e) => {
    const rect = heroSection.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / rect.width;
    const dy = (e.clientY - cy) / rect.height;
    heroGraphic.style.transform = `translateY(-50%) perspective(800px) rotateY(${dx * -8}deg) rotateX(${dy * 6}deg)`;
  }, { passive: true });

  heroSection.addEventListener('mouseleave', () => {
    heroGraphic.style.transform = 'translateY(-50%) perspective(800px) rotateY(0deg) rotateX(0deg)';
  });
}

// ─── INIT ────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  loadSavedTheme();
  initScrollReveal();
});
