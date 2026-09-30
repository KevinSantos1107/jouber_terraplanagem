import re

html_path = 'index.html'
css_path = 'src/style.css'

with open(html_path, 'r', encoding='utf-8') as f:
    html = f.read()

html = html.replace('<span class=\"hero__phone-mobile\">Ligar</span>', '<span class=\"hero__phone-mobile\">LIGAR</span>')
html = html.replace('justify-end do mobile', '')

# For the mobile-nav structure, the user mentioned it's not working.
# Let's check where it is.
# In index.html, <nav class="mobile-nav"...> is placed AFTER <header>.
# But in CSS, mobile-nav is absolute and top: 100%. 
# Since it's inside main.hero, if we just change the CSS, it should work.

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(html)
