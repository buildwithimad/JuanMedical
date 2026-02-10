"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ScrollBasedAnimation from "../Animations/ScrollBasedAnimations";
import { Sparkles } from "lucide-react";

const heroContent = {
  en: {
    badge: "Get in Touch",
    titleStart: "Contact",
    titleHighlight: "Us.",
    subtitle: "We at Juan listen to you and fulfill your needs.",
  },
  ar: {
    badge: "تواصل معنا",
    titleStart: "تواصل",
    titleHighlight: "معنا.",
    subtitle: "في جون، نستمع إليك ونلبي احتياجاتك.",
  }
};

export default function ContactHero() {
  const pathname = usePathname();
  const lang = pathname?.startsWith("/ar") ? "ar" : "en";
  const t = heroContent[lang];
  const isRTL = lang === "ar";

  return (
    <section className="relative min-h-[70vh] w-full flex flex-col justify-center pt-32 pb-12 bg-white" dir={isRTL ? "rtl" : "ltr"}>
      <div className="w-full px-6 lg:px-16 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* TEXT SIDE */}
          <div className="lg:col-span-7 z-10">
            <ScrollBasedAnimation direction="up" delay={0.1}>
              <div className="inline-flex items-center gap-3 py-2 px-5 rounded-full bg-[#F8F9FB] border border-[#22347a]/5 mb-10">
                <div className="w-6 h-6 rounded-full bg-white border border-black/5 flex items-center justify-center text-[#3b7335]">
                    <Sparkles className="w-3 h-3" />
                </div>
                <span className="text-xs font-black tracking-[0.3em] uppercase text-[#22347a]">{t.badge}</span>
              </div>
              
              <h1 className="text-[15vw] lg:text-[11vw] font-black tracking-tighter mb-8 leading-[0.8] uppercase text-black">
                {t.titleStart}<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22347a] to-[#3b7335]">
                  {t.titleHighlight}
                </span>
              </h1>
              
              <p className="text-xl md:text-3xl text-black/50 font-medium leading-relaxed max-w-xl">
                {t.subtitle}
              </p>
            </ScrollBasedAnimation>
          </div>

          {/* IMAGE SIDE - DEBUG MODE */}
          <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-end">
             
             {/* DEBUGGING STEPS:
                 1. I removed ScrollBasedAnimation to ensure it's not hiding the image.
                 2. I added 'bg-red-100'. If you see a RED BOX, the layout is working, but the image is missing.
                 3. I used a PLACEHOLDER image. If you see this blue image, your code is fine, but your file path is wrong.
             */}
             <div className="relative w-full aspect-[5/5] h-[500px] lg:h-auto rounded-[3rem] overflow-hidden">
                <Image
                    src="/ContactHero.png" // TEMPORARY DEBUG IMAGE
                    alt="Contact Juan"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    unoptimized // Only for the placeholder test
                />
                
                
             </div>

          </div>
        </div>
      </div>
    </section>
  );
}