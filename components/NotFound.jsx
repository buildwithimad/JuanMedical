"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRight, Home } from "lucide-react";
import ScrollBasedAnimation from "@/components/Animations/ScrollBasedAnimations"; // Adjust path as needed

const errorData = {
  en: {
    code: "404",
    title: "Page Not Found",
    desc: "We can't seem to find the page you're looking for. It might have been moved or doesn't exist.",
    btn: "Back to Home"
  },
  ar: {
    code: "404",
    title: "الصفحة غير موجودة",
    desc: "يبدو أننا لا نستطيع العثور على الصفحة التي تبحث عنها. ربما تم نقلها أو أنها غير موجودة.",
    btn: "العودة للرئيسية"
  }
};

export default function NotFound() {
  const pathname = usePathname();
  // Simple check: default to English unless URL explicitly starts with /ar
  const isRTL = pathname?.startsWith("/ar");
  const t = isRTL ? errorData.ar : errorData.en;

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center relative overflow-hidden" dir={isRTL ? "rtl" : "ltr"}>
      
      {/* Background Gradient Blob */}
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-[#22347a]/5 to-transparent pointer-events-none" />

      <div className="w-full px-6 lg:px-16 max-w-[1600px] mx-auto z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
          
          {/* 1. VISUAL SIDE (Image) */}
          <div className="w-full max-w-md lg:w-5/12 order-2 lg:order-1">
             <ScrollBasedAnimation direction="up" delay={0.1}>
                {/* Rounded Container - No Shadow, Border Only */}
                <div className="relative w-full aspect-[4/5] rounded-[3rem] overflow-hidden bg-[#F8F9FB] border border-black/5">
                   {/* Replace '/404.png' with a real image from your public folder, 
                       or use a relevant placeholder. 
                   */}
                   <Image 
                     src="/Logo.png" // Using Logo as fallback, but ideally use a specific 404 image
                     alt="404 Not Found"
                     fill
                     className="object-contain p-12 opacity-20 grayscale"
                     priority
                   />
                   
                   {/* Abstract Overlay Text */}
                   <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[150px] lg:text-[200px] font-black text-[#22347a]/5 select-none">
                        ?
                      </span>
                   </div>
                </div>
             </ScrollBasedAnimation>
          </div>

          {/* 2. CONTENT SIDE */}
          <div className="w-full lg:w-6/12 flex flex-col items-center lg:items-start text-center lg:text-start order-1 lg:order-2">
            <ScrollBasedAnimation direction="up" delay={0.2}>
              
              {/* Massive Error Code */}
              <h1 className="text-[25vw] lg:text-[12vw] font-black leading-[0.8] tracking-tighter mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#22347a] to-[#3b7335]">
                  {t.code}
                </span>
              </h1>

              {/* Title */}
              <h2 className="text-3xl lg:text-5xl font-black text-black uppercase tracking-tight mb-6">
                {t.title}
              </h2>

              {/* Description */}
              <p className="text-xl font-medium text-black/50 leading-relaxed max-w-md mb-10 mx-auto lg:mx-0">
                {t.desc}
              </p>

              {/* Home Button */}
              <Link 
                href={isRTL ? "/ar" : "/"} 
                className="group w-auto inline-flex h-16 px-10 rounded-full bg-black text-white font-black text-lg uppercase tracking-widest overflow-hidden relative items-center justify-center gap-4 hover:gap-6 transition-all duration-500"
              >
                 <Home className="w-5 h-5 relative z-10" />
                 <span className="relative z-10">{t.btn}</span>
                 <ArrowRight className={`w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-500 ${isRTL ? "rotate-180" : ""}`} />
                 
                 {/* Hover Gradient */}
                 <div className="absolute inset-0 bg-gradient-to-r from-[#22347a] to-[#3b7335] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>

            </ScrollBasedAnimation>
          </div>

        </div>
      </div>
    </div>
  );
}