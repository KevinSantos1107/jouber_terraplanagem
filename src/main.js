const WHATSAPP_NUMBER = "5531996686933";
function whatsappUrl(text = "Olá! Gostaria de solicitar um orçamento sem compromisso.") {
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
  }
];

document.addEventListener("DOMContentLoaded", () => {
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
  if (heroImg.complete) {
    heroImg.classList.add("loaded");
  } else {
    heroImg.addEventListener("load", () => heroImg.classList.add("loaded"));
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

  // ── Render Services ──
  const servicesGrid = document.querySelector(".services-grid");
  const dialog = document.getElementById("service-dialog");
  const dialogImg = document.getElementById("dialog-img");
  const dialogNum = document.getElementById("dialog-num");
  const dialogTitle = document.getElementById("dialog-title");
  const dialogDesc = document.getElementById("dialog-desc");
  const dialogDetails = document.getElementById("dialog-details");
  const dialogClose = document.getElementById("dialog-close");
  const dialogCta = document.getElementById("dialog-cta");
  let currentService = null;

  services.forEach((s) => {
    const article = document.createElement("article");
    article.className = "service-card";
    article.innerHTML = `
      <div class="service-img-wrapper">
        <img src="${s.image}" alt="${s.alt}" class="service-img" loading="lazy" />
      </div>
      <div class="service-content">
        <div class="service-num-row">
          <span>/${s.num}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="service-arrow"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </div>
        <h3>${s.name}</h3>
        <p>${s.desc}</p>
        <button class="service-details-btn">
          Ver detalhes
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </button>
      </div>
      <div class="service-footer">
        <a href="${whatsappUrl(`Olá! Quero um orçamento para ${s.name.toLowerCase()}.`)}" target="_blank" class="service-quote">
          Solicitar orçamento
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </a>
      </div>
    `;

    const openDialog = () => {
      currentService = s;
      dialogImg.src = s.image;
      dialogImg.alt = s.alt;
      dialogNum.textContent = `/${s.num}`;
      dialogTitle.textContent = s.name;
      dialogDesc.textContent = s.desc;
      dialogDetails.innerHTML = s.details.map(d => `
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
          ${d}
        </li>
      `).join("");
      
      dialogCta.onclick = () => {
        window.open(whatsappUrl(`Olá! Quero um orçamento para ${s.name.toLowerCase()}.`), "_blank");
      };
      
      dialog.showModal();
    };

    article.querySelector(".service-img-wrapper").addEventListener("click", openDialog);
    article.querySelector(".service-content").addEventListener("click", openDialog);
    
    servicesGrid.appendChild(article);
  });

  dialogClose.addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) dialog.close();
  });

  // ── Compare Sliders ──
  const sliders = document.querySelectorAll(".compare-slider");
  sliders.forEach(slider => {
    const container = slider.parentElement;
    const after = container.querySelector(".compare-after");
    const line = container.querySelector(".compare-line");
    
    const bgImg = container.querySelector(".compare-img-bg");
    if (bgImg.complete) bgImg.classList.remove("skeleton");
    else bgImg.addEventListener("load", () => bgImg.classList.remove("skeleton"));

    slider.addEventListener("input", (e) => {
      const val = e.target.value;
      after.style.setProperty("--reveal", `${val}%`);
      line.style.setProperty("--reveal", `${val}%`);
    });
  });

  // ── Form Submission ──
  const form = document.getElementById("quote-form");
  const submitBtn = document.getElementById("submit-btn");
  const btnText = submitBtn.querySelector(".btn-text");
  const spinner = submitBtn.querySelector(".spinner");
  const formSuccess = document.getElementById("form-success");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.checkValidity()) return;
    
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const service = document.getElementById("service").value;
    
    submitBtn.disabled = true;
    btnText.style.display = "none";
    spinner.style.display = "inline-block";
    
    setTimeout(() => {
      window.open(
        whatsappUrl(`Olá! Meu nome é ${name}. Meu WhatsApp é ${phone}. Gostaria de um orçamento para ${service}.`),
        "_blank"
      );
      
      submitBtn.disabled = false;
      btnText.style.display = "inline-flex";
      spinner.style.display = "none";
      
      formSuccess.style.display = "block";
    }, 400);
  });

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
});
