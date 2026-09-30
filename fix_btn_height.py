import re

css_path = 'src/style.css'
with open(css_path, 'r', encoding='utf-8') as f:
    css = f.read()

css = css.replace('  height: 56px;\n', '')

with open(css_path, 'w', encoding='utf-8') as f:
    f.write(css)
