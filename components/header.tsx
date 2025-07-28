"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm h-16 sticky top-0 z-50 border-b border-primary-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-3">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/blessed-designs-logo.png"
                alt="Blessed Designs Logo"
                width={200}
                height={60}
                className="h-10 w-auto"
              />
            </Link>
          </div>
          <div className="ml-10 hidden space-x-8 lg:block">
            {navigation.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`nav-link text-base font-medium transition-colors relative ${
                  pathname === link.href
                    ? "text-secondary after:w-full after:bg-secondary"
                    : "text-gray-700 hover:text-secondary"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="ml-10 lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-secondary-50 hover:text-secondary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 bg-white">
              {" "}
              {navigation.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block rounded-md px-3 py-2 text-base font-medium transition-colors ${
                    pathname === link.href
                      ? "bg-secondary-50 text-secondary"
                      : "text-gray-700 hover:bg-secondary-50 hover:text-secondary"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
