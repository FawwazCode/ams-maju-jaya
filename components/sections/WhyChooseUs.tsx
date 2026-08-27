import {
  Check,
  MessageCircle,
  Palette,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { advantages, siteConfig, whatsappUrl } from "@/data/content";

const icons = [Palette, Sparkles, MessageCircle, ShieldCheck];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-[#111111] py-24 text-white sm:py-28 lg:py-32"
    >
      {/* Decorative Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-red-500/20 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
          {/* Left Content */}
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-yellow-400">
              <Sparkles size={15} />
              Kenapa Kami?
            </div>

            <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Bukan hanya
              <br />
              <span className="text-red-500">membuat desain.</span>
            </h2>

            <p className="mt-6 max-w-lg text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
              Kami ingin membantu setiap pelanggan mendapatkan hasil yang
              sesuai dengan kebutuhan mereka, mulai dari ide awal hingga
              desain siap digunakan.
            </p>

            {/* Mini CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold !text-black transition-all hover:-translate-y-0.5 hover:bg-yellow-400"
            >
              <MessageCircle size={17} />
              Konsultasikan Kebutuhan
            </a>
          </div>

          {/* Advantages */}
          <div className="grid gap-3 sm:grid-cols-2">
            {advantages.map((advantage, index) => {
              const Icon = icons[index % icons.length];

              return (
                <article
                  key={advantage.title}
                  className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07] sm:p-7"
                >
                  {/* Icon */}
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10 text-red-400 transition-colors duration-300 group-hover:bg-red-500 group-hover:text-white">
                    <Icon size={20} />
                  </div>

                  {/* Content */}
                  <div className="mt-6">
                    <h3 className="text-lg font-bold tracking-tight text-white">
                      {advantage.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-400">
                      {advantage.description}
                    </p>
                  </div>

                  {/* Check */}
                  <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-gray-500">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/5">
                      <Check size={12} />
                    </span>

                    AMS Maju Jaya
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 sm:pt-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
              Punya ide yang masih belum jelas? Tidak perlu khawatir. Ceritakan
              saja kebutuhan Anda, dan kita diskusikan bersama.
            </p>

            <span className="text-sm font-bold text-white">
              {siteConfig.name}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}