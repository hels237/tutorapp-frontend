"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Users,
  Euro,
  UserCheck,
  Star,
  MessageSquare,
  Settings,
  Plus,
  Edit,
  Trash2,
  CheckCircle,
  XCircle,
  Eye,
  BarChart3,
  Shield,
  AlertTriangle,
} from "lucide-react"

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock data
  const stats = {
    totalUsers: 1247,
    totalTutors: 156,
    totalStudents: 891,
    totalParents: 200,
    activeBookings: 89,
    monthlyRevenue: 45680,
    pendingTutors: 12,
    totalSubjects: 24,
  }

  const pendingTutors = [
    {
      id: 1,
      name: "Sophie Martin",
      email: "sophie.martin@email.com",
      subjects: ["Mathématiques", "Physique"],
      experience: "5 ans",
      appliedAt: "2024-01-10",
      documents: ["CV", "Diplôme", "Certificat"],
      status: "pending",
    },
    {
      id: 2,
      name: "Pierre Dubois",
      email: "pierre.dubois@email.com",
      subjects: ["Français", "Histoire"],
      experience: "3 ans",
      appliedAt: "2024-01-12",
      documents: ["CV", "Diplôme"],
      status: "pending",
    },
  ]

  const topTutors = [
    {
      id: 1,
      name: "Marie Leroy",
      subjects: ["Mathématiques"],
      rating: 4.9,
      totalBookings: 156,
      monthlyEarnings: 3200,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "Jean Martin",
      subjects: ["Physique", "Chimie"],
      rating: 4.8,
      totalBookings: 142,
      monthlyEarnings: 2980,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "Claire Dubois",
      subjects: ["Français"],
      rating: 4.9,
      totalBookings: 138,
      monthlyEarnings: 2750,
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const recentUsers = [
    {
      id: 1,
      name: "Lucas Bernard",
      email: "lucas.bernard@email.com",
      type: "student",
      joinedAt: "2024-01-15",
      status: "active",
    },
    {
      id: 2,
      name: "Emma Rousseau",
      email: "emma.rousseau@email.com",
      type: "parent",
      joinedAt: "2024-01-14",
      status: "active",
    },
  ]

  const subjects = [
    { id: 1, name: "Mathématiques", tutorCount: 25, bookingCount: 156, active: true },
    { id: 2, name: "Français", tutorCount: 18, bookingCount: 142, active: true },
    { id: 3, name: "Anglais", tutorCount: 22, bookingCount: 138, active: true },
    { id: 4, name: "Physique-Chimie", tutorCount: 15, bookingCount: 89, active: true },
  ]

  const approveTutor = (tutorId: number) => {
    console.log(`[v0] Approving tutor ${tutorId}`)
    // Logic to approve tutor
  }

  const rejectTutor = (tutorId: number) => {
    console.log(`[v0] Rejecting tutor ${tutorId}`)
    // Logic to reject tutor
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="heading-xl text-3xl">Dashboard Administrateur</h1>
          <p className="text-muted-foreground">Gérez votre plateforme TutorApp</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-2" />
            Paramètres
          </Button>
          <Button variant="outline" size="sm">
            <BarChart3 className="h-4 w-4 mr-2" />
            Rapports
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
          <TabsTrigger value="tutors">Tuteurs</TabsTrigger>
          <TabsTrigger value="users">Utilisateurs</TabsTrigger>
          <TabsTrigger value="subjects">Matières</TabsTrigger>
          <TabsTrigger value="bookings">Réservations</TabsTrigger>
          <TabsTrigger value="finance">Finance</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Utilisateurs totaux</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.totalUsers}</div>
                <p className="text-xs text-muted-foreground">+12% ce mois</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Tuteurs actifs</CardTitle>
                <UserCheck className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.totalTutors}</div>
                <p className="text-xs text-muted-foreground">+8 ce mois</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Revenus mensuels</CardTitle>
                <Euro className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.monthlyRevenue.toLocaleString()}€</div>
                <p className="text-xs text-muted-foreground">+15% vs mois dernier</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Candidatures en attente</CardTitle>
                <AlertTriangle className="h-4 w-4 text-orange-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-600">{stats.pendingTutors}</div>
                <p className="text-xs text-muted-foreground">À traiter</p>
              </CardContent>
            </Card>
          </div>

          {/* Top Tutors */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                Tuteurs les plus sollicités
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topTutors.map((tutor, index) => (
                  <div key={tutor.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full text-sm font-bold">
                        {index + 1}
                      </div>
                      <Avatar>
                        <AvatarImage src={tutor.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {tutor.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold">{tutor.name}</h4>
                        <p className="text-sm text-muted-foreground">{tutor.subjects.join(", ")}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1 mb-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{tutor.rating}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{tutor.totalBookings} cours</p>
                      <p className="text-sm font-medium">{tutor.monthlyEarnings}€/mois</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Nouveaux utilisateurs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentUsers.map((user) => (
                    <div key={user.id} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback>
                            {user.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">{user.name}</p>
                          <p className="text-xs text-muted-foreground">{user.email}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="secondary">{user.type}</Badge>
                        <p className="text-xs text-muted-foreground mt-1">{user.joinedAt}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Matières populaires</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {subjects.slice(0, 4).map((subject) => (
                    <div key={subject.id} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{subject.name}</p>
                        <p className="text-sm text-muted-foreground">{subject.tutorCount} tuteurs</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{subject.bookingCount}</p>
                        <p className="text-xs text-muted-foreground">réservations</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="tutors" className="space-y-6">
          {/* Pending Applications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserCheck className="h-5 w-5" />
                Candidatures de tuteurs ({pendingTutors.length})
              </CardTitle>
              <CardDescription>Examinez et approuvez les nouvelles candidatures</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pendingTutors.map((tutor) => (
                  <div key={tutor.id} className="p-6 border rounded-lg space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <h3 className="font-semibold text-lg">{tutor.name}</h3>
                        <p className="text-muted-foreground">{tutor.email}</p>
                        <div className="flex gap-2">
                          {tutor.subjects.map((subject) => (
                            <Badge key={subject} variant="secondary">
                              {subject}
                            </Badge>
                          ))}
                        </div>
                        <p className="text-sm">
                          <span className="font-medium">Expérience:</span> {tutor.experience}
                        </p>
                        <p className="text-sm">
                          <span className="font-medium">Candidature:</span> {tutor.appliedAt}
                        </p>
                      </div>
                      <Badge variant="outline" className="text-orange-600 border-orange-600">
                        En attente
                      </Badge>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium">Documents fournis:</h4>
                      <div className="flex gap-2">
                        {tutor.documents.map((doc) => (
                          <Button key={doc} variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-2" />
                            {doc}
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2 pt-4 border-t">
                      <Button onClick={() => approveTutor(tutor.id)} className="bg-green-600 hover:bg-green-700">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Approuver
                      </Button>
                      <Button variant="destructive" onClick={() => rejectTutor(tutor.id)}>
                        <XCircle className="h-4 w-4 mr-2" />
                        Refuser
                      </Button>
                      <Button variant="outline">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Contacter
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Active Tutors Management */}
          <Card>
            <CardHeader>
              <CardTitle>Tuteurs actifs ({stats.totalTutors})</CardTitle>
              <CardDescription>Gérez les tuteurs vérifiés de la plateforme</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topTutors.map((tutor) => (
                  <div key={tutor.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src={tutor.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {tutor.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold">{tutor.name}</h4>
                        <p className="text-sm text-muted-foreground">{tutor.subjects.join(", ")}</p>
                        <div className="flex items-center space-x-1 mt-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm">{tutor.rating}</span>
                          <span className="text-sm text-muted-foreground">• {tutor.totalBookings} cours</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="default" className="bg-green-100 text-green-800">
                        Vérifié
                      </Badge>
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Gestion des utilisateurs</CardTitle>
              <CardDescription>Vue d'ensemble de tous les utilisateurs de la plateforme</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <Card>
                  <CardContent className="p-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{stats.totalStudents}</div>
                      <p className="text-sm text-muted-foreground">Étudiants</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{stats.totalTutors}</div>
                      <p className="text-sm text-muted-foreground">Tuteurs</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">{stats.totalParents}</div>
                      <p className="text-sm text-muted-foreground">Parents</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <Input placeholder="Rechercher un utilisateur..." className="max-w-sm" />
                  <Select>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Type d'utilisateur" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Tous</SelectItem>
                      <SelectItem value="student">Étudiants</SelectItem>
                      <SelectItem value="tutor">Tuteurs</SelectItem>
                      <SelectItem value="parent">Parents</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {recentUsers.map((user) => (
                  <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarFallback>
                          {user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold">{user.name}</h4>
                        <p className="text-sm text-muted-foreground">{user.email}</p>
                        <p className="text-xs text-muted-foreground">Inscrit le {user.joinedAt}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={user.type === "tutor" ? "default" : "secondary"}>{user.type}</Badge>
                      <Badge variant={user.status === "active" ? "default" : "destructive"}>{user.status}</Badge>
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Shield className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="subjects" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Gestion des matières</CardTitle>
                  <CardDescription>Administrez le catalogue des matières disponibles</CardDescription>
                </div>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Ajouter une matière
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {subjects.map((subject) => (
                  <div key={subject.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-semibold">{subject.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {subject.tutorCount} tuteurs • {subject.bookingCount} réservations
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={subject.active ? "default" : "secondary"}>
                        {subject.active ? "Actif" : "Inactif"}
                      </Badge>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="bookings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Gestion des réservations</CardTitle>
              <CardDescription>Surveillez et gérez toutes les réservations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold">{stats.activeBookings}</div>
                    <p className="text-sm text-muted-foreground">Cours actifs</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold">156</div>
                    <p className="text-sm text-muted-foreground">Ce mois</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold">12</div>
                    <p className="text-sm text-muted-foreground">Annulés</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold">98%</div>
                    <p className="text-sm text-muted-foreground">Taux de réussite</p>
                  </CardContent>
                </Card>
              </div>
              <p className="text-center text-muted-foreground">Interface de gestion des réservations à implémenter</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="finance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Tableau de bord financier</CardTitle>
              <CardDescription>Revenus, commissions et statistiques financières</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-green-600">{stats.monthlyRevenue.toLocaleString()}€</div>
                    <p className="text-sm text-muted-foreground">Revenus ce mois</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600">4,568€</div>
                    <p className="text-sm text-muted-foreground">Commissions</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-purple-600">15%</div>
                    <p className="text-sm text-muted-foreground">Croissance</p>
                  </CardContent>
                </Card>
              </div>
              <p className="text-center text-muted-foreground">Graphiques et analyses financières à implémenter</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
