"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, MessageCircle, BookOpen, Headphones, PenTool, Users, ArrowRight } from "lucide-react"
import { useI18n } from "@/contexts/i18n-context"

// Metadata sera gérée dynamiquement avec useI18n

export default function LanguagesPage() {
  const { t } = useI18n()
  
  // Données normalisées avec traductions dynamiques
  const languages = [
    {
      key: "french",
      name: t("subjects.languages.langs.french.name"),
      description: t("subjects.languages.langs.french.description"),
      icon: BookOpen,
      tutorCount: 89,
      levels: [
        t("subjects.languages.levels.primary"),
        t("subjects.languages.levels.middle"),
        t("subjects.languages.levels.high"),
        t("subjects.languages.levels.adult")
      ],
      flag: "🇫🇷",
    },
    {
      key: "english",
      name: t("subjects.languages.langs.english.name"),
      description: t("subjects.languages.langs.english.description"),
      icon: MessageCircle,
      tutorCount: 156,
      levels: [
        t("subjects.languages.levels.primary"),
        t("subjects.languages.levels.middle"),
        t("subjects.languages.levels.high"),
        t("subjects.languages.levels.adult")
      ],
      flag: "🇬🇧",
    },
    {
      key: "spanish",
      name: t("subjects.languages.langs.spanish.name"),
      description: t("subjects.languages.langs.spanish.description"),
      icon: Users,
      tutorCount: 67,
      levels: [
        t("subjects.languages.levels.middle"),
        t("subjects.languages.levels.high"),
        t("subjects.languages.levels.adult")
      ],
      flag: "🇪🇸",
    },
    {
      key: "german",
      name: t("subjects.languages.langs.german.name"),
      description: t("subjects.languages.langs.german.description"),
      icon: PenTool,
      tutorCount: 43,
      levels: [
        t("subjects.languages.levels.middle"),
        t("subjects.languages.levels.high"),
        t("subjects.languages.levels.adult")
      ],
      flag: "🇩🇪",
    },
    {
      key: "italian",
      name: t("subjects.languages.langs.italian.name"),
      description: t("subjects.languages.langs.italian.description"),
      icon: Headphones,
      tutorCount: 32,
      levels: [
        t("subjects.languages.levels.high"),
        t("subjects.languages.levels.adult")
      ],
      flag: "🇮🇹",
    },
    {
      key: "chinese",
      name: t("subjects.languages.langs.chinese.name"),
      description: t("subjects.languages.langs.chinese.description"),
      icon: Globe,
      tutorCount: 28,
      levels: [
        t("subjects.languages.levels.beginner"),
        t("subjects.languages.levels.intermediate")
      ],
      flag: "🇨🇳",
    },
  ]

  const learningMethods = [
    {
      key: "conversation",
      title: t("subjects.languages.methods.conversation.title"),
      description: t("subjects.languages.methods.conversation.description"),
      icon: MessageCircle,
    },
    {
      key: "grammar",
      title: t("subjects.languages.methods.grammar.title"),
      description: t("subjects.languages.methods.grammar.description"),
      icon: BookOpen,
    },
    {
      key: "immersion",
      title: t("subjects.languages.methods.immersion.title"),
      description: t("subjects.languages.methods.immersion.description"),
      icon: Globe,
    },
    {
      key: "exams",
      title: t("subjects.languages.methods.exams.title"),
      description: t("subjects.languages.methods.exams.description"),
      icon: PenTool,
    },
  ]
  
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-purple-50 via-background to-purple-50/50">
        <div className="container safe-area">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center justify-center p-4 bg-purple-500 text-white rounded-full mb-4">
              <Globe className="h-8 w-8" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-balance">{t('subjects.languages.name')}</h1>
            <p className="text-xl text-muted-foreground content-width-md mx-auto">
              {t('subjects.languages.hero.subtitle')}
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <Badge variant="secondary">{t('subjects.languages.tutorCount')}</Badge>
              <Badge variant="secondary">{t('subjects.languages.languageCount')}</Badge>
              <Badge variant="secondary">{t('subjects.languages.priceFrom')}</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Languages Grid */}
      <section className="section-padding">
        <div className="container safe-area">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('subjects.languages.availableTitle')}</h2>
            <p className="text-lg text-muted-foreground content-width-md mx-auto">
              {t('subjects.languages.availableSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-gap-lg">
            {languages.map((language) => {
              const IconComponent = language.icon
              return (
                <Card key={language.name} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{language.flag}</span>
                        <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">
                          <IconComponent className="h-5 w-5" />
                        </div>
                      </div>
                      <Badge variant="outline">{language.tutorCount} {t('subjects.languages.tutors')}</Badge>
                    </div>
                    <CardTitle className="text-xl">{language.name}</CardTitle>
                    <CardDescription>{language.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-medium mb-2">{t('subjects.languages.levels')}</p>
                        <div className="flex flex-wrap gap-1">
                          {language.levels.map((level) => (
                            <Badge key={level} variant="secondary" className="text-xs">
                              {level}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Button className="w-full">{t('subjects.languages.viewTutors')}</Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Learning Methods */}
      <section className="section-padding bg-muted/50">
        <div className="container safe-area">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('subjects.languages.methodsTitle')}</h2>
            <p className="text-lg text-muted-foreground">
              {t('subjects.languages.methodsSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-gap-lg">
            {learningMethods.map((method) => {
              const IconComponent = method.icon
              return (
                <Card key={method.title} className="text-center">
                  <CardHeader>
                    <div className="mx-auto p-3 bg-purple-100 text-purple-600 rounded-full w-fit mb-4">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg">{method.title}</CardTitle>
                    <CardDescription>{method.description}</CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container safe-area">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">{t('subjects.languages.ctaTitle')}</h2>
            <p className="text-lg text-muted-foreground content-width-md mx-auto">
              {t('subjects.languages.ctaSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/tutors?subject=languages">
                  {t('subjects.languages.findTutor')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/register">{t('subjects.languages.freeTrial')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}
