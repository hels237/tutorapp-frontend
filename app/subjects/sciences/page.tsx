import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Atom, Microscope, Zap, Leaf, Globe2, TestTube, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Sciences - TutorApp",
  description: "Découvrez nos tuteurs en sciences : physique, chimie, biologie, sciences de la terre et plus encore.",
}

const scienceTopics = [
  {
    name: "Physique",
    description: "Mécanique, thermodynamique, électricité, optique",
    icon: Zap,
    tutorCount: 67,
    levels: ["Collège", "Lycée", "Supérieur"],
  },
  {
    name: "Chimie",
    description: "Chimie générale, organique, analytique",
    icon: TestTube,
    tutorCount: 54,
    levels: ["Collège", "Lycée", "Supérieur"],
  },
  {
    name: "Biologie",
    description: "Biologie cellulaire, génétique, écologie",
    icon: Leaf,
    tutorCount: 43,
    levels: ["Collège", "Lycée", "Supérieur"],
  },
  {
    name: "Sciences de la Terre",
    description: "Géologie, climatologie, environnement",
    icon: Globe2,
    tutorCount: 32,
    levels: ["Collège", "Lycée"],
  },
  {
    name: "Sciences Expérimentales",
    description: "Méthodes scientifiques, expérimentation",
    icon: Microscope,
    tutorCount: 28,
    levels: ["Lycée", "Supérieur"],
  },
  {
    name: "Physique-Chimie",
    description: "Programme intégré collège et lycée",
    icon: Atom,
    tutorCount: 89,
    levels: ["Collège", "Lycée"],
  },
]

export default function SciencesPage() {
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
            <h1 className="heading-hero text-4xl md:text-6xl text-balance">Sciences</h1>
            <p className="text-xl text-muted-foreground content-width-md mx-auto">
              Explorez le monde des sciences avec nos tuteurs passionnés. Physique, chimie, biologie et sciences de la
              terre.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <Badge variant="secondary">189 tuteurs</Badge>
              <Badge variant="secondary">Collège à Supérieur</Badge>
              <Badge variant="secondary">À partir de 28€/h</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="section-padding">
        <div className="container safe-area">
          <div className="text-center mb-12">
            <h2 className="heading-xl text-3xl md:text-4xl mb-4">Disciplines Scientifiques</h2>
            <p className="text-lg text-muted-foreground content-width-md mx-auto">
              De la théorie à la pratique, maîtrisez toutes les sciences
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
                      <Badge variant="outline">{topic.tutorCount} tuteurs</Badge>
                    </div>
                    <CardTitle className="text-xl">{topic.name}</CardTitle>
                    <CardDescription>{topic.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-medium mb-2">Niveaux :</p>
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
            <h2 className="heading-xl text-3xl md:text-4xl">Prêt à Explorer les Sciences ?</h2>
            <p className="text-lg text-muted-foreground content-width-md mx-auto">
              Trouvez le tuteur parfait pour vous accompagner dans votre parcours scientifique
            </p>
            <Button size="lg" asChild>
              <Link href="/tutors?subject=sciences">
                Trouver un Tuteur en Sciences
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
