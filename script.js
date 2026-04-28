/* ═══════════════════════════════════════════════════
   RUDRA BHATT PORTFOLIO v4 — script.js
   · Content renderer  · Typewriter  · Custom cursor
   · Hidden themes     · Scroll reveal · Nav · Orbit
═══════════════════════════════════════════════════ */

// ─── CONTENT RENDERER ───────────────────────────
function renderContent() {
  const P = PORTFOLIO;

  // Links
  const emailEl = document.getElementById('social-email');
  const liEl    = document.getElementById('social-linkedin');
  const ghEl    = document.getElementById('social-github');
  if (emailEl) emailEl.href = `mailto:${P.email}`;
  if (liEl)    liEl.href    = P.linkedin;
  if (ghEl)    ghEl.href    = P.github;

  const cvBtn = document.getElementById('cv-btn');
  if (cvBtn) cvBtn.href = P.resumePDF;

  const heroSub = document.getElementById('hero-sub');
  if (heroSub) heroSub.textContent = P.heroSub;

  const photo = document.getElementById('profile-photo');
  if (photo) photo.src = P.profilePhoto;

  // About
  const aboutText = document.getElementById('about-text');
  if (aboutText) {
    aboutText.innerHTML = `
      <h2 class="about-title">${P.aboutTitle}<br/><em>${P.aboutTitleItalic}</em></h2>
      ${P.aboutParagraphs.map(p => `<p>${p}</p>`).join('')}
    `;
  }

  // Stats
  const statsEl = document.getElementById('about-stats');
  if (statsEl) {
    statsEl.innerHTML = P.stats.map(s => `
      <div class="stat-card">
        <span class="stat-num">${s.num}</span>
        <span class="stat-label">${s.label}</span>
      </div>`).join('');
  }

  // Skills
  const skillsEl = document.getElementById('skills-grid');
  if (skillsEl) {
    skillsEl.innerHTML = P.skillGroups.map(g => `
      <div class="skill-group">
        <h4 class="skill-group-title">${g.title}</h4>
        <div class="tags">
          ${g.skills.map(s => `<span class="tag${s.accent ? ' tag-accent' : ''}">${s.name}</span>`).join('')}
        </div>
      </div>`).join('');
  }

  // Experience
  const timelineEl = document.getElementById('timeline');
  if (timelineEl) {
    timelineEl.innerHTML = P.experience.map(e => `
      <div class="timeline-item">
        <div class="timeline-dot${e.current ? '' : ' timeline-dot--muted'}"></div>
        <div class="timeline-content">
          <div class="timeline-header">
            <div>
              <h3 class="timeline-role">${e.role}</h3>
              <p class="timeline-company">${e.company} · ${e.location}</p>
            </div>
            <span class="timeline-date">${e.period}</span>
          </div>
          <ul class="timeline-bullets">
            ${e.bullets.map(b => `<li>${b}</li>`).join('')}
          </ul>
        </div>
      </div>`).join('');
  }

  // Projects
  const projEl = document.getElementById('projects-grid');
  if (projEl) {
    projEl.innerHTML = P.projects.map(p => `
      <div class="project-card">
        <div class="project-tag-row">
          ${p.tags.map(t => `<span class="proj-tag">${t}</span>`).join('')}
        </div>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.desc}</p>
        <div class="project-links">
          ${p.github ? `<a href="${p.github}" target="_blank" class="proj-link">GitHub ↗</a>` : ''}
          ${p.live   ? `<a href="${p.live}"   target="_blank" class="proj-link">Live ↗</a>`   : ''}
        </div>
      </div>`).join('');
  }

  // Awards
  const ICONS = {
    award: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>`,
    education: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
    cert: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 12l2 2 4-4"/></svg>`,
  };

  const awardsEl = document.getElementById('awards-grid');
  if (awardsEl) {
    awardsEl.innerHTML = P.awards.map(a => `
      <div class="award-card${a.featured ? ' award-card--featured' : ''}">
        <div class="award-icon${a.featured ? '' : ' award-icon--muted'}">
          ${ICONS[a.icon] || ICONS.award}
        </div>
        <div>
          <h3 class="award-title">${a.title}</h3>
          <p class="award-org">${a.org}</p>
          <p class="award-desc">${a.desc}</p>
        </div>
      </div>`).join('');
  }

  // Contact
  const cSub = document.getElementById('contact-sub');
  if (cSub) cSub.textContent = P.contactSub;

  const cCards = document.getElementById('contact-cards');
  if (cCards) {
    cCards.innerHTML = `
      <a href="mailto:${P.email}" class="contact-card">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/></svg>
        <span>${P.email}</span>
      </a>
      <a href="tel:${P.phone.replace(/\s/g,'')}" class="contact-card">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        <span>${P.phone}</span>
      </a>
      <a href="${P.linkedin}" target="_blank" class="contact-card">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
        <span>LinkedIn Profile</span>
      </a>`;
  }

  const fc = document.getElementById('footer-copy');
  if (fc) fc.textContent = P.footerCopy;
}


// ─── TYPEWRITER ──────────────────────────────────
function initTypewriter() {
  const el    = document.getElementById('typewriter-text');
  if (!el) return;
  const roles = PORTFOLIO.roles;
  let rIdx = 0, cIdx = 0, deleting = false, paused = false;

  function tick() {
    if (paused) return;
    const word = roles[rIdx];
    if (!deleting) {
      el.textContent = word.slice(0, ++cIdx);
      if (cIdx === word.length) {
        paused = true;
        return setTimeout(() => { deleting = true; paused = false; tick(); }, 2200);
      }
      setTimeout(tick, 55);
    } else {
      el.textContent = word.slice(0, --cIdx);
      if (cIdx === 0) {
        deleting = false;
        rIdx = (rIdx + 1) % roles.length;
        paused = true;
        return setTimeout(() => { paused = false; tick(); }, 380);
      }
      setTimeout(tick, 28);
    }
  }
  setTimeout(tick, 950);
}


// ─── CUSTOM CURSOR ───────────────────────────────
function initCursor() {
  const dot  = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  let mX = -200, mY = -200, rX = -200, rY = -200;

  document.addEventListener('mousemove', (e) => {
    mX = e.clientX; mY = e.clientY;
    dot.style.left = mX + 'px';
    dot.style.top  = mY + 'px';
  }, { passive: true });

  (function animateRing() {
    rX += (mX - rX) * 0.11;
    rY += (mY - rY) * 0.11;
    ring.style.left = rX + 'px';
    ring.style.top  = rY + 'px';
    requestAnimationFrame(animateRing);
  })();

  const hov = 'a,button,.tag,.stat-card,.project-card,.award-card,.contact-card,.social-link,.btn,.timeline-content,.profile-photo-wrap';
  document.addEventListener('mouseover', e => { if (e.target.closest(hov)) document.body.classList.add('cursor-hover'); });
  document.addEventListener('mouseout',  e => { if (e.target.closest(hov)) document.body.classList.remove('cursor-hover'); });
  document.addEventListener('mousedown', () => document.body.classList.add('cursor-click'));
  document.addEventListener('mouseup',   () => document.body.classList.remove('cursor-click'));
  document.addEventListener('mouseleave',() => { dot.style.opacity='0'; ring.style.opacity='0'; });
  document.addEventListener('mouseenter',() => { dot.style.opacity=''; ring.style.opacity=''; });
}


// ─── THEME SYSTEM ────────────────────────────────
const THEMES = ['light-theme','dark-theme','blue-theme','grey-theme'];
const KW_MAP  = {
  dark:'dark-theme',black:'dark-theme',night:'dark-theme',noir:'dark-theme',dim:'dark-theme',
  light:'light-theme',white:'light-theme',bright:'light-theme',clean:'light-theme',
  blue:'blue-theme',sky:'blue-theme',skyblue:'blue-theme',ocean:'blue-theme',navy:'blue-theme',
  grey:'grey-theme',gray:'grey-theme',minimal:'grey-theme',mono:'grey-theme',stone:'grey-theme',
};
let keyBuf = '', kTimer = null;

function applyTheme(t) {
  THEMES.forEach(x => document.body.classList.remove(x));
  document.body.classList.add(t);
  try { localStorage.setItem('rb-theme', t); } catch(e) {}
}

function loadSavedTheme() {
  try { const s = localStorage.getItem('rb-theme'); if (s && THEMES.includes(s)) applyTheme(s); } catch(e) {}
}

function showThemeToast(t) {
  const lbl = {'light-theme':'☀ Light','dark-theme':'◑ Dark','blue-theme':'◈ Blue','grey-theme':'▣ Grey'};
  let el = document.getElementById('theme-toast');
  if (!el) {
    el = document.createElement('div'); el.id = 'theme-toast';
    Object.assign(el.style, {
      position:'fixed',bottom:'30px',left:'50%',transform:'translateX(-50%) translateY(70px)',
      fontFamily:"'DM Sans',sans-serif",fontSize:'0.76rem',fontWeight:'500',
      padding:'9px 20px',borderRadius:'24px',zIndex:'99990',opacity:'0',
      transition:'all 0.4s cubic-bezier(0.34,1.56,0.64,1)',pointerEvents:'none',
      letterSpacing:'0.06em',whiteSpace:'nowrap',
      background:'var(--text-primary)',color:'var(--bg)',boxShadow:'0 4px 16px rgba(0,0,0,0.15)',
    });
    document.body.appendChild(el);
  }
  el.textContent = lbl[t] + ' theme';
  requestAnimationFrame(() => { el.style.opacity='1'; el.style.transform='translateX(-50%) translateY(0)'; });
  clearTimeout(el._t);
  el._t = setTimeout(() => { el.style.opacity='0'; el.style.transform='translateX(-50%) translateY(60px)'; }, 2200);
}

document.addEventListener('keydown', e => {
  if (e.metaKey||e.ctrlKey||e.altKey||e.key.length>1) return;
  const tag = document.activeElement?.tagName;
  if (tag==='INPUT'||tag==='TEXTAREA'||tag==='SELECT') return;
  keyBuf += e.key; if (keyBuf.length>12) keyBuf=keyBuf.slice(-12);
  clearTimeout(kTimer); kTimer=setTimeout(()=>{keyBuf='';},3000);
  const low = keyBuf.toLowerCase();
  for (const [kw,th] of Object.entries(KW_MAP)) { if (low.includes(kw)) { applyTheme(th); showThemeToast(th); break; } }
});


// ─── MOBILE NAV ──────────────────────────────────
function initMobileNav() {
  const burger = document.getElementById('hamburger');
  const menu   = document.getElementById('mobileMenu');
  if (!burger||!menu) return;
  burger.addEventListener('click', () => { burger.classList.toggle('open'); menu.classList.toggle('open'); });
  document.querySelectorAll('.mobile-link').forEach(a => a.addEventListener('click', () => {
    burger.classList.remove('open'); menu.classList.remove('open');
  }));
}


// ─── ACTIVE NAV ──────────────────────────────────
function initActiveNav() {
  const secs = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-links a');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) links.forEach(a => a.classList.toggle('active', a.getAttribute('href')==='#'+e.target.id)); });
  }, { threshold: 0.4 });
  secs.forEach(s => obs.observe(s));
}


// ─── NAV SCROLL ──────────────────────────────────
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (nav) nav.style.boxShadow = window.scrollY > 20 ? '0 1px 20px rgba(0,0,0,0.07)' : 'none';
}, { passive:true });


// ─── SCROLL REVEAL ───────────────────────────────
function initScrollReveal() {
  setTimeout(() => {
    const sel = '.stat-card,.skill-group,.timeline-item,.project-card,.award-card,.contact-card,.about-left,.about-stats,.section-title,.section-label';
    const targets = document.querySelectorAll(sel);
    targets.forEach(el => el.classList.add('reveal'));
    ['.stat-card','.skill-group','.project-card','.award-card','.contact-card'].forEach(s => {
      document.querySelectorAll(s).forEach((el,i) => { el.dataset.delay = i * 90; });
    });
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        setTimeout(() => e.target.classList.add('visible'), parseInt(e.target.dataset.delay||0));
        obs.unobserve(e.target);
      });
    }, { threshold:0.1, rootMargin:'0px 0px -30px 0px' });
    targets.forEach(el => obs.observe(el));
  }, 60);
}


// ─── ORBIT PARALLAX ──────────────────────────────
function initOrbitParallax() {
  const hero = document.getElementById('hero');
  const gfx  = document.getElementById('heroGraphic');
  if (!hero||!gfx) return;
  hero.addEventListener('mousemove', e => {
    const r = hero.getBoundingClientRect();
    const dx = (e.clientX - r.left - r.width/2)  / r.width;
    const dy = (e.clientY - r.top  - r.height/2) / r.height;
    gfx.style.transform = `translateY(-50%) perspective(900px) rotateY(${dx*-9}deg) rotateX(${dy*6}deg)`;
  }, { passive:true });
  hero.addEventListener('mouseleave', () => {
    gfx.style.transform = 'translateY(-50%) perspective(900px) rotateY(0deg) rotateX(0deg)';
  });
}


// ─── INIT ─────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  loadSavedTheme();
  renderContent();
  initTypewriter();
  initCursor();
  initMobileNav();
  initActiveNav();
  initScrollReveal();
  initOrbitParallax();
});
