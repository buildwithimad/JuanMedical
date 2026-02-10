import React from 'react'
import Services from '@/components/Home/Services'
import CTA from '@/components/Home/CTASection'
import ServicesHero from '@/components/Services/ServiceHero'

export const metadata = {
  title: "خدماتنا",
  description: "اكتشف خدمات الرعاية الصحية الشاملة من Juan Medical. نقدم رعاية الأطفال وكبار السن والتمريض المتخصص وخدمات طاقم التمريض.",
  keywords: ["خدمات طبية", "رعاية صحية", "رعاية الأطفال", "رعاية كبار السن", "تمريض متخصص"],
  openGraph: {
    title: "خدماتنا - Juan Medical",
    description: "اكتشف خدمات الرعاية الصحية الشاملة من Juan Medical.",
    locale: "ar_AR",
    images: ["/Logo.png"]
  }
};

const ServicesPage = () => {
  return (
    <>
    <ServicesHero/>
    <Services/>
    <CTA/>
    </>
  )
}

export default ServicesPage