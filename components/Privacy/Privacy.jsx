"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ScrollBasedAnimation from "../Animations/ScrollBasedAnimations";
import { 
  ShieldCheck, 
  Lock, 
  FileText, 
  Eye, 
  Server, 
  Download 
} from "lucide-react";

const privacyData = {
  en: {
    hero: {
      badge: "Legal",
      titleStart: "Privacy",
      titleHighlight: "Policy.",
      subtitle: "We are committed to protecting your personal health information with the highest standards of security and confidentiality.",
    },
    meta: {
      lastUpdated: "Last Updated: October 24, 2025",
      download: "Download PDF",
      contact: "Have questions? Email us at hello@juan.sa"
    },
    sections: [
      {
        id: "collection",
        icon: FileText,
        title: "Information Collection",
        content: "We collect information necessary to provide safe and effective home healthcare services. This includes personal identification (Name, ID), medical history, and contact details provided directly by you or your authorized family members."
      },
      {
        id: "usage",
        icon: Eye,
        title: "How We Use Your Data",
        content: "Your data is used strictly for medical assessment, creating care plans, and coordinating with our healthcare professionals. We may also use anonymized data to improve our service quality and training programs."
      },
      {
        id: "security",
        icon: Lock,
        title: "Data Security",
        content: "We implement state-of-the-art encryption and access protocols. Only authorized medical staff involved in your direct care have access to your sensitive health records."
      },
      {
        id: "sharing",
        icon: Server,
        title: "Information Sharing",
        content: "We do not sell your personal data. Information is only shared with third-party medical facilities if explicitly required for your treatment (e.g., hospital transfers) or as required by Saudi law."
      }
    ]
  },
  ar: {
    hero: {
      badge: "شؤون قانونية",
      titleStart: "سياسة",
      titleHighlight: "الخصوصية.",
      subtitle: "نحن ملتزمون بحماية معلوماتك الصحية الشخصية بأعلى معايير الأمن والسرية.",
    },
    meta: {
      lastUpdated: "آخر تحديث: 24 أكتوبر 2025",
      download: "تحميل PDF",
      contact: "لديك أسئلة؟ راسلنا على hello@juan.sa"
    },
    sections: [
      {
        id: "collection",
        icon: FileText,
        title: "جمع المعلومات",
        content: "نقوم بجمع المعلومات اللازمة لتقديم خدمات رعاية صحية منزلية آمنة وفعالة. ويشمل ذلك الهوية الشخصية (الاسم، الهوية)، والتاريخ الطبي، وبيانات الاتصال التي تقدمها أنت أو أفراد عائلتك المصرح لهم."
      },
      {
        id: "usage",
        icon: Eye,
        title: "كيف نستخدم بياناتك",
        content: "تُستخدم بياناتك فقط للتقييم الطبي، وإنشاء خطط الرعاية، والتنسيق مع متخصصي الرعاية الصحية لدينا. قد نستخدم أيضًا بيانات مجهولة المصدر لتحسين جودة خدماتنا وبرامج التدريب."
      },
      {
        id: "security",
        icon: Lock,
        title: "أمن البيانات",
        content: "نحن نطبق أحدث بروتوكولات التشفير والوصول. لا يُسمح بالوصول إلى سجلاتك الصحية الحساسة إلا للموظفين الطبيين المصرح لهم والمشاركين في رعايتك المباشرة."
      },
      {
        id: "sharing",
        icon: Server,
        title: "مشاركة المعلومات",
        content: "نحن لا نبيع بياناتك الشخصية. تتم مشاركة المعلومات فقط مع المرافق الطبية الخارجية إذا كان ذلك مطلوبًا بشكل صريح لعلاجك (مثل التحويلات إلى المستشفى) أو حسب ما يقتضيه القانون السعودي."
      }
    ]
  }
};

export default function PrivacyPage() {
  const pathname = usePathname();
  const lang = pathname?.startsWith("/ar") ? "ar" : "en";
  const t = privacyData[lang];
  const isRTL = lang === "ar";

  return (
    // FIX 1: Removed 'overflow-hidden' from here so sticky works
    <div className="bg-white" dir={isRTL ? "rtl" : "ltr"}>
      
      {/* ================= HERO SECTION ================= */}
      {/* FIX 2: Added 'overflow-hidden' ONLY to Hero to contain animations */}
      <section className="relative min-h-[60vh] w-full flex flex-col justify-center pt-32 md:pt-48 pb-12 overflow-hidden">
        <div className="w-full px-6 lg:px-16 max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Text Side */}
            <div className="lg:col-span-7 z-10">
              <ScrollBasedAnimation direction="up" delay={0.1}>
                {/* Badge */}
                <div className="inline-flex items-center gap-3 py-2 px-5 rounded-full bg-[#F8F9FB] border border-[#22347a]/5 mb-10">
                  <div className="w-6 h-6 rounded-full bg-white border border-black/5 flex items-center justify-center text-[#3b7335]">
                      <ShieldCheck className="w-3 h-3" />
                  </div>
                  <span className="text-xs font-black tracking-[0.3em] uppercase text-[#22347a]">{t.hero.badge}</span>
                </div>
                
                {/* Headline */}
                <h1 className="text-[15vw] lg:text-[11vw] font-black tracking-tighter mb-8 leading-[0.8] uppercase text-black">
                  {t.hero.titleStart}<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22347a] to-[#3b7335]">
                    {t.hero.titleHighlight}
                  </span>
                </h1>
                
                {/* Subtitle */}
                <p className="text-xl md:text-2xl text-black/50 font-medium leading-relaxed max-w-xl">
                  {t.hero.subtitle}
                </p>
              </ScrollBasedAnimation>
            </div>

            {/* Visual Side */}
            <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-end">
               <ScrollBasedAnimation direction="up" delay={0.3} className="w-full">
                  <div className="relative w-full aspect-[4/5] h-[400px] lg:h-auto rounded-[3rem] overflow-hidden bg-[#F8F9FB] border border-black/5">
                      <Image
                          src="/PrivacyHero.png" 
                          alt="Privacy Policy"
                          fill
                          className="object-cover scale-105 hover:scale-100 transition-transform duration-1000 grayscale hover:grayscale-0"
                          priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#22347a]/20 to-transparent mix-blend-multiply pointer-events-none" />
                  </div>
               </ScrollBasedAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTENT SECTION ================= */}
      <section className="py-24 border-t border-black/5">
        <div className="w-full px-6 lg:px-16 max-w-[1600px] mx-auto">
          
          {/* FIX 3: Added 'items-start' to flex container */}
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-0 items-start">
            
            {/* LEFT: STICKY META INFO */}
            {/* FIX 4: sticky + top-32 + self-start ensures it locks in place */}
            <div className="w-full lg:w-4/12 lg:sticky lg:top-32 self-start flex flex-col gap-8 lg:pr-16">
               <ScrollBasedAnimation direction="up" delay={0.1}>
                  <div className="p-8 rounded-[2rem] bg-[#F8F9FB] border border-black/5">
                     <h3 className="text-sm font-black uppercase tracking-widest text-black/30 mb-4">Status</h3>
                     <p className="text-xl font-bold text-[#22347a] mb-8">{t.meta.lastUpdated}</p>
                     
                     
                  </div>
                  
                  <div className="mt-8">
                     <p className="text-lg font-medium text-black/50 leading-relaxed">
                        {t.meta.contact}
                     </p>
                  </div>
               </ScrollBasedAnimation>
            </div>

            {/* RIGHT: SCROLLING CONTENT CARDS */}
            <div className="w-full lg:w-8/12 flex flex-col gap-6 lg:pl-16">
              {t.sections.map((section, index) => (
                <ScrollBasedAnimation key={section.id} direction="up" delay={0.1 * index}>
                  <div className="group p-10 lg:p-14 rounded-[3rem] bg-white border border-black/5 hover:border-[#22347a]/20 transition-all duration-500">
                    
                    <div className="flex items-center gap-4 mb-6">
                       <div className="w-12 h-12 rounded-full bg-[#F8F9FB] flex items-center justify-center text-[#22347a] group-hover:bg-[#22347a] group-hover:text-white transition-colors duration-500">
                          <section.icon className="w-5 h-5" />
                       </div>
                       <h2 className="text-2xl lg:text-3xl font-black text-black group-hover:text-[#22347a] transition-colors">
                          {section.title}
                       </h2>
                    </div>

                    <p className="text-lg lg:text-xl font-medium text-black/50 leading-relaxed group-hover:text-black/70 transition-colors">
                       {section.content}
                    </p>
                  </div>
                </ScrollBasedAnimation>
              ))}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}