import React from 'react'
import ContactHero from '@/components/Contact/ContactHero'
import ContactForm from '@/components/Contact/ContactForm'
import MapSection from '@/components/Contact/Map'

export const metadata = {
  title: "Contact Us",
  description: "Contact Juan Medical for inquiries about our healthcare services. We are here to help you 24/7.",
  keywords: ["contact us", "contact information", "address", "phone", "inquiry"],
  openGraph: {
    title: "Contact Us - Juan Medical",
    description: "Contact Juan Medical for inquiries about our healthcare services.",
    locale: "en_US",
    images: ["/Logo.png"]
  }
};

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