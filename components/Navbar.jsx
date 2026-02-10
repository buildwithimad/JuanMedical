"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Globe } from "lucide-react"; // Optional icon, or just use text

const navLinks = {
  en: [
    { name: "Services", href: "/en/services" },
    { name: "About", href: "/en/about" },
    { name: "Why Us", href: "/en/why-choose" },
    { name: "Contact", href: "/en/contact" },
  ],
  ar: [
    { name: "خدماتنا", href: "/ar/services" },
    { name: "من نحن", href: "/ar/about" },
    { name: "لماذا جون", href: "/ar/why-choose" },
    { name: "تواصل معنا", href: "/ar/contact" },
  ]
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();
  
  // 1. Logic to determine current language and direction
  const isRTL = pathname?.startsWith("/ar");
  const currentLang = isRTL ? "ar" : "en";
  const menuItems = navLinks[currentLang];

  // 2. Logic to generate the "Other Language" URL
  // If we are in /en/about -> switch to /ar/about
  // If we are in /ar/about -> switch to /en/about
  const switchUrl = isRTL
    ? pathname.replace(/^\/ar/, "/en") 
    : pathname.replace(/^\/en/, "/ar");

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock Body Scroll when Mobile Menu is Open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileOpen]);

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-[60] transition-all duration-500 ease-in-out border-b ${
            scrolled 
              ? "bg-transparent py-6 lg:py-8 border-transparent" 
              : "bg-transparent py-6 lg:py-8 border-transparent"
        }`}
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-16 flex justify-between items-center">
          
          {/* 1. LOGO */}
          <Link href={`/${currentLang}`} className="group relative z-50 block w-20 md:w-24 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/Logo.png"
              alt="Juan Medical Logo"
              width={80}
              height={80} 
              priority
              className="object-contain w-full h-auto"
            />
          </Link>

          {/* RIGHT SIDE ACTIONS */}
          <div className="flex items-center gap-4 md:gap-8 z-50">
            
            {/* 2. LANGUAGE SWITCHER (Desktop/Top Bar) */}
            <Link 
              href={switchUrl}
              className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full border border-black/5 bg-white/50 backdrop-blur-sm hover:bg-[#22347a] hover:text-white hover:border-[#22347a] transition-all duration-300 group"
            >
               <Globe className="w-4 h-4 text-black/40 group-hover:text-white transition-colors" />
               <span className={`text-sm font-black uppercase tracking-widest ${isRTL ? "font-sans" : "font-arabic"}`}>
                 {isRTL ? "English" : "عربي"}
               </span>
            </Link>

            {/* 3. HAMBURGER */}
            <button 
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="relative flex flex-col justify-center gap-1.5 w-10 h-10 group cursor-pointer"
              aria-label="Toggle Menu"
            >
              <span className={`h-[3px] bg-black rounded-full transition-all duration-500 ease-in-out ${
                isMobileOpen ? "w-8 rotate-45 translate-y-2.5 bg-[#22347a]" : "w-8 group-hover:w-10"
              }`} />
              <span className={`h-[3px] bg-black rounded-full transition-all duration-500 ease-in-out ml-auto ${
                isMobileOpen ? "opacity-0 translate-x-4" : "w-6 group-hover:w-8"
              }`} />
              <span className={`h-[3px] bg-black rounded-full transition-all duration-500 ease-in-out ml-auto ${
                isMobileOpen ? "w-8 -rotate-45 -translate-y-2 bg-[#22347a]" : "w-4 group-hover:w-6"
              }`} />
            </button>
          </div>

        </div>
      </nav>

      {/* 4. MOBILE MENU OVERLAY */}
      <div 
        className={`fixed inset-0 bg-white z-[55] flex flex-col items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isMobileOpen ? "opacity-100 visible" : "opacity-0 invisible delay-200"
        }`}
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-gradient-to-b from-[#3b7335]/5 to-transparent blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-gradient-to-t from-[#22347a]/5 to-transparent blur-[120px] rounded-full pointer-events-none" />
        
        {/* Navigation Links */}
        <div className="flex flex-col items-center gap-6 lg:gap-10">
           {menuItems.map((link, index) => (
             <Link 
               key={link.name}
               href={link.href}
               onClick={() => setIsMobileOpen(false)}
               className={`group flex items-center gap-4 text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-black transition-all duration-700 ${
                 isMobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
               }`}
               style={{ transitionDelay: `${isMobileOpen ? index * 100 + 150 : 0}ms` }}
             >
               <span className={`relative text-transparent bg-clip-text bg-gradient-to-r from-black to-black group-hover:from-[#22347a] group-hover:to-[#3b7335] transition-all duration-500 group-hover:scale-105 ${isRTL ? "font-arabic" : ""}`}>
                  {link.name}
               </span>
               <div className="h-[4px] sm:h-[6px] w-0 bg-[#3b7335] rounded-full group-hover:w-16 transition-all duration-500 ease-out" />
             </Link>
           ))}

          
        </div>

      </div>
    </>
  );
}