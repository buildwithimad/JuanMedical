"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ScrollBasedAnimation from "../Animations/ScrollBasedAnimations";
import { Sparkles, ArrowDownRight } from "lucide-react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();
  const isRTL = pathname?.startsWith("/ar");

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const content = {
    en: {
      badge: "Premium Healthcare",
      line1: "Care.",
      line2: "Comfort.",
      line3: "You.",
      desc: "Transforming home healthcare with expert professionals. Personalized care, real results, and full support — based locally, working for you.",
      btn: "Discover More"
    },
    ar: {
      badge: "رعاية صحية متميزة",
      line1: "رعاية.",
      line2: "راحة.",
      line3: "أنت.",
      desc: "نحدث نقلة نوعية في الرعاية الصحية المنزلية مع محترفين خبراء. رعاية شخصية، نتائج حقيقية، ودعم كامل — محلياً، نعمل لأجلك.",
      btn: "اكتشف المزيد"
    }
  };

  const t = isRTL ? content.ar : content.en;

  return (
    <section 
      className="relative min-h-[100svh] w-full bg-white flex flex-col justify-center overflow-hidden font-sans pt-32 pb-16 lg:pt-36"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="relative z-10 w-full px-6 lg:px-16 max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-16 lg:gap-0">
        
        {/* ================= LEFT SIDE (TEXT) ================= */}
        <div className="lg:col-span-7 flex flex-col justify-center z-20 order-2 lg:order-1">
          
        

          {/* Massive Overlapping Heading */}
          <ScrollBasedAnimation direction="up" delay={0.2}>
            <h1 className="text-[18vw] lg:text-[11vw] font-black text-black leading-[0.8] tracking-tighter uppercase relative z-20">
              {t.line1}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22347a] to-[#3b7335]">{t.line2}</span><br />
              {t.line3}
            </h1>
          </ScrollBasedAnimation>
          
          <ScrollBasedAnimation direction="up" delay={0.3}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mt-12 lg:mt-16">
              <p className="text-lg lg:text-xl font-medium text-black/50 leading-relaxed max-w-sm">
                {t.desc}
              </p>
              
              <button className="group flex items-center justify-center w-16 h-16 rounded-full border border-black/10 hover:bg-[#22347a] hover:border-[#22347a] transition-all duration-500 shrink-0">
                 <ArrowDownRight className={`w-6 h-6 text-black group-hover:text-white transition-colors ${isRTL ? 'rotate-90' : ''}`} />
              </button>
            </div>
          </ScrollBasedAnimation>

        </div>

        {/* ================= RIGHT SIDE (IMAGE) ================= */}
        <div className="lg:col-span-5 relative order-1 lg:order-2 flex justify-center lg:justify-end">
          <ScrollBasedAnimation direction="up" delay={0.4} className="w-full relative">
            
            {/* CRITICAL MOBILE FIX: 
                - Removed blurs and mix-blend modes.
                - Added EXACT heights (h-[400px] on mobile, h-[600px] on desktop). 
                  If an image has `fill`, the parent MUST have a defined height or it collapses to 0.
            */}
            <div className="relative w-full max-w-[550px] mx-auto lg:mx-0 h-[400px] sm:h-[500px] lg:h-[650px] rounded-[2rem] lg:rounded-[2rem] overflow-hidden group lg:-ml-20">
              
              <Image
  src="/1.png"
  alt="Juan Medical Healthcare Professional"
  width={500}
  height={600}
  className="w-full h-full object-cover"
/>

              
              {/* Simple lightweight gradient for text contrast at the bottom, no mix-blend */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Rotating Stamp (Creative Element) */}
            <div className="absolute -bottom-6 -right-2 lg:-bottom-12 lg:-right-12 w-32 h-32 lg:w-40 lg:h-40 bg-white rounded-full flex items-center justify-center border border-black/5 animate-[spin_10s_linear_infinite] z-30">
               <svg viewBox="0 0 100 100" className="w-full h-full p-2 fill-[#22347a] opacity-50">
                  <path id="curve" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                  <text className="text-[14px] font-black uppercase tracking-[0.2em]">
                    <textPath href="#curve" startOffset="0">
                      • JUAN MEDICAL CENTER • EST 2013 
                    </textPath>
                  </text>
               </svg>
               <Sparkles className="absolute w-6 h-6 text-[#3b7335] animate-none" />
            </div>

          </ScrollBasedAnimation>
        </div>

      </div>
    </section>
  );
}