import React from 'react'
import Hero from '@/components/Home/Hero'
import MainServices from '@/components/Home/Services'
import AboutSection from '@/components/Home/About'
import Features from '@/components/Home/Features'
import CTA from '@/components/Home/CTASection'

export const metadata = {
  title: "الرئيسية",
  description: " Juan Medical تقدم خدمات رعاية صحية احترافية شاملة. نوفر رعاية الأطفال وكبار السن والتمريض المتخصص. فريقنا من الأطباء والممرضين المؤهلين جاهزون لخدمتكم.",
  keywords: ["رعاية صحية", "طبيب", "ممرض", "رعاية كبار", "رعاية أطفال", "تمريض"],
  openGraph: {
    title: "Juan Medical - الرئيسية",
    description: " Juan Medical تقدم خدمات رعاية صحية احترافية شاملة. نوفر رعاية الأطفال وكبار السن والتمريض المتخصص.",
    locale: "ar_AR",
    images: ["/Logo.png"]
  }
};


const HomePage = () => {
  return (
    <>
    <Hero/>
    <AboutSection/>
    <MainServices/>
    <Features/>
    <CTA/>
    </>
  )
}

export default HomePage