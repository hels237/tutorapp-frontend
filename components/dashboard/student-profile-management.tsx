"use client"

import { useState } from "react"
import { useI18n } from "@/contexts/i18n-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap,
  Edit3,
  Save,
  X,
  Camera,
  Lock,
  Bell,
  Shield,
  Eye,
  EyeOff,
  Target
} from "lucide-react"

export function StudentProfileManagement() {
  const { t } = useI18n()
  const [isEditing, setIsEditing] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [activeTab, setActiveTab] = useState("personal")

  // Mock data - Profil étudiant
  const [studentData, setStudentData] = useState({
    firstName: "Marie",
    lastName: "Dubois",
    email: "marie.dubois@email.com",
    phone: "+33 6 12 34 56 78",
    avatar: "/placeholder.svg?height=120&width=120",
    birthDate: "2006-03-15",
    address: "15 rue de la Paix, 75001 Paris",
    level: "terminale_s",
    school: "Lycée Victor Hugo",
    parentEmail: "jean.dubois@email.com",
    parentPhone: "+33 6 98 76 54 32",
    goals: "Réussir le baccalauréat avec mention",
    emailNotifications: true,
    pushNotifications: true,
    twoFactorEnabled: false
  })

  const handleSave = () => {
    console.log("Sauvegarde des données:", studentData)
    setIsEditing(false)
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setStudentData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="font-playfair text-3xl font-bold">Gestion du profil</h1>
          <p className="text-muted-foreground">
            Gérez vos informations personnelles et préférences
          </p>
        </div>
        <div className="flex gap-2">
          {isEditing ? (
            <>
              <Button variant="outline" onClick={() => setIsEditing(false)}>
                <X className="h-4 w-4 mr-2" />
                Annuler
              </Button>
              <Button onClick={handleSave}>
                <Save className="h-4 w-4 mr-2" />
                Sauvegarder
              </Button>
            </>
          ) : (
            <Button onClick={() => setIsEditing(true)}>
              <Edit3 className="h-4 w-4 mr-2" />
              Modifier le profil
            </Button>
          )}
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="personal">Personnel</TabsTrigger>
          <TabsTrigger value="academic">Scolaire</TabsTrigger>
          <TabsTrigger value="preferences">Préférences</TabsTrigger>
          <TabsTrigger value="security">Sécurité</TabsTrigger>
        </TabsList>

        {/* Onglet Informations personnelles */}
        <TabsContent value="personal" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Informations personnelles
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Photo de profil */}
              <div className="flex items-center space-x-4">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={studentData.avatar} />
                  <AvatarFallback className="text-lg">
                    {studentData.firstName[0]}{studentData.lastName[0]}
                  </AvatarFallback>
                </Avatar>
                {isEditing && (
                  <Button variant="outline" size="sm">
                    <Camera className="h-4 w-4 mr-2" />
                    Changer la photo
                  </Button>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Prénom</Label>
                  <Input
                    id="firstName"
                    value={studentData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Nom</Label>
                  <Input
                    id="lastName"
                    value={studentData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    disabled={!isEditing}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={studentData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={studentData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    disabled={!isEditing}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="birthDate">Date de naissance</Label>
                <Input
                  id="birthDate"
                  type="date"
                  value={studentData.birthDate}
                  onChange={(e) => handleInputChange("birthDate", e.target.value)}
                  disabled={!isEditing}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Adresse</Label>
                <Textarea
                  id="address"
                  value={studentData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  disabled={!isEditing}
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Onglet Informations scolaires */}
        <TabsContent value="academic" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                Informations scolaires
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="level">Niveau scolaire</Label>
                <Select
                  value={studentData.level}
                  onValueChange={(value) => handleInputChange("level", value)}
                  disabled={!isEditing}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sixieme">6ème</SelectItem>
                    <SelectItem value="cinquieme">5ème</SelectItem>
                    <SelectItem value="quatrieme">4ème</SelectItem>
                    <SelectItem value="troisieme">3ème</SelectItem>
                    <SelectItem value="seconde">Seconde</SelectItem>
                    <SelectItem value="premiere">Première</SelectItem>
                    <SelectItem value="terminale_s">Terminale S</SelectItem>
                    <SelectItem value="terminale_es">Terminale ES</SelectItem>
                    <SelectItem value="terminale_l">Terminale L</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="school">Établissement scolaire</Label>
                <Input
                  id="school"
                  value={studentData.school}
                  onChange={(e) => handleInputChange("school", e.target.value)}
                  disabled={!isEditing}
                />
              </div>

              {/* Contact parent */}
              <div className="border-t pt-6">
                <h3 className="font-semibold mb-4">Contact parent/tuteur légal</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="parentEmail">Email parent</Label>
                    <Input
                      id="parentEmail"
                      type="email"
                      value={studentData.parentEmail}
                      onChange={(e) => handleInputChange("parentEmail", e.target.value)}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="parentPhone">Téléphone parent</Label>
                    <Input
                      id="parentPhone"
                      type="tel"
                      value={studentData.parentPhone}
                      onChange={(e) => handleInputChange("parentPhone", e.target.value)}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Onglet Préférences */}
        <TabsContent value="preferences" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Préférences d'apprentissage
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="goals">Objectifs d'apprentissage</Label>
                <Textarea
                  id="goals"
                  value={studentData.goals}
                  onChange={(e) => handleInputChange("goals", e.target.value)}
                  disabled={!isEditing}
                  rows={4}
                  placeholder="Décrivez vos objectifs d'apprentissage..."
                />
              </div>

              <div className="border-t pt-6">
                <h3 className="font-semibold mb-4">Notifications</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Notifications par email</Label>
                      <p className="text-sm text-muted-foreground">
                        Recevoir les rappels de cours et messages par email
                      </p>
                    </div>
                    <Switch
                      checked={studentData.emailNotifications}
                      onCheckedChange={(checked) => handleInputChange("emailNotifications", checked)}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Notifications push</Label>
                      <p className="text-sm text-muted-foreground">
                        Recevoir les notifications sur votre appareil
                      </p>
                    </div>
                    <Switch
                      checked={studentData.pushNotifications}
                      onCheckedChange={(checked) => handleInputChange("pushNotifications", checked)}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Onglet Sécurité */}
        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Sécurité du compte
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label>Changer le mot de passe</Label>
                  <p className="text-sm text-muted-foreground mb-3">
                    Modifiez votre mot de passe pour sécuriser votre compte
                  </p>
                  <div className="space-y-3">
                    <div className="space-y-2">
                      <Label htmlFor="currentPassword">Mot de passe actuel</Label>
                      <div className="relative">
                        <Input
                          id="currentPassword"
                          type={showPassword ? "text" : "password"}
                          disabled={!isEditing}
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3"
                          onClick={() => setShowPassword(!showPassword)}
                          disabled={!isEditing}
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="newPassword">Nouveau mot de passe</Label>
                      <Input
                        id="newPassword"
                        type={showPassword ? "text" : "password"}
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
                      <Input
                        id="confirmPassword"
                        type={showPassword ? "text" : "password"}
                        disabled={!isEditing}
                      />
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Authentification à deux facteurs</Label>
                      <p className="text-sm text-muted-foreground">
                        Ajoutez une couche de sécurité supplémentaire
                      </p>
                    </div>
                    <Switch
                      checked={studentData.twoFactorEnabled}
                      onCheckedChange={(checked) => handleInputChange("twoFactorEnabled", checked)}
                      disabled={!isEditing}
                    />
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-semibold mb-3">Actions dangereuses</h3>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Lock className="h-4 w-4 mr-2" />
                      Télécharger mes données
                    </Button>
                    <Button variant="destructive" className="w-full justify-start">
                      <X className="h-4 w-4 mr-2" />
                      Supprimer mon compte
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
