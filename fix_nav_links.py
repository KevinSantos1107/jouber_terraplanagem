import re

html_path = 'index.html'
with open(html_path, 'r', encoding='utf-8') as f:
    html = f.read()

new_nav = '''      <nav class=\"mobile-nav\" id=\"mobile-nav\" aria-label=\"Menu Mobile\">
        <a href=\"#servicos\">Serviços</a>
        <a href=\"#resultados\">Resultados</a>
        <a href=\"#depoimentos\">Depoimentos</a>
        <a href=\"#processo\">Processo</a>
        <a href=\"#sobre\">Sobre</a>
        <a href=\"#duvidas\">Dúvidas</a>
      </nav>'''

html = re.sub(r'<nav class=\"mobile-nav\" id=\"mobile-nav\" aria-label=\"Menu Mobile\">[\\s\\S]*?</nav>', new_nav, html)

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(html)
