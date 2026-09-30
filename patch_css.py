import re

css_path = 'src/style.css'
with open(css_path, 'r', encoding='utf-8') as f:
    css = f.read()

# 1. Fix header background
header_fix = '''
header.hero__header {
  background: transparent !important;
  background-color: transparent !important;
  border: none !important;
  border-bottom: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
  box-shadow: none !important;
}
'''
if 'header.hero__header {' not in css:
    css += header_fix

# 2. Fix text-transform on title
if 'text-transform: none;' not in css.split('.hero__title {')[1].split('}')[0]:
    css = css.replace('.hero__title {\n  margin: 0;', '.hero__title {\n  margin: 0;\n  text-transform: none !important;')

with open(css_path, 'w', encoding='utf-8') as f:
    f.write(css)
