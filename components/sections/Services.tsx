import {
  Award,
  FileText,
  Image as ImageIcon,
  LayoutTemplate,
  Palette,
  PenTool,
  MessageCircle
} from "lucide-react";
import { services, siteConfig, whatsappUrl } from "@/data/content";

const icons = [
  PenTool,
  FileText,
  ImageIcon,
  Palette,
  Award,
  LayoutTemplate,
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#fff8f2] py-24 sm:py-28 lg:py-32"
    >
      {/* Decorative Elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-32 h-48 w-48 rounded-full bg-yellow-200/40 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-20 h-64 w-64 rounded-full bg-orange-200/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-red-600">
            <span className="h-2 w-2 rounded-full bg-red-500" />
            Layanan Kami
          </div>

          <h2 className="text-3xl font-black leading-tight tracking-tight text-black sm:text-4xl lg:text-5xl">
            Berbagai kebutuhan,
            <br />
            <span className="text-red-500">satu tempat.</span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            AMS Maju Jaya membantu berbagai kebutuhan nyetting, desain,
            penghargaan, dan kebutuhan visual lainnya.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[index % icons.length];

            return (
              <article
                key={service.title}
                className="group relative overflow-hidden rounded-3xl border border-black/5 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 sm:p-7"
              >
                {/* Number */}
                <div className="absolute right-6 top-6 text-sm font-bold text-gray-200 transition-colors duration-300 group-hover:text-red-100">
                  0{index + 1}
                </div>

                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-500 transition-colors duration-300 group-hover:bg-red-500 group-hover:text-white">
                  <Icon size={22} strokeWidth={2} />
                </div>

                {/* Content */}
                <div className="mt-7">
                  <h3 className="text-xl font-bold tracking-tight text-black">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Accent */}
                <div className="mt-7 flex items-center gap-2">
                  <div className="h-1.5 w-8 rounded-full bg-red-500 transition-all duration-300 group-hover:w-12" />

                  <div className="h-1.5 w-4 rounded-full bg-orange-400" />

                  <div className="h-1.5 w-2 rounded-full bg-yellow-400" />
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-3xl bg-black p-6 sm:p-8 lg:flex-row lg:items-center">
          <div>
            <p className="text-lg font-bold text-white sm:text-xl">
              Punya kebutuhan desain lainnya?
            </p>

            <p className="mt-1 text-sm leading-6 text-gray-400">
              Ceritakan kebutuhan Anda dan mari diskusikan bersama.
            </p>
          </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-yellow-400 px-6 py-3 text-sm font-bold text-black transition-all hover:bg-yellow-300"
            >
              <MessageCircle size={17} />
              Konsultasikan Kebutuhan
            </a>
        </div>
      </div>
    </section>
  );
}