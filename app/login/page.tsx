import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { LoginForm } from "@/components/auth/login-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
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
            <h1 className="heading-xl text-3xl mb-2">Connexion</h1>
            <p className="text-muted-foreground">Accédez à votre compte TutorApp</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Se connecter</CardTitle>
              <CardDescription>Entrez vos identifiants pour accéder à votre compte</CardDescription>
            </CardHeader>
            <CardContent>
              <LoginForm />
            </CardContent>
          </Card>

          <div className="text-center mt-6">
            <p className="text-sm text-muted-foreground">
              Pas encore de compte ?{" "}
              <Link href="/register" className="text-primary hover:underline font-medium">
                Créer un compte
              </Link>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
