import re

html_path = 'index.html'
with open(html_path, 'r', encoding='utf-8') as f:
    html = f.read()

# Replace the logo name span
old_logo = '''          <span class="logo-name hero-rise" style="color: #fff; text-shadow: 0 2px 4px rgba(0,0,0,0.5);">Jouber Terraplanagem</span>'''
new_logo = '''          <div class="hero__logo-text hero-rise">
            <span class="hero__logo-jouber">JOUBER</span>
            <span class="hero__logo-terra">TERRAPLANAGEM</span>
          </div>'''

html = html.replace(old_logo, new_logo)

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(html)
