"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import ScrollBasedAnimation from "../Animations/ScrollBasedAnimations";

const featuresData = {
  en: {
    header: "Why Choose Juan?",
    subheader: "We don't just provide care; we set the standard for it.",
    badge: "Our Values",
    items: [
      { id: "01", title: "Quality Standards", desc: "Commitment to the highest efficiency standards.", accent: "#22347a", bg: "bg-[#22347a]/5" },
      { id: "02", title: "Specialized Training", desc: "Juan Training Institute – the first in KSA.", accent: "#ffffff", bg: "bg-gradient-to-br from-[#22347a] to-[#3b7335]" },
      { id: "03", title: "Long Experience", desc: "Over 10 years of healthcare excellence.", accent: "#22347a", bg: "bg-[#22347a]/5" }
    ]
  },
  ar: {
    header: "لماذا تختار جون؟",
    subheader: "نحن لا نقدم الرعاية فحسب؛ بل نضع معاييرها.",
    badge: "قيمنا",
    items: [
      { id: "01", title: "معايير الجودة", desc: "الالتزام بأعلى معايير الجودة والكفاءة.", accent: "#22347a", bg: "bg-[#22347a]/5" },
      { id: "02", title: "تدريب متخصص", desc: "معهد جون للتدريب – الأول من نوعه.", accent: "#ffffff", bg: "bg-gradient-to-br from-[#22347a] to-[#3b7335]" },
      { id: "03", title: "خبرة طويلة", desc: "أكثر من 10 سنوات من الخبرة.", accent: "#22347a", bg: "bg-[#22347a]/5" }
    ]
  }
};

export default function WhyChoose() {
  const pathname = usePathname();
  const lang = pathname?.startsWith("/ar") ? "ar" : "en";
  const t = featuresData[lang];
  const isRTL = lang === "ar";
  
  return (
    <section className="bg-white py-24 overflow-hidden" dir={isRTL ? "rtl" : "ltr"}>
      <div className="w-full px-6 lg:px-16 max-w-[1600px] mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* LEFT: Fixed-style Header */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <ScrollBasedAnimation direction="up" delay={0} duration={0.8}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[2px] bg-[#22347a]" />
                <span className="text-xs font-black uppercase tracking-[0.4em] text-black">{t.badge}</span>
              </div>
              <h2 className="text-[10vw] lg:text-[7vw] font-black text-black leading-[0.8] tracking-tighter uppercase mb-8">
                {t.header}
              </h2>
              <p className="text-xl font-medium text-black/40 leading-tight max-w-sm">
                {t.subheader}
              </p>
            </ScrollBasedAnimation>
          </div>

          {/* RIGHT: Smooth Rounded Cards with Gradient Accent */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {t.items.map((item, index) => {
              const isGradientCard = index === 1; // Targeting the second card for the gradient
              
              return (
                <ScrollBasedAnimation key={item.id} direction="up" delay={0.1 * index} duration={0.8}>
                  <div 
                    className={`group relative p-10 lg:p-14 rounded-[3rem] ${item.bg} transition-all duration-700 hover:scale-[0.98] cursor-default`}
                  >
                    <div className="flex items-start gap-8">
                      
                      {/* Visual ID Counter */}
                      <div className="flex flex-col items-center gap-2 pt-2">
                        <span className={`text-sm font-black transition-colors ${isGradientCard ? "text-white/40 group-hover:text-white" : "text-black/20 group-hover:text-black"}`}>
                          {item.id}
                        </span>
                        <div className={`w-[1px] h-10 transition-colors ${isGradientCard ? "bg-white/10 group-hover:bg-white/40" : "bg-black/5 group-hover:bg-black/20"}`} />
                      </div>

                      <div className="flex-1">
                        <h3 className={`text-3xl lg:text-4xl font-black tracking-tighter uppercase mb-4 leading-none transition-transform duration-500 group-hover:translate-x-2 ${isGradientCard ? "text-white" : "text-black"}`}>
                          {item.title}
                        </h3>
                        <p className={`text-lg font-medium leading-tight max-w-md transition-colors ${isGradientCard ? "text-white/70 group-hover:text-white" : "text-black/40 group-hover:text-black"}`}>
                          {item.desc}
                        </p>
                      </div>

                   

                    </div>
                  </div>
                </ScrollBasedAnimation>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}