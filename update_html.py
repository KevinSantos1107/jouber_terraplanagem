import re

html_path = 'index.html'
with open(html_path, 'r', encoding='utf-8') as f:
    html = f.read()

# Remove the existing mobile-nav
html = re.sub(r'<nav class="mobile-nav" id="mobile-nav"[\\s\\S]*?</nav>', '', html)

# The links to include in both navs
nav_links = '''
          <a href="#servicos">Serviços</a>
          <a href="#resultados">Resultados</a>
          <a href="#depoimentos">Depoimentos</a>
          <a href="#processo">Processo</a>
          <a href="#sobre">Sobre</a>
          <a href="#duvidas">Dúvidas</a>
'''

# The new nav structures
desktop_nav = f'''
        <nav class="desktop-nav hero__desktop-nav hero-rise" style="animation-delay: 0.15s">
{nav_links}        </nav>
'''

mobile_nav = f'''
        <nav class="mobile-nav" id="mobile-nav" aria-label="Menu Mobile">
{nav_links}        </nav>
'''

# We need to insert the desktop_nav right after the logo and before the phone button.
# Let's find the closing tag of the logo anchor.
logo_end = '</a>'
logo_pos = html.find('<img class="hero__logo')
if logo_pos != -1:
    end_anchor = html.find('</a>', logo_pos)
    if end_anchor != -1:
        # Insert desktop_nav after </a>
        html = html[:end_anchor + 4] + desktop_nav + html[end_anchor + 4:]

# We need to insert the mobile_nav right before </header>
header_end = '</header>'
html = html.replace('</header>', mobile_nav + '      </header>')

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(html)
