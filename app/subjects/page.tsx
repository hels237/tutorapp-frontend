"use client"

import { Header } from "@/components/layout/header"
import { useI18n } from "@/contexts/i18n-context"
import { Footer } from "@/components/layout/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Calculator, Atom, Globe, History, Palette, Music, Code, ArrowRight } from "lucide-react"

// Normalized subjects data with keys
const getSubjectsData = (t: any) => [
  {
    id: "mathematics",
    name: t("subjects.data.mathematics.name"),
    description: t("subjects.data.mathematics.description"),
    icon: Calculator,
    color: "bg-blue-500",
    tutorCount: 245,
    levels: ["primary", "middle", "high", "higher"],
    href: "/subjects/mathematics",
  },
  {
    id: "sciences",
    name: t("subjects.data.sciences.name"),
    description: t("subjects.data.sciences.description"),
    icon: Atom,
    color: "bg-green-500",
    tutorCount: 189,
    levels: ["middle", "high", "higher"],
    href: "/subjects/sciences",
  },
  {
    id: "languages",
    name: t("subjects.data.languages.name"),
    description: t("subjects.data.languages.description"),
    icon: Globe,
    color: "bg-purple-500",
    tutorCount: 312,
    levels: ["primary", "middle", "high", "adult"],
    href: "/subjects/languages",
  },
  {
    id: "history",
    name: t("subjects.data.history.name"),
    description: t("subjects.data.history.description"),
    icon: History,
    color: "bg-orange-500",
    tutorCount: 156,
    levels: ["middle", "high"],
    href: "/subjects/history",
  },
  {
    id: "arts",
    name: t("subjects.data.arts.name"),
    description: t("subjects.data.arts.description"),
    icon: Palette,
    color: "bg-pink-500",
    tutorCount: 98,
    levels: ["allLevels"],
    href: "/subjects/arts",
  },
  {
    id: "music",
    name: t("subjects.data.music.name"),
    description: t("subjects.data.music.description"),
    icon: Music,
    color: "bg-indigo-500",
    tutorCount: 134,
    levels: ["beginner", "intermediate", "advanced"],
    href: "/subjects/music",
  },
  {
    id: "programming",
    name: t("subjects.data.programming.name"),
    description: t("subjects.data.programming.description"),
    icon: Code,
    color: "bg-gray-700",
    tutorCount: 87,
    levels: ["high", "higher", "professional"],
    href: "/subjects/programming",
  },
  {
    id: "philosophy",
    name: t("subjects.data.philosophy.name"),
    description: t("subjects.data.philosophy.description"),
    icon: BookOpen,
    color: "bg-amber-600",
    tutorCount: 67,
    levels: ["high", "higher"],
    href: "/subjects/philosophy",
  },
]

export default function SubjectsPage() {
  const { t } = useI18n()
  const subjects = getSubjectsData(t)
  
  // Helper function to get level translation
  const getLevelTranslation = (levelKey: string) => {
    return t(`subjects.levels.${levelKey}`)
  }
  
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container safe-area">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-balance">{t("subjects.page.title")}</h1>
            <p className="text-xl text-muted-foreground content-width-md mx-auto">
              {t("subjects.page.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/tutors">
                  {t("subjects.page.findTutor")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/become-tutor">{t("subjects.page.becomeTutor")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects Grid */}
      <section className="section-padding">
        <div className="container safe-area">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">{t("subjects.page.popularSubjects")}</h2>
            <p className="text-lg text-muted-foreground content-width-md mx-auto">
              {t("subjects.page.qualifiedTutors")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-gap-lg">
            {subjects.map((subject) => {
              const IconComponent = subject.icon
              return (
                <Card
                  key={subject.id}
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className={`p-3 rounded-lg ${subject.color} text-white`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <Badge variant="secondary">{subject.tutorCount} {t("subjects.page.tutors")}</Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{subject.name}</CardTitle>
                    <CardDescription className="text-sm">{subject.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-medium mb-2">{t("subjects.page.availableLevels")}</p>
                        <div className="flex flex-wrap gap-1">
                          {subject.levels.map((levelKey) => (
                            <Badge key={levelKey} variant="outline" className="text-xs">
                              {getLevelTranslation(levelKey)}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Button asChild className="w-full">
                        <Link href={subject.href}>{t("subjects.page.viewTutors")}</Link>
                      </Button>
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
            <h2 className="text-3xl md:text-4xl">{t("subjects.page.notFound")}</h2>
            <p className="text-lg text-muted-foreground content-width-md mx-auto">
              {t("subjects.page.notFoundDesc")}
            </p>
            <Button size="lg" asChild>
              <Link href="/support">{t("subjects.page.contactUs")}</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}
