import {
  Check,
  MessageCircle,
  Palette,
  Sparkles,
} from "lucide-react";
import { siteConfig, whatsappUrl } from "@/data/content";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32"
    >
      {/* Decorative Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-orange-100/60 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-yellow-100/60 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Visual */}
          <div className="relative mx-auto w-full max-w-lg lg:mx-0">
            <div className="relative overflow-hidden rounded-[2rem] bg-[#111111] p-5 shadow-2xl sm:p-7">
              {/* Decorative Shapes */}
              <div
                aria-hidden="true"
                className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-red-500"
              />

              <div
                aria-hidden="true"
                className="absolute -bottom-16 -left-12 h-48 w-48 rounded-full bg-orange-500"
              />

              {/* Main Card */}
              <div className="relative flex min-h-[420px] flex-col justify-between overflow-hidden rounded-[1.5rem] border border-white/10 bg-white p-7 sm:p-9">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
                      Tentang Kami
                    </p>

                    <p className="mt-2 text-2xl font-black tracking-tight text-black">
                      AMS
                    </p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500 text-white">
                    <Palette size={20} />
                  </div>
                </div>

                {/* Center */}
                <div>
                  <p className="text-sm font-medium text-gray-400">
                    AMS Maju Jaya
                  </p>

                  <h3 className="mt-2 text-3xl font-black leading-tight tracking-tight text-black sm:text-4xl">
                    Ide sederhana,
                    <br />
                    <span className="text-red-500">
                      dibuat lebih berkesan.
                    </span>
                  </h3>

                  <div className="mt-7 flex gap-2">
                    <span className="h-2 w-14 rounded-full bg-red-500" />
                    <span className="h-2 w-8 rounded-full bg-orange-400" />
                    <span className="h-2 w-4 rounded-full bg-yellow-400" />
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs text-gray-400">
                      Jasa Nyetting & Desain
                    </p>

                    <p className="mt-1 text-sm font-bold text-black">
                      Sesuai kebutuhan Anda
                    </p>
                  </div>

                  <Sparkles
                    size={28}
                    className="text-yellow-400"
                    fill="currentColor"
                  />
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-5 -right-3 rounded-2xl border border-gray-100 bg-white px-5 py-4 shadow-xl sm:-right-6">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-50 text-green-600">
                  <Check size={17} />
                </div>

                <div>
                  <p className="text-xs text-gray-400">
                    Kebutuhan Custom
                  </p>

                  <p className="text-sm font-bold text-black">
                    Bisa Dikonsultasikan
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-red-500">
              <Sparkles size={15} />
              Tentang AMS Maju Jaya
            </div>

            <h2 className="text-3xl font-black leading-tight tracking-tight text-black sm:text-4xl lg:text-5xl">
              Membantu mewujudkan
              <br />
              <span className="text-red-500">kebutuhan Anda.</span>
            </h2>

            <div className="mt-6 space-y-4 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              <p>
                <strong className="font-bold text-black">
                  {siteConfig.name}
                </strong>{" "}
                merupakan jasa yang membantu berbagai kebutuhan nyetting dan
                desain untuk keperluan pribadi, acara, usaha, sekolah,
                organisasi, dan kebutuhan lainnya.
              </p>

              <p>
                Mulai dari desain undangan, banner, piagam, hingga kebutuhan
                piala dan berbagai kebutuhan lainnya dapat dikonsultasikan
                terlebih dahulu agar hasilnya sesuai dengan yang diinginkan.
              </p>

              <p>
                Setiap kebutuhan memiliki konsep dan tujuan yang berbeda.
                Karena itu, kami mengutamakan komunikasi dengan pelanggan
                sebelum pekerjaan dimulai.
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Bisa konsultasi kebutuhan",
                "Desain menyesuaikan kebutuhan",
                "Berbagai kebutuhan dalam satu tempat",
                "Komunikasi langsung dengan pelanggan",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-gray-50 px-4 py-3"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-500">
                    <Check size={14} />
                  </span>

                  <span className="text-sm font-semibold text-gray-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3.5 text-sm font-bold !text-white transition-all hover:-translate-y-0.5 hover:bg-red-500"
            >
              <MessageCircle size={18} />
              Hubungi AMS Maju Jaya
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}