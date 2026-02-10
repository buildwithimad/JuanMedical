import About from '@/components/About/About'
import AboutHero from '@/components/About/AboutHero'
import CTA from '@/components/Home/CTASection'
import React from 'react'

export const metadata = {
  title: "About Us",
  description: "Learn about Juan Medical and our team of qualified doctors and nurses. We are committed to providing the best healthcare services to our patients.",
  keywords: ["about us", "medical team", "doctors", "nurses", "healthcare team", "hospital"],
  openGraph: {
    title: "About Us - Juan Medical",
    description: "Learn about Juan Medical and our team of qualified doctors and nurses.",
    locale: "en_US",
    images: ["/Logo.png"]
  }
};

const AboutPage = () => {
  return (
    <>
    <AboutHero/>
    <About/>
    <CTA/>
    </>
  )
}

export default AboutPage