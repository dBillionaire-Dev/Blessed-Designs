import Link from "next/link"
import { contactInfo } from "@/data/contact"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-primary-900 to-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Blessed Designs</h3>
            <p className="text-gray-300 text-sm">
              Creating beautiful and functional designs that inspire, uplift, and communicate purpose through simplicity
              and excellence.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-secondary-300 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-secondary-300 transition-colors duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-gray-300 hover:text-secondary-300 transition-colors duration-300"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-secondary-300 transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="space-y-2 text-sm">
              <a
                href={`mailto:${contactInfo.email}`}
                className="block text-gray-300 hover:text-secondary-300 transition-colors duration-300"
              >
                {contactInfo.email}
              </a>
              <a
                href={`tel:${contactInfo.phone}`}
                className="block text-gray-300 hover:text-secondary-300 transition-colors duration-300"
              >
                {contactInfo.phone}
              </a>
              <p className="text-gray-300">{contactInfo.location}</p>
              <div className="flex space-x-4 mt-4">
                {contactInfo.social.facebook && (
                  <a
                    href={contactInfo.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-secondary-300 transition-colors duration-300"
                  >
                    Facebook
                  </a>
                )}
                {contactInfo.social.instagram && (
                  <a
                    href={contactInfo.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-secondary-300 transition-colors duration-300"
                  >
                    Instagram
                  </a>
                )}
                {contactInfo.social.linkedin && (
                  <a
                    href={contactInfo.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-secondary-300 transition-colors duration-300"
                  >
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Blessed Designs. All rights reserved.</p>
          <p>
            Made with ❤️ by{" "}
            <a href="https://nexdbillionairedev.vercel.app/" target="_blank" rel="noreferrer">
              Nexy(Nex.Dev)
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
