"use client";

import Image from "next/image";
import { ArrowUpRight, Images } from "lucide-react";
import { useState } from "react";
import {
  portfolio,
  portfolioCategories,
  whatsappUrl,
} from "@/data/content";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredPortfolio =
    activeCategory === "Semua"
      ? portfolio
      : portfolio.filter((item) => item.category === activeCategory);

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Heading */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-600">
              <Images size={15} />
              Portfolio
            </div>

            <h2 className="text-3xl font-black leading-tight tracking-tight text-black sm:text-4xl lg:text-5xl">
              Beberapa karya yang
              <br />
              <span className="text-red-500">pernah kami kerjakan.</span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              Setiap desain dibuat dengan menyesuaikan kebutuhan dan konsep
              yang diinginkan pelanggan.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {portfolioCategories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-4 py-2.5 text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-black text-white"
                      : "border border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:text-black"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPortfolio.map((item, index) => (
            <article
              key={`${item.title}-${index}`}
              className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Overlay */}
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/50 via-transparent to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex items-center justify-between gap-4 p-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-red-500">
                    {item.category}
                  </p>

                  <h3 className="mt-1.5 text-lg font-bold tracking-tight text-black">
                    {item.title}
                  </h3>
                </div>

                <span className="text-sm font-bold text-gray-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filteredPortfolio.length === 0 && (
          <div className="mt-14 rounded-3xl border border-dashed border-gray-200 bg-gray-50 px-6 py-16 text-center">
            <p className="text-base font-semibold text-gray-700">
              Belum ada karya pada kategori ini.
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Karya akan ditampilkan di sini.
            </p>
          </div>
        )}

        {/* Bottom Note */}
        <div className="mt-10 rounded-3xl bg-[#111111] px-6 py-7 sm:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-bold text-white">
                Punya konsep desain sendiri?
              </p>

              <p className="mt-1 text-sm text-gray-400">
                Sampaikan ide Anda dan kami bantu menyesuaikannya.
              </p>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-yellow-400 px-5 py-2.5 text-sm font-bold text-black transition-all hover:-translate-y-0.5 hover:bg-yellow-300"
            >
              Konsultasi Sekarang
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}