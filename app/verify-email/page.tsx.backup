import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function VerifyEmailPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="container py-20">
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="font-playfair text-2xl">Vérifiez votre email</CardTitle>
              <CardDescription>Nous avons envoyé un lien de confirmation à votre adresse email</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Email envoyé avec succès</span>
                </div>

                <div className="space-y-2">
                  <p className="text-sm">Cliquez sur le lien dans l'email pour activer votre compte.</p>
                  <p className="text-xs text-muted-foreground">
                    N'oubliez pas de vérifier vos spams si vous ne voyez pas l'email.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <Button className="w-full" asChild>
                  <Link href="/login">Retour à la connexion</Link>
                </Button>

                <Button variant="outline" className="w-full bg-transparent">
                  Renvoyer l'email
                </Button>
              </div>

              <div className="text-center">
                <p className="text-xs text-muted-foreground">
                  Besoin d'aide ?{" "}
                  <Link href="/contact" className="text-primary hover:underline">
                    Contactez-nous
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
