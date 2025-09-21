"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Star,
  MapPin,
  Clock,
  Euro,
  CheckCircle,
  Calendar,
  MessageCircle,
  Award,
  Users,
  Video,
  FileText,
} from "lucide-react"
import Link from "next/link"

interface TutorProfileProps {
  tutorId: string
}

export function TutorProfile({ tutorId }: TutorProfileProps) {
  const [activeTab, setActiveTab] = useState("about")

  // Mock data - would normally fetch based on tutorId
  const tutor = {
    id: 1,
    name: "Prof. Jean Martin",
    avatar: "/placeholder.svg?height=120&width=120",
    subjects: ["Mathématiques", "Physique"],
    level: ["Lycée", "Université"],
    rating: 4.9,
    reviewCount: 127,
    hourlyRate: 35,
    location: "Paris",
    languages: ["Français", "Anglais"],
    experience: 8,
    description:
      "Professeur agrégé de mathématiques avec 8 ans d'expérience dans l'enseignement. Je me spécialise dans la préparation au baccalauréat et aux concours d'entrée aux grandes écoles. Ma méthode pédagogique s'adapte au rythme de chaque élève pour garantir une progression optimale.",
    availability: "Disponible",
    verified: true,
    responseTime: "< 1h",
    completedLessons: 450,
    education: [
      "Agrégation de Mathématiques - École Normale Supérieure",
      "Master en Mathématiques Appliquées - Université Paris-Saclay",
    ],
    certifications: ["Certification Pédagogie Numérique", "Formation aux Troubles de l'Apprentissage"],
    specialties: ["Préparation Bac S", "Concours Grandes Écoles", "Mathématiques Appliquées"],
    videoIntro: "/placeholder-video.mp4",
  }

  const reviews = [
    {
      id: 1,
      student: "Marie D.",
      rating: 5,
      date: "Il y a 2 semaines",
      comment: "Excellent professeur ! Très pédagogue et patient. Mes notes en maths ont considérablement progressé.",
      subject: "Mathématiques",
    },
    {
      id: 2,
      student: "Pierre L.",
      rating: 5,
      date: "Il y a 1 mois",
      comment: "Explications très claires, méthodes efficaces. Je recommande vivement pour la préparation au bac.",
      subject: "Physique",
    },
    {
      id: 3,
      student: "Sophie M.",
      rating: 4,
      date: "Il y a 2 mois",
      comment: "Bon professeur, disponible et à l'écoute. Les cours sont bien structurés.",
      subject: "Mathématiques",
    },
  ]

  const availability = [
    { day: "Lundi", slots: ["14:00-16:00", "18:00-20:00"] },
    { day: "Mardi", slots: ["16:00-18:00"] },
    { day: "Mercredi", slots: ["14:00-16:00", "16:00-18:00"] },
    { day: "Jeudi", slots: ["18:00-20:00"] },
    { day: "Vendredi", slots: ["14:00-16:00"] },
    { day: "Samedi", slots: ["10:00-12:00", "14:00-16:00"] },
    { day: "Dimanche", slots: [] },
  ]

  const ratingBreakdown = [
    { stars: 5, count: 89, percentage: 70 },
    { stars: 4, count: 28, percentage: 22 },
    { stars: 3, count: 7, percentage: 6 },
    { stars: 2, count: 2, percentage: 1 },
    { stars: 1, count: 1, percentage: 1 },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <Card>
        <CardContent className="p-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="relative">
                <Avatar className="h-32 w-32">
                  <AvatarImage src={tutor.avatar || "/placeholder.svg"} alt={tutor.name} />
                  <AvatarFallback className="text-2xl">
                    {tutor.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                {tutor.verified && (
                  <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-2">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <div>
                  <h1 className="font-playfair text-3xl font-bold">{tutor.name}</h1>
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="flex items-center space-x-1">
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <span className="font-bold text-lg">{tutor.rating}</span>
                      <span className="text-muted-foreground">({tutor.reviewCount} avis)</span>
                    </div>
                    <Badge variant="default">Vérifié</Badge>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {tutor.subjects.map((subject) => (
                    <Badge key={subject} variant="secondary">
                      {subject}
                    </Badge>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{tutor.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>Répond en {tutor.responseTime}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="h-4 w-4 text-muted-foreground" />
                    <span>{tutor.experience} ans d'expérience</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{tutor.completedLessons} cours donnés</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:ml-auto space-y-4">
              <div className="text-right">
                <div className="flex items-center justify-end space-x-2">
                  <Euro className="h-6 w-6 text-primary" />
                  <span className="font-bold text-3xl">{tutor.hourlyRate}€</span>
                  <span className="text-muted-foreground">/heure</span>
                </div>
                <Badge variant={tutor.availability === "Disponible" ? "default" : "secondary"} className="mt-2">
                  {tutor.availability}
                </Badge>
              </div>

              <div className="flex flex-col space-y-2">
                <Button size="lg" asChild>
                  <Link href={`/tutors/${tutor.id}/book`}>
                    <Calendar className="h-5 w-5 mr-2" />
                    Réserver un cours
                  </Link>
                </Button>
                <Button variant="outline" size="lg">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Envoyer un message
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="about">À propos</TabsTrigger>
          <TabsTrigger value="reviews">Avis ({tutor.reviewCount})</TabsTrigger>
          <TabsTrigger value="availability">Disponibilités</TabsTrigger>
          <TabsTrigger value="credentials">Qualifications</TabsTrigger>
        </TabsList>

        <TabsContent value="about" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Présentation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{tutor.description}</p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Spécialités</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {tutor.specialties.map((specialty) => (
                    <div key={specialty} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">{specialty}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Langues parlées</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {tutor.languages.map((language) => (
                    <Badge key={language} variant="outline">
                      {language}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Video Introduction */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Video className="h-5 w-5" />
                Vidéo de présentation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center space-y-2">
                  <Video className="h-12 w-12 text-muted-foreground mx-auto" />
                  <p className="text-muted-foreground">Vidéo de présentation disponible</p>
                  <Button variant="outline">
                    <Video className="h-4 w-4 mr-2" />
                    Regarder la vidéo
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reviews" className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Note globale</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-2">
                  <div className="text-4xl font-bold">{tutor.rating}</div>
                  <div className="flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(tutor.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">Basé sur {tutor.reviewCount} avis</p>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Répartition des notes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {ratingBreakdown.map((rating) => (
                    <div key={rating.stars} className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1 w-12">
                        <span className="text-sm">{rating.stars}</span>
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      </div>
                      <Progress value={rating.percentage} className="flex-1 h-2" />
                      <span className="text-sm text-muted-foreground w-8">{rating.count}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            {reviews.map((review) => (
              <Card key={review.id}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback>{review.student[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold">{review.student}</h4>
                        <p className="text-sm text-muted-foreground">{review.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {review.subject}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{review.comment}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="availability" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Créneaux disponibles cette semaine</CardTitle>
              <CardDescription>Tous les horaires sont en heure française (CET)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {availability.map((day) => (
                  <div key={day.day} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="font-medium w-24">{day.day}</div>
                    <div className="flex-1">
                      {day.slots.length > 0 ? (
                        <div className="flex flex-wrap gap-2">
                          {day.slots.map((slot) => (
                            <Badge key={slot} variant="outline">
                              {slot}
                            </Badge>
                          ))}
                        </div>
                      ) : (
                        <span className="text-muted-foreground text-sm">Non disponible</span>
                      )}
                    </div>
                    {day.slots.length > 0 && (
                      <Button size="sm" variant="outline">
                        Réserver
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="credentials" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Formation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {tutor.education.map((edu, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                      <p className="text-sm">{edu}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {tutor.certifications.map((cert, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      <p className="text-sm">{cert}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Vérifications effectuées</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm">Identité vérifiée</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm">Diplômes vérifiés</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm">Casier judiciaire vérifié</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm">Références professionnelles</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
