"use client";

import { Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { navigation, whatsappUrl,siteConfig } from "@/data/content";


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed inset-x-0 top-0 z-50">
            <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
                <nav className="flex items-center justify-between rounded-2xl border border-black/5 bg-white/95 px-4 py-3 shadow-sm backdrop-blur-md sm:px-6">
                    {/*Logo*/}
                    <a 
                        href="#home"
                        className="flex items-center gap-3"
                        onClick={() => setIsOpen(false)}
                    >
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500 text-sm font-black text-white">
                            AMS
                        </div>

                        <div className="hidden leading-tight sm:block">
                            <p className="text-sm font-bold tracking-tight text-black">
                                AMS Maju Jaya
                            </p>
                            <p className="text-[11px] text-gray-500">
                                Jasa Nyetting dan Desain 
                            </p>
                        </div>
                    </a>

                    {/*Desktop Navigation*/}
                    <div className="hidden items-center gap-7 md:flex">
                        {navigation.map((item) => (
                            <a 
                                key={item.href} 
                                href={item.href}
                                className="text-sm font-medium text-gray-600 transition-colors hover:text-red-500"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    {/*Desktop CTA*/}
                    <a 
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden items-center gap-2 rounded-full bg-red-500 px-5 py-2.5 text-sm !text-white font-semibold transition-all hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/20 md:flex"
                    >
                        <MessageCircle size={17} className="text-white" />
                        Hubungi Kami
                    </a>

                    {/*Mobile Menu Button*/}
                    <button
                        type="button"
                        aria-label={isOpen ? "Tutup Menu" : "Buka Menu"}
                        aria-expanded={isOpen}
                        onClick={() => setIsOpen((prev) => !prev)}
                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-black transition-colors hover:bg-gray-50 md:hidden"
                    >
                        {isOpen ? <X size={21} /> : <Menu size={21} />}
                    </button>
                </nav>

                {/*Mobil Navigation*/}
                {isOpen && (
                    <div className="mt-2 rounded-2xl border border-black/5 bg-white p-3 shadow-pg md:hidden">
                        <div className="flex flex-col">
                            {navigation.map((item) => (
                                <a 
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsOpen(flase)}
                                    className="rounded-xl px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-red-50 hover:text-red-500"
                                >
                                    {item.label}
                                </a>
                            ))}

                            <a 
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsOpen(false)}
                                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-red-500 px-4 py-3 text-sm font-semibold !text-white transition-colors hover:bg-red-600"
                            >
                                <MessageCircle size={17} />
                                Hubungi Kami
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}