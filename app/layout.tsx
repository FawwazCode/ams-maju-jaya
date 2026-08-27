import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AMS Maju Jaya — Jasa Desain Kreatif",
    template: "%s — Nama Usaha",
  },
  description:
    "Jasa desain kreatif untuk berbagai kebutuhan seperti undangan, banner, poster, dan desain promosi.",
  keywords: [
    "jasa desain",
    "desain undangan",
    "desain banner",
    "desain poster",
    "jasa desain grafis",
    "desain promosi",
  ],
  authors: [
    {
      name: "AMS Maju Jaya",
    },
  ],
  creator: "AMS Maju Jaya",
  openGraph: {
    type: "website",
    title: "AMS Maju Jaya — Jasa Desain Kreatif",
    description:
      "Jasa desain kreatif untuk berbagai kebutuhan visual.",
    locale: "id_ID",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={inter.variable}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}