"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { LoginForm } from "@/components/auth/login-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen } from "lucide-react"
import Link from "next/link"
import { useI18n } from "@/contexts/i18n-context"

export default function LoginPage() {
  const { t } = useI18n()
  
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
            <h1 className="text-3xl font-bold mb-2">{t('auth.login.title')}</h1>
            <p className="text-muted-foreground">{t('auth.login.subtitle')}</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>{t('auth.login.cardTitle')}</CardTitle>
              <CardDescription>{t('auth.login.cardDescription')}</CardDescription>
            </CardHeader>
            <CardContent>
              <LoginForm />
            </CardContent>
          </Card>

          <div className="text-center mt-6">
            <p className="text-sm text-muted-foreground">
              {t('auth.login.noAccount')}{" "}
              <Link href="/register" className="text-primary hover:underline font-medium">
                {t('auth.login.createAccount')}
              </Link>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
