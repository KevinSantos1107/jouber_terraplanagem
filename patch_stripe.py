import re

css_path = 'src/style.css'
with open(css_path, 'r', encoding='utf-8') as f:
    css = f.read()

# Fix hazard stripe
stripe_css_old = '.hazard-stripe { height: 8px; background: repeating-linear-gradient(115deg, var(--secondary) 0 14px, var(--secondary) 14px 19px, var(--primary) 19px 34px, var(--primary) 34px 38px); }'
stripe_css_new = '.hazard-stripe { height: 12px; background: repeating-linear-gradient(115deg, #1e1915 0 14px, #1e1915 14px 19px, #fb7c00 19px 34px, #fb7c00 34px 38px); position: relative; z-index: 30; }'
css = css.replace(stripe_css_old, stripe_css_new)

with open(css_path, 'w', encoding='utf-8') as f:
    f.write(css)
