import React from 'react'
import Services from '@/components/Home/Services'
import CTA from '@/components/Home/CTASection'
import ServicesHero from '@/components/Services/ServiceHero'

export const metadata = {
  title: "Our Services",
  description: "Discover comprehensive healthcare services from Juan Medical. We offer childcare, elderly care, specialized nursing, and nursing staff services.",
  keywords: ["medical services", "healthcare", "childcare", "elderly care", "specialized nursing"],
  openGraph: {
    title: "Our Services - Juan Medical",
    description: "Discover comprehensive healthcare services from Juan Medical.",
    locale: "en_US",
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