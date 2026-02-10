"use client";

import React from "react";
import { usePathname } from "next/navigation";
import ScrollBasedAnimation from "../Animations/ScrollBasedAnimations"; 
import { 
  PhoneCall, 
  ClipboardCheck, 
  Users, 
  PlayCircle,
  ArrowRight
} from "lucide-react";

const processData = {
  en: {
    badge: "The Process",
    title: "How We Work",
    desc: "A seamless journey to exceptional care.",
    steps: [
      {
        id: "01",
        title: "Contact Us",
        desc: "Call or WhatsApp to request the service.",
        icon: PhoneCall,
        accent: "#22347a"
      },
      {
        id: "02",
        title: "Assess Needs",
        desc: "We evaluate your needs and determine the appropriate service.",
        icon: ClipboardCheck,
        accent: "#3b7335"
      },
      {
        id: "03",
        title: "Select Staff",
        desc: "We assign the most suitable caregiver for your case and circumstances.",
        icon: Users,
        accent: "#22347a"
      },
      {
        id: "04",
        title: "Start Service",
        desc: "We begin delivering the service with continuous follow-up.",
        icon: PlayCircle,
        accent: "#3b7335"
      }
    ]
  },
  ar: {
    badge: "الإجراءات",
    title: "كيف نعمل",
    desc: "رحلة سلسة للحصول على رعاية استثنائية.",
    steps: [
      {
        id: "01",
        title: "تواصل معنا",
        desc: "اتصل أو راسلنا عبر الواتساب لطلب الخدمة.",
        icon: PhoneCall,
        accent: "#22347a"
      },
      {
        id: "02",
        title: "تقييم الاحتياجات",
        desc: "نقوم بتقييم احتياجاتك وتحديد الخدمة المناسبة.",
        icon: ClipboardCheck,
        accent: "#3b7335"
      },
      {
        id: "03",
        title: "اختيار الفريق",
        desc: "نقوم بتعيين مقدم الرعاية الأنسب لحالتك وظروفك.",
        icon: Users,
        accent: "#22347a"
      },
      {
        id: "04",
        title: "بدء الخدمة",
        desc: "نبدأ في تقديم الخدمة مع متابعة مستمرة لضمان الجودة.",
        icon: PlayCircle,
        accent: "#3b7335"
      }
    ]
  }
};

export default function ProcessSection() {
  const pathname = usePathname();
  const lang = pathname?.startsWith("/ar") ? "ar" : "en";
  const t = processData[lang];
  const isRTL = lang === "ar";

  return (
    <section className="bg-white py-24 lg:py-32 overflow-hidden" dir={isRTL ? "rtl" : "ltr"}>
      <div className="w-full px-6 lg:px-16 max-w-[1600px] mx-auto">
        
        {/* ================= HEADER ================= */}
        <div className="mb-24 mt-20 flex flex-col items-start lg:items-end lg:flex-row lg:justify-between gap-10">
          <ScrollBasedAnimation direction="up" delay={0.1} className="max-w-2xl">
            {/* Badge */}
            <div className="flex items-center gap-4 mb-6">
               <div className="w-12 h-[2px] bg-[#22347a]" />
               <span className="text-xs font-black uppercase tracking-[0.4em] text-black">{t.badge}</span>
            </div>
            
            {/* Title */}
            <h2 className="text-[12vw] lg:text-[7vw] font-black text-black leading-[0.8] tracking-tighter uppercase">
              {t.title}
            </h2>
          </ScrollBasedAnimation>

          <ScrollBasedAnimation direction="up" delay={0.2} className="lg:max-w-sm lg:text-end">
            <p className="text-xl font-medium text-black/40 leading-relaxed">
               {t.desc}
            </p>
          </ScrollBasedAnimation>
        </div>

        {/* ================= STEPS GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
           {t.steps.map((step, index) => (
              <ScrollBasedAnimation key={index} direction="up" delay={0.1 * index}>
                 
                 {/* Card Container - Note the 'lg:mt-12' on even items for staggered look */}
                 <div className={`
                    group relative h-full min-h-[450px] p-10 lg:p-12 rounded-[3.5rem] 
                    bg-[#F8F9FB] border border-black/5 
                    hover:scale-[0.98] transition-all duration-700 
                    flex flex-col justify-between overflow-hidden
                    ${index % 2 !== 0 ? 'lg:mt-16' : ''} 
                 `}>
                    
                    {/* Background Massive Number (Watermark) */}
                    <div className="absolute -top-6 -right-6 text-[180px] font-black text-black/[0.03] group-hover:text-white/[0.1] transition-colors duration-700 leading-none select-none z-0">
                       {step.id}
                    </div>

                    {/* Top: Icon */}
                    <div className="relative z-10 w-16 h-16 rounded-full bg-white border border-black/5 flex items-center justify-center transition-all duration-500 group-hover:bg-white/20 group-hover:border-white/20 group-hover:text-white">
                       <step.icon className="w-7 h-7" style={{ color: step.accent }} />
                    </div>

                    {/* Bottom: Content */}
                    <div className="relative z-10 pt-12">
                       <h3 className="text-3xl font-black uppercase tracking-tight mb-6 text-black group-hover:text-white transition-colors duration-500">
                          {step.title}
                       </h3>
                       <p className="text-lg font-medium text-black/50 leading-relaxed group-hover:text-white/80 transition-colors duration-500">
                          {step.desc}
                       </p>

                      
                    </div>

                    {/* Hover Gradient Overlay */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-0"
                      style={{ 
                        background: step.id === "02" || step.id === "04" 
                          ? "radial-gradient(circle at top left, #3b7335, #2d5a29)" 
                          : "radial-gradient(circle at top left, #22347a, #1a285e)"
                      }} 
                    />
                 </div>
              </ScrollBasedAnimation>
           ))}
        </div>

      </div>
    </section>
  );
}