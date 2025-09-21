"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Atom, Microscope, Zap, Leaf, Globe2, TestTube, ArrowRight } from "lucide-react"
import { useI18n } from "@/contexts/i18n-context"

// Metadata sera gérée dynamiquement avec useI18n

export default function SciencesPage() {
  const { t } = useI18n()
  
  // Données normalisées avec traductions dynamiques
  const scienceTopics = [
    {
      key: "physics",
      name: t("subjects.sciences.topics.physics.name"),
      description: t("subjects.sciences.topics.physics.description"),
      icon: Zap,
      tutorCount: 67,
      levels: [
        t("subjects.sciences.levels.middle"),
        t("subjects.sciences.levels.high"),
        t("subjects.sciences.levels.higher")
      ],
    },
    {
      key: "chemistry",
      name: t("subjects.sciences.topics.chemistry.name"),
      description: t("subjects.sciences.topics.chemistry.description"),
      icon: TestTube,
      tutorCount: 54,
      levels: [
        t("subjects.sciences.levels.middle"),
        t("subjects.sciences.levels.high"),
        t("subjects.sciences.levels.higher")
      ],
    },
    {
      key: "biology",
      name: t("subjects.sciences.topics.biology.name"),
      description: t("subjects.sciences.topics.biology.description"),
      icon: Leaf,
      tutorCount: 43,
      levels: [
        t("subjects.sciences.levels.middle"),
        t("subjects.sciences.levels.high"),
        t("subjects.sciences.levels.higher")
      ],
    },
    {
      key: "earth",
      name: t("subjects.sciences.topics.earth.name"),
      description: t("subjects.sciences.topics.earth.description"),
      icon: Globe2,
      tutorCount: 32,
      levels: [
        t("subjects.sciences.levels.middle"),
        t("subjects.sciences.levels.high")
      ],
    },
    {
      key: "experimental",
      name: t("subjects.sciences.topics.experimental.name"),
      description: t("subjects.sciences.topics.experimental.description"),
      icon: Microscope,
      tutorCount: 28,
      levels: [
        t("subjects.sciences.levels.high"),
        t("subjects.sciences.levels.higher")
      ],
    },
    {
      key: "physicsChemistry",
      name: t("subjects.sciences.topics.physicsChemistry.name"),
      description: t("subjects.sciences.topics.physicsChemistry.description"),
      icon: Atom,
      tutorCount: 89,
      levels: [
        t("subjects.sciences.levels.middle"),
        t("subjects.sciences.levels.high")
      ],
    },
  ]
  
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-green-50 via-background to-green-50/50">
        <div className="container safe-area">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center justify-center p-4 bg-green-500 text-white rounded-full mb-4">
              <Atom className="h-8 w-8" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-balance">{t('subjects.sciences.name')}</h1>
            <p className="text-xl text-muted-foreground content-width-md mx-auto">
              {t('subjects.sciences.hero.subtitle')}
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <Badge variant="secondary">{t('subjects.sciences.tutorCount')}</Badge>
              <Badge variant="secondary">{t('subjects.sciences.allLevels')}</Badge>
              <Badge variant="secondary">{t('subjects.sciences.priceFrom')}</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="section-padding">
        <div className="container safe-area">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('subjects.sciences.expertiseTitle')}</h2>
            <p className="text-lg text-muted-foreground content-width-md mx-auto">
              {t('subjects.sciences.expertiseSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-gap-lg">
            {scienceTopics.map((topic) => {
              const IconComponent = topic.icon
              return (
                <Card key={topic.name} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-green-100 text-green-600 rounded-lg">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <Badge variant="outline">{topic.tutorCount} {t('subjects.sciences.tutors')}</Badge>
                    </div>
                    <CardTitle className="text-xl">{topic.name}</CardTitle>
                    <CardDescription>{topic.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-medium mb-2">{t('subjects.sciences.levels')}</p>
                        <div className="flex flex-wrap gap-1">
                          {topic.levels.map((level) => (
                            <Badge key={level} variant="secondary" className="text-xs">
                              {level}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-muted/50">
        <div className="container safe-area">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">{t('subjects.sciences.ctaTitle')}</h2>
            <p className="text-lg text-muted-foreground content-width-md mx-auto">
              {t('subjects.sciences.ctaSubtitle')}
            </p>
            <Button size="lg" asChild>
              <Link href="/tutors?subject=sciences">
                {t('subjects.sciences.findTutor')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}
