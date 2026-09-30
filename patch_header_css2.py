import re

css_path = 'src/style.css'
with open(css_path, 'r', encoding='utf-8') as f:
    css = f.read()

# Replace everything from /* Logo */ to before /* Phone button */
start_idx = css.find('/* Logo */')
end_idx = css.find('/* Phone button */')

new_logo_block = '''/* Logo */
.hero__logo {
  height: 46px; /* Mobile */
  width: auto;
  filter: drop-shadow(0 10px 8px rgba(0,0,0,.2)) drop-shadow(0 4px 3px rgba(0,0,0,.1));
}
@media (min-width: 640px) {
  .hero__logo { height: clamp(3.5rem, 11svh, 5rem); }
}

.hero__logo-link {
  display: flex !important;
  align-items: center !important;
  gap: 0.5rem !important;
  text-decoration: none !important;
  max-width: calc(100vw - 100px); /* Leave room for hamburger */
}
@media (min-width: 640px) {
  .hero__logo-link { gap: 0.75rem !important; max-width: none; }
}

.hero__logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
  justify-content: center;
  text-shadow: 0 2px 4px rgba(0,0,0,0.5);
  font-family: 'Archivo', system-ui, sans-serif !important;
  overflow: hidden;
}

.hero__logo-jouber {
  color: #fff;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 18px; /* Mobile */
  letter-spacing: 0.02em;
}
.hero__logo-terra {
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
  text-transform: uppercase;
  font-size: 9px; /* Mobile */
  letter-spacing: 0.22em;
  white-space: nowrap;
}

@media (min-width: 640px) {
  .hero__logo-jouber { font-size: 20px; }
  .hero__logo-terra { font-size: 10px; letter-spacing: 0.23em; }
}
@media (min-width: 1024px) {
  .hero__logo-jouber { font-size: 24px; }
  .hero__logo-terra { font-size: 12px; letter-spacing: 0.25em; }
}

'''
css = css[:start_idx] + new_logo_block + css[end_idx:]

# Update header padding
css = re.sub(r'padding: 20px 20px 0 !important;', 'padding: 20px 16px 0 !important; gap: 16px !important;', css)

# Hamburger breakpoint
css = re.sub(r'@media \(min-width: 768px\) \{\s*\.hero \.mobile-menu-btn \{ display: none !important; \}\s*\}',
             '@media (min-width: 1024px) { .hero .mobile-menu-btn { display: none !important; } }', css)

# Desktop Nav breakpoint & styling
start_nav = css.find('/* --- Desktop Nav inside Hero --- */')
end_nav = css.find('/* --- Main container --- */')

new_nav = '''/* --- Desktop Nav inside Hero --- */
.hero__desktop-nav {
  margin: 0 auto;
  display: none !important; /* Hidden by default (mobile/tablet) */
}
@media (min-width: 1024px) {
  .hero__desktop-nav {
    display: flex !important;
    gap: 1.5rem;
    align-items: center;
  }
}
.hero__desktop-nav a {
  color: #ffffff !important;
  font-weight: 600 !important;
  font-size: 13.5px !important;
  letter-spacing: 0.03em !important;
  text-decoration: none !important;
  text-transform: uppercase !important;
  transition: color 0.2s;
}
.hero__desktop-nav a:hover {
  color: #fb7c00 !important;
}

'''
css = css[:start_nav] + new_nav + css[end_nav:]

with open(css_path, 'w', encoding='utf-8') as f:
    f.write(css)
