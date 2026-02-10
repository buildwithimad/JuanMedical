"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Services", href: "/en/services" },
  { name: "About", href: "/en/about" },
  { name: "Why Us", href: "/en/why-choose" },
  { name: "Contact", href: "/en/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();
  const isRTL = pathname?.startsWith("/ar");

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
          
          {/* 1. LOGO IMAGE - Made Smaller (w-20 md:w-24) */}
          <Link href="/" className="group relative z-50 block w-20 md:w-24 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/Logo.png"
              alt="Juan Medical Logo"
              width={100}
              height={100} 
              priority
              className="object-contain w-full h-auto"
            />
          </Link>

          {/* 2. HAMBURGER - Animated & Interactive */}
          <button 
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="relative z-50 flex flex-col justify-center gap-1.5 w-10 h-10 group cursor-pointer"
            aria-label="Toggle Menu"
          >
            {/* Top Line */}
            <span className={`h-[3px] bg-black rounded-full transition-all duration-500 ease-in-out ${
              isMobileOpen ? "w-8 rotate-45 translate-y-2.5 bg-[#22347a]" : "w-8 group-hover:w-10"
            }`} />
            
            {/* Middle Line */}
            <span className={`h-[3px] bg-black rounded-full transition-all duration-500 ease-in-out ml-auto ${
              isMobileOpen ? "opacity-0 translate-x-4" : "w-6 group-hover:w-8"
            }`} />
            
            {/* Bottom Line */}
            <span className={`h-[3px] bg-black rounded-full transition-all duration-500 ease-in-out ml-auto ${
              isMobileOpen ? "w-8 -rotate-45 -translate-y-2 bg-[#22347a]" : "w-4 group-hover:w-6"
            }`} />
          </button>

        </div>
      </nav>

      {/* 3. MOBILE MENU OVERLAY - Massive Creative Type */}
      <div 
        className={`fixed inset-0 bg-white z-[55] flex flex-col items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isMobileOpen ? "opacity-100 visible" : "opacity-0 invisible delay-200"
        }`}
      >
        {/* Background Decor - Subtle Gradients */}
        <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-gradient-to-b from-[#3b7335]/5 to-transparent blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-gradient-to-t from-[#22347a]/5 to-transparent blur-[120px] rounded-full pointer-events-none" />
        
        {/* Navigation Links - Centered Column */}
        <div className="flex flex-col items-center gap-6 lg:gap-10">
           {navLinks.map((link, index) => (
             <Link 
               key={link.name}
               href={isRTL ? link.href.replace("/en", "/ar") : link.href}
               onClick={() => setIsMobileOpen(false)}
               className={`group flex items-center gap-4 text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-black transition-all duration-700 ${
                 isMobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
               }`}
               style={{ transitionDelay: `${isMobileOpen ? index * 100 + 150 : 0}ms` }}
             >
               <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-black to-black group-hover:from-[#22347a] group-hover:to-[#3b7335] transition-all duration-500 group-hover:scale-105">
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