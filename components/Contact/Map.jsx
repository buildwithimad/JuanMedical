"use client";

import React from "react";
import { usePathname } from "next/navigation";
import ScrollBasedAnimation from "../Animations/ScrollBasedAnimations";
import { MapPin } from "lucide-react";

export default function MapSection() {
  const pathname = usePathname();
  const lang = pathname?.startsWith("/ar") ? "ar" : "en";
  const isRTL = lang === "ar";

  const locationText = {
    en: "Riyadh, Al-Muhammadiyah, Takhassusi Street",
    ar: "الرياض، المحمدية، شارع التخصصي"
  };

  return (
    <section className="py-12 pb-24 bg-white" dir={isRTL ? "rtl" : "ltr"}>
       <div className="w-full px-6 lg:px-16 max-w-[1600px] mx-auto">
          <ScrollBasedAnimation direction="up" delay={0.2}>
             {/* Removed Shadow, Added Border */}
             <div className="relative w-full h-[500px] rounded-[3rem] overflow-hidden border border-black/5 group bg-[#F8F9FB]">
                
                {/* Google Map Iframe */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.615858643864!2d46.649557!3d24.706176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f1d0000000001%3A0x0!2zMjTCsDQyJzIyLjIiTiA0NsKwMzgnNTguNCJF!5e0!3m2!1sen!2ssa!4v1600000000000!5m2!1sen!2ssa" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: 'grayscale(100%) opacity(0.9)' }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="group-hover:grayscale-0 transition-all duration-1000"
                />

                {/* Floating Location Card - No Shadow, Border Only */}
                <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md p-8 rounded-[2rem] border border-black/5 max-w-sm hidden md:block z-10">
                   <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#3b7335] flex items-center justify-center text-white shrink-0">
                         <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                         <h4 className="text-xl font-black text-black uppercase mb-2">Juan Office</h4>
                         <p className="text-sm font-medium text-black/60 leading-relaxed">
                            {locationText[lang]}
                         </p>
                      </div>
                   </div>
                </div>

             </div>
          </ScrollBasedAnimation>
       </div>
    </section>
  );
}