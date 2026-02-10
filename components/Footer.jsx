"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image"; // 1. Import Image
import { usePathname } from "next/navigation";
import { 
  Instagram, 
  Twitter, 
  Linkedin, 
  Facebook, 
  ArrowUpRight 
} from "lucide-react";

const footerData = {
  en: {
    tagline: "Home Healthcare Services",
    desc: "Leading company supporting healthcare facilities with the right staff. We are committed to raising the standard of care in every home we serve.",
    contact: "hello@juan.sa",
    sections: [
      {
        title: "Company",
        links: [
          { name: "About Us", href: "/en/about" },
          { name: "Services", href: "/en/services" },
          { name: "Contact Us", href: "/en/contact" },
          { name: "Privacy Policy", href: "/en/privacy" },
        ]
      }
    ],
    copyright: "© 2026 Juan Medical. All rights reserved.",
    credit: "Handcrafted for Excellence"
  },
  ar: {
    tagline: "خدمات الرعاية الصحية المنزلية",
    desc: "شركة رائدة تدعم المرافق الصحية بالكوادر المناسبة. نحن ملتزمون برفع مستوى الرعاية في كل منزل نخدمه.",
    contact: "hello@juan.sa",
    sections: [
      {
        title: "الشركة",
        links: [
          { name: "من نحن", href: "/ar/about" },
          { name: "الخدمات", href: "/ar/services" },
          { name: "اتصل بنا", href: "/ar/contact" },
          { name: "سياسة الخصوصية", href: "/ar/privacy" },
        ]
      }
    ],
    copyright: "© 2026 جون الطبية. جميع الحقوق محفوظة.",
    credit: "صنعت بإتقان"
  }
};

export default function Footer() {
  const pathname = usePathname();
  const lang = pathname?.startsWith("/ar") ? "ar" : "en";
  const t = footerData[lang];
  const isRTL = lang === "ar";

  return (
    <footer className="bg-white pt-24 lg:pt-32 pb-12 overflow-hidden border-t border-black/5" dir={isRTL ? "rtl" : "ltr"}>
      <div className="w-full px-6 lg:px-16 max-w-[1600px] mx-auto">
        
        {/* ================= MAIN CONTENT ROW ================= */}
        <div className="flex flex-col lg:flex-row justify-between gap-20 lg:gap-0 mb-24">
          
          {/* 1. LEFT COLUMN: BRANDING */}
          <div className="lg:w-5/12 flex flex-col items-start">
            {/* Tagline Pill */}
            <div className="flex items-center gap-4 mb-8">
               <div className="w-10 h-[2px] bg-[#22347a]" />
               <span className="text-xs font-black uppercase tracking-[0.3em] text-black/40">{t.tagline}</span>
            </div>
            
            {/* 2. LOGO IMAGE (Replaces Massive Text) */}
            <Link href="/" className="mb-10 block relative hover:scale-105 transition-transform duration-500">
               <Image 
                 src="/Logo.png" 
                 alt="Juan Medical" 
                 width={200} 
                 height={80} 
                 className="w-40 lg:w-48 h-auto object-contain"
               />
            </Link>
            
            {/* Description */}
            <p className="text-xl font-medium text-black/50 leading-relaxed max-w-md mb-12">
              {t.desc}
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              {[Instagram, Twitter, Linkedin, Facebook].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="group w-14 h-14 rounded-full border border-black/5 flex items-center justify-center text-black hover:border-transparent hover:bg-[#22347a] hover:text-white transition-all duration-500"
                >
                  <Icon className="w-5 h-5 transition-transform duration-500 group-hover:rotate-12" strokeWidth={2} />
                </a>
              ))}
            </div>
          </div>

          {/* 2. RIGHT COLUMN: NAVIGATION */}
          <div className="lg:w-5/12 flex flex-col lg:items-end lg:pt-12">
            {t.sections.map((section, idx) => (
              <div key={idx} className="flex flex-col gap-8 w-full lg:max-w-xs">
                <h3 className="text-sm font-black uppercase tracking-[0.2em] text-[#3b7335]">
                  {section.title}
                </h3>
                <ul className="flex flex-col gap-6">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <Link 
                        href={link.href}
                        className="group flex items-center justify-between py-2 border-b border-black/5 hover:border-black/20 text-2xl lg:text-3xl font-bold text-black hover:text-[#22347a] hover:pl-4 transition-all duration-500"
                      >
                        <span>{link.name}</span>
                        <div className="w-10 h-10 rounded-full bg-[#F8F9FB] flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                           <ArrowUpRight className={`w-5 h-5 text-black ${isRTL ? "rotate-[-90deg]" : ""}`} />
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="pt-10 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Contact Pill */}
          <div className="flex items-center gap-2 px-6 py-2 rounded-full bg-[#F8F9FB] border border-black/5">
             <div className="w-2 h-2 rounded-full bg-[#3b7335] animate-pulse" />
             <span className="text-sm font-bold text-[#22347a]">{t.contact}</span>
          </div>

          {/* Credits */}
          <div className="flex flex-col md:flex-row items-center gap-6 text-xs font-bold uppercase tracking-widest text-black/30">
            <p>{t.copyright}</p>
            <span className="hidden md:block w-1 h-1 rounded-full bg-black/20" />
            <p className="hover:text-black transition-colors cursor-default">{t.credit}</p>
          </div>
        </div>

      </div>
      
      {/* Background Decor Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-[50vh] bg-gradient-to-t from-[#22347a]/[0.02] to-transparent pointer-events-none" />
    </footer>
  );
}