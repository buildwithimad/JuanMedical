import React from 'react'
import Hero from '@/components/Home/Hero'
import MainServices from '@/components/Home/Services'
import AboutSection from '@/components/Home/About'
import Features from '@/components/Home/Features'
import CTA from '@/components/Home/CTASection'

export const metadata = {
  title: "Home",
  description: "Juan Medical provides comprehensive professional healthcare services. We offer childcare, elderly care, and specialized nursing. Our qualified doctors and nurses are ready to serve you.",
  keywords: ["healthcare", "medical services", "doctor", "nurse", "childcare", "elderly care"],
  openGraph: {
    title: "Juan Medical - Home",
    description: "Juan Medical provides comprehensive professional healthcare services.",
    locale: "en_US",
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