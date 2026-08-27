import {
  CheckCircle2,
  MessageCircle,
  Palette,
  Send,
} from "lucide-react";
import { processSteps, whatsappUrl } from "@/data/content";

const icons = [MessageCircle, Palette, Send, CheckCircle2];

export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#fff8f2] py-24 sm:py-28 lg:py-32"
    >
      {/* Decorative Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-yellow-200/40 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-red-100/50 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-red-500 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-red-500" />
            Cara Pemesanan
          </div>

          <h2 className="text-3xl font-black leading-tight tracking-tight text-black sm:text-4xl lg:text-5xl">
            Prosesnya
            <br />
            <span className="text-red-500">nggak ribet.</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            Cukup ceritakan kebutuhan Anda. Kami akan membantu membahas
            detailnya sampai kebutuhan desain Anda siap dikerjakan.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative mt-16">
          {/* Connecting Line - Desktop */}
          <div
            aria-hidden="true"
            className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-gray-200 lg:block"
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => {
              const Icon = icons[index % icons.length];

              return (
                <article
                  key={step.number}
                  className="relative rounded-3xl border border-black/5 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7"
                >
                  {/* Number */}
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-lg font-black text-white">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-500">
                    <Icon size={19} />
                  </div>

                  {/* Content */}
                  <div className="mt-7">
                    <h3 className="text-xl font-bold tracking-tight text-black">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-3xl bg-red-500 px-6 py-7 text-center sm:px-8 lg:flex-row lg:text-left">
          <div>
            <p className="text-lg font-bold text-white sm:text-xl">
              Sudah punya kebutuhan desain?
            </p>

            <p className="mt-1 text-sm leading-6 text-red-100">
              Langsung hubungi AMS Maju Jaya untuk mulai berdiskusi.
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold !text-black transition-all hover:-translate-y-0.5 hover:bg-yellow-400"
          >
            <MessageCircle size={17} />
            Mulai Konsultasi
          </a>
        </div>
      </div>
    </section>
  );
}