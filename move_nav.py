import re

html_path = 'index.html'
with open(html_path, 'r', encoding='utf-8') as f:
    html = f.read()

# find header end
header_end = '</header>'
nav_start = '<nav class=\"mobile-nav\"'
nav_end = '</nav>'

# We need to extract the nav block and put it right before </header>
nav_pattern = re.compile(r'<nav class=\"mobile-nav\"[\\s\\S]*?</nav>')
nav_match = nav_pattern.search(html)

if nav_match:
    nav_str = nav_match.group(0)
    # remove the nav from current position
    html = html.replace(nav_str, '')
    # insert it before </header>
    html = html.replace('</header>', f'{nav_str}\n      </header>')

# Also, the user says "ajustar o conteúdo que estará dentro dele."
# Maybe just update the links to be correct. The current links are:
# <a href="#servicos">Serviços</a>
# <a href="#resultados">Resultados</a>
# <a href="#depoimentos">Depoimentos</a>
# <a href="#processo">Processo</a>
# In index.html, we also have an inline style on the nav: style="position: relative; z-index: 10;"
# Let's remove the inline style to let CSS handle it.
html = re.sub(r'<nav class=\"mobile-nav\"[^>]*>', '<nav class=\"mobile-nav\" id=\"mobile-nav\" aria-label=\"Menu Mobile\">', html)

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(html)
