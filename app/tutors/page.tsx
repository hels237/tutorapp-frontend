"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { TutorSearch } from "@/components/tutors/tutor-search"
import { useI18n } from "@/contexts/i18n-context"

export default function TutorsPage() {
  const { t } = useI18n()
  
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container py-8">
        <div className="space-y-6">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">{t('tutors.title')}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('tutors.subtitle')}
            </p>
          </div>
          <TutorSearch />
        </div>
      </main>
      <Footer />
    </div>
  )
}
