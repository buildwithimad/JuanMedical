"use client";

import React from "react";
import { usePathname } from "next/navigation";
import ScrollBasedAnimation from "../Animations/ScrollBasedAnimations";

const aboutData = {
  en: {
    badge: "The Journey",
    heading: "About Us",
    desc1: "Juan started in 2013 with 8 healthcare staff providing home healthcare services. Today, we support major medical facilities with over 150 caregivers.",
    details: [
      { label: "Founded", value: "2013" },
      { label: "Team Size", value: "150+ Caregivers" },
      { label: "Expertise", value: "Home & Clinical" }
    ],
    milestones: [
      { 
        year: "2013", 
        title: "The Beginning", 
        desc: "Started Juan with 8 healthcare staff providing home healthcare services.", 
        color: "bg-[#22347a]/5" 
      },
      { 
        year: "2021", 
        title: "Development", 
        desc: "Juan obtained the license for Juan Training Institute – the first licensed institute of its kind in Saudi Arabia.", 
        color: "bg-[#3b7335]/5" 
      },
      { 
        year: "Today", 
        title: "Success", 
        desc: "The number of caregivers exceeded 150, and services have expanded while maintaining high performance.", 
        color: "bg-gradient-to-br from-[#22347a] to-[#3b7335]" 
      }
    ]
  },
  ar: {
    badge: "الرحلة",
    heading: "النمو والتميز",
    desc1: "بدأت 'جون' في عام 2013 بـ 8 موظفين لتقديم خدمات الرعاية المنزلية. اليوم، نمونا ليصل فريقنا إلى أكثر من 150 مقدم رعاية يدعمون المنشآت الطبية.",
    details: [
      { label: "تأسست", value: "2013" },
      { label: "الفريق", value: "+150 خبير" },
      { label: "التخصص", value: "رعاية منزلية وطبية" }
    ],
    milestones: [
      { 
        year: "2013", 
        title: "البداية", 
        desc: "انطلاق 'جون' بـ 8 موظفين لتقديم خدمات الرعاية الصحية المنزلية.", 
        color: "bg-[#22347a]/5" 
      },
      { 
        year: "2021", 
        title: "التطوير", 
        desc: "الحصول على ترخيص معهد جون للتدريب – أول معهد مرخص من نوعه في المملكة العربية السعودية.", 
        color: "bg-[#3b7335]/5" 
      },
      { 
        year: "اليوم", 
        title: "النجاح", 
        desc: "تجاوز عدد مقدمي الرعاية 150 مع توسع الخدمات والالتزام بتحسين كفاءة الموظفين.", 
        color: "bg-gradient-to-br from-[#22347a] to-[#3b7335]" 
      }
    ]
  }
};

const AboutSection = () => {
  const pathname = usePathname();
  const lang = pathname?.startsWith("/ar") ? "ar" : "en";
  const t = aboutData[lang];
  const isRTL = lang === "ar";

  return (
    <section className="relative bg-white" dir={isRTL ? "rtl" : "ltr"}>
      <div className="w-full px-6 lg:px-16 max-w-[1600px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-0">
          
          {/* LEFT SIDE: FIXED NARRATIVE */}
          <div className="w-full lg:w-5/12 lg:h-screen lg:sticky lg:top-0 flex flex-col justify-center py-20 lg:py-0">
            <ScrollBasedAnimation direction="up" delay={0} duration={1}>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#22347a]">
                  {t.badge}
                </span>
                <div className="w-10 h-[2px] bg-gradient-to-r from-[#22347a] to-[#3b7335]" />
              </div>
              
              <h2 className="text-[10vw] lg:text-[6vw] font-black leading-[0.85] tracking-tighter uppercase mb-10">
                <span className="block text-black">{t.heading.split(' ')[0]}</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#22347a] to-[#3b7335]">
                  {t.heading.split(' ').slice(1).join(' ')}
                </span>
              </h2>

              <p className="text-xl lg:text-2xl font-medium text-black/50 leading-tight max-w-md mb-12">
                {t.desc1}
              </p>

            </ScrollBasedAnimation>
          </div>

          {/* RIGHT SIDE: SCROLLING MILESTONES (3 CARDS ONLY) */}
          <div className="w-full lg:w-7/12 py-20 lg:py-32 flex flex-col gap-6">
            {t.milestones.map((item, index) => (
              <div 
                key={index} 
                className={`group relative p-10 lg:p-16 rounded-[3.5rem] transition-all duration-700 ${
                  item.year === "Today" 
                  ? `${item.color} text-white` 
                  : `${item.color} text-black`
                }`}
              >
                <div className="flex flex-col gap-8">
                  <div className="flex justify-between items-start">
                    <span className={`text-sm font-black uppercase tracking-[0.3em] ${item.year === "Today" ? "text-white/60" : "text-black/30"}`}>
                      {item.year}
                    </span>
                    
                    {/* Minimal Creative Icon */}
                    <div className={`w-14 h-14 rounded-full border flex items-center justify-center transition-transform duration-500 group-hover:rotate-45 ${
                      item.year === "Today" ? "border-white/20 text-white" : "border-[#22347a]/10 text-[#22347a]"
                    }`}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M7 17L17 7M17 7H10M17 7V14" />
                      </svg>
                    </div>
                  </div>

                  <div className="max-w-md">
                    <h3 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter mb-4 leading-none">
                      {item.title}
                    </h3>
                    <p className={`text-lg lg:text-xl font-medium leading-tight ${item.year === "Today" ? "text-white/80" : "text-black/50"}`}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;