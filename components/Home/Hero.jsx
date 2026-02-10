"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ScrollBasedAnimation from "../Animations/ScrollBasedAnimations";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();
  const isRTL = pathname?.startsWith("/ar");

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Content Data
  const content = {
    en: {
      line1: "Care",
      line2: "Comfort",
      line3: "You",
      desc: (
        <>
          Transforming home healthcare with expert professionals. 
          Personalized care, real results, and full support — based 
          locally, <span className="text-[#3b7335] font-bold italic">working for you.</span>
        </>
      )
    },
    ar: {
      line1: "رعاية",
      line2: "راحة",
      line3: "أنت",
      desc: (
        <>
          نحدث نقلة نوعية في الرعاية الصحية المنزلية مع محترفين خبراء. 
          رعاية شخصية، نتائج حقيقية، ودعم كامل — محلياً، <span className="text-[#3b7335] font-bold italic">نعمل لأجلك.</span>
        </>
      )
    }
  };

  const t = isRTL ? content.ar : content.en;

  return (
    <section 
      className="relative min-h-screen w-full bg-white flex flex-col justify-between overflow-hidden font-sans"
      dir={isRTL ? "rtl" : "ltr"}
    >
      
      {/* 1. TOP NAVIGATION / STATUS BAR */}
      <div className="w-full flex justify-between items-start p-8 lg:p-12 z-20">
        {/* Placeholder for top nav elements if needed later */}
      </div>

      {/* 2. CORE CONTENT GRID */}
      <div className="relative z-10 w-full mb-auto px-6 lg:px-24 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0">
        
        {/* RIGHT SIDE (Visual): 
           - Mobile: order-first (Shows on top)
           - Desktop: order-last (Shows on right)
        */}
        <div className="order-first lg:order-last lg:col-span-4 flex flex-col items-center lg:items-end pt-4 lg:pt-20">
          <ScrollBasedAnimation direction="up" delay={0.2} duration={1}>
            <div className="relative w-full aspect-[3/4] max-w-[400px] lg:w-[380px] overflow-hidden mb-8 lg:mb-12">
              <Image
                src="/1.png" 
                alt="Healthcare Professional"
                fill
                priority
                className="object-cover scale-110 translate-y-4"
              />
            </div>
          </ScrollBasedAnimation>
        </div>

        {/* LEFT SIDE (Text): 
           - Mobile: order-last (Shows below image)
           - Desktop: order-first (Shows on left)
        */}
        <div className="order-last lg:order-first lg:col-span-8 flex flex-col justify-start lg:pt-10">
          
          {/* Massive Heading */}
          <ScrollBasedAnimation direction="up" delay={0} duration={1}>
            <h1 className="text-[16vw] lg:text-[12vw] font-black text-[#22347a] leading-[0.8] tracking-[-0.07em] uppercase">
              {t.line1}<br />
              <span className="text-[#3b7335]">{t.line2}</span><br />
              {t.line3}
            </h1>
          </ScrollBasedAnimation>
          
          {/* Precision Description */}
          <ScrollBasedAnimation direction="up" delay={0.4} duration={1}>
            <div className="max-w-[400px] text-start lg:text-end space-y-8 mt-8 lg:mt-10 mb-12">
              <p className="text-xl lg:text-2xl font-medium text-black/40 leading-[1.1] tracking-tight">
                {t.desc}
              </p>
            </div>
          </ScrollBasedAnimation>

        </div>

      </div>

    </section>
  );
}