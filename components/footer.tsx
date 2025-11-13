import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Bedrijfsinformatie */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Handyman Pro</h3>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              Professionele, betrouwbare en betaalbare klusdiensten voor uw huis en kantoor.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Snelle links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Snelle links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Startpagina
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Fotogalerij
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contactgegevens */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contactgegevens</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3 text-primary-foreground/80" />
                <span className="text-primary-foreground/80">info@handyman.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3 text-primary-foreground/80" />
                <span className="text-primary-foreground/80">+31 (0)6 1234 5678</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-3 text-primary-foreground/80" />
                <span className="text-primary-foreground/80">Uw Stad, Provincie</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80">© {new Date().getFullYear()} Handyman Pro. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  )
}
