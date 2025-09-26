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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { 
  User, 
  Camera, 
  BookOpen, 
  GraduationCap, 
  FileText, 
  Upload, 
  X, 
  Plus,
  Euro,
  Globe,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Clock,
  Save,
  Eye,
  Edit3
} from "lucide-react"

export function TutorProfileManagement() {
  const { t } = useI18n()
  const [activeTab, setActiveTab] = useState("personal")
  const [isEditing, setIsEditing] = useState(false)

  // Mock data - would normally come from API
  const [profileData, setProfileData] = useState({
    // Informations personnelles
    firstName: "Jean",
    lastName: "Martin",
    email: "jean.martin@email.com",
    phone: "+33 6 12 34 56 78",
    location: "Paris, France",
    avatar: "/placeholder.svg?height=120&width=120",
    bio: "Professeur agrégé de mathématiques avec 8 ans d'expérience dans l'enseignement. Je me spécialise dans la préparation au baccalauréat et aux concours d'entrée aux grandes écoles.",
    
    // Matières et niveaux
    subjects: [
      { id: "mathematics", name: "Mathématiques", levels: ["middle", "high", "university"], rate: 35 },
      { id: "physics", name: "Physique", levels: ["high", "university"], rate: 40 }
    ],
    
    // Langues parlées
    languages: [
      { code: "fr", name: "Français", level: "native" },
      { code: "en", name: "Anglais", level: "fluent" },
      { code: "es", name: "Espagnol", level: "intermediate" }
    ],
    
    // Éducation
    education: [
      {
        id: 1,
        degree: "Agrégation de Mathématiques",
        institution: "École Normale Supérieure",
        year: "2015",
        verified: true
      },
      {
        id: 2,
        degree: "Master en Mathématiques Appliquées",
        institution: "Université Paris-Saclay",
        year: "2013",
        verified: true
      }
    ],
    
    // Certifications
    certifications: [
      {
        id: 1,
        name: "Certification Pédagogie Numérique",
        issuer: "Ministère de l'Éducation",
        year: "2022",
        verified: false
      }
    ],
    
    // Documents
    documents: [
      {
        id: 1,
        name: "Diplôme Agrégation",
        type: "diploma",
        status: "verified",
        uploadDate: "2024-01-15"
      },
      {
        id: 2,
        name: "Casier judiciaire",
        type: "background_check",
        status: "pending",
        uploadDate: "2024-01-20"
      }
    ],
    
    // Préférences
    preferences: {
      timezone: "Europe/Paris",
      currency: "EUR",
      notifications: {
        email: true,
        sms: false,
        push: true
      }
    }
  })

  const [newSubject, setNewSubject] = useState<{ name: string; levels: string[]; rate: number }>({ name: "", levels: [], rate: 0 })
  const [newEducation, setNewEducation] = useState({ degree: "", institution: "", year: "" })
  const [newCertification, setNewCertification] = useState({ name: "", issuer: "", year: "" })

  const availableSubjects = [
    "mathematics", "physics", "chemistry", "biology", "french", "english", 
    "spanish", "history", "geography", "philosophy", "economics", "computer"
  ]

  const availableLevels = [
    "primary", "middle", "high", "university", "adult", "professional"
  ]

  const languageLevels = [
    "beginner", "intermediate", "advanced", "fluent", "native"
  ]

  const handleSave = () => {
    // Ici on sauvegarderait les données via API
    console.log("Saving profile data:", profileData)
    setIsEditing(false)
    // Afficher un message de succès
  }

  const addSubject = () => {
    if (newSubject.name && newSubject.levels.length > 0 && newSubject.rate > 0) {
      setProfileData(prev => ({
        ...prev,
        subjects: [...prev.subjects, { 
          id: Date.now().toString(), 
          ...newSubject 
        }]
      }))
      setNewSubject({ name: "", levels: [], rate: 0 })
    }
  }

  const removeSubject = (id: string) => {
    setProfileData(prev => ({
      ...prev,
      subjects: prev.subjects.filter(s => s.id !== id)
    }))
  }

  const addEducation = () => {
    if (newEducation.degree && newEducation.institution && newEducation.year) {
      setProfileData(prev => ({
        ...prev,
        education: [...prev.education, { 
          id: Date.now(), 
          ...newEducation, 
          verified: false 
        }]
      }))
      setNewEducation({ degree: "", institution: "", year: "" })
    }
  }

  const addCertification = () => {
    if (newCertification.name && newCertification.issuer && newCertification.year) {
      setProfileData(prev => ({
        ...prev,
        certifications: [...prev.certifications, { 
          id: Date.now(), 
          ...newCertification, 
          verified: false 
        }]
      }))
      setNewCertification({ name: "", issuer: "", year: "" })
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="font-playfair text-3xl font-bold">{t('dashboard.tutor.profile.editPublicProfile')}</h1>
          <p className="text-muted-foreground">Gérez toutes les informations de votre profil public</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link href="/tutors/profile/1" target="_blank">
              <Eye className="h-4 w-4 mr-2" />
              Prévisualiser
            </Link>
          </Button>
          <Button 
            variant={isEditing ? "default" : "outline"} 
            size="sm"
            onClick={() => setIsEditing(!isEditing)}
          >
            <Edit3 className="h-4 w-4 mr-2" />
            {isEditing ? "Annuler" : "Modifier"}
          </Button>
          {isEditing && (
            <Button size="sm" onClick={handleSave}>
              <Save className="h-4 w-4 mr-2" />
              Enregistrer
            </Button>
          )}
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="personal">Informations</TabsTrigger>
          <TabsTrigger value="subjects">Matières</TabsTrigger>
          <TabsTrigger value="credentials">Diplômes</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="settings">Paramètres</TabsTrigger>
        </TabsList>

        {/* Onglet Informations personnelles */}
        <TabsContent value="personal" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Photo de profil et infos de base */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Profil public
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Photo de profil */}
                <div className="flex flex-col items-center space-y-4">
                  <Avatar className="h-32 w-32">
                    <AvatarImage src={profileData.avatar} />
                    <AvatarFallback className="text-2xl">
                      {profileData.firstName[0]}{profileData.lastName[0]}
                    </AvatarFallback>
                  </Avatar>
                  {isEditing && (
                    <Button variant="outline" size="sm">
                      <Camera className="h-4 w-4 mr-2" />
                      Changer la photo
                    </Button>
                  )}
                </div>

                {/* Nom et prénom */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Prénom</Label>
                    <Input
                      id="firstName"
                      value={profileData.firstName}
                      onChange={(e) => setProfileData(prev => ({ ...prev, firstName: e.target.value }))}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Nom</Label>
                    <Input
                      id="lastName"
                      value={profileData.lastName}
                      onChange={(e) => setProfileData(prev => ({ ...prev, lastName: e.target.value }))}
                      disabled={!isEditing}
                    />
                  </div>
                </div>

                {/* Bio */}
                <div className="space-y-2">
                  <Label htmlFor="bio">Présentation</Label>
                  <Textarea
                    id="bio"
                    value={profileData.bio}
                    onChange={(e) => setProfileData(prev => ({ ...prev, bio: e.target.value }))}
                    disabled={!isEditing}
                    rows={4}
                    placeholder="Décrivez votre expérience et votre approche pédagogique..."
                  />
                </div>
              </CardContent>
            </Card>

            {/* Coordonnées */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Coordonnées
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={profileData.email}
                    onChange={(e) => setProfileData(prev => ({ ...prev, email: e.target.value }))}
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input
                    id="phone"
                    value={profileData.phone}
                    onChange={(e) => setProfileData(prev => ({ ...prev, phone: e.target.value }))}
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Localisation</Label>
                  <Input
                    id="location"
                    value={profileData.location}
                    onChange={(e) => setProfileData(prev => ({ ...prev, location: e.target.value }))}
                    disabled={!isEditing}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Langues parlées */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Langues parlées
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                {profileData.languages.map((lang, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">{lang.name}</p>
                      <p className="text-sm text-muted-foreground capitalize">{lang.level}</p>
                    </div>
                    {isEditing && (
                      <Button variant="ghost" size="sm">
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                ))}
                {isEditing && (
                  <div className="flex items-center justify-center p-3 border-2 border-dashed rounded-lg">
                    <Button variant="ghost" size="sm">
                      <Plus className="h-4 w-4 mr-2" />
                      Ajouter une langue
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Onglet Matières */}
        <TabsContent value="subjects" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Matières enseignées
              </CardTitle>
              <CardDescription>
                Gérez les matières que vous enseignez, les niveaux et vos tarifs
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Liste des matières actuelles */}
              <div className="space-y-4">
                {profileData.subjects.map((subject) => (
                  <div key={subject.id} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold">{subject.name}</h4>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-primary">{subject.rate}€/h</span>
                        {isEditing && (
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => removeSubject(subject.id)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {subject.levels.map((level) => (
                        <Badge key={level} variant="secondary">
                          {level}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Ajouter une nouvelle matière */}
              {isEditing && (
                <Card className="border-dashed">
                  <CardHeader>
                    <CardTitle className="text-base">Ajouter une matière</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Matière</Label>
                        <Select 
                          value={newSubject.name} 
                          onValueChange={(value) => setNewSubject(prev => ({ ...prev, name: value }))}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Choisir une matière" />
                          </SelectTrigger>
                          <SelectContent>
                            {availableSubjects.map((subject) => (
                              <SelectItem key={subject} value={subject}>
                                {subject}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Tarif (€/h)</Label>
                        <Input
                          type="number"
                          value={newSubject.rate}
                          onChange={(e) => setNewSubject(prev => ({ ...prev, rate: Number(e.target.value) }))}
                          placeholder="35"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Niveaux enseignés</Label>
                      <div className="grid grid-cols-3 gap-2">
                        {availableLevels.map((level) => (
                          <div key={level} className="flex items-center space-x-2">
                            <Checkbox
                              id={level}
                              checked={newSubject.levels.includes(level)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  setNewSubject(prev => ({ 
                                    ...prev, 
                                    levels: [...prev.levels, level] 
                                  }))
                                } else {
                                  setNewSubject(prev => ({ 
                                    ...prev, 
                                    levels: prev.levels.filter(l => l !== level) 
                                  }))
                                }
                              }}
                            />
                            <Label htmlFor={level} className="text-sm capitalize">
                              {level}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    <Button onClick={addSubject}>
                      <Plus className="h-4 w-4 mr-2" />
                      Ajouter la matière
                    </Button>
                  </CardContent>
                </Card>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Onglet Diplômes et certifications */}
        <TabsContent value="credentials" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Éducation */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5" />
                  Formation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {profileData.education.map((edu) => (
                  <div key={edu.id} className="p-3 border rounded-lg">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold">{edu.degree}</h4>
                        <p className="text-sm text-muted-foreground">{edu.institution}</p>
                        <p className="text-xs text-muted-foreground">{edu.year}</p>
                      </div>
                      <Badge variant={edu.verified ? "default" : "secondary"}>
                        {edu.verified ? "Vérifié" : "En attente"}
                      </Badge>
                    </div>
                  </div>
                ))}
                
                {isEditing && (
                  <div className="space-y-3 p-3 border-dashed border rounded-lg">
                    <Input
                      placeholder="Diplôme"
                      value={newEducation.degree}
                      onChange={(e) => setNewEducation(prev => ({ ...prev, degree: e.target.value }))}
                    />
                    <Input
                      placeholder="Institution"
                      value={newEducation.institution}
                      onChange={(e) => setNewEducation(prev => ({ ...prev, institution: e.target.value }))}
                    />
                    <Input
                      placeholder="Année"
                      value={newEducation.year}
                      onChange={(e) => setNewEducation(prev => ({ ...prev, year: e.target.value }))}
                    />
                    <Button size="sm" onClick={addEducation}>
                      <Plus className="h-4 w-4 mr-2" />
                      Ajouter
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {profileData.certifications.map((cert) => (
                  <div key={cert.id} className="p-3 border rounded-lg">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold">{cert.name}</h4>
                        <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                        <p className="text-xs text-muted-foreground">{cert.year}</p>
                      </div>
                      <Badge variant={cert.verified ? "default" : "secondary"}>
                        {cert.verified ? "Vérifié" : "En attente"}
                      </Badge>
                    </div>
                  </div>
                ))}
                
                {isEditing && (
                  <div className="space-y-3 p-3 border-dashed border rounded-lg">
                    <Input
                      placeholder="Nom de la certification"
                      value={newCertification.name}
                      onChange={(e) => setNewCertification(prev => ({ ...prev, name: e.target.value }))}
                    />
                    <Input
                      placeholder="Organisme"
                      value={newCertification.issuer}
                      onChange={(e) => setNewCertification(prev => ({ ...prev, issuer: e.target.value }))}
                    />
                    <Input
                      placeholder="Année"
                      value={newCertification.year}
                      onChange={(e) => setNewCertification(prev => ({ ...prev, year: e.target.value }))}
                    />
                    <Button size="sm" onClick={addCertification}>
                      <Plus className="h-4 w-4 mr-2" />
                      Ajouter
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Onglet Documents */}
        <TabsContent value="documents" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                Gestion des documents
              </CardTitle>
              <CardDescription>
                Téléchargez et gérez vos documents officiels (diplômes, casier judiciaire, etc.)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {profileData.documents.map((doc) => (
                <div key={doc.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <FileText className="h-8 w-8 text-muted-foreground" />
                    <div>
                      <h4 className="font-semibold">{doc.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        Téléchargé le {doc.uploadDate}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge 
                      variant={
                        doc.status === "verified" ? "default" : 
                        doc.status === "pending" ? "secondary" : "destructive"
                      }
                    >
                      {doc.status === "verified" ? "Vérifié" : 
                       doc.status === "pending" ? "En attente" : "Rejeté"}
                    </Badge>
                    {isEditing && (
                      <Button variant="ghost" size="sm">
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              ))}
              
              {isEditing && (
                <div className="border-2 border-dashed rounded-lg p-6 text-center">
                  <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Télécharger un document</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Glissez-déposez vos fichiers ici ou cliquez pour parcourir
                  </p>
                  <Button>
                    <Upload className="h-4 w-4 mr-2" />
                    Choisir des fichiers
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Onglet Paramètres */}
        <TabsContent value="settings" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Préférences générales</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Fuseau horaire</Label>
                  <Select value={profileData.preferences.timezone}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Europe/Paris">Europe/Paris (CET)</SelectItem>
                      <SelectItem value="Europe/London">Europe/London (GMT)</SelectItem>
                      <SelectItem value="America/New_York">America/New_York (EST)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Devise</Label>
                  <Select value={profileData.preferences.currency}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="EUR">Euro (€)</SelectItem>
                      <SelectItem value="USD">Dollar ($)</SelectItem>
                      <SelectItem value="GBP">Livre (£)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Notifications par email</Label>
                    <p className="text-sm text-muted-foreground">
                      Recevoir les notifications importantes par email
                    </p>
                  </div>
                  <Checkbox 
                    checked={profileData.preferences.notifications.email}
                    onCheckedChange={(checked) => 
                      setProfileData(prev => ({
                        ...prev,
                        preferences: {
                          ...prev.preferences,
                          notifications: {
                            ...prev.preferences.notifications,
                            email: checked as boolean
                          }
                        }
                      }))
                    }
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Notifications SMS</Label>
                    <p className="text-sm text-muted-foreground">
                      Recevoir les notifications urgentes par SMS
                    </p>
                  </div>
                  <Checkbox 
                    checked={profileData.preferences.notifications.sms}
                    onCheckedChange={(checked) => 
                      setProfileData(prev => ({
                        ...prev,
                        preferences: {
                          ...prev.preferences,
                          notifications: {
                            ...prev.preferences.notifications,
                            sms: checked as boolean
                          }
                        }
                      }))
                    }
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Notifications push</Label>
                    <p className="text-sm text-muted-foreground">
                      Recevoir les notifications dans le navigateur
                    </p>
                  </div>
                  <Checkbox 
                    checked={profileData.preferences.notifications.push}
                    onCheckedChange={(checked) => 
                      setProfileData(prev => ({
                        ...prev,
                        preferences: {
                          ...prev.preferences,
                          notifications: {
                            ...prev.preferences.notifications,
                            push: checked as boolean
                          }
                        }
                      }))
                    }
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
