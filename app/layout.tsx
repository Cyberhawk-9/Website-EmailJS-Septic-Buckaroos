import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

const geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Buckaroos Septics, LLC",
  description: "Professional Septic Services",
  icons: {
    icon: "/images/buckaroos-logo.png",
    shortcut: "/images/buckaroos-logo.png",
    apple: "/images/buckaroos-logo.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} font-sans antialiased`}>
        <ScrollToTop />
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
