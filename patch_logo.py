import re

html_path = 'index.html'
with open(html_path, 'r', encoding='utf-8') as f:
    html = f.read()

# Add logo name next to logo in hero
logo_replacement = '''        <a href=\"#inicio\" class=\"hero__logo-link\" aria-label=\"Início\">
          <img class=\"hero__logo hero-rise\" src=\"./assets/jouber-logo.png\" alt=\"Jouber Terraplanagem\" />
          <span class=\"logo-name hero-rise\" style=\"color: #fff; text-shadow: 0 2px 4px rgba(0,0,0,0.5);\">Jouber Terraplanagem</span>
        </a>'''

html = re.sub(r'<a href=\"#inicio\" class=\"hero__logo-link\" aria-label=\"Incio\">[\\s\\S]*?</a>', logo_replacement, html)
# Also fix the weird char in aria-label
html = html.replace('Incio', 'Início')

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(html)
