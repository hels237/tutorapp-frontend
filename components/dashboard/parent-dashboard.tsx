"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BookOpen,
  Calendar,
  TrendingUp,
  Users,
  Video,
  FileText,
  Settings,
  Bell,
  CreditCard,
  Euro,
  UserPlus,
  Eye,
} from "lucide-react"

export function ParentDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock data
  const parent = {
    name: "Mme. Sophie Dubois",
    email: "sophie.dubois@email.com",
    children: [
      {
        id: 1,
        name: "Marie Dubois",
        age: 17,
        level: "Terminale S",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: 2,
        name: "Lucas Dubois",
        age: 14,
        level: "3ème",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    ],
  }

  const upcomingLessons = [
    {
      id: 1,
      child: "Marie",
      subject: "Mathématiques",
      tutor: "Prof. Martin",
      date: "2024-01-15",
      time: "14:00",
      duration: "1h",
      status: "confirmed",
    },
    {
      id: 2,
      child: "Lucas",
      subject: "Français",
      tutor: "Mme. Rousseau",
      date: "2024-01-16",
      time: "16:00",
      duration: "1h",
      status: "confirmed",
    },
  ]

  const childrenProgress = [
    {
      name: "Marie",
      subjects: [
        { name: "Mathématiques", progress: 85, grade: "A" },
        { name: "Physique", progress: 78, grade: "B+" },
        { name: "Français", progress: 92, grade: "A+" },
      ],
      totalLessons: 24,
      thisMonth: 8,
    },
    {
      name: "Lucas",
      subjects: [
        { name: "Français", progress: 70, grade: "B" },
        { name: "Histoire", progress: 82, grade: "B+" },
      ],
      totalLessons: 16,
      thisMonth: 6,
    },
  ]

  const expenses = {
    thisMonth: 420,
    lastMonth: 380,
    total: 2850,
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="font-playfair text-3xl font-bold">Tableau de bord Parent</h1>
          <p className="text-muted-foreground">Bienvenue, {parent.name}</p>
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
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
          <TabsTrigger value="children">Mes enfants</TabsTrigger>
          <TabsTrigger value="schedule">Planning</TabsTrigger>
          <TabsTrigger value="expenses">Dépenses</TabsTrigger>
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
                <div className="text-2xl font-bold">14</div>
                <p className="text-xs text-muted-foreground">Pour tous les enfants</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Enfants suivis</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{parent.children.length}</div>
                <p className="text-xs text-muted-foreground">Profils actifs</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Progression moyenne</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">82%</div>
                <p className="text-xs text-muted-foreground">Tous enfants confondus</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Dépenses ce mois</CardTitle>
                <Euro className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{expenses.thisMonth}€</div>
                <p className="text-xs text-muted-foreground">
                  +{expenses.thisMonth - expenses.lastMonth}€ vs mois dernier
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Children Overview */}
          <div className="grid md:grid-cols-2 gap-6">
            {parent.children.map((child) => (
              <Card key={child.id}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={child.avatar || "/placeholder.svg"} />
                      <AvatarFallback>
                        {child.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{child.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {child.level} • {child.age} ans
                      </p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Cours ce mois</span>
                      <span className="font-medium">
                        {childrenProgress.find((p) => p.name === child.name.split(" ")[0])?.thisMonth || 0}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Progression moyenne</span>
                      <span className="font-medium">
                        {Math.round(
                          (childrenProgress
                            .find((p) => p.name === child.name.split(" ")[0])
                            ?.subjects.reduce((acc, s) => acc + s.progress, 0) || 0) /
                            (childrenProgress.find((p) => p.name === child.name.split(" ")[0])?.subjects.length || 1),
                        )}
                        %
                      </span>
                    </div>
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      <Eye className="h-4 w-4 mr-2" />
                      Voir les détails
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
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
                        <p className="text-sm text-muted-foreground">
                          {lesson.child} avec {lesson.tutor}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {lesson.date} à {lesson.time} ({lesson.duration})
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="default">Confirmé</Badge>
                      <Button size="sm" variant="outline">
                        <Video className="h-4 w-4 mr-2" />
                        Surveiller
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="children" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Mes enfants</h2>
            <Button>
              <UserPlus className="h-4 w-4 mr-2" />
              Ajouter un enfant
            </Button>
          </div>

          <div className="space-y-6">
            {childrenProgress.map((child, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={parent.children[index]?.avatar || "/placeholder.svg"} />
                      <AvatarFallback>{child.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{child.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {child.totalLessons} cours au total • {child.thisMonth} ce mois
                      </p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <h4 className="font-medium">Progression par matière</h4>
                    {child.subjects.map((subject, subIndex) => (
                      <div key={subIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{subject.name}</span>
                          <div className="flex items-center space-x-2">
                            <Badge variant="outline">{subject.grade}</Badge>
                            <span className="text-sm text-muted-foreground">{subject.progress}%</span>
                          </div>
                        </div>
                        <Progress value={subject.progress} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="schedule" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Planning familial</CardTitle>
              <CardDescription>Tous les cours de vos enfants en un coup d'œil</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Calendrier familial</h3>
                <p className="text-muted-foreground mb-4">Visualisez tous les cours de vos enfants</p>
                <Button>Ouvrir le calendrier</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="expenses" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Résumé des dépenses</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Ce mois</span>
                  <span className="font-semibold">{expenses.thisMonth}€</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Mois dernier</span>
                  <span className="font-semibold">{expenses.lastMonth}€</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t">
                  <span className="font-medium">Total dépensé</span>
                  <span className="font-bold text-lg">{expenses.total}€</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Facturation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">Méthode de paiement</h4>
                    <p className="text-sm text-muted-foreground">Carte bancaire •••• 1234</p>
                    <Button variant="outline" size="sm">
                      <CreditCard className="h-4 w-4 mr-2" />
                      Modifier
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Factures</h4>
                    <p className="text-sm text-muted-foreground">Télécharger vos factures</p>
                    <Button variant="outline" size="sm">
                      <FileText className="h-4 w-4 mr-2" />
                      Voir les factures
                    </Button>
                  </div>
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
                <div className="space-y-2">
                  <h4 className="font-medium">Nom</h4>
                  <p className="text-sm text-muted-foreground">{parent.name}</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Email</h4>
                  <p className="text-sm text-muted-foreground">{parent.email}</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Enfants</h4>
                  <p className="text-sm text-muted-foreground">
                    {parent.children.map((child) => child.name).join(", ")}
                  </p>
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
                  <p className="text-sm text-muted-foreground">Recevoir des alertes sur les cours</p>
                  <Button variant="outline" size="sm">
                    Configurer
                  </Button>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Contrôle parental</h4>
                  <p className="text-sm text-muted-foreground">Paramètres de sécurité</p>
                  <Button variant="outline" size="sm">
                    Modifier
                  </Button>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Confidentialité</h4>
                  <p className="text-sm text-muted-foreground">Gestion des données</p>
                  <Button variant="outline" size="sm">
                    Paramètres
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
