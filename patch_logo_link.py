import re

css_path = 'src/style.css'
with open(css_path, 'r', encoding='utf-8') as f:
    css = f.read()

# Add hero__logo-link CSS
logo_link_css = '''
.hero__logo-link {
  display: flex !important;
  align-items: center !important;
  gap: 0.75rem !important;
  text-decoration: none !important;
}
.hero__logo-link .logo-name {
  font-family: 'Archivo', system-ui, sans-serif !important;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 0.02em;
  font-size: 14px;
}
@media (min-width: 640px) {
  .hero__logo-link .logo-name {
    font-size: 18px;
  }
}
'''
pos = css.find('/* Logo */')
if pos != -1:
    css = css[:pos] + logo_link_css + css[pos:]

with open(css_path, 'w', encoding='utf-8') as f:
    f.write(css)
