import { createFileRoute } from "@tanstack/react-router";

import logoAsset from "@/assets/jouber-logo.png.asset.json";
import heroPosterAsset from "@/assets/hero-excavator.webp.asset.json";
import slideEarthworks from "@/assets/service-earthworks.webp.asset.json";
import slideDemolition from "@/assets/service-demolition.webp.asset.json";
import slideClearing from "@/assets/service-clearing.webp.asset.json";

const WHATSAPP_URL =
  "https://wa.me/5531996686933?text=" +
  encodeURIComponent("Olá! Gostaria de solicitar um orçamento sem compromisso.");

const slides = [
  { url: heroPosterAsset.url, alt: "Retroescavadeira em terreno preparado" },
  { url: slideEarthworks.url, alt: "Escavadeira nivelando terreno" },
  { url: slideDemolition.url, alt: "Demolição controlada de imóvel" },
  { url: slideClearing.url, alt: "Limpeza de lote com retroescavadeira" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jouber Terraplanagem e Locações | Sete Lagoas e região" },
      {
        name: "description",
        content:
          "Terraplanagem, aterro, demolição, limpeza de lotes e remoção de entulho em Sete Lagoas e região. 15 anos de experiência e mais de 100 clientes atendidos. Peça seu orçamento pelo WhatsApp.",
      },
      { property: "og:title", content: "Jouber Terraplanagem e Locações" },
      {
        property: "og:description",
        content:
          "Sua obra começa com a base certa. Terraplanagem, demolição e limpeza de lotes em Sete Lagoas e região.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

function Index() {
  return (
    <main className="relative min-h-svh overflow-hidden bg-background text-foreground">
      {/* ── Background: video loop over crossfading photo slideshow ── */}
      <div className="absolute inset-0" aria-hidden="true">
        {slides.map((slide, i) => (
          <img
            key={slide.url}
            src={slide.url}
            alt=""
            className="hero-slide absolute inset-0 h-full w-full object-cover"
            style={{ animationDelay: `${i * 6}s` }}
          />
        ))}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/hero-loop-compact.mp4"
          poster={heroPosterAsset.url}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        {/* Legibility overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
      </div>

      {/* ── Top bar ── */}
      <header className="relative z-10 flex items-center justify-between px-5 pt-5 sm:px-10 sm:pt-8">
        <img
          src={logoAsset.url}
          alt="Jouber Terraplanagem e Locações"
          className="hero-rise h-14 w-auto drop-shadow-lg sm:h-20"
        />
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hero-rise inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md transition-colors hover:bg-white/20 sm:px-5 sm:py-2.5 sm:text-sm"
          style={{ animationDelay: "0.15s" }}
        >
          <WhatsAppIcon className="h-4 w-4 text-primary" />
          <span className="hidden sm:inline">(31) 99668-6933</span>
          <span className="sm:hidden">Ligar</span>
        </a>
      </header>

      {/* ── Hero content ── */}
      <section className="relative z-10 flex min-h-[calc(100svh-6rem)] flex-col justify-end px-5 pb-10 sm:justify-center sm:px-10 sm:pb-0 lg:px-16">
        <div className="max-w-3xl">
          <p
            className="hero-rise mb-4 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-primary backdrop-blur-sm sm:text-xs"
            style={{ animationDelay: "0.25s" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Sete Lagoas e região
          </p>

          <h1
            className="hero-rise text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "0.35s" }}
          >
            Sua obra começa com a{" "}
            <span className="text-primary">base certa.</span>
          </h1>

          <p
            className="hero-rise mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:mt-6 sm:text-lg"
            style={{ animationDelay: "0.45s" }}
          >
            Terraplanagem, aterro, demolição, limpeza de lotes e remoção de
            entulho — com planejamento, segurança e o equipamento certo para
            cada terreno.
          </p>

          <div
            className="hero-rise mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:items-center"
            style={{ animationDelay: "0.55s" }}
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-2xl bg-primary px-7 py-4 text-base font-extrabold uppercase tracking-wide text-primary-foreground shadow-[0_10px_40px_-8px] shadow-primary/60 transition-transform duration-200 hover:scale-[1.03] active:scale-95 sm:px-9"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Pedir orçamento grátis
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/25 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/15 sm:px-9"
            >
              Ver serviços
            </a>
          </div>

          {/* ── Stats ── */}
          <dl
            className="hero-rise mt-9 grid grid-cols-3 divide-x divide-white/15 border-t border-white/15 pt-6 sm:mt-12 sm:max-w-lg"
            style={{ animationDelay: "0.65s" }}
          >
            {[
              { value: "15", label: "anos de experiência" },
              { value: "100+", label: "clientes atendidos" },
              { value: "6", label: "serviços completos" },
            ].map((stat) => (
              <div key={stat.label} className="px-3 first:pl-0 sm:px-5">
                <dt className="order-2 mt-1 block text-[10px] font-medium uppercase tracking-wider text-white/60 sm:text-xs">
                  {stat.label}
                </dt>
                <dd className="text-2xl font-black text-white sm:text-4xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* ── Scroll hint ── */}
        <div className="pointer-events-none absolute bottom-4 left-1/2 hidden -translate-x-1/2 sm:block">
          <div className="scroll-hint flex h-9 w-6 items-start justify-center rounded-full border-2 border-white/40 p-1.5">
            <div className="h-2 w-1 rounded-full bg-white/70" />
          </div>
        </div>
      </section>
    </main>
  );
}
