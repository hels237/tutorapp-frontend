"use client"

import { useState } from "react"
import { useI18n } from "@/contexts/i18n-context"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  Target, 
  Plus, 
  Edit3, 
  Trash2, 
  CheckCircle, 
  Circle, 
  Calendar,
  BookOpen,
  TrendingUp,
  Award,
  ArrowLeft,
  Filter,
  Clock
} from "lucide-react"

export function StudentGoalsManagement() {
  const { t } = useI18n()
  const [activeTab, setActiveTab] = useState("all")
  const [isCreating, setIsCreating] = useState(false)

  // Mock data - Objectifs d'apprentissage étendus
  const [learningGoals, setLearningGoals] = useState([
    {
      id: 1,
      title: "Maîtriser les fonctions exponentielles",
      subject: "Mathématiques",
      description: "Comprendre et appliquer les fonctions exponentielles dans différents contextes mathématiques",
      progress: 85,
      deadline: "2024-02-15",
      status: "in_progress",
      priority: "high",
      createdDate: "2024-01-01",
      tasks: [
        { id: 1, title: "Comprendre la définition", completed: true, dueDate: "2024-01-05" },
        { id: 2, title: "Résoudre des équations simples", completed: true, dueDate: "2024-01-10" },
        { id: 3, title: "Applications aux suites", completed: false, dueDate: "2024-01-20" },
        { id: 4, title: "Exercices d'approfondissement", completed: false, dueDate: "2024-02-10" }
      ]
    },
    {
      id: 2,
      title: "Réussir le contrôle de physique",
      subject: "Physique",
      description: "Préparer et réussir le contrôle sur la mécanique quantique",
      progress: 60,
      deadline: "2024-01-25",
      status: "in_progress",
      priority: "high",
      createdDate: "2024-01-05",
      tasks: [
        { id: 1, title: "Réviser les ondes", completed: true, dueDate: "2024-01-15" },
        { id: 2, title: "Faire les exercices types", completed: false, dueDate: "2024-01-20" },
        { id: 3, title: "Simuler l'examen", completed: false, dueDate: "2024-01-23" }
      ]
    },
    {
      id: 3,
      title: "Améliorer ma moyenne en chimie",
      subject: "Chimie",
      description: "Augmenter ma moyenne de 12 à 15 en chimie d'ici la fin du trimestre",
      progress: 40,
      deadline: "2024-03-01",
      status: "in_progress",
      priority: "medium",
      createdDate: "2024-01-10",
      tasks: [
        { id: 1, title: "Comprendre les équilibres", completed: true, dueDate: "2024-01-25" },
        { id: 2, title: "Maîtriser la cinétique", completed: false, dueDate: "2024-02-10" },
        { id: 3, title: "Révisions générales", completed: false, dueDate: "2024-02-25" }
      ]
    },
    {
      id: 4,
      title: "Préparer l'oral de français",
      subject: "Français",
      description: "Préparer efficacement l'épreuve orale du baccalauréat de français",
      progress: 25,
      deadline: "2024-06-15",
      status: "in_progress",
      priority: "medium",
      createdDate: "2024-01-15",
      tasks: [
        { id: 1, title: "Lire les œuvres au programme", completed: false, dueDate: "2024-03-01" },
        { id: 2, title: "Préparer les fiches de lecture", completed: false, dueDate: "2024-04-01" },
        { id: 3, title: "S'entraîner à l'oral", completed: false, dueDate: "2024-05-15" }
      ]
    },
    {
      id: 5,
      title: "Obtenir le niveau B2 en anglais",
      subject: "Anglais",
      description: "Atteindre le niveau B2 en anglais pour le baccalauréat",
      progress: 100,
      deadline: "2024-01-10",
      status: "completed",
      priority: "low",
      createdDate: "2023-09-01",
      completedDate: "2024-01-08",
      tasks: [
        { id: 1, title: "Améliorer la compréhension orale", completed: true, dueDate: "2023-11-01" },
        { id: 2, title: "Enrichir le vocabulaire", completed: true, dueDate: "2023-12-01" },
        { id: 3, title: "Passer le test de niveau", completed: true, dueDate: "2024-01-08" }
      ]
    }
  ])

  const [newGoal, setNewGoal] = useState({
    title: "",
    subject: "",
    description: "",
    deadline: "",
    priority: "medium"
  })

  const filteredGoals = learningGoals.filter(goal => {
    if (activeTab === "all") return true
    if (activeTab === "in_progress") return goal.status === "in_progress"
    if (activeTab === "completed") return goal.status === "completed"
    if (activeTab === "overdue") {
      return goal.status === "in_progress" && new Date(goal.deadline) < new Date()
    }
    return true
  })

  const handleCreateGoal = () => {
    if (!newGoal.title || !newGoal.subject || !newGoal.deadline) return

    const goal = {
      id: Date.now(),
      ...newGoal,
      progress: 0,
      status: "in_progress" as const,
      createdDate: new Date().toISOString().split('T')[0],
      tasks: []
    }

    setLearningGoals(prev => [goal, ...prev])
    setNewGoal({ title: "", subject: "", description: "", deadline: "", priority: "medium" })
    setIsCreating(false)
  }

  const toggleTask = (goalId: number, taskId: number) => {
    setLearningGoals(prev => prev.map(goal => {
      if (goal.id === goalId) {
        const updatedTasks = goal.tasks.map(task => 
          task.id === taskId ? { ...task, completed: !task.completed } : task
        )
        const completedTasks = updatedTasks.filter(t => t.completed).length
        const progress = Math.round((completedTasks / updatedTasks.length) * 100)
        
        return {
          ...goal,
          tasks: updatedTasks,
          progress,
          status: progress === 100 ? "completed" as const : "in_progress" as const
        }
      }
      return goal
    }))
  }

  const deleteGoal = (goalId: number) => {
    if (confirm("Êtes-vous sûr de vouloir supprimer cet objectif ?")) {
      setLearningGoals(prev => prev.filter(goal => goal.id !== goalId))
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-green-100 text-green-800 border-green-200"
      case "in_progress": return "bg-blue-100 text-blue-800 border-blue-200"
      case "overdue": return "bg-red-100 text-red-800 border-red-200"
      default: return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-100 text-red-800"
      case "medium": return "bg-yellow-100 text-yellow-800"
      case "low": return "bg-green-100 text-green-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  const stats = {
    total: learningGoals.length,
    inProgress: learningGoals.filter(g => g.status === "in_progress").length,
    completed: learningGoals.filter(g => g.status === "completed").length,
    overdue: learningGoals.filter(g => g.status === "in_progress" && new Date(g.deadline) < new Date()).length
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
            <h1 className="font-playfair text-3xl font-bold">Mes objectifs d'apprentissage</h1>
            <p className="text-muted-foreground">
              Suivez et gérez vos objectifs d'apprentissage
            </p>
          </div>
        </div>
        <Button onClick={() => setIsCreating(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Nouvel objectif
        </Button>
      </div>

      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total}</div>
            <p className="text-xs text-muted-foreground">Objectifs créés</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">En cours</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.inProgress}</div>
            <p className="text-xs text-muted-foreground">Objectifs actifs</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Terminés</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.completed}</div>
            <p className="text-xs text-muted-foreground">Objectifs atteints</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">En retard</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{stats.overdue}</div>
            <p className="text-xs text-muted-foreground">Échéances dépassées</p>
          </CardContent>
        </Card>
      </div>

      {/* Formulaire de création */}
      {isCreating && (
        <Card>
          <CardHeader>
            <CardTitle>Créer un nouvel objectif</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Titre de l'objectif</Label>
                <Input
                  id="title"
                  value={newGoal.title}
                  onChange={(e) => setNewGoal(prev => ({ ...prev, title: e.target.value }))}
                  placeholder="Ex: Maîtriser les intégrales"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Matière</Label>
                <Select
                  value={newGoal.subject}
                  onValueChange={(value) => setNewGoal(prev => ({ ...prev, subject: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Choisir une matière" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Mathématiques">Mathématiques</SelectItem>
                    <SelectItem value="Physique">Physique</SelectItem>
                    <SelectItem value="Chimie">Chimie</SelectItem>
                    <SelectItem value="Français">Français</SelectItem>
                    <SelectItem value="Anglais">Anglais</SelectItem>
                    <SelectItem value="Histoire">Histoire</SelectItem>
                    <SelectItem value="Philosophie">Philosophie</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={newGoal.description}
                onChange={(e) => setNewGoal(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Décrivez votre objectif en détail..."
                rows={3}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="deadline">Échéance</Label>
                <Input
                  id="deadline"
                  type="date"
                  value={newGoal.deadline}
                  onChange={(e) => setNewGoal(prev => ({ ...prev, deadline: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="priority">Priorité</Label>
                <Select
                  value={newGoal.priority}
                  onValueChange={(value) => setNewGoal(prev => ({ ...prev, priority: value }))}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high">Haute</SelectItem>
                    <SelectItem value="medium">Moyenne</SelectItem>
                    <SelectItem value="low">Basse</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex gap-2">
              <Button onClick={handleCreateGoal}>
                Créer l'objectif
              </Button>
              <Button variant="outline" onClick={() => setIsCreating(false)}>
                Annuler
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Filtres */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">Tous ({stats.total})</TabsTrigger>
          <TabsTrigger value="in_progress">En cours ({stats.inProgress})</TabsTrigger>
          <TabsTrigger value="completed">Terminés ({stats.completed})</TabsTrigger>
          <TabsTrigger value="overdue">En retard ({stats.overdue})</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="space-y-4">
          {filteredGoals.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <Target className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Aucun objectif trouvé</h3>
                <p className="text-muted-foreground mb-4">
                  {activeTab === "all" 
                    ? "Créez votre premier objectif d'apprentissage"
                    : `Aucun objectif ${activeTab === "completed" ? "terminé" : activeTab === "overdue" ? "en retard" : "en cours"}`
                  }
                </p>
                {activeTab === "all" && (
                  <Button onClick={() => setIsCreating(true)}>
                    <Plus className="h-4 w-4 mr-2" />
                    Créer un objectif
                  </Button>
                )}
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {filteredGoals.map((goal) => (
                <Card key={goal.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-lg">{goal.title}</h3>
                          <Badge variant="outline" className={getPriorityColor(goal.priority)}>
                            {goal.priority === "high" ? "Haute" : 
                             goal.priority === "medium" ? "Moyenne" : "Basse"}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <BookOpen className="h-4 w-4" />
                            {goal.subject}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            Échéance: {new Date(goal.deadline).toLocaleDateString()}
                          </div>
                          {goal.status === "completed" && goal.completedDate && (
                            <div className="flex items-center gap-1 text-green-600">
                              <CheckCircle className="h-4 w-4" />
                              Terminé le {new Date(goal.completedDate).toLocaleDateString()}
                            </div>
                          )}
                        </div>
                        {goal.description && (
                          <p className="text-muted-foreground">{goal.description}</p>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={getStatusColor(
                          goal.status === "in_progress" && new Date(goal.deadline) < new Date() 
                            ? "overdue" 
                            : goal.status
                        )}>
                          {goal.status === "completed" ? "Terminé" :
                           goal.status === "in_progress" && new Date(goal.deadline) < new Date() ? "En retard" :
                           "En cours"}
                        </Badge>
                        <Button variant="ghost" size="sm">
                          <Edit3 className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => deleteGoal(goal.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Barre de progression */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progression</span>
                          <span className="font-medium">{goal.progress}%</span>
                        </div>
                        <Progress value={goal.progress} className="h-2" />
                      </div>

                      {/* Tâches */}
                      {goal.tasks.length > 0 && (
                        <div className="space-y-3">
                          <h4 className="font-medium">Tâches ({goal.tasks.filter(t => t.completed).length}/{goal.tasks.length})</h4>
                          <div className="space-y-2">
                            {goal.tasks.map((task) => (
                              <div key={task.id} className="flex items-center space-x-3 p-2 rounded border">
                                <button
                                  onClick={() => toggleTask(goal.id, task.id)}
                                  className="flex-shrink-0"
                                >
                                  {task.completed ? (
                                    <CheckCircle className="h-4 w-4 text-green-500" />
                                  ) : (
                                    <Circle className="h-4 w-4 text-gray-400" />
                                  )}
                                </button>
                                <div className="flex-1">
                                  <span className={`text-sm ${task.completed ? "line-through text-muted-foreground" : ""}`}>
                                    {task.title}
                                  </span>
                                  {task.dueDate && (
                                    <div className="text-xs text-muted-foreground">
                                      Échéance: {new Date(task.dueDate).toLocaleDateString()}
                                    </div>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
