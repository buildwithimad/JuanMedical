"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import ScrollBasedAnimation from "../Animations/ScrollBasedAnimations";
import { Sparkles, ArrowDown } from "lucide-react";

const heroData = {
  en: {
    badge: "Who We Are",
    titleStart: "We are Juan",
    titleHighlight: "Medical",
    subtitle: "Redefining home healthcare in Saudi Arabia with compassion, advanced expertise, and an unwavering commitment to excellence in every home we serve.",
  },
  ar: {
    badge: "من نحن",
    titleStart: "نحن جون",
    titleHighlight: "الطبية",
    subtitle: "نعيد تعريف الرعاية الصحية المنزلية في المملكة العربية السعودية بالرحمة، والخبرة المتقدمة، والالتزام الراسخ بالتميز في كل منزل نخدمه.",
  }
};

export default function AboutHero() {
  const pathname = usePathname();
  const lang = pathname?.startsWith("/ar") ? "ar" : "en";
  const t = heroData[lang];
  const isRTL = lang === "ar";

  return (
    <section className="relative min-h-[90vh] w-full bg-white flex flex-col justify-center overflow-hidden pt-48 pb-16" dir={isRTL ? "rtl" : "ltr"}>
      
      <div className="w-full px-6 lg:px-16 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* 1. LEFT SIDE: MASSIVE TYPOGRAPHY */}
          <div className="lg:col-span-6 flex flex-col items-start z-10">
            <ScrollBasedAnimation direction="up" delay={0.1}>
              
              {/* Badge - Pill Style */}
              <div className="inline-flex items-center gap-3 py-2 px-5 rounded-full bg-[#F8F9FB] border border-[#22347a]/5 mb-10">
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-sm text-[#22347a]">
                    <Sparkles className="w-3 h-3" />
                </div>
                <span className="text-xs font-black tracking-[0.3em] uppercase text-[#22347a]">{t.badge}</span>
              </div>
              
              {/* Headline - Mixed Solid & Gradient */}
              <h1 className="text-[14vw] lg:text-[9vw] font-black tracking-tighter mb-8 leading-[0.85] uppercase text-black">
                {t.titleStart}<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22347a] to-[#3b7335]">
                  {t.titleHighlight}
                </span>.
              </h1>
              
              {/* Subtitle - Clean & Readable */}
              <p className="text-xl md:text-2xl text-black/50 font-medium leading-relaxed max-w-xl mb-12">
                {t.subtitle}
              </p>

              {/* Minimal Scroll Indicator */}
              <div className="flex items-center gap-4 animate-bounce opacity-50">
                <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center">
                   <ArrowDown className="w-4 h-4 text-black" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-black/40">Scroll</span>
              </div>

            </ScrollBasedAnimation>
          </div>

          {/* 2. RIGHT SIDE: SHAPED IMAGE CONTAINER */}
          <div className="lg:col-span-6 relative">
             <ScrollBasedAnimation direction="up" delay={0.3}>
                <div className="relative w-full aspect-[5/5] rounded-[3rem] overflow-hidden">
                    
                    {/* Image Layer */}
                    <Image
                        src="/About/AboutHero1.png"
                        alt="Juan Medical Team"
                        fill
                        className="object-cover scale-105 hover:scale-100 transition-transform duration-1000"
                        priority
                    />

                    {/* Overlay Gradient (Subtle Brand Tint) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#22347a]/20 to-transparent mix-blend-multiply pointer-events-none" />
                    
                    
                </div>

                {/* Decorative Elements behind image */}
                <div className="absolute -z-10 top-10 -right-10 w-full h-full border border-[#22347a]/5 rounded-[3rem]" />
             </ScrollBasedAnimation>
          </div>

        </div>
      </div>

    </section>
  );
}