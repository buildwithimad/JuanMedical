import React from 'react'
import Privacy from '@/components/Privacy/Privacy'

export const metadata = {
  title: "Privacy Policy",
  description: "Juan Medical's Privacy Policy. Learn how we protect your personal data and privacy when using our services.",
  keywords: ["privacy policy", "privacy", "data protection", "terms of service"],
  openGraph: {
    title: "Privacy Policy - Juan Medical",
    description: "Juan Medical's Privacy Policy. Learn how we protect your personal data.",
    locale: "en_US",
    images: ["/Logo.png"]
  }
};

const PrivacyPage = () => {
  return (
    <>
    <Privacy/>
    </>
  )
}

export default PrivacyPage