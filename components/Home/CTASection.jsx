"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ScrollBasedAnimation from "../Animations/ScrollBasedAnimations";

const ctaData = {
  en: {
    headline: "Need Our Services?",
    desc: "Contact us now for a free consultation and choose the service that suits you.",
    btn: "Contact Us Now"
  },
  ar: {
    headline: "هل تحتاج خدماتنا؟",
    desc: "تواصل معنا الآن للحصول على استشارة مجانية واختيار الخدمة التي تناسبك.",
    btn: "تواصل معنا الآن"
  }
};

export default function CTA() {
  const pathname = usePathname();
  const lang = pathname?.startsWith("/ar") ? "ar" : "en";
  const t = ctaData[lang];
  const isRTL = lang === "ar";

  return (
    <section className="bg-white py-32 overflow-hidden" dir={isRTL ? "rtl" : "ltr"}>
      <div className="w-full px-6 lg:px-16 max-w-[1600px] mx-auto">
        <ScrollBasedAnimation direction="up" delay={0.1} duration={0.8}>
          <div className="flex flex-col items-center text-center">
            
            {/* Massive Headline - Gradient Text */}
            <h2 className="text-[10vw] lg:text-[8vw] font-black tracking-tighter mb-8 leading-[0.9] uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#22347a] to-[#3b7335]">
              {t.headline}
            </h2>

            {/* Description - Clean & Airy */}
            <p className="text-xl md:text-3xl font-medium text-slate-500 leading-relaxed max-w-3xl mb-16">
              {t.desc}
            </p>

            {/* Smooth Rounded Button - No Shadows, Clean Gradient Hover */}
            <Link href={lang === "ar" ? "/ar/contact" : "/en/contact"} className="w-full lg:w-auto">
              <button className="group relative inline-flex items-center justify-center gap-6 w-full lg:w-auto border border-[#22347a] px-12 py-6 rounded-full overflow-hidden transition-all duration-500 hover:border-transparent hover:scale-[1.02]">
                
                {/* Text stays sharp */}
                <span className="relative z-10 text-[#22347a] group-hover:text-white font-black text-xl lg:text-2xl uppercase tracking-widest transition-colors duration-500">
                  {t.btn}
                </span>

                {/* Arrow Icon Reveal */}
                <div className="relative z-10 text-[#22347a] group-hover:text-white transition-transform duration-500 group-hover:rotate-45 group-hover:translate-x-1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M7 17L17 7M17 7H10M17 7V14" />
                  </svg>
                </div>

                {/* Background Smooth Gradient Fill */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#22347a] to-[#3b7335] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>
            </Link>

          </div>
        </ScrollBasedAnimation>
      </div>

      {/* Optional Large Background Watermark */}
      <div className="mt-20 opacity-[0.03] select-none pointer-events-none text-center">
          <h4 className="text-[18vw] font-black text-[#22347a] leading-none uppercase tracking-tighter whitespace-nowrap">
              JUAN MEDICAL
          </h4>
      </div>
    </section>
  );
}