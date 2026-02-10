"use client";

import React from "react";
import { usePathname } from "next/navigation";
import ScrollBasedAnimation from "../Animations/ScrollBasedAnimations"; 
import { 
  Flag, 
  GraduationCap, 
  TrendingUp, 
} from "lucide-react";

const aboutData = {
  en: {
    badge: "The Journey",
    headline: "Growth & Excellence",
    story: [
      "Juan started in 2013 with 8 healthcare staff providing home healthcare services. It was a humble beginning driven by a passion for care.",
      "Today, Juan has grown to over 150 caregivers supporting medical facilities. We ensure understanding of each facility's needs and commitment to improving staff efficiency."
    ],
    milestones: [
      {
        year: "2013",
        title: "The Beginning",
        desc: "Started Juan with 8 healthcare staff providing home healthcare services.",
        icon: Flag,
        bg: "bg-[#22347a]/5", // Soft Navy Tint
        accent: "#22347a"
      },
      {
        year: "2021",
        title: "Development",
        desc: "Juan obtained the license for Juan Training Institute – the first licensed institute of its kind in Saudi Arabia.",
        icon: GraduationCap,
        bg: "bg-[#3b7335]/5", // Soft Green Tint
        accent: "#3b7335"
      },
      {
        year: "Today",
        title: "Success",
        desc: "The number of caregivers exceeded 150, and services have expanded to support major medical facilities.",
        icon: TrendingUp,
        bg: "bg-gradient-to-br from-[#22347a] to-[#3b7335]", // Brand Gradient for "Today"
        text: "text-white",
        accent: "#ffffff"
      }
    ]
  },
  ar: {
    badge: "الرحلة",
    headline: "النمو والتميز",
    story: [
      "بدأت جون في عام 2013 بـ 8 موظفين فقط في مجال الرعاية الصحية المنزلية. كانت بداية متواضعة يقودها شغف الرعاية.",
      "اليوم، نمت جون لتضم أكثر من 150 مقدم رعاية يدعمون المنشآت الطبية. نحن نضمن فهم احتياجات كل منشأة والالتزام بتحسين كفاءة الموظفين."
    ],
    milestones: [
      {
        year: "2013",
        title: "البداية",
        desc: "انطلقت جون بـ 8 موظفين لتقديم خدمات الرعاية المنزلية.",
        icon: Flag,
        bg: "bg-[#22347a]/5",
        accent: "#22347a"
      },
      {
        year: "2021",
        title: "التطوير",
        desc: "حصلت جون على ترخيص معهد جون للتدريب – أول معهد مرخص من نوعه في المملكة.",
        icon: GraduationCap,
        bg: "bg-[#3b7335]/5",
        accent: "#3b7335"
      },
      {
        year: "اليوم",
        title: "النجاح",
        desc: "تجاوز عدد مقدمي الرعاية 150، وتوسعت الخدمات لدعم المنشآت الطبية الكبرى.",
        icon: TrendingUp,
        bg: "bg-gradient-to-br from-[#22347a] to-[#3b7335]",
        text: "text-white",
        accent: "#ffffff"
      }
    ]
  }
};

export default function About() {
  const pathname = usePathname();
  const lang = pathname?.startsWith("/ar") ? "ar" : "en";
  const t = aboutData[lang];
  const isRTL = lang === "ar";

  return (
    // FIX 1: Removed 'overflow-hidden' from section (This breaks sticky)
    <section className="bg-white py-24 relative" dir={isRTL ? "rtl" : "ltr"}>
      <div className="w-full px-6 lg:px-16 max-w-[1600px] mx-auto">
        
        {/* FIX 2: Added 'items-start' to ensure left side doesn't stretch */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-0 items-start">
          
          {/* LEFT SIDE: FIXED NARRATIVE 
              FIX 3: Added 'self-start' and ensured top-32 is active
          */}
          <div className="w-full lg:w-5/12 lg:sticky lg:top-32 self-start flex flex-col justify-center py-10 lg:py-0 border-b lg:border-b-0 border-[#22347a]/5 lg:pr-16">
            <ScrollBasedAnimation direction="up" delay={0} duration={1}>
              
              {/* Badge */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[2px] bg-[#22347a]" />
                <span className="text-xs font-black uppercase tracking-[0.4em] text-black">{t.badge}</span>
              </div>
              
              {/* Massive Headline */}
              <h2 className="text-[10vw] lg:text-[5vw] font-black leading-[0.9] tracking-tighter uppercase mb-10 text-black">
                {t.headline}
              </h2>

              {/* Story Paragraphs */}
              <div className="flex flex-col gap-6">
                <p className="text-xl lg:text-2xl font-medium text-black/60 leading-tight">
                  {t.story[0]}
                </p>
                <p className="text-lg lg:text-xl font-medium text-black/40 leading-relaxed">
                  {t.story[1]}
                </p>
              </div>

            </ScrollBasedAnimation>
          </div>

          {/* RIGHT SIDE: SCROLLING MILESTONES */}
          <div className="w-full lg:w-7/12 flex flex-col gap-8 lg:pl-16 lg:py-12">
            {t.milestones.map((item, index) => (
              <ScrollBasedAnimation key={item.year} direction="up" delay={0.1 * index} duration={0.8}>
                <div 
                  className={`group relative p-10 lg:p-14 rounded-[3rem] ${item.bg} transition-all duration-700 hover:scale-[0.98]`}
                >
                  <div className="flex flex-col items-start gap-6">
                    
                    {/* Header: Year & Icon */}
                    <div className="w-full flex justify-between items-start">
                      <span className={`text-6xl lg:text-8xl font-black tracking-tighter opacity-20 ${item.text ? "text-white" : "text-black"}`}>
                        {item.year}
                      </span>
                      
                      <div className={`w-14 h-14 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-sm ${item.text ? "text-white" : "text-[#22347a]"}`}>
                         <item.icon className="w-6 h-6" strokeWidth={2.5} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className={`text-3xl lg:text-4xl font-black uppercase tracking-tighter mb-4 ${item.text ? "text-white" : "text-black"}`}>
                        {item.title}
                      </h3>
                      <p className={`text-lg lg:text-xl font-medium leading-relaxed max-w-lg ${item.text ? "text-white/90" : "text-black/50"}`}>
                        {item.desc}
                      </p>
                    </div>

                    {/* Interactive Accent Line */}
                    <div 
                      className={`w-12 h-1 rounded-full mt-4 transition-all duration-700 group-hover:w-24 ${item.text ? "bg-white" : ""}`}
                      style={{ backgroundColor: item.text ? undefined : item.accent }} 
                    />

                  </div>
                </div>
              </ScrollBasedAnimation>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}