import re

css_path = 'src/style.css'
with open(css_path, 'r', encoding='utf-8') as f:
    css = f.read()

# 1. Revert yellow back to #fb7c00
# I previously ran a script: css.replace('#fb7c00', 'var(--primary)')
# Now I will replace var(--primary) back to #fb7c00 inside the .hero section!
# Actually, the easiest way is to re-inject the exact CSS I wrote the first time, 
# but with the !important fixes, and max-width: 18ch on the title!

# Let's just find all var(--primary) between .hero { and the end of file and change to #fb7c00
start_idx = css.find('.hero {\n  display: flex;')
if start_idx != -1:
    before = css[:start_idx]
    after = css[start_idx:]
    after = after.replace('var(--primary)', '#fb7c00')
    
    # 2. Add max-width: 18ch to .hero__title
    if 'max-width: 18ch;' not in after:
        after = after.replace('.hero__title {\n  margin: 0;', '.hero__title {\n  margin: 0;\n  max-width: 18ch;')
        
    css = before + after

with open(css_path, 'w', encoding='utf-8') as f:
    f.write(css)
