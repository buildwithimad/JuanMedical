"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import ScrollBasedAnimation from "../Animations/ScrollBasedAnimations";

const servicesData = {
  en: {
    elderly: { 
      title: "Elderly Care", 
      description: "Comprehensive specialized care at home.", 
      accent: "#22347a",
      image: "/ElderlyCare.png" 
    },
    child: { 
      title: "Childcare", 
      description: "Qualified caregivers for a safe environment.", 
      accent: "#3b7335",
      image: "/ChildCare.png"
    },
    nursing: { 
      title: "Home Nursing", 
      description: "Licensed professional medical support.", 
      accent: "#22347a",
      image: "/Nurses.png"
    },
    cta: { 
      title: "Medical Staff", 
      description: "24/7 certified healthcare professionals.", 
      accent: "#3b7335",
      image: "/Staff.png"
    },
    labels: { header: "Specialized Services" }
  },
  ar: {
    elderly: { title: "مرافقة كبار السن", description: "رعاية شاملة ومتخصصة في المنزل.", accent: "#22347a", image: "/ElderlyCare.png" },
    child: { title: "حاضنة أطفال", description: "رعاية مؤهلة لبيئة آمنة ومحفزة.", accent: "#3b7335", image: "/ChildCare.png" },
    nursing: { title: "ممرضة منزلية", description: "دعم طبي متخصص من ممرضين مرخصين.", accent: "#22347a", image: "/Nurses.png" },
    cta: { title: "طاقم طبي", description: "محترفو رعاية صحية معتمدون على مدار الساعة.", accent: "#3b7335", image: "/Staff.png" },
    labels: { header: "خدمات متخصصة" }
  }
};

const ServiceCard = ({ data, index }) => (
  <div className="relative group overflow-hidden rounded-[3rem] bg-[#F8F9FB] aspect-square flex flex-col justify-end p-8 lg:p-12 transition-all duration-700 hover:bg-white hover:scale-[0.98]">
    
    {/* BACKGROUND IMAGE LAYER - Adjusted Opacity here */}
    <div className="absolute inset-0 z-0 opacity-90 transition-all duration-1000 group-hover:scale-110 group-hover:opacity-50 group-hover:blur-sm group-hover:grayscale-0">
      <Image
        src={data.image}
        alt={data.title}
        fill
        className="object-cover"
      />
    </div>

    {/* CONTENT LAYER */}
    <div className="relative z-10 flex flex-col items-start gap-4">
      {/* Dynamic Counter/Icon Area */}
      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/40 group-hover:text-black transition-colors">
        0{index + 1} / Service
      </span>
      
      <h3 className="text-4xl lg:text-5xl font-black text-black tracking-tighter uppercase leading-[0.8] transition-transform duration-500 group-hover:translate-x-2">
        {data.title}
      </h3>
      
      <p className="text-lg font-medium text-black/60 leading-tight max-w-[280px] group-hover:text-black transition-colors">
        {data.description}
      </p>

      {/* Modern Interaction Line */}
      <div 
        className="mt-6 h-[4px] rounded-full transition-all duration-700 w-12 group-hover:w-24" 
        style={{ backgroundColor: data.accent }} 
      />
    </div>

    {/* Creative Floating Arrow Reveal */}
    <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-0">
      <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-black bg-white/80 backdrop-blur-sm">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
          <path d="M7 17L17 7M17 7H10M17 7V14" />
        </svg>
      </div>
    </div>
  </div>
);

const MainServices = () => {
  const pathname = usePathname();
  const lang = pathname?.startsWith("/ar") ? "ar" : "en";
  const t = servicesData[lang];
  const isRTL = lang === "ar";

  const services = [t.elderly, t.child, t.nursing, t.cta];

  return (
    <section className="bg-white py-24" dir={isRTL ? "rtl" : "ltr"}>
      <div className="w-full px-6 lg:px-16">
        
        {/* HEADER: Brutalist Style with Brand Accent */}
        <div className="mb-20 lg:mb-32">
          <ScrollBasedAnimation direction="up" delay={0} duration={0.8}>
            <div className="flex items-center gap-4 mb-8">
               <div className="w-12 h-[2px] bg-[#22347a]" />
               <span className="text-xs font-black uppercase tracking-[0.3em] text-black">What we offer</span>
            </div>
            <h2 className="text-[10vw] lg:text-[7vw] font-black text-black leading-[0.8] tracking-tighter uppercase">
              {t.labels.header}
            </h2>
          </ScrollBasedAnimation>
        </div>

        {/* GRID: Smooth & Gap-conscious */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <ScrollBasedAnimation key={i} direction="up" delay={0.1 * i} duration={0.8}>
              <ServiceCard data={service} index={i} />
            </ScrollBasedAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainServices;