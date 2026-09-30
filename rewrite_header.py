import re

html_path = 'index.html'
with open(html_path, 'r', encoding='utf-8') as f:
    html = f.read()

# Find the start of <header class="hero__header">
header_start = html.find('<header class="hero__header">')
# Find the next section start <section class="hero__content" to know where header ends exactly
section_start = html.find('<section class="hero__content"')

if header_start != -1 and section_start != -1:
    before = html[:header_start]
    after = html[section_start:]
    
    clean_header = '''<header class="hero__header">
        <a href="#inicio" class="hero__logo-link" aria-label="Início">
          <img class="hero__logo hero-rise" src="./assets/jouber-logo.png" alt="Jouber Terraplanagem" />
        </a>

        <nav class="desktop-nav hero__desktop-nav hero-rise" style="animation-delay: 0.15s">
          <a href="#servicos">Serviços</a>
          <a href="#resultados">Resultados</a>
          <a href="#depoimentos">Depoimentos</a>
          <a href="#processo">Processo</a>
          <a href="#sobre">Sobre</a>
          <a href="#duvidas">Dúvidas</a>
        </nav>

        <div style="display: flex; align-items: center; gap: 0.75rem;">
          <a
            class="hero__phone hero-rise"
            style="animation-delay: 0.15s"
            href="https://wa.me/5531996686933?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20sem%20compromisso."
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg class="hero__phone-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span class="hero__phone-desktop">(31) 99668-6933</span>
            <span class="hero__phone-mobile">LIGAR</span>
          </a>

          <button class="mobile-menu-btn hero-rise" style="animation-delay: 0.2s" aria-expanded="false" aria-controls="mobile-nav" aria-label="Abrir menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-close"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>
      
        <nav class="mobile-nav" id="mobile-nav" aria-label="Menu Mobile">
          <a href="#servicos">Serviços</a>
          <a href="#resultados">Resultados</a>
          <a href="#depoimentos">Depoimentos</a>
          <a href="#processo">Processo</a>
          <a href="#sobre">Sobre</a>
          <a href="#duvidas">Dúvidas</a>
        </nav>
      </header>

      '''
    
    html = before + clean_header + after
    
    with open(html_path, 'w', encoding='utf-8') as f:
        f.write(html)
