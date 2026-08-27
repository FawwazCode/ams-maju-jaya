"use client";

import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";
import { faqItems, whatsappUrl } from "@/data/content";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#fff8f2] py-24 sm:py-28 lg:py-32"
    >
      {/* Decorative Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-10 h-72 w-72 rounded-full bg-yellow-200/40 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-10 h-80 w-80 rounded-full bg-red-100/50 blur-3xl"
      />

      <div className="relative mx-auto max-w-5xl px-6 sm:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-red-500 shadow-sm">
            <HelpCircle size={15} />
            Pertanyaan Umum
          </div>

          <h2 className="text-3xl font-black leading-tight tracking-tight text-black sm:text-4xl lg:text-5xl">
            Ada yang ingin
            <br />
            <span className="text-red-500">ditanyakan?</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            Beberapa pertanyaan yang sering ditanyakan sebelum melakukan
            pemesanan.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mt-14 space-y-3">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                  isOpen
                    ? "border-red-100 shadow-md shadow-red-500/5"
                    : "border-gray-100 shadow-sm"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6 sm:py-6"
                >
                  <span
                    className={`text-sm font-bold sm:text-base ${
                      isOpen ? "text-red-500" : "text-black"
                    }`}
                  >
                    {item.question}
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 bg-red-500 text-white"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    <ChevronDown size={17} />
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    className="px-5 pb-5 sm:px-6 sm:pb-6"
                  >
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Text */}
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500">
            Masih punya pertanyaan lain?
          </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative mt-2 inline-block text-sm font-bold text-red-500"
        >
          <span>Hubungi kami untuk konsultasi</span>
            
          <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-red-500 transition-all duration-300 group-hover:w-full" />
        </a>
        </div>
      </div>
    </section>
  );
}