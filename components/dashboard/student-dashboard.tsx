"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Calendar, Clock, Star, TrendingUp, Video, Settings, Bell, CreditCard } from "lucide-react"

export function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock data
  const student = {
    name: "Marie Dubois",
    email: "marie.dubois@email.com",
    avatar: "/placeholder.svg?height=80&width=80",
    level: "Terminale S",
    joinDate: "Septembre 2024",
  }

  const upcomingLessons = [
    {
      id: 1,
      subject: "Mathématiques",
      tutor: "Prof. Martin",
      date: "2024-01-15",
      time: "14:00",
      duration: "1h",
      status: "confirmed",
    },
    {
      id: 2,
      subject: "Physique",
      tutor: "Dr. Leroy",
      date: "2024-01-16",
      time: "16:00",
      duration: "1h30",
      status: "pending",
    },
  ]

  const recentLessons = [
    {
      id: 1,
      subject: "Mathématiques",
      tutor: "Prof. Martin",
      date: "2024-01-10",
      rating: 5,
      feedback: "Excellent cours sur les dérivées",
    },
    {
      id: 2,
      subject: "Français",
      tutor: "Mme. Rousseau",
      date: "2024-01-08",
      rating: 4,
      feedback: "Très bonne analyse de texte",
    },
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
          <h1 className="font-playfair text-3xl font-bold">Tableau de bord</h1>
          <p className="text-muted-foreground">Bienvenue, {student.name}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Bell className="h-4 w-4 mr-2" />
            Notifications
          </Button>
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-2" />
            Paramètres
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
          <TabsTrigger value="lessons">Mes cours</TabsTrigger>
          <TabsTrigger value="progress">Progression</TabsTrigger>
          <TabsTrigger value="profile">Profil</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Cours ce mois</CardTitle>
                <BookOpen className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">+2 par rapport au mois dernier</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Heures d'étude</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">18h</div>
                <p className="text-xs text-muted-foreground">Cette semaine</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Note moyenne</CardTitle>
                <Star className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4.8/5</div>
                <p className="text-xs text-muted-foreground">Évaluations des tuteurs</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Progression</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">73%</div>
                <p className="text-xs text-muted-foreground">Objectifs atteints</p>
              </CardContent>
            </Card>
          </div>

          {/* Upcoming Lessons */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Prochains cours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingLessons.map((lesson) => (
                  <div key={lesson.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <BookOpen className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{lesson.subject}</h4>
                        <p className="text-sm text-muted-foreground">avec {lesson.tutor}</p>
                        <p className="text-xs text-muted-foreground">
                          {lesson.date} à {lesson.time} ({lesson.duration})
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={lesson.status === "confirmed" ? "default" : "secondary"}>
                        {lesson.status === "confirmed" ? "Confirmé" : "En attente"}
                      </Badge>
                      <Button size="sm">
                        <Video className="h-4 w-4 mr-2" />
                        Rejoindre
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="lessons" className="space-y-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Historique des cours</CardTitle>
                <CardDescription>Vos derniers cours et évaluations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentLessons.map((lesson) => (
                    <div key={lesson.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage src="/placeholder.svg?height=40&width=40" />
                          <AvatarFallback>
                            {lesson.tutor
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold">{lesson.subject}</h4>
                          <p className="text-sm text-muted-foreground">avec {lesson.tutor}</p>
                          <p className="text-xs text-muted-foreground">{lesson.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-1 mb-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < lesson.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-xs text-muted-foreground">{lesson.feedback}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="progress" className="space-y-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Progression par matière</CardTitle>
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
          </div>
        </TabsContent>

        <TabsContent value="profile" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Informations personnelles</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src={student.avatar || "/placeholder.svg"} />
                    <AvatarFallback>
                      {student.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-lg">{student.name}</h3>
                    <p className="text-muted-foreground">{student.email}</p>
                    <p className="text-sm text-muted-foreground">{student.level}</p>
                  </div>
                </div>
                <Button className="w-full">Modifier le profil</Button>
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
