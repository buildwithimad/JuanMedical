import React from 'react'
import Hero from '@/components/Home/Hero'
import MainServices from '@/components/Home/Services'
import AboutSection from '@/components/Home/About'
import Features from '@/components/Home/Features'
import CTA from '@/components/Home/CTASection'


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