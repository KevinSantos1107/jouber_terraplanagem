import re

css_path = 'src/style.css'
with open(css_path, 'r', encoding='utf-8') as f:
    css = f.read()

nav_css = '''
/* --- Desktop Nav inside Hero --- */
.hero__desktop-nav {
  margin: 0 auto;
}
.hero__desktop-nav a {
  color: #ffffff !important;
}
.hero__desktop-nav a:hover {
  color: #fb7c00 !important;
}
'''

# insert it before /* --- Main container --- */
pos = css.find('/* --- Main container --- */')
if pos != -1:
    css = css[:pos] + nav_css + css[pos:]

with open(css_path, 'w', encoding='utf-8') as f:
    f.write(css)
