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
    image: "/assets/service-earthworks.webp",
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
    image: "/assets/service-fill-earthwork.jpg",
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
    image: "/assets/service-demolition.webp",
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
    image: "/assets/service-clearing.webp",
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
    image: "/assets/service-residential.webp",
    alt: "Terraplanagem residencial",
    whatsappMsg: "Olá! Quero um orçamento para terraplanagem residencial."
  },
  {
    num: "06",
    name: "Remoção de entulho e materiais",
    desc: "Coleta e descarte correto de entulho, terra e materiais de obra, deixando o local pronto para o próximo passo.",
    image: "/assets/service-debris.webp",
    alt: "Remoção de entulho e materiais",
    whatsappMsg: "Olá! Quero um orçamento para remoção de entulho e materiais."
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

  // ── Mobile Menu ──
  const menuBtn = document.getElementById("mobile-menu-btn");
  const mobileNav = document.getElementById("mobile-nav");
  const mobileNavLinks = mobileNav.querySelectorAll("a");
  
  const toggleMenu = () => {
    const expanded = menuBtn.getAttribute("aria-expanded") === "true";
    menuBtn.setAttribute("aria-expanded", !expanded);
    mobileNav.classList.toggle("open");
  };
  
  menuBtn.addEventListener("click", toggleMenu);
  mobileNavLinks.forEach(link => link.addEventListener("click", () => {
    if (mobileNav.classList.contains("open")) toggleMenu();
  }));
  
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768 && mobileNav.classList.contains("open")) toggleMenu();
  });

  // ── Hero Image Loader ──
  const heroImg = document.querySelector(".hero-bg");
  if (heroImg) {
    if (heroImg.complete) {
      heroImg.classList.add("loaded");
    } else {
      heroImg.addEventListener("load", () => heroImg.classList.add("loaded"));
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
    let shown = false;

    const showFloating = () => {
      if (shown) return;
      shown = true;
      floatingWa.classList.add('visible');
      // Once shown, no need to keep the scroll listener
      window.removeEventListener('scroll', onScroll);
    };

    const onScroll = () => {
      // Show after scrolling ~15% of the viewport height
      if (window.scrollY >= window.innerHeight * 0.15) showFloating();
    };

    window.addEventListener('scroll', onScroll, { passive: true });
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
        <a href="${wpUrl}" target="_blank" class="service-details-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
          Chamar no WhatsApp
        </a>
      </div>
    `;

    article.addEventListener("click", () => {
      window.open(wpUrl, "_blank");
    });
    
    if (servicesGrid) servicesGrid.appendChild(article);
  });

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

  // ── Compare Sliders ──
  const sliders = document.querySelectorAll(".compare-slider");
  
  const compareObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const slider = entry.target;
        const container = slider.parentElement;
        const after = container.querySelector(".compare-after");
        const line = container.querySelector(".compare-line");
        
        after.style.transition = "clip-path 0.5s ease-in-out";
        line.style.transition = "left 0.5s ease-in-out";
        
        setTimeout(() => {
          after.style.setProperty("--reveal", "75%");
          line.style.setProperty("--reveal", "75%");
          slider.value = 75;
          
          setTimeout(() => {
            after.style.setProperty("--reveal", "50%");
            line.style.setProperty("--reveal", "50%");
            slider.value = 50;
            
            setTimeout(() => {
              after.style.transition = "none";
              line.style.transition = "none";
            }, 500);
          }, 500);
        }, 500);
        
        compareObserver.unobserve(slider);
      }
    });
  }, { threshold: 0.5 });

  sliders.forEach(slider => {
    const container = slider.parentElement;
    const after = container.querySelector(".compare-after");
    const line = container.querySelector(".compare-line");
    
    const bgImg = container.querySelector(".compare-img-bg");
    if (bgImg) {
      if (bgImg.complete) bgImg.classList.remove("skeleton");
      else bgImg.addEventListener("load", () => bgImg.classList.remove("skeleton"));
    }
    
    compareObserver.observe(slider);

    slider.addEventListener("input", (e) => {
      const val = e.target.value;
      after.style.setProperty("--reveal", `${val}%`);
      line.style.setProperty("--reveal", `${val}%`);
    });
  });

  // Phone mask
  const phoneInput = document.getElementById('phone');
  if (phoneInput) {
    phoneInput.addEventListener('input', function (e) {
      let x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
      e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
    });
  }

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
      
      const name = document.getElementById("name").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const service = document.getElementById("service").value;
      const city = document.getElementById("city")?.value.trim();
      
      submitBtn.disabled = true;
      btnText.style.display = "none";
      spinner.style.display = "inline-block";
      
      let msg = `Olá! Meu nome é ${name}. Meu WhatsApp é ${phone}. Gostaria de um orçamento para ${service}.`;
      if (city) msg += ` A cidade/bairro é ${city}.`;
      msg += ` Contato via site.`;
      
      const formData = { name, phone, service, city, source: 'site' };

      // Optional async fetch
      if (FORM_ENDPOINT) {
        fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        }).catch(err => console.error(err));
      }

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

