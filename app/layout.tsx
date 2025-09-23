import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { I18nProvider } from "@/contexts/i18n-context"
import "./globals.css"
import "../styles/typography.css"
import "../styles/layout.css"

export const metadata: Metadata = {
  title: "TutorApp - Plateforme de Tutorat en Ligne",
  description:
    "Trouvez le tuteur parfait pour vos besoins éducatifs. Cours en ligne, réservation facile, paiement sécurisé.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <I18nProvider>
          <Suspense fallback={null}>{children}</Suspense>
        </I18nProvider>
        <Analytics />
      </body>
    </html>
  )
}
