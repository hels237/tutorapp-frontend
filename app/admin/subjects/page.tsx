import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Edit, Trash2, BookOpen, GraduationCap } from "lucide-react"

function AdminSubjectsContent() {
  const [subjects, setSubjects] = useState([
    { id: 1, name: "Mathématiques", category: "Sciences", active: true, tutorCount: 15 },
    { id: 2, name: "Physique-Chimie", category: "Sciences", active: true, tutorCount: 12 },
    { id: 3, name: "Français", category: "Langues", active: true, tutorCount: 18 },
    { id: 4, name: "Anglais", category: "Langues", active: true, tutorCount: 22 },
    { id: 5, name: "Histoire-Géographie", category: "Sciences Humaines", active: true, tutorCount: 8 },
  ])

  const [levels, setLevels] = useState([
    { id: 1, name: "CP", category: "Primaire", order: 1, active: true },
    { id: 2, name: "CE1", category: "Primaire", order: 2, active: true },
    { id: 3, name: "CE2", category: "Primaire", order: 3, active: true },
    { id: 4, name: "CM1", category: "Primaire", order: 4, active: true },
    { id: 5, name: "CM2", category: "Primaire", order: 5, active: true },
    { id: 6, name: "6ème", category: "Collège", order: 6, active: true },
    { id: 7, name: "5ème", category: "Collège", order: 7, active: true },
    { id: 8, name: "4ème", category: "Collège", order: 8, active: true },
    { id: 9, name: "3ème", category: "Collège", order: 9, active: true },
    { id: 10, name: "Seconde", category: "Lycée", order: 10, active: true },
    { id: 11, name: "Première", category: "Lycée", order: 11, active: true },
    { id: 12, name: "Terminale", category: "Lycée", order: 12, active: true },
  ])

  const [newSubject, setNewSubject] = useState({ name: "", category: "" })
  const [newLevel, setNewLevel] = useState({ name: "", category: "", order: 0 })

  const addSubject = () => {
    if (newSubject.name && newSubject.category) {
      setSubjects([
        ...subjects,
        {
          id: subjects.length + 1,
          name: newSubject.name,
          category: newSubject.category,
          active: true,
          tutorCount: 0,
        },
      ])
      setNewSubject({ name: "", category: "" })
    }
  }

  const addLevel = () => {
    if (newLevel.name && newLevel.category) {
      setLevels([
        ...levels,
        {
          id: levels.length + 1,
          name: newLevel.name,
          category: newLevel.category,
          order: newLevel.order || levels.length + 1,
          active: true,
        },
      ])
      setNewLevel({ name: "", category: "", order: 0 })
    }
  }

  const toggleSubjectStatus = (id: number) => {
    setSubjects(subjects.map((subject) => (subject.id === id ? { ...subject, active: !subject.active } : subject)))
  }

  const toggleLevelStatus = (id: number) => {
    setLevels(levels.map((level) => (level.id === id ? { ...level, active: !level.active } : level)))
  }

  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h1 className="heading-xl text-3xl mb-2">Gestion des Matières & Niveaux</h1>
        <p className="text-muted-foreground">Administrez le catalogue des matières et niveaux scolaires</p>
      </div>

        <Tabs defaultValue="subjects" className="space-y-6">
          <TabsList>
            <TabsTrigger value="subjects">Matières</TabsTrigger>
            <TabsTrigger value="levels">Niveaux</TabsTrigger>
          </TabsList>

          <TabsContent value="subjects" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5" />
                      Matières ({subjects.length})
                    </CardTitle>
                    <CardDescription>Gérez les matières disponibles sur la plateforme</CardDescription>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>
                        <Plus className="h-4 w-4 mr-2" />
                        Ajouter une matière
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Ajouter une nouvelle matière</DialogTitle>
                        <DialogDescription>Créez une nouvelle matière pour la plateforme</DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="subjectName">Nom de la matière</Label>
                          <Input
                            id="subjectName"
                            value={newSubject.name}
                            onChange={(e) => setNewSubject({ ...newSubject, name: e.target.value })}
                            placeholder="Ex: Mathématiques"
                          />
                        </div>
                        <div>
                          <Label htmlFor="subjectCategory">Catégorie</Label>
                          <Select onValueChange={(value) => setNewSubject({ ...newSubject, category: value })}>
                            <SelectTrigger>
                              <SelectValue placeholder="Sélectionner une catégorie" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Sciences">Sciences</SelectItem>
                              <SelectItem value="Langues">Langues</SelectItem>
                              <SelectItem value="Sciences Humaines">Sciences Humaines</SelectItem>
                              <SelectItem value="Arts">Arts</SelectItem>
                              <SelectItem value="Sport">Sport</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <Button onClick={addSubject} className="w-full">
                          Ajouter la matière
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {subjects.map((subject) => (
                    <div key={subject.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="font-medium">{subject.name}</h3>
                          <Badge variant="secondary">{subject.category}</Badge>
                          <Badge variant={subject.active ? "default" : "destructive"}>
                            {subject.active ? "Actif" : "Inactif"}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600">
                          {subject.tutorCount} tuteur{subject.tutorCount > 1 ? "s" : ""} disponible
                          {subject.tutorCount > 1 ? "s" : ""}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => toggleSubjectStatus(subject.id)}>
                          {subject.active ? "Désactiver" : "Activer"}
                        </Button>
                        <Button variant="outline" size="sm" className="text-red-600 bg-transparent">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="levels" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <GraduationCap className="h-5 w-5" />
                      Niveaux scolaires ({levels.length})
                    </CardTitle>
                    <CardDescription>Gérez les niveaux scolaires disponibles</CardDescription>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>
                        <Plus className="h-4 w-4 mr-2" />
                        Ajouter un niveau
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Ajouter un nouveau niveau</DialogTitle>
                        <DialogDescription>Créez un nouveau niveau scolaire</DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="levelName">Nom du niveau</Label>
                          <Input
                            id="levelName"
                            value={newLevel.name}
                            onChange={(e) => setNewLevel({ ...newLevel, name: e.target.value })}
                            placeholder="Ex: Terminale S"
                          />
                        </div>
                        <div>
                          <Label htmlFor="levelCategory">Catégorie</Label>
                          <Select onValueChange={(value) => setNewLevel({ ...newLevel, category: value })}>
                            <SelectTrigger>
                              <SelectValue placeholder="Sélectionner une catégorie" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Primaire">Primaire</SelectItem>
                              <SelectItem value="Collège">Collège</SelectItem>
                              <SelectItem value="Lycée">Lycée</SelectItem>
                              <SelectItem value="Supérieur">Supérieur</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="levelOrder">Ordre</Label>
                          <Input
                            id="levelOrder"
                            type="number"
                            value={newLevel.order}
                            onChange={(e) => setNewLevel({ ...newLevel, order: Number.parseInt(e.target.value) })}
                            placeholder="Ordre d'affichage"
                          />
                        </div>
                        <Button onClick={addLevel} className="w-full">
                          Ajouter le niveau
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {levels
                    .sort((a, b) => a.order - b.order)
                    .map((level) => (
                      <div key={level.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-1">
                            <h3 className="font-medium">{level.name}</h3>
                            <Badge variant="secondary">{level.category}</Badge>
                            <Badge variant={level.active ? "default" : "destructive"}>
                              {level.active ? "Actif" : "Inactif"}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600">Ordre: {level.order}</p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm" onClick={() => toggleLevelStatus(level.id)}>
                            {level.active ? "Désactiver" : "Activer"}
                          </Button>
                          <Button variant="outline" size="sm" className="text-red-600 bg-transparent">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
    </div>
  )
}

export default function AdminSubjectsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container safe-area section-padding">
        <AdminSubjectsContent />
      </main>
      
      <Footer />
    </div>
  )
}
