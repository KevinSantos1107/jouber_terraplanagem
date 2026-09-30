import re

html_path = 'index.html'
with open(html_path, 'r', encoding='utf-8', errors='ignore') as f:
    html = f.read()

html = html.replace('Servios', 'Serviços')
html = html.replace('Dǧvidas', 'Dúvidas')

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(html)
