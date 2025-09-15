import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { RegisterForm } from "@/components/auth/register-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen } from "lucide-react"
import Link from "next/link"

export default function RegisterPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="container safe-area section-padding">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
            </div>
            <h1 className="heading-xl text-3xl mb-2">Inscription</h1>
            <p className="text-muted-foreground">Créez votre compte TutorApp</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Créer un compte</CardTitle>
              <CardDescription>Rejoignez notre communauté d'apprentissage</CardDescription>
            </CardHeader>
            <CardContent>
              <RegisterForm />
            </CardContent>
          </Card>

          <div className="text-center mt-6">
            <p className="text-sm text-muted-foreground">
              Déjà un compte ?{" "}
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
