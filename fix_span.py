import re

css_path = 'src/style.css'
with open(css_path, 'r', encoding='utf-8') as f:
    css = f.read()

css = css.replace('color: var(--primary);\n  font-weight: 900;\n}', 'color: var(--primary) !important;\n  font-weight: 900 !important;\n}')

with open(css_path, 'w', encoding='utf-8') as f:
    f.write(css)
