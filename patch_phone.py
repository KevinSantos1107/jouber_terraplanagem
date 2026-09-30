import re

css_path = 'src/style.css'
with open(css_path, 'r', encoding='utf-8') as f:
    css = f.read()

phone_old = '''/* Phone button */
.hero__phone {
  display: inline-flex;'''

phone_new = '''/* Phone button */
.hero__phone {
  display: none !important; /* Hide completely on mobile */'''

css = css.replace(phone_old, phone_new)

phone_desktop_old = '''@media (min-width: 640px) {
  .hero__phone {
    font-size: 14px;'''

phone_desktop_new = '''@media (min-width: 640px) {
  .hero__phone {
    display: inline-flex !important; /* Show on desktop */
    font-size: 14px;'''

css = css.replace(phone_desktop_old, phone_desktop_new)

with open(css_path, 'w', encoding='utf-8') as f:
    f.write(css)
