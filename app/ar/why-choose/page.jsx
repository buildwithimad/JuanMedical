import React from 'react'
import WhyChoose from '@/components/WhyChoose/WhyChoose'
import CTA from '@/components/Home/CTASection'

export const metadata = {
  title: "لماذا تختارنا",
  description: "Juan Medical الخيار الأمثل للرعاية الصحية. نقدم فرق طبية مؤهلة وخدمات متميزة بأسعار تنافسية. رعايتكم أولويتنا.",
  keywords: ["لماذا تختارنا", "مميزات", "فريق طبي متميز", "جودة الرعاية الصحية"],
  openGraph: {
    title: "لماذا تختارنا - Juan Medical",
    description: "Juan Medical الخيار الأمثل للرعاية الصحية.",
    locale: "ar_AR",
    images: ["/Logo.png"]
  }
};

const WhyChoosePage = () => {
  return (
   <>
   <WhyChoose/>
   <CTA/>
   </>
  )
}

export default WhyChoosePage