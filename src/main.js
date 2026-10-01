import { WHATSAPP_NUMBER, PHONE_TEL, sections, stats } from "./data/site.js";

const FORM_ENDPOINT = import.meta.env?.VITE_FORM_ENDPOINT || '';

export function whatsappUrl(text = "Olá! Gostaria de solicitar um orçamento sem compromisso.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

// ── Services Data ──
const services = [
  {
    num: "01",
    name: "Terraplanagem",
    desc: "Nivelamento e preparo do terreno para sua obra começar com a base certa.",
    image: "./assets/service-earthworks.webp",
    alt: "Escavadeira nivelando terreno",
    details: [
      "Nivelamento e preparação do terreno",
      "Áreas prontas para construção e loteamentos",
      "Avaliação do terreno e acesso"
    ]
  },
  {
    num: "02",
    name: "Aterro e desaterro",
    desc: "Acerto do nível do terreno, com entrada ou retirada de terra.",
    image: "./assets/service-fill-earthwork.jpg",
    alt: "Caminhão descarregando terra",
    details: [
      "Aterro para elevar o terreno",
      "Desaterro e retirada do excedente de terra",
      "Avaliação do volume de material"
    ]
  },
  {
    num: "03",
    name: "Demolição de casas",
    desc: "Demolição com planejamento e atenção à segurança do entorno.",
    image: "./assets/service-demolition.webp",
    alt: "Escavadeira em demolição",
    details: [
      "Avaliação prévia do imóvel",
      "Planejamento com atenção à segurança",
      "Orientação sobre documentação"
    ]
  },
  {
    num: "04",
    name: "Limpeza de lotes",
    desc: "Remoção de vegetação e resíduos para transformar o terreno.",
    image: "./assets/service-clearing.webp",
    alt: "Retroescavadeira limpando lote",
    details: [
      "Limpeza de áreas com vegetação",
      "Preparação do espaço para o projeto",
      "Avaliação de materiais a retirar"
    ]
  },
  {
    num: "05",
    name: "Terraplanagem residencial",
    desc: "Preparo e nivelamento de terrenos para construção residencial, garantindo base firme e drenagem adequada.",
    image: "./assets/service-residential.webp",
    alt: "Terraplanagem residencial",
    whatsappMsg: "Olá! Quero um orçamento para terraplanagem residencial."
  },
  {
    num: "06",
    name: "Remoção de entulho e materiais",
    desc: "Coleta e descarte correto de entulho, terra e materiais de obra, deixando o local pronto para o próximo passo.",
    image: "./assets/service-debris.webp",
    alt: "Remoção de entulho e materiais",
    whatsappMsg: "Olá! Quero um orçamento para remoção de entulho e materiais."
  }
];

// ── Google Reviews Data ──
// Para editar: altere apenas este array. Os cards são gerados automaticamente.
const googleReviews = [
  {
    nome: "Erik Rodrigues",
    local: "Sete Lagoas",
    nota: 5,
    data: "há 6 meses",
    texto: "Excelente atendimento e execução muito bem feita. Profissional pontual, educado e muito competente. Nota 10."
  },
  {
    nome: "Thiago Araujo",
    local: "Sete Lagoas",
    nota: 5,
    data: "há 6 meses",
    texto: "Melhor serviço de Sete Lagoas e Região! Profissional responsável e de altíssima qualidade! Indicação certa 👏"
  },
  {
    nome: "Ingred Lima",
    local: "Sete Lagoas",
    nota: 5,
    data: "há 3 meses",
    texto: "Passando para agradecer pelo excelente trabalho! Contratei o serviço de vocês e fiquei extremamente satisfeito com o resultado. Ficou muito bom mesmo, superou minhas expectativas. Parabéns pelo profissionalismo"
  },
  {
    nome: "Geraldo Murilo Oliveira",
    local: "Sete Lagoas",
    nota: 5,
    data: "há 3 meses",
    texto: "Excelente profissional!! Serviço com perfeição, super indico"
  },
  {
    nome: "Magna Freitas",
    local: "Sete Lagoas",
    nota: 5,
    data: "há 3 meses",
    texto: "Excelente atendimento! Responsável, educado e muito profissional!"
  },
  {
    nome: "SORAYA ALMEIDA",
    local: "Sete Lagoas",
    nota: 5,
    data: "há 6 meses",
    texto: "Serviço de excelente qualidade. Super indico!"
  },
  {
    nome: "Renato Filgueiras Gonçalves",
    local: "Sete Lagoas",
    nota: 5,
    data: "há 5 meses",
    texto: "Excelente serviço! Sou cliente há anos da empresa. Fica aqui a indicação!"
  },
  {
    nome: "Patricia Sps",
    local: "Sete Lagoas",
    nota: 5,
    data: "há 3 meses",
    texto: "Atendimento de excelência com qualidade, preço justo e cordialidade do prestador. Super recomendo!"
  },
  {
    nome: "Elaide Santos",
    local: "Sete Lagoas",
    nota: 5,
    data: "há 4 meses",
    texto: "Contratei o serviço de terraplanagem e fiquei extremamente satisfeito. O trabalho foi executado com muita precisão, agilidade e profissionalismo. O terreno ficou perfeito e o atendimento foi impecável do início ao fim. Recomendo de olhos fechados!"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  // Toggle Sections based on site.js
  if (!sections.testimonials.enabled) {
    const tSec = document.getElementById("depoimentos");
    if (tSec) tSec.style.display = 'none';
  }
  if (!sections.videos.enabled) {
    const vSec = document.getElementById("videos");
    if (vSec) vSec.style.display = 'none';
  }
  if (!sections.partners.enabled) {
    const pSec = document.getElementById("parceiros");
    if (pSec) pSec.style.display = 'none';
  }

  // ── Scroll Progress ──
  const progressBar = document.getElementById("progress-bar");
  const updateProgress = () => {
    const span = document.documentElement.scrollHeight - window.innerHeight;
    const progress = span > 0 ? Math.min(100, (window.scrollY / span) * 100) : 0;
    progressBar.style.width = `${progress}%`;
  };
  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);
  updateProgress();

  // ── "Topo": clique na logo (e no link do rodapé) rola sempre o máximo para
  // cima (topo absoluto da página). O scrollTo(0) substitui a âncora #inicio,
  // que deixava a página presa numa meia-rolagem dentro da hero. ──
  document.querySelectorAll('a[href="#inicio"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    });
  });

  // ── Header: sempre fixo no topo (position:fixed no CSS).
  // Começa transparente e recebe fundo escuro (is-stuck) quando o usuario
  // rola para alem da altura do header. A variavel --header-stuck-h e usada
  // pelo .hero para calcular sua min-height corretamente.
  const heroHeader = document.querySelector(".hero__header");
  if (heroHeader) {
    const STICK_THRESHOLD = 10; // px — aplica fundo apos essa rolagem
    const UNSTICK_AT = 4;       // px — remove fundo apenas quando quase no topo
    const setStuck = (stuck) => heroHeader.classList.toggle("is-stuck", stuck);

    // Mede e expoe a altura do header como CSS custom property no :root
    const measureHeader = () => {
      const h = heroHeader.getBoundingClientRect().height || heroHeader.offsetHeight;
      document.documentElement.style.setProperty("--header-stuck-h", h + "px");
    };

    const syncStuck = () => {
      const s = window.scrollY;
      if (heroHeader.classList.contains("is-stuck")) {
        if (s < UNSTICK_AT) setStuck(false);
      } else if (s >= STICK_THRESHOLD) {
        setStuck(true);
      }
    };

    measureHeader();
    window.addEventListener("load", measureHeader);
    window.addEventListener("resize", () => { measureHeader(); syncStuck(); });
    window.addEventListener("scroll", syncStuck, { passive: true });
    syncStuck();
  }


  // ── Hero: inject video after hydration, respecting reduced-motion and saveData ──
  const heroBgContainer = document.getElementById('hero-bg-container');
  if (heroBgContainer) {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const saveData = navigator.connection && navigator.connection.saveData;
    if (!prefersReduced && !saveData) {
      const video = document.createElement('video');
      video.id = 'lv-hero-video';
      video.src = './assets/hero-loop-compact.mp4';
      video.autoplay = true;
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      video.preload = 'metadata';
      heroBgContainer.appendChild(video);
    }
  }


  // ── Intersection Observer for Reveals ──
  const revealElements = document.querySelectorAll(".reveal, .reveal-list > *");
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = el.parentElement.classList.contains("reveal-list") 
          ? Array.from(el.parentElement.children).indexOf(el) * (el.parentElement.dataset.stagger || 80)
          : (el.dataset.delay || 0);
        
        setTimeout(() => {
          el.classList.add("active");
        }, delay);
        
        revealObserver.unobserve(el);
      }
    });
  }, { threshold: 0.12 });
  
  revealElements.forEach(el => revealObserver.observe(el));


  // ── Floating WA Visibility ──
  const floatingWa = document.querySelector('.floating-whatsapp');
  if (floatingWa) {
    const onScroll = () => {
      // Show after scrolling ~15% of the viewport height, hide when scrolling back up
      if (window.scrollY >= window.innerHeight * 0.15) {
        floatingWa.classList.add('visible');
      } else {
        floatingWa.classList.remove('visible');
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    // Check initial state
    onScroll();
  }

// ── Render Services ──
  const servicesGrid = document.querySelector(".services-grid");
  
  services.forEach((s) => {
    const article = document.createElement("article");
    article.className = "service-card";
    
    // Instead of opening a dialog, the entire card triggers WhatsApp directly
    const wpUrl = whatsappUrl(`Olá! Quero um orçamento para ${s.name.toLowerCase()}.`);
    
    article.innerHTML = `
      <div class="service-img-wrapper">
        <img src="${s.image}" alt="${s.alt}" class="service-img" loading="lazy" />
      </div>
      <div class="service-content">
        <div class="service-num-row">
          <span>/${s.num}</span>
        </div>
        <h3>${s.name}</h3>
        <p>${s.desc}</p>
        <button class="service-details-btn">
          Ver detalhes <span class="arrow">→</span>
        </button>
      </div>
    `;

    article.addEventListener("click", () => {
      const dialog = document.getElementById("service-dialog");
      if (!dialog) return;
      
      document.getElementById("dialog-img").src = s.image;
      document.getElementById("dialog-img").alt = s.alt || '';
      document.getElementById("dialog-num").textContent = `/${s.num}`;
      document.getElementById("dialog-title").textContent = s.name;
      document.getElementById("dialog-desc").textContent = s.desc;
      
      const detailsList = document.getElementById("dialog-details");
      detailsList.innerHTML = '';
      if (s.details && s.details.length > 0) {
        s.details.forEach(detail => {
          const li = document.createElement("li");
          li.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary" style="flex-shrink:0; margin-top:3px;"><path d="M20 6 9 17l-5-5"/></svg> <span>${detail}</span>`;
          detailsList.appendChild(li);
        });
      }
      
      const cta = document.getElementById("dialog-cta");
      cta.onclick = () => {
        window.open(wpUrl, "_blank");
      };
      
      dialog.showModal();
    });
    
    if (servicesGrid) servicesGrid.appendChild(article);
  });

  // Modal Close Logic
  const dialog = document.getElementById("service-dialog");
  const dialogClose = document.getElementById("dialog-close");
  if (dialog && dialogClose) {
    const closeDialog = () => {
      dialog.classList.add("is-closing");
      dialog.addEventListener("animationend", () => {
        dialog.classList.remove("is-closing");
        dialog.close();
      }, { once: true });
    };
    dialogClose.addEventListener("click", closeDialog);
    dialog.addEventListener("click", (e) => {
      if (e.target === dialog) closeDialog();
    });
  }

  // Attach WA link to standalone buttons
  const assignWaLink = (id) => {
    const btn = document.getElementById(id);
    if(btn) {
      btn.addEventListener("click", () => {
        window.open(whatsappUrl(), "_blank");
      });
    }
  }
  assignWaLink('btn-services-wa');
  assignWaLink('btn-results-wa');
  assignWaLink('btn-process-wa');
  assignWaLink('btn-testi-wa');

  // ── Render Testimonials (Google Reviews) ──
  const testiCarousel = document.getElementById("testi-carousel");
  if (testiCarousel && googleReviews.length > 0) {
    // Duplica o array para efeito de scroll infinito natural
    const duplicatedReviews = [...googleReviews, ...googleReviews];
    
    duplicatedReviews.forEach(review => {
      const card = document.createElement("div");
      card.className = "testi-card";
      
      let textContent = review.texto;
      let textHTML = `<p class="testi-quote">${textContent}</p>`;
      
      if (textContent.length > 150) {
        const shortText = textContent.substring(0, 150) + '...';
        textHTML = `
          <p class="testi-quote testi-text-short">${shortText} <button class="btn-ler-mais">Ler mais</button></p>
          <p class="testi-quote testi-text-full" style="display: none;">${textContent} <button class="btn-ler-menos">Ler menos</button></p>
        `;
      }

      card.innerHTML = `
        <div class="testi-stars" aria-label="Nota ${review.nota} de 5">
          ${'<svg width="18" height="18" viewBox="0 0 24 24" fill="#FFB703"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>'.repeat(review.nota)}
        </div>
        ${textHTML}
        <div class="testi-author">
          <div class="testi-avatar">${review.nome.charAt(0).toUpperCase()}</div>
          <div class="testi-info">
            <h4>${review.nome}</h4>
            <span>${review.data}</span>
          </div>
          <div class="testi-google-badge-small">
            <a href="https://www.google.com/maps/place//data=!4m4!3m3!1s0xa65191a0993107:0x959d99801d91c25d!9m1!1b1" target="_blank" rel="noopener noreferrer" aria-label="Ver avaliação no Google">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/><path fill="#FF3D00" d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"/><path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/><path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/></svg>
            </a>
          </div>
        </div>
      `;
      testiCarousel.appendChild(card);
    });

    // ── Infinite Loop Auto-Scroll & Professional Drag ──
    let isDown = false;
    let startXClick = 0;
    let startX;
    let scrollLeft;
    let autoScrollRaf;
    let isHovering = false;

    // Handle Read More/Less with drag prevention
    testiCarousel.addEventListener("click", (e) => {
      // Se moveu mais de 5 pixels no desktop, cancela o click
      if (Math.abs(e.pageX - startXClick) > 5 && e.pointerType === "mouse") {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      
      // Permitir que o Google Link funcione nativamente (se for o target ou filho de a)
      if (e.target.closest("a")) {
        return; 
      }
      
      if (e.target.classList.contains("btn-ler-mais")) {
        const card = e.target.closest(".testi-card");
        card.querySelector(".testi-text-short").style.display = "none";
        card.querySelector(".testi-text-full").style.display = "block";
      } else if (e.target.classList.contains("btn-ler-menos")) {
        const card = e.target.closest(".testi-card");
        card.querySelector(".testi-text-short").style.display = "block";
        card.querySelector(".testi-text-full").style.display = "none";
      }
    }, { capture: true });
    
    // Auto-scroll loop (Apenas Desktop)
    const autoScroll = () => {
      const isMobile = window.innerWidth <= 768;
      
      if (!isDown && !isHovering && !isMobile) {
        testiCarousel.scrollLeft += 1;
      }
      autoScrollRaf = requestAnimationFrame(autoScroll);
    };
    
    autoScrollRaf = requestAnimationFrame(autoScroll);

    // Loop infinito universal (Funciona pro drag, touch e auto-scroll)
    testiCarousel.addEventListener('scroll', () => {
      // Como duplicamos o array exato, a metade do scrollWidth é exatamente onde o segundo set começa
      // Adicionamos uma pequena margem pra evitar piscar
      const halfWidth = testiCarousel.scrollWidth / 2;
      
      if (testiCarousel.scrollLeft >= halfWidth) {
        testiCarousel.scrollLeft -= halfWidth;
      } else if (testiCarousel.scrollLeft <= 0) {
        testiCarousel.scrollLeft += halfWidth;
      }
    }, { passive: true });

    testiCarousel.addEventListener('mouseenter', () => isHovering = true);
    testiCarousel.addEventListener('mouseleave', () => {
      isHovering = false;
      isDown = false;
      testiCarousel.classList.remove('is-dragging');
    });

    testiCarousel.addEventListener('mousedown', (e) => {
      isDown = true;
      startXClick = e.pageX;
      testiCarousel.classList.add('is-dragging');
      startX = e.pageX - testiCarousel.offsetLeft;
      scrollLeft = testiCarousel.scrollLeft;
    });

    testiCarousel.addEventListener('mouseup', () => {
      isDown = false;
      testiCarousel.classList.remove('is-dragging');
    });

    testiCarousel.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - testiCarousel.offsetLeft;
      const walk = (x - startX) * 2; 
      testiCarousel.scrollLeft = scrollLeft - walk;
    });
  }

  // ── Compare Sliders ──────────────────────────────────────────────────────
  // Abordagem profissional:
  //  • Desktop: pointer events direto no container — sem arrastar imagem.
  //  • Mobile: deteccao de direcao de gesto (touchstart + touchmove) para
  //    distinguir scroll vertical de drag horizontal. So ativa o drag se o
  //    primeiro movimento for predominantemente horizontal.
  //  • Animacao de hint (entrada): usa classe is-hinting com transicao CSS,
  //    sem interferir com a interacao do usuario.
  // ─────────────────────────────────────────────────────────────────────────

  document.querySelectorAll(".compare-container").forEach((container) => {
    const after  = container.querySelector(".compare-after");
    const line   = container.querySelector(".compare-line");
    const slider = container.querySelector(".compare-slider");

    // Skeleton: remove quando a imagem de fundo carregar
    const bgImg = container.querySelector(".compare-img-bg");
    if (bgImg) {
      const removeSkeleton = () => bgImg.classList.remove("skeleton");
      if (bgImg.complete) removeSkeleton();
      else bgImg.addEventListener("load", removeSkeleton, { once: true });
    }

    // Impede arrasto nativo de imagens (desktop)
    container.querySelectorAll("img").forEach((img) => {
      img.setAttribute("draggable", "false");
      img.addEventListener("dragstart", (e) => e.preventDefault(), { passive: false });
    });

    // ── Aplicar valor (0-100) ao slider ──────────────────────────────────
    const applyValue = (val) => {
      const clamped = Math.max(0, Math.min(100, val));
      const pct = `${clamped}%`;
      after.style.setProperty("--reveal", pct);
      line.style.setProperty("--reveal", pct);
      if (slider) slider.value = clamped;
    };

    // Calcular valor percentual a partir de coordenada X do ponteiro
    const getValFromEvent = (clientX) => {
      const rect = container.getBoundingClientRect();
      return ((clientX - rect.left) / rect.width) * 100;
    };

    // ── Estado de drag ───────────────────────────────────────────────────
    let isDragging = false;

    const startDrag = (clientX, pointerId) => {
      isDragging = true;
      container.classList.add("is-dragging");
      container.classList.remove("is-hinting");
      if (pointerId != null && container.setPointerCapture) {
        try { container.setPointerCapture(pointerId); } catch (_) {}
      }
      applyValue(getValFromEvent(clientX));
    };

    const moveDrag = (clientX) => {
      if (!isDragging) return;
      applyValue(getValFromEvent(clientX));
    };

    const stopDrag = (pointerId) => {
      if (!isDragging) return;
      isDragging = false;
      container.classList.remove("is-dragging");
      if (pointerId != null && container.releasePointerCapture) {
        try { container.releasePointerCapture(pointerId); } catch (_) {}
      }
    };

    // ── Pointer Events (Desktop + stylus) ───────────────────────────────
    // Usamos pointerType para distinguir mouse/pen de touch.
    // Touch e tratado separadamente abaixo para ter deteccao de direcao.
    container.addEventListener("pointerdown", (e) => {
      if (e.pointerType === "touch") return;
      if (e.target.closest("a, button")) return;
      if (wasScrolling) return; // toque causado por scroll — ignora
      e.preventDefault();
      startDrag(e.clientX, e.pointerId);
    }, { passive: false });

    container.addEventListener("pointermove", (e) => {
      if (e.pointerType === "touch") return;
      if (!isDragging) return;
      e.preventDefault();
      moveDrag(e.clientX);
    }, { passive: false });

    container.addEventListener("pointerup",     (e) => { if (e.pointerType !== "touch") stopDrag(e.pointerId); });
    container.addEventListener("pointercancel", (e) => { if (e.pointerType !== "touch") stopDrag(e.pointerId); });
    container.addEventListener("pointerleave",  (e) => { if (e.pointerType !== "touch" && isDragging) stopDrag(e.pointerId); });

    // ── Touch Events (Mobile) ────────────────────────────────────────────
    // wasScrolling: se o usuario rolou a tela com o dedo sobre o container,
    // bloqueia o proximo pointerdown por 400ms para evitar mover a barra
    // acidentalmente no fim do scroll.
    let touchStartX   = 0;
    let touchStartY   = 0;
    let touchDecided  = false;
    let touchIsDrag   = false;
    let wasScrolling  = false;
    let scrollTimer   = null;

    container.addEventListener("touchstart", (e) => {
      if (e.touches.length !== 1) return;
      const t = e.touches[0];
      touchStartX  = t.clientX;
      touchStartY  = t.clientY;
      touchDecided = false;
      touchIsDrag  = false;
      wasScrolling = false;
    }, { passive: true });

    container.addEventListener("touchmove", (e) => {
      if (e.touches.length !== 1) return;
      const t = e.touches[0];
      const dx = Math.abs(t.clientX - touchStartX);
      const dy = Math.abs(t.clientY - touchStartY);

      // Se o dedo se moveu verticalmente de forma significativa, marca como scroll
      if (dy > 12) wasScrolling = true;

      if (!touchDecided) {
        if (dx < 18 && dy < 18) return;
        touchDecided = true;
        touchIsDrag = dx > dy * 3;
        if (touchIsDrag) {
          startDrag(t.clientX, null);
        }
      }

      if (!touchIsDrag) return;

      e.preventDefault();
      moveDrag(t.clientX);
    }, { passive: false });

    container.addEventListener("touchend", () => {
      if (touchIsDrag) stopDrag(null);
      touchIsDrag  = false;
      touchDecided = false;
      // Se havia scroll, mantem o bloqueio por 400ms apos levantar o dedo
      if (wasScrolling) {
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(() => { wasScrolling = false; }, 400);
      }
    }, { passive: true });
    container.addEventListener("touchcancel", () => {
      if (touchIsDrag) stopDrag(null);
      touchIsDrag  = false;
      touchDecided = false;
      wasScrolling = false;
    }, { passive: true });

    // ── Acessibilidade: teclado via input[range] ─────────────────────────
    if (slider) {
      slider.style.pointerEvents = "auto"; // habilita foco de teclado
      slider.addEventListener("input", (e) => applyValue(Number(e.target.value)));
      // Ao focar no slider pelo teclado, sinaliza visualmente
      slider.addEventListener("focus", () => container.classList.add("is-dragging"));
      slider.addEventListener("blur",  () => container.classList.remove("is-dragging"));
    }

    // ── Hint animation (IntersectionObserver) ───────────────────────────
    const hintObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || isDragging) return;

        container.classList.add("is-hinting");

        // Sequencia: 50% -> 72% -> 50% (ida e volta suave)
        setTimeout(() => {
          if (isDragging) return;
          applyValue(72);

          setTimeout(() => {
            if (isDragging) return;
            applyValue(50);

            setTimeout(() => {
              container.classList.remove("is-hinting");
            }, 600);
          }, 600);
        }, 120);

        hintObserver.unobserve(container);
      });
    }, { threshold: 0.5 });

    hintObserver.observe(container);
  });


  // ── Form Submission ──
  const form = document.getElementById("quote-form");
  if (form) {
    const submitBtn = document.getElementById("submit-btn");
    const btnText = submitBtn.querySelector(".btn-text");
    const spinner = submitBtn.querySelector(".spinner");
    const formSuccess = document.getElementById("form-success");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const name    = document.getElementById("name").value.trim();
      const service = document.getElementById("service").value;
      const city    = document.getElementById("city")?.value.trim();

      submitBtn.disabled = true;
      btnText.style.display = "none";
      spinner.style.display = "inline-block";

      let msg = `Olá! Me chamo *${name}* e gostaria de solicitar um orçamento.\n\n`;
      msg += `*Serviço:* ${service}\n`;
      if (city) msg += `*Local:* ${city}\n`;
      msg += `\nEntrei em contato pelo site da Jouber Terraplanagem.`;

      setTimeout(() => {
        window.open(whatsappUrl(msg), "_blank");
        submitBtn.disabled = false;
        btnText.style.display = "inline-flex";
        spinner.style.display = "none";
        formSuccess.style.display = "block";
      }, 400);
    });
  }

  // ── Marquee Intersection Observer ──
  const differentialsTrack = document.querySelector('.differentials-track');
  const differentialsSection = document.querySelector('.differentials');
  if (differentialsTrack && differentialsSection) {
    const diffObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          differentialsTrack.classList.remove('paused');
        } else {
          differentialsTrack.classList.add('paused');
        }
      });
    }, { rootMargin: '50px' });
    diffObserver.observe(differentialsSection);
  }

  // ── Stats Render ──
  const statsGrid = document.getElementById('stats-grid');
  if (statsGrid && stats) {
    stats.filter(s => s.enabled).forEach(s => {
      const div = document.createElement('div');
      div.className = 'stat-item';
      div.innerHTML = `<div class='stat-value' data-val='${s.value}' data-suffix='${s.suffix}'>${s.value}${s.suffix}</div><div class='stat-label'>${s.label}</div>`;
      statsGrid.appendChild(div);
    });

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const animateStats = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.stat-value').forEach(el => {
            const target = parseInt(el.getAttribute('data-val')) || 0;
            const suffix = el.getAttribute('data-suffix') || '';
            if (prefersReducedMotion || target === 0) {
              el.textContent = target + suffix;
              return;
            }
            let current = 0;
            const duration = 1200;
            const startTime = performance.now();
            const update = (now) => {
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);
              current = Math.ceil(progress * target);
              el.textContent = current + suffix;
              if (progress < 1) requestAnimationFrame(update);
            };
            requestAnimationFrame(update);
          });
          observer.unobserve(entry.target);
        }
      });
    };
    const statsObserver = new IntersectionObserver(animateStats, { threshold: 0.4 });
    statsObserver.observe(statsGrid);
  }
});


// Hero video logic
(function () {
  const mount = document.querySelector("[data-hero-video]");
  if (!mount) return;
  const video = document.createElement("video");
  video.className = "hero__video";
  video.src = "./assets/hero-loop.mp4";
  video.poster = "./assets/hero-excavator.webp";
  video.autoplay = true;
  video.muted = true;
  video.loop = true;
  video.playsInline = true;
  video.preload = "auto";
  video.setAttribute("aria-hidden", "true");
  mount.appendChild(video);
})();


// Mobile menu toggle logic
(function () {
  const btn = document.querySelector(".mobile-menu-btn");
  const nav = document.querySelector(".mobile-nav");
  if (!btn || !nav) return;
  
  btn.addEventListener("click", () => {
    const isExpanded = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", !isExpanded);
    nav.classList.toggle("open");
  });
  
  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      btn.setAttribute("aria-expanded", "false");
      nav.classList.remove("open");
    });
  });
})();


// Hero: palavra rotativa no título (fade + slide), respeitando prefers-reduced-motion
(function () {
  const rotator = document.querySelector("[data-rotator]");
  if (!rotator) return;
  const words = Array.from(rotator.querySelectorAll(".hero__rotator-word"));
  if (words.length < 2) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const INTERVAL = 3200;
  let index = 0;
  let timer = null;

  const next = () => {
    const current = words[index];
    index = (index + 1) % words.length;
    const incoming = words[index];
    current.classList.remove("is-active");
    current.classList.add("is-leaving");
    current.setAttribute("aria-hidden", "true");
    incoming.classList.add("is-active");
    incoming.removeAttribute("aria-hidden");
    setTimeout(() => current.classList.remove("is-leaving"), 700);
  };

  const start = () => { if (!timer) timer = setInterval(next, INTERVAL); };
  const stop = () => { clearInterval(timer); timer = null; };

  // Pausa quando a aba está em segundo plano
  document.addEventListener("visibilitychange", () => (document.hidden ? stop() : start()));
  start();
})();


// FAQ: animacao suave + accordion exclusivo (so um aberto por vez)
(function () {
  var items = Array.from(document.querySelectorAll(".faq details"));

  // Fecha um item com animacao; chama onDone() ao terminar (opcional)
  function closeItem(details, summaryEl, state, onDone) {
    if (!state.isOpen) { if (onDone) onDone(); return; }
    if (state.anim) { state.anim.cancel(); state.anim = null; }
    var startH = details.offsetHeight;
    var endH   = summaryEl.offsetHeight;
    details.style.overflow = "hidden";
    details.style.height   = startH + "px";
    state.anim = details.animate(
      { height: [startH + "px", endH + "px"] },
      { duration: 280, easing: "cubic-bezier(0.4,0,0.2,1)" }
    );
    state.anim.onfinish = function () {
      details.open = false;
      state.isOpen = false;
      details.style.height = details.style.overflow = "";
      state.anim = null;
      if (onDone) onDone();
    };
  }

  // Abre um item com animacao
  function openItem(details, summaryEl, state) {
    if (state.anim) { state.anim.cancel(); state.anim = null; }
    details.open = true;
    state.isOpen = true;
    var startH = summaryEl.offsetHeight;
    var endH   = details.offsetHeight;
    details.style.overflow = "hidden";
    details.style.height   = startH + "px";
    state.anim = details.animate(
      { height: [startH + "px", endH + "px"] },
      { duration: 320, easing: "cubic-bezier(0.4,0,0.2,1)" }
    );
    state.anim.onfinish = function () {
      details.style.height = details.style.overflow = "";
      state.anim = null;
    };
  }

  // Mapa de estado por elemento
  var stateMap = new Map();
  items.forEach(function (details) {
    stateMap.set(details, { isOpen: details.open, anim: null });
  });

  items.forEach(function (details) {
    var summary = details.querySelector("summary");
    if (!summary) return;
    var state = stateMap.get(details);

    summary.addEventListener("click", function (e) {
      e.preventDefault();

      if (state.isOpen) {
        // Clicar no aberto: so fecha ele
        closeItem(details, summary, state);
      } else {
        // Abrir este: primeiro fecha o que estiver aberto
        var openDetails = null;
        items.forEach(function (other) {
          if (other !== details && stateMap.get(other).isOpen) {
            openDetails = other;
          }
        });

        if (openDetails) {
          var otherSummary = openDetails.querySelector("summary");
          var otherState   = stateMap.get(openDetails);
          // Fecha o anterior e abre o novo AO MESMO TEMPO (simultaneo)
          closeItem(openDetails, otherSummary, otherState);
          openItem(details, summary, state);
        } else {
          openItem(details, summary, state);
        }
      }
    });
  });
})();

