import { ArrowUpRight, MessageCircle, Sparkles } from "lucide-react";
import { siteConfig, whatsappUrl } from "@/data/content";

export default function CTA() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-[#111111] py-24 sm:py-28 lg:py-32"
    >
      {/* Decorative Shapes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-red-500/30 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-orange-500/20 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-5xl px-6 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden rounded-[2rem] bg-red-500 px-6 py-12 text-center shadow-2xl sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          {/* Decorative Pattern */}
          <div
            aria-hidden="true"
            className="absolute -right-16 -top-16 h-40 w-40 rounded-full border-[24px] border-white/10"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-20 -left-20 h-52 w-52 rounded-full border-[28px] border-white/10"
          />

          {/* Content */}
          <div className="relative">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-yellow-300 backdrop-blur-sm">
              <Sparkles size={25} fill="currentColor" />
            </div>

            <p className="text-sm font-bold uppercase tracking-[0.18em] text-red-100">
              Siap Memulai?
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Punya kebutuhan desain?
              <br />
              <span className="text-yellow-300">
                Ceritakan kepada kami.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-red-100 sm:text-base sm:leading-7">
              Tidak perlu bingung mulai dari mana. Sampaikan kebutuhan,
              konsep, atau ide Anda kepada AMS Maju Jaya dan kita diskusikan
              bersama.
            </p>

            {/* CTA Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold !text-black shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400 hover:shadow-xl sm:px-7 sm:py-4"
            >
              <MessageCircle size={18} />

              Hubungi {siteConfig.name}

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <p className="mt-5 text-xs font-medium text-red-100">
              Konsultasi kebutuhan melalui WhatsApp
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}