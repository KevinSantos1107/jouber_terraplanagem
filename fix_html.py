import re

html_path = 'index.html'
with open(html_path, 'r', encoding='utf-8') as f:
    html = f.read()

# Remove all existing <nav class="desktop-nav ...</nav> blocks
html = re.sub(r'<nav class="desktop-nav[\\s\\S]*?</nav>', '', html)

# Remove all existing <nav class="mobile-nav"[\\s\\S]*?</nav> blocks
html = re.sub(r'<nav class="mobile-nav"[\\s\\S]*?</nav>', '', html)

# The correct links with UTF-8 characters
nav_links = '''
          <a href="#servicos">Serviços</a>
          <a href="#resultados">Resultados</a>
          <a href="#depoimentos">Depoimentos</a>
          <a href="#processo">Processo</a>
          <a href="#sobre">Sobre</a>
          <a href="#duvidas">Dúvidas</a>
'''

desktop_nav = f'''
        <nav class="desktop-nav hero__desktop-nav hero-rise" style="animation-delay: 0.15s">
{nav_links}        </nav>
'''

mobile_nav = f'''
        <nav class="mobile-nav" id="mobile-nav" aria-label="Menu Mobile">
{nav_links}        </nav>
'''

# Put the desktop_nav right before the <div style="display: flex; align-items: center; gap: 0.75rem;">
div_pos = html.find('<div style="display: flex; align-items: center; gap: 0.75rem;">')
if div_pos != -1:
    html = html[:div_pos] + desktop_nav + html[div_pos:]

# Put the mobile_nav right before </header>
header_end_pos = html.find('</header>')
if header_end_pos != -1:
    html = html[:header_end_pos] + mobile_nav + '      </header>' + html[header_end_pos + 9:]

# Clean up any multiple newlines
html = re.sub(r'\\n\\s*\\n\\s*\\n', '\\n\\n', html)

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(html)
