import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ForgotPasswordForm } from "@/components/auth/forgot-password-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen } from "lucide-react"
import Link from "next/link"

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="container py-20">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
            </div>
            <h1 className="font-playfair text-3xl font-bold mb-2">Mot de passe oublié</h1>
            <p className="text-muted-foreground">Entrez votre email pour recevoir un lien de réinitialisation</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Réinitialiser le mot de passe</CardTitle>
              <CardDescription>Nous vous enverrons un email avec les instructions</CardDescription>
            </CardHeader>
            <CardContent>
              <ForgotPasswordForm />
            </CardContent>
          </Card>

          <div className="text-center mt-6">
            <p className="text-sm text-muted-foreground">
              Vous vous souvenez de votre mot de passe ?{" "}
              <Link href="/login" className="text-primary hover:underline font-medium">
                Se connecter
              </Link>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
