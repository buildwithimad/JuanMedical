import React from 'react'
import Privacy from '@/components/Privacy/Privacy'

export const metadata = {
  title: "سياسة الخصوصية",
  description: "سياسة الخصوصية لـ Juan Medical. تعرف على كيفية حماية بياناتك الشخصية وخصوصيتك عند استخدام خدماتنا.",
  keywords: ["سياسة الخصوصية", "خصوصية", "حماية البيانات", "شروط الاستخدام"],
  openGraph: {
    title: "سياسة الخصوصية - Juan Medical",
    description: "سياسة الخصوصية لـ Juan Medical. تعرف على كيفية حماية بياناتك الشخصية.",
    locale: "ar_AR",
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