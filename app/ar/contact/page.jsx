import React from 'react'
import ContactHero from '@/components/Contact/ContactHero'
import ContactForm from '@/components/Contact/ContactForm'
import MapSection from '@/components/Contact/Map'

const ContactPage = () => {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <MapSection />
    </>
  )
}

export default ContactPage