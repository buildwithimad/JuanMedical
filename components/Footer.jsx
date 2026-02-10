"use client";

import React from "react";
import Link from "next/link";
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
    brand: "Juan Medical",
    tagline: "Home Healthcare Services",
    desc: "Leading company supporting healthcare facilities with the right staff. We are committed to raising the standard of care in every home we serve.",
    contact: "hello@juan.sa",
    sections: [
      {
        title: "Services",
        links: [
          { name: "Elderly Care", href: "/services#elderly" },
          { name: "Childcare", href: "/services#childcare" },
          { name: "Home Nursing", href: "/services#nursing" },
          { name: "Staff Training", href: "/training" },
        ]
      },
      {
        title: "Company",
        links: [
          { name: "About Us", href: "/about" },
          { name: "Contact Us", href: "/contact" },
          { name: "Privacy Policy", href: "/privacy" },
          { name: "Terms & Conditions", href: "/terms" },
        ]
      }
    ],
    copyright: "© 2026 Juan Medical. All rights reserved.",
    credit: "Handcrafted for Excellence"
  },
  ar: {
    brand: "جون الطبية",
    tagline: "خدمات الرعاية الصحية المنزلية",
    desc: "شركة رائدة تدعم المرافق الصحية بالكوادر المناسبة. نحن ملتزمون برفع مستوى الرعاية في كل منزل نخدمه.",
    contact: "hello@juan.sa",
    sections: [
      {
        title: "خدماتنا",
        links: [
          { name: "رعاية المسنين", href: "/services#elderly" },
          { name: "رعاية الأطفال", href: "/services#childcare" },
          { name: "التمريض المنزلي", href: "/services#nursing" },
          { name: "تدريب الكوادر", href: "/training" },
        ]
      },
      {
        title: "الشركة",
        links: [
          { name: "من نحن", href: "/about" },
          { name: "اتصل بنا", href: "/contact" },
          { name: "سياسة الخصوصية", href: "/privacy" },
          { name: "الشروط والأحكام", href: "/terms" },
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
    <footer className="bg-white pt-32 pb-12 overflow-hidden border-t border-black/5" dir={isRTL ? "rtl" : "ltr"}>
      <div className="w-full px-6 lg:px-16 max-w-[1600px] mx-auto">
        
        <div className="flex flex-col lg:flex-row justify-between gap-20 lg:gap-0 mb-24">
          
          {/* 1. LEFT COLUMN: Massive Brand Identity */}
          <div className="lg:w-5/12 flex flex-col items-start">
            <div className="flex items-center gap-4 mb-8">
               <div className="w-10 h-[2px] bg-[#22347a]" />
               <span className="text-xs font-black uppercase tracking-[0.3em] text-black/40">{t.tagline}</span>
            </div>
            
            <h2 className="text-[12vw] lg:text-[6vw] font-black text-black leading-[0.8] tracking-tighter uppercase mb-10">
              Juan<span className="text-transparent bg-clip-text bg-gradient-to-br from-[#22347a] to-[#3b7335]">.</span>
            </h2>
            
            <p className="text-xl font-medium text-black/50 leading-relaxed max-w-md mb-12">
              {t.desc}
            </p>

            {/* Creative Social Row */}
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

          {/* 2. RIGHT COLUMN: Clean Navigation Grid */}
          <div className="lg:w-6/12 grid grid-cols-1 sm:grid-cols-2 gap-16 lg:gap-24 lg:pt-12">
            {t.sections.map((section, idx) => (
              <div key={idx} className="flex flex-col gap-8">
                <h3 className="text-sm font-black uppercase tracking-[0.2em] text-[#3b7335]">
                  {section.title}
                </h3>
                <ul className="flex flex-col gap-6">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <Link 
                        href={link.href}
                        className="group flex items-center justify-between text-2xl lg:text-3xl font-bold text-black hover:text-[#22347a] transition-colors duration-300"
                      >
                        <span>{link.name}</span>
                        <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
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

        {/* 3. BOTTOM BAR: Minimal & Clean */}
        <div className="pt-10 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Contact Pill */}
          <div className="flex items-center gap-2 px-6 py-2 rounded-full bg-[#F8F9FB]">
             <div className="w-2 h-2 rounded-full bg-[#3b7335] animate-pulse" />
             <span className="text-sm font-bold text-[#22347a]">{t.contact}</span>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 text-xs font-bold uppercase tracking-widest text-black/30">
            <p>{t.copyright}</p>
            <span className="hidden md:block w-1 h-1 rounded-full bg-black/20" />
            <p className="hover:text-black transition-colors">{t.credit}</p>
          </div>
        </div>

      </div>
      
      {/* Background Decor */}
      <div className="absolute bottom-0 left-0 w-full h-[50vh] bg-gradient-to-t from-[#22347a]/[0.02] to-transparent pointer-events-none" />
    </footer>
  );
}