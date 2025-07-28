import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Blessed Designs - Creative Portfolio",
    template: "%s | Blessed Designs",
  },
  description:
    "Welcome to Blessing Godson's creative portfolio. Discover innovative design solutions for branding, web design, and visual identity.",
  keywords: ["graphic design", "logo design", "branding", "web design", "visual identity", "creative portfolio"],
  authors: [{ name: "Blessing Godson" }],
  creator: "Blessing Godson",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://blesseddesigns.com",
    title: "Blessed Designs - Creative Portfolio",
    description:
      "Welcome to Blessing Godson's creative portfolio. Discover innovative design solutions for branding, web design, and visual identity.",
    siteName: "Blessed Designs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blessed Designs - Creative Portfolio",
    description:
      "Welcome to Blessing Godson's creative portfolio. Discover innovative design solutions for branding, web design, and visual identity.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
