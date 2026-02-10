import React from 'react'
import WhyChoose from '@/components/WhyChoose/WhyChoose'
import CTA from '@/components/Home/CTASection'

export const metadata = {
  title: "Why Choose Us",
  description: "Juan Medical is the right choice for healthcare. We provide qualified medical teams and excellent services at competitive rates. Your care is our priority.",
  keywords: ["why choose us", "features", "quality healthcare", "professional medical team"],
  openGraph: {
    title: "Why Choose Us - Juan Medical",
    description: "Juan Medical is the right choice for healthcare.",
    locale: "en_US",
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