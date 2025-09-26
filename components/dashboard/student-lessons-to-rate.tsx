"use client"

import { useState } from "react"
import { useI18n } from "@/contexts/i18n-context"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  Star, 
  ArrowLeft, 
  BookOpen, 
  Calendar, 
  Clock, 
  User,
  CheckCircle,
  Search,
  Filter,
  SortAsc,
  FileText,
  Target
} from "lucide-react"

export function StudentLessonsToRate() {
  const { t } = useI18n()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSubject, setSelectedSubject] = useState("all")
  const [sortBy, setSortBy] = useState("date_desc")

  // Mock data - Tous les cours terminés (incluant ceux déjà notés et non notés)
  const allLessons = [
    {
      id: 4,
      subject: "Physique",
      tutor: "Dr. Sophie Leroy",
      tutorAvatar: "/placeholder.svg?height=40&width=40",
      date: "2024-01-12",
      time: "15:00",
      duration: "1h30",
      status: "completed",
      type: "individual",
      price: 30,
      topic: "Électromagnétisme et champs",
      materials: ["Cours magistral", "Exercices pratiques"],
      homework: "Réviser les formules de Maxwell",
      studentRating: null // À noter
    },
    {
      id: 5,
      subject: "Français",
      tutor: "Mme. Claire Rousseau",
      tutorAvatar: "/placeholder.svg?height=40&width=40",
      date: "2024-01-14",
      time: "11:00",
      duration: "1h",
      status: "completed",
      type: "individual",
      price: 28,
      topic: "Analyse littéraire - Le Rouge et le Noir",
      materials: ["Extraits du livre", "Fiche d'analyse"],
      homework: "Lire les chapitres 5-8",
      studentRating: null // À noter
    },
    {
      id: 6,
      subject: "Anglais",
      tutor: "Mr. David Wilson",
      tutorAvatar: "/placeholder.svg?height=40&width=40",
      date: "2024-01-13",
      time: "09:00",
      duration: "1h30",
      status: "completed",
      type: "group",
      price: 20,
      topic: "Conversation et expression orale",
      materials: ["Audio exercises", "Vocabulary list"],
      homework: "Préparer une présentation de 5 minutes",
      studentRating: null // À noter
    },
    {
      id: 7,
      subject: "Histoire",
      tutor: "Prof. Michel Dubois",
      tutorAvatar: "/placeholder.svg?height=40&width=40",
      date: "2024-01-11",
      time: "16:30",
      duration: "2h",
      status: "completed",
      type: "individual",
      price: 35,
      topic: "La Révolution française - Causes et conséquences",
      materials: ["Documents historiques", "Chronologie"],
      homework: "Dissertation sur les causes de la Révolution",
      studentRating: null // À noter
    },
    // Cours déjà notés (pour comparaison)
    {
      id: 1,
      subject: "Mathématiques",
      tutor: "Prof. Jean Martin",
      tutorAvatar: "/placeholder.svg?height=40&width=40",
      date: "2024-01-10",
      time: "14:00",
      duration: "1h",
      status: "completed",
      type: "individual",
      price: 35,
      topic: "Dérivées et applications",
      materials: ["Fiche d'exercices", "Correction détaillée"],
      homework: "Exercices 15 à 20 page 87",
      studentRating: 5,
      studentFeedback: "Excellent cours, explications très claires !"
    },
    {
      id: 2,
      subject: "Physique",
      tutor: "Dr. Sophie Leroy",
      tutorAvatar: "/placeholder.svg?height=40&width=40",
      date: "2024-01-08",
      time: "16:00",
      duration: "1h30",
      status: "completed",
      type: "group",
      price: 25,
      topic: "Ondes mécaniques",
      materials: ["Simulation interactive", "Schémas"],
      homework: "Lire chapitre 12",
      studentRating: 4,
      studentFeedback: "Cours intéressant mais un peu rapide"
    },
    {
      id: 3,
      subject: "Chimie",
      tutor: "Prof. Paul Durand",
      tutorAvatar: "/placeholder.svg?height=40&width=40",
      date: "2024-01-05",
      time: "10:00",
      duration: "2h",
      status: "completed",
      type: "individual",
      price: 40,
      topic: "Équilibres chimiques",
      materials: ["TP en ligne", "Exercices corrigés"],
      homework: "Préparer le contrôle de la semaine prochaine",
      studentRating: 5,
      studentFeedback: "Parfait ! J'ai enfin compris les équilibres"
    }
  ]

  // Filtrer les cours à noter
  const lessonsToRate = allLessons.filter(lesson => 
    lesson.status === 'completed' && !lesson.studentRating
  )

  // Appliquer les filtres
  let filteredLessons = lessonsToRate.filter(lesson => {
    const matchesSearch = lesson.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lesson.tutor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lesson.topic.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesSubject = selectedSubject === "all" || lesson.subject === selectedSubject
    
    return matchesSearch && matchesSubject
  })

  // Appliquer le tri
  filteredLessons.sort((a, b) => {
    switch (sortBy) {
      case "date_desc":
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      case "date_asc":
        return new Date(a.date).getTime() - new Date(b.date).getTime()
      case "subject":
        return a.subject.localeCompare(b.subject)
      case "tutor":
        return a.tutor.localeCompare(b.tutor)
      case "price_desc":
        return b.price - a.price
      case "price_asc":
        return a.price - b.price
      default:
        return 0
    }
  })

  const subjects = [...new Set(lessonsToRate.map(lesson => lesson.subject))]
  const stats = {
    total: lessonsToRate.length,
    thisWeek: lessonsToRate.filter(lesson => {
      const lessonDate = new Date(lesson.date)
      const weekAgo = new Date()
      weekAgo.setDate(weekAgo.getDate() - 7)
      return lessonDate >= weekAgo
    }).length,
    totalValue: lessonsToRate.reduce((sum, lesson) => sum + lesson.price, 0)
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" asChild>
            <Link href="/dashboard/student">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour au dashboard
            </Link>
          </Button>
          <div>
            <h1 className="font-playfair text-3xl font-bold flex items-center gap-2">
              <Star className="h-8 w-8" />
              Cours à évaluer
            </h1>
            <p className="text-muted-foreground">
              Évaluez vos cours terminés pour aider la communauté
            </p>
          </div>
        </div>
      </div>

      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cours à noter</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total}</div>
            <p className="text-xs text-muted-foreground">Cours terminés non évalués</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cette semaine</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.thisWeek}</div>
            <p className="text-xs text-muted-foreground">Cours récents à évaluer</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Valeur totale</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalValue}€</div>
            <p className="text-xs text-muted-foreground">Cours à évaluer</p>
          </CardContent>
        </Card>
      </div>

      {/* Filtres et recherche */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filtres et recherche
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Rechercher</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Matière, tuteur, sujet..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Matière</label>
              <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes les matières</SelectItem>
                  {subjects.map(subject => (
                    <SelectItem key={subject} value={subject}>{subject}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Trier par</label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="date_desc">Date (plus récent)</SelectItem>
                  <SelectItem value="date_asc">Date (plus ancien)</SelectItem>
                  <SelectItem value="subject">Matière</SelectItem>
                  <SelectItem value="tutor">Tuteur</SelectItem>
                  <SelectItem value="price_desc">Prix (décroissant)</SelectItem>
                  <SelectItem value="price_asc">Prix (croissant)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-end">
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm("")
                  setSelectedSubject("all")
                  setSortBy("date_desc")
                }}
              >
                Réinitialiser
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Liste des cours */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Cours à évaluer ({filteredLessons.length})
          </CardTitle>
          <CardDescription>
            Cliquez sur "Noter le cours" pour partager votre expérience
          </CardDescription>
        </CardHeader>
        <CardContent>
          {filteredLessons.length === 0 ? (
            <div className="text-center py-12">
              {lessonsToRate.length === 0 ? (
                <>
                  <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Tous vos cours sont évalués !</h3>
                  <p className="text-muted-foreground mb-4">
                    Vous avez évalué tous vos cours terminés. Merci pour votre contribution !
                  </p>
                  <Button asChild>
                    <Link href="/dashboard/student?tab=lessons">
                      Voir l'historique complet
                    </Link>
                  </Button>
                </>
              ) : (
                <>
                  <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Aucun cours trouvé</h3>
                  <p className="text-muted-foreground mb-4">
                    Essayez de modifier vos critères de recherche
                  </p>
                  <Button 
                    variant="outline"
                    onClick={() => {
                      setSearchTerm("")
                      setSelectedSubject("all")
                    }}
                  >
                    Réinitialiser les filtres
                  </Button>
                </>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredLessons.map((lesson) => (
                <div key={lesson.id} className="p-4 border rounded-lg hover:shadow-md transition-all bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={lesson.tutorAvatar} />
                        <AvatarFallback>
                          {lesson.tutor.split(" ").map(n => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold">{lesson.subject}</h4>
                          <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-300">
                            À évaluer
                          </Badge>
                          <Badge variant="outline">
                            {lesson.type === 'individual' ? 'Individuel' : 'Groupe'}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">avec {lesson.tutor}</p>
                        <p className="text-xs text-muted-foreground mb-2">
                          {new Date(lesson.date).toLocaleDateString()} à {lesson.time} • {lesson.duration} • {lesson.price}€
                        </p>
                        <p className="text-sm font-medium text-primary mb-2">{lesson.topic}</p>

                        {lesson.materials && lesson.materials.length > 0 && (
                          <div className="mb-2">
                            <h5 className="text-xs font-medium text-muted-foreground mb-1">Matériaux utilisés</h5>
                            <div className="flex flex-wrap gap-1">
                              {lesson.materials.map((material, idx) => (
                                <Badge key={idx} variant="outline" className="text-xs">
                                  <FileText className="h-3 w-3 mr-1" />
                                  {material}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        {lesson.homework && (
                          <div className="mb-2">
                            <h5 className="text-xs font-medium text-muted-foreground mb-1">Devoirs assignés</h5>
                            <p className="text-xs text-muted-foreground">{lesson.homework}</p>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col items-end space-y-2">
                      <Button asChild className="bg-yellow-600 hover:bg-yellow-700">
                        <Link href={`/dashboard/student/rate-lesson/${lesson.id}`}>
                          <Star className="h-4 w-4 mr-2" />
                          Noter le cours
                        </Link>
                      </Button>
                      <div className="text-xs text-muted-foreground text-right">
                        Il y a {Math.ceil((new Date().getTime() - new Date(lesson.date).getTime()) / (1000 * 60 * 60 * 24))} jours
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Rappel */}
      {lessonsToRate.length > 0 && (
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <Star className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <h4 className="font-medium text-blue-900 mb-1">Pourquoi évaluer vos cours ?</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Aidez d'autres étudiants à choisir leurs tuteurs</li>
                  <li>• Donnez un feedback constructif aux tuteurs</li>
                  <li>• Améliorez la qualité générale des cours sur la plateforme</li>
                  <li>• Contribuez à une communauté d'apprentissage bienveillante</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
