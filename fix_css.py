import re

css_path = 'src/style.css'

with open(css_path, 'r', encoding='utf-8') as f:
    css = f.read()

# Find the start of `.hero {`
start_idx = css.find('\n.hero {\n')
if start_idx == -1:
    start_idx = css.find('.hero {')

if start_idx != -1:
    # keep everything before .hero
    css = css[:start_idx]

# Append new CSS
new_css = """
/* ==========================================================================
   HERO E HEADER - AJUSTE FINO LOVABLE REFERENCE
   ========================================================================== */
.hero {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-height: 100svh;
  background: var(--color-background);
  color: var(--color-foreground);
  position: relative;
  /* NO overflow: hidden here so it can grow if needed */
}

/* Background layers */
.hero__background, .hero__slide, .hero__video, .hero__video-mount, .hero__overlay {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}
.hero__slide {
  opacity: 0;
  animation: hero-kenburns 24s ease-in-out infinite;
}
.hero__slide:nth-child(2) { animation-delay: 6s; }
.hero__slide:nth-child(3) { animation-delay: 12s; }
.hero__slide:nth-child(4) { animation-delay: 18s; }
.hero__overlay--vertical {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.85));
}
.hero__overlay--horizontal {
  background: linear-gradient(to right, rgba(0, 0, 0, 0.6), transparent, transparent);
}

@keyframes hero-kenburns {
  0% { opacity: 0; transform: scale(1.08); }
  6% { opacity: 1; }
  25% { opacity: 1; }
  31% { opacity: 0; }
  100% { opacity: 0; transform: scale(1); }
}

@keyframes hero-rise {
  from { opacity: 0; transform: translateY(28px); }
  to { opacity: 1; transform: translateY(0); }
}
.hero-rise {
  animation: hero-rise 0.9s cubic-bezier(0.22, 1, 0.36, 1) both;
}

/* Header NO FLUXO */
.hero__header {
  position: relative;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: clamp(1rem, 3svh, 2rem);
  padding-inline: 20px;
}
@media (min-width: 640px) {
  .hero__header {
    padding-inline: 40px;
    padding-top: 32px;
  }
}

.hero__logo {
  height: 56px; /* 3.5rem */
  width: auto;
  filter: drop-shadow(0 10px 8px rgba(0, 0, 0, 0.2)) drop-shadow(0 4px 3px rgba(0, 0, 0, 0.1));
}
@media (min-width: 640px) {
  .hero__logo {
    height: clamp(3.25rem, 11svh, 5rem);
  }
}

/* Header button (Phone) */
.hero__phone {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  font-weight: 600;
  text-decoration: none;
  text-transform: uppercase;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition: background-color 150ms ease;
  padding: 8px 16px;
  font-size: 12px;
}
.hero__phone:hover {
  background: rgba(255, 255, 255, 0.2);
}
.hero__phone-icon {
  width: 16px;
  height: 16px;
  color: #fb7c00;
}
.hero__phone-desktop { display: none; }
.hero__phone-mobile { display: inline; }

@media (min-width: 640px) {
  .hero__phone {
    font-size: 14px;
    padding: 10px 20px;
    text-transform: none; /* Desktop says (31) 99668-6933, usually no transform needed */
  }
  .hero__phone-desktop { display: inline; }
  .hero__phone-mobile { display: none; }
}

/* Hamburger button */
.hero .mobile-menu-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: rgba(255, 255, 255, 0.10);
  color: #ffffff;
  padding: 8px 12px;
  cursor: pointer;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition: background-color 150ms ease;
}
.hero .mobile-menu-btn:hover {
  background: rgba(255, 255, 255, 0.20);
}
@media (min-width: 768px) {
  .hero .mobile-menu-btn { display: none; }
}

/* Mobile Nav - fix to open below header correctly */
.mobile-nav {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: rgba(20, 16, 12, 0.95);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: block;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
  opacity: 0;
  padding: 0 1.25rem;
}
.mobile-nav.open {
  max-height: 400px;
  opacity: 1;
  padding-bottom: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}
.mobile-nav a {
  display: block;
  padding: 0.875rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
}
.mobile-nav a:last-child {
  border-bottom: none;
}

/* Hero Content Area */
.hero__content {
  position: relative;
  z-index: 10;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: clamp(0.75rem, 3svh, 2rem);
  padding-bottom: 24px;
  padding-inline: 20px;
}
@media (min-width: 640px) {
  .hero__content {
    padding-inline: 40px;
  }
}
@media (min-width: 1024px) {
  .hero__content {
    padding-inline: 64px;
  }
}

.hero__copy {
  max-width: 100%;
}

/* Badge */
.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  border: 1px solid rgba(251, 124, 0, 0.4);
  background: rgba(251, 124, 0, 0.15);
  border-radius: 9999px;
  color: #fb7c00;
  font-size: 11px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  backdrop-filter: blur(4px);
  margin: 0;
  margin-bottom: 16px;
  width: fit-content;
}
.hero__badge-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #fb7c00;
}
@media (min-width: 640px) {
  .hero__badge { font-size: 12px; }
}

/* Typography Overrides */
.hero *, .hero__title, .hero__subtitle, .hero__badge, .hero__cta, .hero__stat, .hero__phone {
  font-family: 'Archivo', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
}

/* Title */
.hero__title {
  margin: 0;
  color: #ffffff;
  font-weight: 900;
  line-height: 1.05;
  letter-spacing: -0.025em;
  text-wrap: balance;
  overflow-wrap: anywhere;
  /* mobile */
  font-size: clamp(1.75rem, min(9.2vw, 5.2svh), 2.75rem);
}
@media (min-width: 640px) {
  .hero__title {
    font-size: clamp(2.75rem, min(7.4vw, 9.6svh), 4.5rem);
  }
}
@media (min-width: 1024px) {
  .hero__title {
    font-size: clamp(2.75rem, min(7.4vw, 9.6svh), 72px);
  }
}
.hero__title span {
  color: #fb7c00;
  font-weight: 900;
}

/* Subtitle */
.hero__subtitle {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.625;
  margin-top: clamp(0.5rem, 2.4svh, 1.5rem);
  /* mobile */
  font-size: clamp(0.875rem, 2.3svh, 1rem);
}
@media (min-width: 640px) {
  .hero__subtitle {
    font-size: clamp(0.9375rem, min(2.4vw, 2.7svh), 1.125rem);
    margin-top: 24px;
    max-width: 36rem;
  }
}

/* Actions */
.hero__actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: clamp(0.75rem, 4.5svh, 2.25rem);
}
@media (min-width: 640px) {
  .hero__actions {
    flex-direction: row;
    align-items: center;
    margin-top: 36px;
  }
}

.hero__cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  text-decoration: none;
  min-height: clamp(2.75rem, 8svh, 3.5rem);
  font-size: clamp(0.8125rem, 2.2svh, 1rem);
  white-space: nowrap;
  height: 56px;
}
@media (min-width: 640px) {
  .hero__cta {
    padding: 0 36px;
  }
}

.hero__cta--primary {
  gap: 12px;
  background: #fb7c00;
  color: #111;
  font-weight: 800;
  letter-spacing: 0.025em;
  text-transform: uppercase;
  box-shadow: 0 10px 40px -8px rgba(251, 124, 0, 0.6);
  transition: transform 200ms ease;
  width: 100%;
}
@media (min-width: 640px) {
  .hero__cta--primary {
    width: auto;
  }
}
.hero__cta--primary:hover { transform: scale(1.03); }
.hero__cta--primary:active { transform: scale(0.95); }
.hero__cta-icon { width: 20px; height: 20px; }

.hero__cta--secondary {
  gap: 8px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  font-weight: 600;
  backdrop-filter: blur(12px);
  transition: background-color 150ms ease;
  width: 100%;
}
@media (min-width: 640px) {
  .hero__cta--secondary {
    width: auto;
  }
}
.hero__cta--secondary:hover { background: rgba(255, 255, 255, 0.15); }

/* Stats */
.hero__stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  margin-top: clamp(0.875rem, 5.5svh, 3rem);
  padding-top: 24px;
}
@media (min-width: 640px) {
  .hero__stats {
    max-width: 32rem;
    margin-top: 48px;
  }
}

.hero__stat {
  padding: 0 12px;
  border-left: 1px solid rgba(255, 255, 255, 0.15);
}
.hero__stat:first-child { padding-left: 0; border-left: 0; }
@media (min-width: 640px) {
  .hero__stat { padding: 0 20px; }
}

.hero__stat dd {
  margin: 0;
  color: #fff;
  font-weight: 900;
  line-height: 1.1;
  font-size: clamp(1.25rem, 3.4svh, 1.5rem);
}
@media (min-width: 640px) {
  .hero__stat dd { font-size: clamp(1.375rem, 5svh, 2.25rem); }
}

.hero__stat dt {
  display: block;
  margin-top: 4px;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-size: 10px;
}
@media (min-width: 640px) {
  .hero__stat dt { font-size: 12px; }
}

/* Scroll indicator */
.hero__scroll {
  display: none;
}
@media (min-width: 640px) and (min-height: 640px) {
  .hero__scroll {
    position: relative;
    display: flex;
    justify-content: center;
    margin-top: auto;
    padding-top: 2rem;
    pointer-events: none;
  }
  .hero__scroll-frame {
    display: flex;
    width: 24px;
    height: 36px;
    align-items: flex-start;
    justify-content: center;
    padding: 6px;
    border: 2px solid rgba(255, 255, 255, 0.4);
    border-radius: 9999px;
  }
  .hero__scroll-dot {
    width: 4px;
    height: 8px;
    border-radius: 9999px;
    background: rgba(255, 255, 255, 0.7);
  }
}
@keyframes scroll-hint {
  0%, 100% { transform: translateY(0); opacity: 0.9; }
  50% { transform: translateY(8px); opacity: 0.4; }
}
.scroll-hint { animation: scroll-hint 1.8s ease-in-out infinite; }

/* 
 * Regras de altura baixa
 * altura < 640px: esconder s o indicador de scroll (mouse) (feito acima)
 * altura < 520px (celular deitado): esconder estatsticas e boto secundrio
 * altura < 420px: esconder tambm o subttulo
 */
@media (max-height: 519px) {
  .hero__stats,
  .hero__cta--secondary {
    display: none !important;
  }
}
@media (max-height: 419px) {
  .hero__subtitle {
    display: none !important;
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .hero__slide, .hero-rise, .scroll-hint { animation: none; }
  .hero__slide:first-child { opacity: 1; }
}
"""

with open(css_path, 'w', encoding='utf-8') as f:
    f.write(css + new_css)
