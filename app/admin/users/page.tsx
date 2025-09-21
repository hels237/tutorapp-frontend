import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Users, Eye, Shield, Search } from "lucide-react"

export default function AdminUsersPage() {
  const users = [
    {
      id: 1,
      name: "Marie Dubois",
      email: "marie.dubois@email.com",
      type: "tutor",
      status: "active",
      joinedAt: "2024-01-15",
      avatar: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Pierre Martin",
      email: "pierre.martin@email.com", 
      type: "student",
      status: "active",
      joinedAt: "2024-01-12",
      avatar: "/placeholder.svg"
    },
    {
      id: 3,
      name: "Sophie Laurent",
      email: "sophie.laurent@email.com",
      type: "parent",
      status: "active", 
      joinedAt: "2024-01-10",
      avatar: "/placeholder.svg"
    }
  ]

  const stats = {
    totalUsers: 1247,
    totalTutors: 156,
    totalStudents: 891,
    totalParents: 200
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container safe-area section-padding">
        <div className="space-y-8">
          <div>
            <h1 className="heading-xl text-3xl mb-2">Gestion des Utilisateurs</h1>
            <p className="text-muted-foreground">Administrez tous les utilisateurs de la plateforme</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 grid-gap-lg">
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{stats.totalUsers}</div>
                  <p className="text-sm text-muted-foreground">Total utilisateurs</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{stats.totalTutors}</div>
                  <p className="text-sm text-muted-foreground">Tuteurs</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{stats.totalStudents}</div>
                  <p className="text-sm text-muted-foreground">Étudiants</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">{stats.totalParents}</div>
                  <p className="text-sm text-muted-foreground">Parents</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Users List */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Liste des utilisateurs
              </CardTitle>
              <CardDescription>Gérez et modérez les comptes utilisateurs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Rechercher un utilisateur..." className="pl-10" />
                </div>
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

              <div className="space-y-4">
                {users.map((user) => (
                  <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src={user.avatar} />
                        <AvatarFallback>
                          {user.name.split(" ").map(n => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold">{user.name}</h4>
                        <p className="text-sm text-muted-foreground">{user.email}</p>
                        <p className="text-xs text-muted-foreground">Inscrit le {user.joinedAt}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={user.type === "tutor" ? "default" : "secondary"}>
                        {user.type}
                      </Badge>
                      <Badge variant={user.status === "active" ? "default" : "destructive"}>
                        {user.status}
                      </Badge>
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
        </div>
      </main>
      
      <Footer />
    </div>
  )
}