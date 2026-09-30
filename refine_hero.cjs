const fs = require('fs');

let css = fs.readFileSync('src/style.css', 'utf-8');

// Replace the EXACT HERO MATCH OVERRIDES block with refined exact rules
const marker = '/* ==========================================================================\n   EXACT HERO MATCH OVERRIDES\n   ========================================================================== */';

const exactOverrides = `${marker}

/* 1. Header & Logo Refinement */
header.hero__header {
  position: relative !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  z-index: 20 !important;
  background: transparent !important;
  background-color: transparent !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
  border: none !important;
  border-bottom: none !important;
  box-shadow: none !important;
  height: auto !important;
  padding: 24px 20px 0 !important;
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
}

@media (min-width: 640px) {
  header.hero__header {
    padding: 32px 40px 0 !important;
  }
}

.hero__logo {
  height: 72px !important;
  width: auto !important;
  filter: drop-shadow(0 10px 8px rgba(0, 0, 0, 0.3)) !important;
}

@media (min-width: 640px) {
  .hero__logo {
    height: 84px !important;
  }
}

/* 2. Font & Typography */
.hero,
.hero *,
.hero__title,
.hero__subtitle,
.hero__badge,
.hero__cta,
.hero__stat,
.hero__phone {
  font-family: 'Archivo', system-ui, -apple-system, BlinkMacSystemFont, sans-serif !important;
}

.hero__badge {
  display: inline-flex !important;
  align-items: center !important;
  gap: 8px !important;
  padding: 6px 14px !important;
  border-radius: 9999px !important;
  border: 1px solid rgba(251, 124, 0, 0.4) !important;
  background: rgba(251, 124, 0, 0.15) !important;
  color: #fb7c00 !important;
  font-size: 11px !important;
  font-weight: 800 !important;
  letter-spacing: 0.15em !important;
  text-transform: uppercase !important;
  margin-bottom: 16px !important;
}

.hero__badge-dot {
  width: 6px !important;
  height: 6px !important;
  border-radius: 9999px !important;
  background: #fb7c00 !important;
}

.hero__title {
  font-family: 'Archivo', system-ui, -apple-system, BlinkMacSystemFont, sans-serif !important;
  text-transform: none !important;
  font-weight: 900 !important;
  letter-spacing: -0.03em !important;
  line-height: 1.05 !important;
  color: #ffffff !important;
  font-size: clamp(2.4rem, 7vw, 4.5rem) !important;
  margin: 0 0 20px 0 !important;
  max-width: 650px !important;
}

.hero__title span {
  color: #fb7c00 !important;
  display: inline !important;
  font-weight: 900 !important;
}

.hero__subtitle {
  color: rgba(255, 255, 255, 0.85) !important;
  font-size: clamp(0.95rem, 2vw, 1.125rem) !important;
  line-height: 1.6 !important;
  font-weight: 400 !important;
  margin: 0 0 32px 0 !important;
  max-width: 580px !important;
}

/* 3. Buttons (Pill shape 9999px & exact colors) */
.hero__actions {
  display: flex !important;
  flex-direction: column !important;
  gap: 14px !important;
  margin-top: 32px !important;
}

@media (min-width: 640px) {
  .hero__actions {
    flex-direction: row !important;
    align-items: center !important;
    gap: 16px !important;
  }
}

.hero__cta {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  padding: 16px 32px !important;
  border-radius: 9999px !important; /* Full pill shape */
  font-size: 15px !important;
  line-height: 20px !important;
  text-decoration: none !important;
  text-align: center !important;
  transition: all 200ms ease !important;
}

.hero__cta--primary {
  gap: 10px !important;
  background: #fb7c00 !important;
  color: #140b05 !important;
  font-weight: 900 !important;
  letter-spacing: 0.04em !important;
  text-transform: uppercase !important;
  box-shadow: 0 10px 35px -5px rgba(251, 124, 0, 0.55) !important;
  border: none !important;
}

.hero__cta--primary:hover {
  transform: translateY(-2px) scale(1.02) !important;
  box-shadow: 0 12px 40px -5px rgba(251, 124, 0, 0.7) !important;
}

.hero__cta--secondary {
  gap: 8px !important;
  border: 1px solid rgba(255, 255, 255, 0.3) !important;
  background: rgba(255, 255, 255, 0.08) !important;
  color: #ffffff !important;
  font-weight: 700 !important;
  backdrop-filter: blur(12px) !important;
  -webkit-backdrop-filter: blur(12px) !important;
}

.hero__cta--secondary:hover {
  background: rgba(255, 255, 255, 0.18) !important;
  border-color: rgba(255, 255, 255, 0.5) !important;
}

/* 4. Stats section */
.hero__stats {
  display: grid !important;
  grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
  margin-top: 40px !important;
  padding-top: 24px !important;
  border-top: 1px solid rgba(255, 255, 255, 0.15) !important;
  max-width: 520px !important;
}

.hero__stat {
  padding: 0 16px !important;
  border-left: 1px solid rgba(255, 255, 255, 0.15) !important;
}

.hero__stat:first-child {
  padding-left: 0 !important;
  border-left: 0 !important;
}

.hero__stat dt {
  display: block !important;
  margin-top: 4px !important;
  color: rgba(255, 255, 255, 0.65) !important;
  font-size: 10px !important;
  font-weight: 600 !important;
  line-height: 14px !important;
  letter-spacing: 0.05em !important;
  text-transform: uppercase !important;
}

.hero__stat dd {
  margin: 0 !important;
  color: #ffffff !important;
  font-size: 32px !important;
  font-weight: 900 !important;
  line-height: 36px !important;
}

/* 5. Header Phone & Hamburger buttons */
.hero__phone {
  display: inline-flex !important;
  align-items: center !important;
  gap: 8px !important;
  border-radius: 9999px !important;
  border: 1px solid rgba(255, 255, 255, 0.25) !important;
  background: rgba(255, 255, 255, 0.10) !important;
  backdrop-filter: blur(12px) !important;
  -webkit-backdrop-filter: blur(12px) !important;
  padding: 8px 16px !important;
  font-size: 13px !important;
  font-weight: 700 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.05em !important;
  color: #ffffff !important;
  text-decoration: none !important;
}

.hero .mobile-menu-btn {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  border-radius: 9999px !important;
  border: 1px solid rgba(255, 255, 255, 0.25) !important;
  background: rgba(255, 255, 255, 0.10) !important;
  color: #ffffff !important;
  padding: 8px 12px !important;
  cursor: pointer !important;
  backdrop-filter: blur(12px) !important;
  -webkit-backdrop-filter: blur(12px) !important;
}
`;

if (css.includes(marker)) {
  const parts = css.split(marker);
  css = parts[0] + exactOverrides;
} else {
  css += exactOverrides;
}

fs.writeFileSync('src/style.css', css, 'utf-8');
console.log('src/style.css updated with exact visual tweaks');
