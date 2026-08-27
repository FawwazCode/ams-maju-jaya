import {
  ArrowUpRight,
  MessageCircle,
  MapPin,
} from "lucide-react";

import {
  navigation,
  siteConfig,
  whatsappUrl,
} from "@/data/content";

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="2"
      />

      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth="2"
      />

      <circle
        cx="17.5"
        cy="6.5"
        r="1"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Main Footer */}
        <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.3fr_0.7fr_1fr] lg:gap-16">

          {/* Brand */}
          <div className="max-w-md">
            <a
              href="#home"
              className="inline-flex items-center gap-3"
            >
              {/* Logo */}
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500 text-sm font-black text-white">
                AMS
              </div>

              {/* Brand Name */}
              <div>
                <p className="text-sm font-bold tracking-tight text-white">
                  {siteConfig.name}
                </p>

                <p className="text-xs text-gray-500">
                  Jasa Nyetting & Desain
                </p>
              </div>
            </a>

            {/* Description */}
            <p className="mt-6 text-sm leading-7 text-gray-400">
              Membantu berbagai kebutuhan nyetting dan desain, mulai dari
              undangan, banner, piagam, piala, dan kebutuhan lainnya sesuai
              kebutuhan Anda.
            </p>

            {/* WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-white transition-colors hover:text-yellow-400"
            >
              <MessageCircle
                size={17}
                className="text-green-400"
              />

              <span>Hubungi via WhatsApp</span>

              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-bold text-white">
              Navigasi
            </h3>

            <nav className="mt-5 flex flex-col items-start gap-3">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold text-white">
              Hubungi Kami
            </h3>

            <div className="mt-5 space-y-4">

              {/* WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm text-gray-400 transition-colors hover:text-white"
              >
                <MessageCircle
                  size={18}
                  className="mt-0.5 shrink-0 text-green-400"
                />

                <span>WhatsApp</span>
              </a>

              {/* Location */}
              {siteConfig.location && (
                <div className="flex items-start gap-3 text-sm text-gray-400">
                  <MapPin
                    size={18}
                    className="mt-0.5 shrink-0 text-yellow-400"
                  />

                  <span>{siteConfig.location}</span>
                </div>
              )}

              {/* Instagram */}
              {siteConfig.instagram && (
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-gray-400 transition-colors hover:text-white"
                >
                  <InstagramIcon
                    size={18}
                  />

                  <span>Instagram</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-5 text-gray-500">
            © {currentYear} {siteConfig.name}. Semua hak dilindungi.
          </p>

          <p className="text-xs text-gray-600">
            Jasa Nyetting & Desain
          </p>
        </div>
      </div>
    </footer>
  );
}