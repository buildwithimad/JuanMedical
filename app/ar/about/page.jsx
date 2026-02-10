import About from '@/components/About/About'
import AboutHero from '@/components/About/AboutHero'
import CTA from '@/components/Home/CTASection'
import React from 'react'

export const metadata = {
  title: "من نحن",
  description: "تعرف على Juan Medical وفريقنا من الأطباء والممرضين المؤهلين. نلتزم بتقديم أفضل خدمات الرعاية الصحية لمرضانا.",
  keywords: ["من نحن", "فريق طبي", "أطباء", "ممرضين", "مستشفى"],
  openGraph: {
    title: "من نحن - Juan Medical",
    description: "تعرف على Juan Medical وفريقنا من الأطباء والممرضين المؤهلين.",
    locale: "ar_AR",
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