"use client"

import { Header } from "@/components/layout/header"
import { useI18n } from "@/contexts/i18n-context"
import { Footer } from "@/components/layout/footer"
import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Calculator, Atom, Globe, History, Palette, Music, Code, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Toutes les Matières - TutorApp",
  description:
    "Découvrez toutes les matières disponibles sur TutorApp. Mathématiques, Sciences, Langues et bien plus encore.",
}

const subjects = [
  {
    id: "mathematics",
    name: "Mathématiques",
    description: "Algèbre, Géométrie, Calcul, Statistiques",
    icon: Calculator,
    color: "bg-blue-500",
    tutorCount: 245,
    levels: ["Primaire", "Collège", "Lycée", "Supérieur"],
    href: "/subjects/mathematics",
  },
  {
    id: "sciences",
    name: "Sciences",
    description: "Physique, Chimie, Biologie, Sciences de la Terre",
    icon: Atom,
    color: "bg-green-500",
    tutorCount: 189,
    levels: ["Collège", "Lycée", "Supérieur"],
    href: "/subjects/sciences",
  },
  {
    id: "languages",
    name: "Langues",
    description: "Français, Anglais, Espagnol, Allemand, Italien",
    icon: Globe,
    color: "bg-purple-500",
    tutorCount: 312,
    levels: ["Primaire", "Collège", "Lycée", "Adulte"],
    href: "/subjects/languages",
  },
  {
    id: "history",
    name: "Histoire-Géographie",
    description: "Histoire de France, Histoire du Monde, Géographie",
    icon: History,
    color: "bg-orange-500",
    tutorCount: 156,
    levels: ["Collège", "Lycée"],
    href: "/subjects/history",
  },
  {
    id: "arts",
    name: "Arts & Créativité",
    description: "Arts plastiques, Musique, Théâtre, Design",
    icon: Palette,
    color: "bg-pink-500",
    tutorCount: 98,
    levels: ["Tous niveaux"],
    href: "/subjects/arts",
  },
  {
    id: "music",
    name: "Musique",
    description: "Piano, Guitare, Violon, Solfège, Chant",
    icon: Music,
    color: "bg-indigo-500",
    tutorCount: 134,
    levels: ["Débutant", "Intermédiaire", "Avancé"],
    href: "/subjects/music",
  },
  {
    id: "programming",
    name: "Informatique",
    description: "Programmation, Web, Bases de données, IA",
    icon: Code,
    color: "bg-gray-700",
    tutorCount: 87,
    levels: ["Lycée", "Supérieur", "Professionnel"],
    href: "/subjects/programming",
  },
  {
    id: "philosophy",
    name: "Philosophie",
    description: "Philosophie générale, Éthique, Logique",
    icon: BookOpen,
    color: "bg-amber-600",
    tutorCount: 67,
    levels: ["Lycée", "Supérieur"],
    href: "/subjects/philosophy",
  },
]

export default function SubjectsPage() {
  const { t } = useI18n()
  
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container safe-area">
          <div className="text-center space-y-6">
            <h1 className="heading-hero text-4xl md:text-6xl text-balance">Toutes les Matières</h1>
            <p className="text-xl text-muted-foreground content-width-md mx-auto">
              Découvrez notre large catalogue de matières enseignées par des tuteurs qualifiés. De la primaire au
              supérieur, trouvez l'expertise dont vous avez besoin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/tutors">
                  Trouver un Tuteur
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/become-tutor">Devenir Tuteur</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects Grid */}
      <section className="section-padding">
        <div className="container safe-area">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Nos Matières Populaires</h2>
            <p className="text-lg text-muted-foreground content-width-md mx-auto">
              Plus de 1 200 tuteurs qualifiés dans toutes les disciplines
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
                      <Badge variant="secondary">{subject.tutorCount} tuteurs</Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{subject.name}</CardTitle>
                    <CardDescription className="text-sm">{subject.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-medium mb-2">Niveaux disponibles :</p>
                        <div className="flex flex-wrap gap-1">
                          {subject.levels.map((level) => (
                            <Badge key={level} variant="outline" className="text-xs">
                              {level}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Button asChild className="w-full">
                        <Link href={subject.href}>Voir les tuteurs</Link>
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
            <h2 className="text-3xl md:text-4xl">Vous ne trouvez pas votre matière ?</h2>
            <p className="text-lg text-muted-foreground content-width-md mx-auto">
              Contactez-nous pour ajouter de nouvelles matières à notre catalogue. Nous sommes toujours à l'écoute de
              vos besoins.
            </p>
            <Button size="lg" asChild>
              <Link href="/support">Nous Contacter</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}
