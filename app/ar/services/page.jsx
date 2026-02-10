import React from 'react'
import Services from '@/components/Home/Services'
import CTA from '@/components/Home/CTASection'
import ServicesHero from '@/components/Services/ServiceHero'

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