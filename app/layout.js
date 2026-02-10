import { Manrope } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/Animations/LenisProvider";
import Footer from "@/components/Footer";
import BackgroundElements from "@/components/Animations/BackgroundElements";
import Navbar from "@/components/Navbar";



const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

export const metadata = {
  title: {
    default: "Juan Medical - Professional Healthcare Services",
    template: "%s | Juan Medical"
  },
  description: "Juan Medical provides professional healthcare services including childcare, elderly care, and specialized nursing services. Trust our experienced medical staff for your health needs.",
  keywords: ["medical services", "healthcare", "childcare", "elderly care", "nurses", "medical staff"],
  authors: [{ name: "Juan Medical" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://juanmedical.com",
    siteName: "Juan Medical",
    title: "Juan Medical - Professional Healthcare Services",
    description: "Juan Medical provides professional healthcare services including childcare, elderly care, and specialized nursing services.",
    images: [
      {
        url: "/Logo.png",
        width: 1200,
        height: 630,
        alt: "Juan Medical Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Juan Medical - Professional Healthcare Services",
    description: "Juan Medical provides professional healthcare services including childcare, elderly care, and specialized nursing services.",
    images: ["/Logo.png"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="alternate" hrefLang="en" href="https://juanmedical.com/en" />
        <link rel="alternate" hrefLang="ar" href="https://juanmedical.com/ar" />
        <link rel="alternate" hrefLang="x-default" href="https://juanmedical.com/en" />
      </head>
      <body
        className={` ${manrope.variable} antialiased`}
      >

        <BackgroundElements/>
        <LenisProvider>
          <Navbar/>
        {children}
        <Footer/>
        </LenisProvider>
      </body>
    </html>
  );
}
