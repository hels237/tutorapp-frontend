import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, MessageCircle, BookOpen, Headphones, PenTool, Users, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Langues - TutorApp",
  description:
    "Apprenez les langues avec nos tuteurs natifs et qualifiés. Français, anglais, espagnol, allemand et plus encore.",
}

const languages = [
  {
    name: "Français",
    description: "Grammaire, orthographe, littérature, expression",
    icon: BookOpen,
    tutorCount: 89,
    levels: ["Primaire", "Collège", "Lycée", "Adulte"],
    flag: "🇫🇷",
  },
  {
    name: "Anglais",
    description: "Conversation, grammaire, préparation examens",
    icon: MessageCircle,
    tutorCount: 156,
    levels: ["Primaire", "Collège", "Lycée", "Adulte"],
    flag: "🇬🇧",
  },
  {
    name: "Espagnol",
    description: "Expression orale, grammaire, culture hispanique",
    icon: Users,
    tutorCount: 67,
    levels: ["Collège", "Lycée", "Adulte"],
    flag: "🇪🇸",
  },
  {
    name: "Allemand",
    description: "Grammaire, vocabulaire, culture allemande",
    icon: PenTool,
    tutorCount: 43,
    levels: ["Collège", "Lycée", "Adulte"],
    flag: "🇩🇪",
  },
  {
    name: "Italien",
    description: "Conversation, grammaire, culture italienne",
    icon: Headphones,
    tutorCount: 32,
    levels: ["Lycée", "Adulte"],
    flag: "🇮🇹",
  },
  {
    name: "Chinois",
    description: "Mandarin, caractères, culture chinoise",
    icon: Globe,
    tutorCount: 28,
    levels: ["Débutant", "Intermédiaire"],
    flag: "🇨🇳",
  },
]

const learningMethods = [
  {
    title: "Conversation Interactive",
    description: "Pratiquez avec des locuteurs natifs",
    icon: MessageCircle,
  },
  {
    title: "Grammaire Structurée",
    description: "Maîtrisez les règles fondamentales",
    icon: BookOpen,
  },
  {
    title: "Immersion Culturelle",
    description: "Découvrez la culture et les traditions",
    icon: Globe,
  },
  {
    title: "Préparation aux Examens",
    description: "TOEFL, DELE, DELF et autres certifications",
    icon: PenTool,
  },
]

export default function LanguagesPage() {
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
            <h1 className="heading-hero text-4xl md:text-6xl text-balance">Langues</h1>
            <p className="text-xl text-muted-foreground content-width-md mx-auto">
              Ouvrez-vous au monde avec nos tuteurs natifs et passionnés. Apprenez une nouvelle langue ou perfectionnez
              vos compétences.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <Badge variant="secondary">312 tuteurs</Badge>
              <Badge variant="secondary">6 langues</Badge>
              <Badge variant="secondary">À partir de 20€/h</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Languages Grid */}
      <section className="section-padding">
        <div className="container safe-area">
          <div className="text-center mb-12">
            <h2 className="heading-xl text-3xl md:text-4xl mb-4">Langues Disponibles</h2>
            <p className="text-lg text-muted-foreground content-width-md mx-auto">
              Choisissez parmi notre sélection de langues enseignées par des experts
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
                      <Badge variant="outline">{language.tutorCount} tuteurs</Badge>
                    </div>
                    <CardTitle className="text-xl">{language.name}</CardTitle>
                    <CardDescription>{language.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-medium mb-2">Niveaux :</p>
                        <div className="flex flex-wrap gap-1">
                          {language.levels.map((level) => (
                            <Badge key={level} variant="secondary" className="text-xs">
                              {level}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Button className="w-full">Voir les tuteurs</Button>
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
            <h2 className="heading-xl text-3xl md:text-4xl mb-4">Méthodes d'Apprentissage</h2>
            <p className="text-lg text-muted-foreground">
              Nos tuteurs utilisent des approches variées pour s'adapter à votre style d'apprentissage
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
            <h2 className="heading-xl text-3xl md:text-4xl">Commencez Votre Apprentissage Aujourd'hui</h2>
            <p className="text-lg text-muted-foreground content-width-md mx-auto">
              Rejoignez des milliers d'étudiants qui ont déjà amélioré leurs compétences linguistiques
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/tutors?subject=languages">
                  Trouver un Tuteur
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/register">Cours d'Essai Gratuit</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}
