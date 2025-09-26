"use client"

import { useState } from "react"
import { useI18n } from "@/contexts/i18n-context"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  Star, 
  TrendingUp, 
  Video, 
  Settings, 
  Bell, 
  CreditCard,
  Search,
  Heart,
  MessageCircle,
  FileText,
  Award,
  Target,
  Euro,
  AlertCircle,
  CheckCircle,
  XCircle,
  User,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Edit3,
  Download,
  Filter,
  Calendar as CalendarIcon,
  Users,
  BarChart3
} from "lucide-react"

export function StudentDashboard() {
  const { t } = useI18n()
  const [activeTab, setActiveTab] = useState("overview")

  // Mock data - Profil étudiant complet
  const student = {
    id: "student_001",
    name: "Marie Dubois",
    firstName: "Marie",
    lastName: "Dubois", 
    email: "marie.dubois@email.com",
    phone: "+33 6 12 34 56 78",
    avatar: "/placeholder.svg?height=80&width=80",
    level: "Terminale S",
    school: "Lycée Victor Hugo",
    address: "15 rue de la Paix, 75001 Paris",
    birthDate: "2006-03-15",
    joinDate: "Septembre 2024",
    parentEmail: "parent.dubois@email.com",
    parentPhone: "+33 6 98 76 54 32",
    preferences: {
      subjects: ["mathematics", "physics", "chemistry"],
      learningStyle: "visual",
      goals: "Réussir le baccalauréat avec mention",
      availability: ["weekdays_evening", "weekend_morning"]
    },
    stats: {
      totalLessons: 45,
      hoursThisMonth: 18,
      averageRating: 4.8,
      progressPercentage: 73,
      completedGoals: 8,
      totalGoals: 11,
      favoriteTeachers: 3,
      totalSpent: 1250
    }
  }

  // Cours à venir - données enrichies
  const upcomingLessons = [
    {
      id: 1,
      subject: "Mathématiques",
      tutor: "Prof. Jean Martin",
      tutorAvatar: "/placeholder.svg?height=40&width=40",
      date: "2024-01-15",
      time: "14:00",
      duration: "1h",
      status: "confirmed",
      type: "individual",
      price: 35,
      meetingLink: "https://meet.tutorapp.com/room/abc123",
      topic: "Fonctions exponentielles",
      materials: ["Livre chapitre 8", "Exercices en ligne"]
    },
    {
      id: 2,
      subject: "Physique",
      tutor: "Dr. Sophie Leroy",
      tutorAvatar: "/placeholder.svg?height=40&width=40",
      date: "2024-01-16",
      time: "16:00",
      duration: "1h30",
      status: "pending",
      type: "group",
      price: 25,
      topic: "Mécanique quantique",
      materials: ["Manuel page 145-160"]
    },
    {
      id: 3,
      subject: "Chimie",
      tutor: "Prof. Paul Durand",
      tutorAvatar: "/placeholder.svg?height=40&width=40",
      date: "2024-01-17",
      time: "10:00",
      duration: "2h",
      status: "confirmed",
      type: "individual",
      price: 40,
      meetingLink: "https://meet.tutorapp.com/room/xyz789",
      topic: "Réactions d'oxydoréduction",
      materials: ["TP virtuel", "Tableau périodique"]
    }
  ]

  // Historique des cours complet
  const lessonHistory = [
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
      studentRating: 5,
      tutorRating: 4,
      studentFeedback: "Excellent cours, explications très claires !",
      tutorFeedback: "Élève motivée, bonne participation",
      materials: ["Fiche d'exercices", "Correction détaillée"],
      homework: "Exercices 15 à 20 page 87"
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
      studentRating: 4,
      tutorRating: 5,
      studentFeedback: "Cours intéressant mais un peu rapide",
      tutorFeedback: "Très bonne compréhension des concepts",
      materials: ["Simulation interactive", "Schémas"],
      homework: "Lire chapitre 12"
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
      studentRating: 5,
      tutorRating: 4,
      studentFeedback: "Parfait ! J'ai enfin compris les équilibres",
      tutorFeedback: "Progrès remarquables, continue ainsi",
      materials: ["TP en ligne", "Exercices corrigés"],
      homework: "Préparer le contrôle de la semaine prochaine"
    },
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
      homework: "Réviser les formules de Maxwell"
      // Pas de studentRating - cours à noter
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
      homework: "Lire les chapitres 5-8"
      // Pas de studentRating - cours à noter
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
      homework: "Préparer une présentation de 5 minutes"
      // Pas de studentRating - cours à noter
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
      homework: "Dissertation sur les causes de la Révolution"
      // Pas de studentRating - cours à noter
    },
    {
      id: 8,
      subject: "Mathématiques",
      tutor: "Prof. Jean Martin",
      tutorAvatar: "/placeholder.svg?height=40&width=40",
      date: "2024-01-03",
      time: "14:00",
      duration: "1h",
      status: "cancelled",
      type: "individual",
      price: 0,
      topic: "Intégrales",
      cancelReason: "Maladie de l'étudiant",
      cancelledBy: "student",
      refundStatus: "completed"
    }
  ]

  // Tuteurs favoris
  const favoriteTutors = [
    {
      id: 1,
      name: "Prof. Jean Martin",
      avatar: "/placeholder.svg?height=60&width=60",
      subject: "Mathématiques",
      rating: 4.9,
      totalLessons: 15,
      lastLesson: "2024-01-10",
      price: 35,
      isAvailable: true,
      nextSlot: "Aujourd'hui 16:00"
    },
    {
      id: 2,
      name: "Dr. Sophie Leroy",
      avatar: "/placeholder.svg?height=60&width=60",
      subject: "Physique",
      rating: 4.8,
      totalLessons: 8,
      lastLesson: "2024-01-08",
      price: 30,
      isAvailable: false,
      nextSlot: "Demain 14:00"
    },
    {
      id: 3,
      name: "Prof. Paul Durand",
      avatar: "/placeholder.svg?height=60&width=60",
      subject: "Chimie",
      rating: 4.7,
      totalLessons: 6,
      lastLesson: "2024-01-05",
      price: 40,
      isAvailable: true,
      nextSlot: "Lundi 10:00"
    }
  ]

  // Objectifs et progression
  const learningGoals = [
    {
      id: 1,
      title: "Maîtriser les fonctions exponentielles",
      subject: "Mathématiques",
      progress: 85,
      deadline: "2024-02-15",
      status: "in_progress",
      tasks: [
        { id: 1, title: "Comprendre la définition", completed: true },
        { id: 2, title: "Résoudre des équations simples", completed: true },
        { id: 3, title: "Applications aux suites", completed: false },
        { id: 4, title: "Exercices d'approfondissement", completed: false }
      ]
    },
    {
      id: 2,
      title: "Réussir le contrôle de physique",
      subject: "Physique",
      progress: 60,
      deadline: "2024-01-25",
      status: "in_progress",
      tasks: [
        { id: 1, title: "Réviser les ondes", completed: true },
        { id: 2, title: "Faire les exercices types", completed: false },
        { id: 3, title: "Simuler l'examen", completed: false }
      ]
    },
    {
      id: 3,
      title: "Améliorer ma moyenne en chimie",
      subject: "Chimie",
      progress: 40,
      deadline: "2024-03-01",
      status: "in_progress",
      tasks: [
        { id: 1, title: "Comprendre les équilibres", completed: true },
        { id: 2, title: "Maîtriser la cinétique", completed: false },
        { id: 3, title: "Révisions générales", completed: false }
      ]
    }
  ]

  // Données financières
  const paymentHistory = [
    {
      id: 1,
      date: "2024-01-10",
      description: "Cours de Mathématiques - Prof. Martin",
      amount: 35,
      status: "paid",
      method: "card"
    },
    {
      id: 2,
      date: "2024-01-08",
      description: "Cours de Physique - Dr. Leroy",
      amount: 25,
      status: "paid",
      method: "card"
    },
    {
      id: 3,
      date: "2024-01-05",
      description: "Cours de Chimie - Prof. Durand",
      amount: 40,
      status: "paid",
      method: "paypal"
    },
    {
      id: 4,
      date: "2024-01-03",
      description: "Remboursement - Cours annulé",
      amount: -35,
      status: "refunded",
      method: "card"
    }
  ]

  const subjects = [
    { name: "Mathématiques", progress: 75, lessons: 12, nextLesson: "Lundi 14:00" },
    { name: "Physique", progress: 60, lessons: 8, nextLesson: "Mardi 16:00" },
    { name: "Français", progress: 85, lessons: 15, nextLesson: "Mercredi 10:00" },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="font-playfair text-3xl font-bold">Tableau de bord étudiant</h1>
          <p className="text-muted-foreground">Bienvenue, {student.name} • {student.level}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link href="/tutors">
              <Search className="h-4 w-4 mr-2" />
              Trouver un tuteur
            </Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link href="/dashboard/student/notifications">
              <Bell className="h-4 w-4 mr-2" />
              Notifications
            </Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link href="/dashboard/student/settings">
              <Settings className="h-4 w-4 mr-2" />
              Paramètres
            </Link>
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
          <TabsTrigger value="lessons">Mes cours</TabsTrigger>
          <TabsTrigger value="progress">Progression</TabsTrigger>
          <TabsTrigger value="favorites">Favoris</TabsTrigger>
          <TabsTrigger value="payments">Paiements</TabsTrigger>
          <TabsTrigger value="profile">Profil</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Cours ce mois</CardTitle>
                <BookOpen className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{student.stats.hoursThisMonth}</div>
                <p className="text-xs text-muted-foreground">+2 par rapport au mois dernier</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total cours</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{student.stats.totalLessons}</div>
                <p className="text-xs text-muted-foreground">Depuis {student.joinDate}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Note moyenne</CardTitle>
                <Star className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{student.stats.averageRating}/5</div>
                <p className="text-xs text-muted-foreground">Évaluations des tuteurs</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Objectifs</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{student.stats.completedGoals}/{student.stats.totalGoals}</div>
                <p className="text-xs text-muted-foreground">{Math.round((student.stats.completedGoals / student.stats.totalGoals) * 100)}% complétés</p>
              </CardContent>
            </Card>
          </div>

          {/* Upcoming Lessons */}
          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Prochains cours ({upcomingLessons.length})
                </CardTitle>
                <CardDescription>
                  Vos cours programmés cette semaine
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingLessons.map((lesson) => (
                    <div key={lesson.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={lesson.tutorAvatar} />
                          <AvatarFallback>
                            {lesson.tutor.split(" ").map(n => n[0]).join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold">{lesson.subject}</h4>
                          <p className="text-sm text-muted-foreground">avec {lesson.tutor}</p>
                          <p className="text-xs text-muted-foreground">
                            {lesson.date} à {lesson.time} • {lesson.duration} • {lesson.price}€
                          </p>
                          <p className="text-xs font-medium text-primary">{lesson.topic}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end space-y-2">
                        <Badge variant={lesson.status === "confirmed" ? "default" : "secondary"}>
                          {lesson.status === "confirmed" ? "Confirmé" : "En attente"}
                        </Badge>
                        <div className="flex space-x-1">
                          {lesson.status === "confirmed" && lesson.meetingLink && (
                            <Button size="sm" asChild>
                              <a href={lesson.meetingLink} target="_blank" rel="noopener noreferrer">
                                <Video className="h-4 w-4 mr-1" />
                                Rejoindre
                              </a>
                            </Button>
                          )}
                          <Button variant="outline" size="sm">
                            <MessageCircle className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                  {upcomingLessons.length === 0 && (
                    <div className="text-center py-8">
                      <CalendarIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">Aucun cours programmé</h3>
                      <p className="text-muted-foreground mb-4">
                        Réservez votre prochain cours avec un tuteur
                      </p>
                      <Button asChild>
                        <Link href="/tutors">
                          <Search className="h-4 w-4 mr-2" />
                          Trouver un tuteur
                        </Link>
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Cours à évaluer */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  Cours à évaluer
                </CardTitle>
                <CardDescription>
                  Partagez votre expérience pour aider la communauté
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {lessonHistory.filter(lesson => lesson.status === 'completed' && !lesson.studentRating).slice(0, 2).map((lesson) => (
                    <div key={lesson.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={lesson.tutorAvatar} />
                          <AvatarFallback>
                            {lesson.tutor.split(" ").map(n => n[0]).join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-medium text-sm">{lesson.subject}</h4>
                          <p className="text-xs text-muted-foreground">avec {lesson.tutor}</p>
                          <p className="text-xs text-muted-foreground">{lesson.date} • {lesson.topic}</p>
                        </div>
                      </div>
                      <Button size="sm" asChild>
                        <Link href={`/dashboard/student/rate-lesson/${lesson.id}`}>
                          <Star className="h-4 w-4 mr-1" />
                          Noter
                        </Link>
                      </Button>
                    </div>
                  ))}
                  {lessonHistory.filter(lesson => lesson.status === 'completed' && !lesson.studentRating).length === 0 && (
                    <div className="text-center py-6">
                      <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Tous vos cours sont évalués !</p>
                    </div>
                  )}
                  {lessonHistory.filter(lesson => lesson.status === 'completed' && !lesson.studentRating).length > 2 && (
                    <Button variant="outline" className="w-full" size="sm" asChild>
                      <Link href="/dashboard/student/rate-lessons">
                        <Star className="h-4 w-4 mr-2" />
                        Voir tous les cours à noter
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="lessons" className="space-y-6">
          {/* Filtres et recherche */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Historique des cours ({lessonHistory.length})
              </CardTitle>
              <CardDescription>
                Tous vos cours passés avec évaluations et détails
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-6">
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Tous les statuts
                </Button>
                <Button variant="outline" size="sm">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Toutes les matières
                </Button>
                <Button variant="outline" size="sm">
                  <CalendarIcon className="h-4 w-4 mr-2" />
                  Ce mois
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Exporter
                </Button>
                {lessonHistory.filter(lesson => lesson.status === 'completed' && !lesson.studentRating).length > 0 && (
                  <Button size="sm" asChild className="bg-yellow-600 hover:bg-yellow-700">
                    <Link href="/dashboard/student/rate-lessons">
                      <Star className="h-4 w-4 mr-2" />
                      Cours à noter ({lessonHistory.filter(lesson => lesson.status === 'completed' && !lesson.studentRating).length})
                    </Link>
                  </Button>
                )}
              </div>

              <div className="space-y-4">
                {lessonHistory.map((lesson) => (
                  <div key={lesson.id} className={`p-4 border rounded-lg transition-colors ${
                    lesson.status === 'completed' ? 'bg-green-50 border-green-200' :
                    lesson.status === 'cancelled' ? 'bg-red-50 border-red-200' :
                    'bg-gray-50'
                  }`}>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={lesson.tutorAvatar} />
                          <AvatarFallback>
                            {lesson.tutor.split(" ").map(n => n[0]).join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold">{lesson.subject}</h4>
                            <Badge variant={
                              lesson.status === 'completed' ? 'default' :
                              lesson.status === 'cancelled' ? 'destructive' : 'secondary'
                            }>
                              {lesson.status === 'completed' ? 'Terminé' :
                               lesson.status === 'cancelled' ? 'Annulé' : lesson.status}
                            </Badge>
                            <Badge variant="outline">
                              {lesson.type === 'individual' ? 'Individuel' : 'Groupe'}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-1">avec {lesson.tutor}</p>
                          <p className="text-xs text-muted-foreground mb-2">
                            {lesson.date} à {lesson.time} • {lesson.duration} • {lesson.price}€
                          </p>
                          <p className="text-sm font-medium text-primary mb-2">{lesson.topic}</p>
                          
                          {lesson.status === 'completed' && (
                            <div className="grid md:grid-cols-2 gap-4 mt-3 p-3 bg-white rounded border">
                              <div>
                                <h5 className="text-xs font-medium text-muted-foreground mb-1">Votre évaluation</h5>
                                <div className="flex items-center space-x-1 mb-1">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`h-3 w-3 ${
                                        i < lesson.studentRating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                      }`}
                                    />
                                  ))}
                                  <span className="text-xs ml-1">{lesson.studentRating}/5</span>
                                </div>
                                <p className="text-xs text-muted-foreground">{lesson.studentFeedback}</p>
                              </div>
                              <div>
                                <h5 className="text-xs font-medium text-muted-foreground mb-1">Évaluation du tuteur</h5>
                                <div className="flex items-center space-x-1 mb-1">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`h-3 w-3 ${
                                        i < lesson.tutorRating ? "fill-blue-400 text-blue-400" : "text-gray-300"
                                      }`}
                                    />
                                  ))}
                                  <span className="text-xs ml-1">{lesson.tutorRating}/5</span>
                                </div>
                                <p className="text-xs text-muted-foreground">{lesson.tutorFeedback}</p>
                              </div>
                            </div>
                          )}

                          {lesson.status === 'cancelled' && (
                            <div className="mt-3 p-3 bg-red-50 rounded border border-red-200">
                              <p className="text-sm text-red-800">
                                <strong>Annulé par:</strong> {lesson.cancelledBy === 'student' ? 'Vous' : 'Le tuteur'}
                              </p>
                              <p className="text-sm text-red-600">Raison: {lesson.cancelReason}</p>
                              {lesson.refundStatus === 'completed' && (
                                <p className="text-sm text-green-600 mt-1">✓ Remboursement effectué</p>
                              )}
                            </div>
                          )}

                          {lesson.materials && lesson.materials.length > 0 && (
                            <div className="mt-3">
                              <h5 className="text-xs font-medium text-muted-foreground mb-1">Matériaux du cours</h5>
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
                            <div className="mt-2">
                              <h5 className="text-xs font-medium text-muted-foreground mb-1">Devoirs assignés</h5>
                              <p className="text-xs text-muted-foreground">{lesson.homework}</p>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-col items-end space-y-2">
                        {lesson.status === 'completed' && !lesson.studentRating && (
                          <Button variant="default" size="sm" asChild>
                            <Link href={`/dashboard/student/rate-lesson/${lesson.id}`}>
                              <Star className="h-4 w-4 mr-1" />
                              Noter le cours
                            </Link>
                          </Button>
                        )}
                        {lesson.status === 'completed' && (
                          <Button variant="outline" size="sm">
                            <MessageCircle className="h-4 w-4 mr-1" />
                            Contacter
                          </Button>
                        )}
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4 mr-1" />
                          Reçu
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="progress" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Progression par matière
                </CardTitle>
                <CardDescription>Suivez vos progrès dans chaque matière</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {subjects.map((subject, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium">{subject.name}</h4>
                        <span className="text-sm text-muted-foreground">{subject.progress}%</span>
                      </div>
                      <Progress value={subject.progress} className="h-2" />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>{subject.lessons} cours suivis</span>
                        <span>Prochain: {subject.nextLesson}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Objectifs détaillés
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {learningGoals.map((goal) => (
                    <div key={goal.id} className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-medium">{goal.title}</h4>
                          <p className="text-sm text-muted-foreground">{goal.subject}</p>
                        </div>
                        <Badge variant="outline">{goal.progress}%</Badge>
                      </div>
                      <Progress value={goal.progress} className="h-2 mb-3" />
                      <div className="space-y-2">
                        {goal.tasks.map((task) => (
                          <div key={task.id} className="flex items-center space-x-2 text-sm">
                            {task.completed ? (
                              <CheckCircle className="h-4 w-4 text-green-500" />
                            ) : (
                              <div className="h-4 w-4 border-2 border-gray-300 rounded-full" />
                            )}
                            <span className={task.completed ? "line-through text-muted-foreground" : ""}>
                              {task.title}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground mt-3">
                        <span>Échéance: {new Date(goal.deadline).toLocaleDateString()}</span>
                        <span>{goal.tasks.filter(t => t.completed).length}/{goal.tasks.length} terminées</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="favorites" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5" />
                Mes tuteurs favoris ({favoriteTutors.length})
              </CardTitle>
              <CardDescription>
                Vos tuteurs préférés avec accès rapide à la réservation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {favoriteTutors.map((tutor) => (
                  <div key={tutor.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-center space-x-3 mb-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={tutor.avatar} />
                        <AvatarFallback>
                          {tutor.name.split(" ").map(n => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold">{tutor.name}</h4>
                        <p className="text-sm text-muted-foreground">{tutor.subject}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <span>Note moyenne</span>
                        <div className="flex items-center space-x-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span>{tutor.rating}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Cours avec vous</span>
                        <span>{tutor.totalLessons}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Tarif</span>
                        <span>{tutor.price}€/h</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <div className={`h-2 w-2 rounded-full ${tutor.isAvailable ? 'bg-green-500' : 'bg-red-500'}`} />
                        <span className="text-muted-foreground">
                          {tutor.isAvailable ? 'Disponible' : 'Occupé'} • {tutor.nextSlot}
                        </span>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button size="sm" className="flex-1" disabled={!tutor.isAvailable}>
                          <Calendar className="h-4 w-4 mr-1" />
                          Réserver
                        </Button>
                        <Button variant="outline" size="sm">
                          <MessageCircle className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payments" className="space-y-6">
          <div className="grid lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Dépenses ce mois</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{paymentHistory.filter(p => p.amount > 0).reduce((sum, p) => sum + p.amount, 0)}€</div>
                <p className="text-xs text-muted-foreground">+15% par rapport au mois dernier</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Total dépensé</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{student.stats.totalSpent}€</div>
                <p className="text-xs text-muted-foreground">Depuis {student.joinDate}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Moyenne par cours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{Math.round(student.stats.totalSpent / student.stats.totalLessons)}€</div>
                <p className="text-xs text-muted-foreground">Prix moyen par session</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Euro className="h-5 w-5" />
                Historique des paiements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {paymentHistory.map((payment) => (
                  <div key={payment.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-full ${
                        payment.amount > 0 ? 'bg-red-100' : 'bg-green-100'
                      }`}>
                        {payment.amount > 0 ? (
                          <Euro className="h-4 w-4 text-red-600" />
                        ) : (
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        )}
                      </div>
                      <div>
                        <h4 className="font-medium">{payment.description}</h4>
                        <p className="text-sm text-muted-foreground">{payment.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`font-semibold ${
                        payment.amount > 0 ? 'text-red-600' : 'text-green-600'
                      }`}>
                        {payment.amount > 0 ? '-' : '+'}{Math.abs(payment.amount)}€
                      </div>
                      <Badge variant={
                        payment.status === 'paid' ? 'default' :
                        payment.status === 'refunded' ? 'secondary' : 'outline'
                      }>
                        {payment.status === 'paid' ? 'Payé' :
                         payment.status === 'refunded' ? 'Remboursé' : payment.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="profile" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Informations personnelles
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src={student.avatar} />
                    <AvatarFallback>
                      {student.name.split(" ").map(n => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-lg">{student.name}</h3>
                    <p className="text-muted-foreground">{student.level}</p>
                    <p className="text-sm text-muted-foreground">{student.school}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{student.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{student.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{student.address}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <GraduationCap className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Membre depuis {student.joinDate}</span>
                  </div>
                </div>

                <Button className="w-full" asChild>
                  <Link href="/dashboard/student/profile">
                    <Edit3 className="h-4 w-4 mr-2" />
                    Modifier le profil
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Paramètres du compte</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-medium">Notifications</h4>
                  <p className="text-sm text-muted-foreground">Gérer vos préférences de notification</p>
                  <Button variant="outline" size="sm">
                    <Bell className="h-4 w-4 mr-2" />
                    Configurer
                  </Button>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Paiement</h4>
                  <p className="text-sm text-muted-foreground">Méthodes de paiement et facturation</p>
                  <Button variant="outline" size="sm">
                    <CreditCard className="h-4 w-4 mr-2" />
                    Gérer
                  </Button>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Confidentialité</h4>
                  <p className="text-sm text-muted-foreground">Paramètres de confidentialité</p>
                  <Button variant="outline" size="sm">
                    <Settings className="h-4 w-4 mr-2" />
                    Modifier
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
