import re

html_path = 'index.html'
with open(html_path, 'r', encoding='utf-8', errors='ignore') as f:
    html = f.read()

# Safe replacement
old_html = '''        <a href="#inicio" class="hero__logo-link" aria-label="'''
# Find where this is, and replace until </a>
start_idx = html.find(old_html)
if start_idx != -1:
    end_idx = html.find('</a>', start_idx) + 4
    
    new_logo_block = '''        <a href="#inicio" class="hero__logo-link" aria-label="Início">
          <img class="hero__logo hero-rise" src="./assets/jouber-logo.png" alt="Jouber Terraplanagem" />
          <span class="logo-name hero-rise" style="color: #fff; text-shadow: 0 2px 4px rgba(0,0,0,0.5);">Jouber Terraplanagem</span>
        </a>'''
        
    html = html[:start_idx] + new_logo_block + html[end_idx:]

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(html)
