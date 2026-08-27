import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { whatsappUrl } from "@/data/content";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-white"
    >
      {/* Decorative Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-orange-100 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-yellow-100 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-28 sm:px-8 sm:pt-32 lg:px-12 lg:pb-24 lg:pt-32">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-4 py-2 text-sm font-semibold text-red-600">
              <Sparkles size={15} />
              Jasa Nyetting & Desain
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-black leading-[1.08] tracking-tight text-black sm:text-5xl lg:text-6xl xl:text-7xl">
              Wujudkan Kebutuhan Anda dengan{" "}
              <span className="text-red-500">
                Desain yang Berkesan.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              AMS Maju Jaya membantu berbagai kebutuhan nyetting dan desain,
              mulai dari undangan, banner, piagam, hingga kebutuhan lainnya.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-red-500 px-6 py-3.5 text-sm font-bold !text-white shadow-lg shadow-red-500/20 transition-all hover:-translate-y-0.5 hover:bg-red-600 hover:shadow-xl hover:shadow-red-500/25"
              >
                <MessageCircle size={18} />
                Konsultasi Sekarang
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3.5 text-sm font-bold text-black transition-all hover:border-gray-300 hover:bg-gray-50"
              >
                Lihat Layanan
                <ArrowRight size={17} />
              </a>
            </div>

            {/* Trust Points */}
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                Desain sesuai kebutuhan
              </span>

              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                Mudah dikonsultasikan
              </span>

              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                Pelayanan ramah
              </span>
            </div>
          </div>

          {/* Visual */}
          <div className="relative mx-auto w-full max-w-xl lg:mx-0 lg:ml-auto">
            <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-[#111111] p-6 shadow-2xl sm:p-8">
              {/* Decorative Shapes */}
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-red-500" />

              <div className="absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-orange-500" />

              {/* Main Visual */}
              <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[1.5rem] border border-white/10 bg-white p-6 sm:p-8">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                      AMS
                    </p>

                    <p className="mt-2 text-2xl font-black tracking-tight text-black sm:text-3xl">
                      Maju Jaya
                    </p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-500 text-sm font-black text-white">
                    AM
                  </div>
                </div>

                <div className="py-8">
                  <p className="max-w-sm text-3xl font-black leading-tight tracking-tight text-black sm:text-4xl">
                    Design your
                    <br />
                    <span className="text-red-500">
                      special moment.
                    </span>
                  </p>

                  <div className="mt-6 h-2 w-24 rounded-full bg-orange-500" />
                  <div className="mt-2 h-2 w-14 rounded-full bg-yellow-400" />
                </div>

                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-xs font-medium text-gray-400">
                      Jasa Nyetting & Desain
                    </p>

                    <p className="mt-1 text-sm font-bold text-black">
                      Kreatif • Rapi • Sesuai Kebutuhan
                    </p>
                  </div>

                  <div className="h-16 w-16 rotate-6 rounded-2xl bg-yellow-400 sm:h-20 sm:w-20" />
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-5 -left-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-xl sm:-left-8 sm:p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                  <Sparkles size={19} />
                </div>

                <div>
                  <p className="text-xs font-medium text-gray-400">
                    Kebutuhan Desain
                  </p>

                  <p className="text-sm font-bold text-black">
                    Bisa Dikonsultasikan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}