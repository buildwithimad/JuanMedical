"use client";

import React from "react";
import { usePathname } from "next/navigation";
import ScrollBasedAnimation from "../Animations/ScrollBasedAnimations";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const formContent = {
  en: {
    info: {
      phone: { label: "Call Us", value: "0505220117" },
      email: { label: "Email Us", value: "juancksa@gmail.com" },
      visit: { label: "Visit Us", value: "Riyadh, Al-Muhammadiyah, Takhassusi Street" },
    },
    form: {
      title: "Send a Message",
      name: "Your Name",
      phone: "Phone Number",
      service: "Service Needed",
      message: "How can we help?",
      btn: "Send Message"
    }
  },
  ar: {
    info: {
      phone: { label: "اتصل بنا", value: "0505220117" },
      email: { label: "راسلنا", value: "juancksa@gmail.com" },
      visit: { label: "زورنا", value: "الرياض، المحمدية، شارع التخصصي" },
    },
    form: {
      title: "أرسل رسالة",
      name: "الاسم الكريم",
      phone: "رقم الجوال",
      service: "الخدمة المطلوبة",
      message: "كيف يمكننا مساعدتك؟",
      btn: "إرسال الرسالة"
    }
  }
};

export default function ContactForm() {
  const pathname = usePathname();
  const lang = pathname?.startsWith("/ar") ? "ar" : "en";
  const t = formContent[lang];
  const isRTL = lang === "ar";

  return (
    <section className="py-12 relative bg-white" dir={isRTL ? "rtl" : "ltr"}>
      <div className="w-full px-6 lg:px-16 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* LEFT: CONTACT INFO CARDS */}
          <div className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-32">
            
            {/* Phone Card */}
            <ScrollBasedAnimation direction="up" delay={0.1}>
               <div className="group p-10 rounded-[2.5rem] bg-[#F8F9FB] border border-black/5 hover:bg-[#22347a] hover:border-[#22347a] transition-all duration-500">
                  <div className="w-12 h-12 rounded-full bg-white border border-black/5 flex items-center justify-center text-[#22347a] mb-6">
                     <Phone className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-black/40 group-hover:text-white/60 mb-2">{t.info.phone.label}</h3>
                  <p className="text-2xl font-black text-black group-hover:text-white transition-colors" dir="ltr">{t.info.phone.value}</p>
               </div>
            </ScrollBasedAnimation>

            {/* Email Card */}
            <ScrollBasedAnimation direction="up" delay={0.2}>
               <div className="group p-10 rounded-[2.5rem] bg-[#F8F9FB] border border-black/5 hover:bg-[#3b7335] hover:border-[#3b7335] transition-all duration-500">
                  <div className="w-12 h-12 rounded-full bg-white border border-black/5 flex items-center justify-center text-[#3b7335] mb-6">
                     <Mail className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-black/40 group-hover:text-white/60 mb-2">{t.info.email.label}</h3>
                  <p className="text-xl lg:text-2xl font-black text-black group-hover:text-white transition-colors break-all">{t.info.email.value}</p>
               </div>
            </ScrollBasedAnimation>

            {/* Visit Card */}
            <ScrollBasedAnimation direction="up" delay={0.3}>
               <div className="group p-10 rounded-[2.5rem] bg-[#F8F9FB] border border-black/5 hover:bg-black hover:border-black transition-all duration-500">
                  <div className="w-12 h-12 rounded-full bg-white border border-black/5 flex items-center justify-center text-black mb-6">
                     <MapPin className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-black/40 group-hover:text-white/60 mb-2">{t.info.visit.label}</h3>
                  <p className="text-xl font-black text-black group-hover:text-white transition-colors leading-tight">{t.info.visit.value}</p>
               </div>
            </ScrollBasedAnimation>
          </div>

          {/* RIGHT: THE FORM */}
          <div className="lg:col-span-8">
            <ScrollBasedAnimation direction="up" delay={0.3}>
              {/* Removed Shadow, Added Border */}
              <div className="p-10 lg:p-16 rounded-[3rem] border border-black/5 bg-white">
                <h2 className="text-4xl lg:text-5xl font-black text-black mb-12 tracking-tighter uppercase">
                  {t.form.title}
                </h2>

                <form className="flex flex-col gap-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-widest text-black/30 pl-4">{t.form.name}</label>
                      <input type="text" className="w-full h-16 px-8 rounded-2xl bg-[#F8F9FB] border border-black/5 focus:border-[#22347a] outline-none transition-all font-bold text-lg text-black placeholder:text-black/10" placeholder="..." />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-widest text-black/30 pl-4">{t.form.phone}</label>
                      <input type="tel" className="w-full h-16 px-8 rounded-2xl bg-[#F8F9FB] border border-black/5 focus:border-[#22347a] outline-none transition-all font-bold text-lg text-black placeholder:text-black/10" placeholder="..." />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-black/30 pl-4">{t.form.service}</label>
                    <select className="w-full h-16 px-8 rounded-2xl bg-[#F8F9FB] border border-black/5 focus:border-[#22347a] outline-none transition-all font-bold text-lg text-black/60 cursor-pointer appearance-none">
                      <option>Elderly Care</option>
                      <option>Childcare</option>
                      <option>Home Nursing</option>
                    </select>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-black/30 pl-4">{t.form.message}</label>
                    <textarea rows="4" className="w-full p-8 rounded-3xl bg-[#F8F9FB] border border-black/5 focus:border-[#22347a] outline-none transition-all font-bold text-lg text-black placeholder:text-black/10 resize-none" placeholder="..." />
                  </div>

                  <button className="group w-full h-20 mt-4 rounded-full bg-black text-white font-black text-xl uppercase tracking-widest overflow-hidden relative flex items-center justify-center gap-4 hover:gap-6 transition-all duration-500">
                     <span className="relative z-10">{t.form.btn}</span>
                     <Send className="w-5 h-5 relative z-10 group-hover:rotate-45 transition-transform duration-500" />
                     <div className="absolute inset-0 bg-gradient-to-r from-[#22347a] to-[#3b7335] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </button>

                </form>
              </div>
            </ScrollBasedAnimation>
          </div>

        </div>
      </div>
    </section>
  );
}