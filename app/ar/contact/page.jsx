import React from 'react'
import ContactHero from '@/components/Contact/ContactHero'
import ContactForm from '@/components/Contact/ContactForm'
import MapSection from '@/components/Contact/Map'

export const metadata = {
  title: "اتصل بنا",
  description: "تواصل مع Juan Medical للحصول على استفساراتك حول خدمات الرعاية الصحية. نحن هنا لمساعدتك على مدار الساعة.",
  keywords: ["اتصل بنا", "معلومات الاتصال", "عنوان", "هاتف", "استفسار"],
  openGraph: {
    title: "اتصل بنا - Juan Medical",
    description: "تواصل مع Juan Medical للحصول على استفساراتك حول خدمات الرعاية الصحية.",
    locale: "ar_AR",
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