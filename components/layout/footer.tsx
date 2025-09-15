import Link from "next/link"
import { BookOpen, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container safe-area section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 grid-gap-lg">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="heading-lg text-xl">TutorApp</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              TutorApp - La plateforme de tutorat en ligne qui connecte étudiants et tuteurs qualifiés pour un apprentissage
              personnalisé et efficace.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/tutors" className="text-muted-foreground hover:text-foreground transition-colors">
                  Trouver un Tuteur
                </Link>
              </li>
              <li>
                <Link href="/become-tutor" className="text-muted-foreground hover:text-foreground transition-colors">
                  Devenir Tuteur
                </Link>
              </li>
              <li>
                <Link href="/subjects" className="text-muted-foreground hover:text-foreground transition-colors">
                  Matières
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                  Tarifs
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/help" className="text-muted-foreground hover:text-foreground transition-colors">
                  Centre d'aide
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/safety" className="text-muted-foreground hover:text-foreground transition-colors">
                  Sécurité
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contact</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>contact@tutorapp.fr</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Paris, France</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p>&copy; 2024 TutorApp. Tous droits réservés.</p>
            <div className="flex space-x-4">
              <Link href="/privacy" className="hover:text-foreground transition-colors">
                Confidentialité
              </Link>
              <Link href="/terms" className="hover:text-foreground transition-colors">
                Conditions
              </Link>
              <Link href="/cookies" className="hover:text-foreground transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
