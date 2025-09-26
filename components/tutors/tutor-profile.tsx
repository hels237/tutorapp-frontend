"use client"

import { useState } from "react"
import { useI18n } from "@/contexts/i18n-context"
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
  const { t } = useI18n()
  const [activeTab, setActiveTab] = useState("about")

  // Mock data - would normally fetch based on tutorId
  const getTutorData = (id: string) => {
    // Simulation de récupération des données basées sur l'ID
    const mockTutors = {
      "1": {
        id: 1,
        name: "Prof. Jean Martin",
        avatar: "/placeholder.svg?height=120&width=120",
        subjects: [t("tutors.profile.mock.subjects.mathematics"), t("tutors.profile.mock.subjects.physics")],
        level: [t("tutors.profile.mock.levels.highSchool"), t("tutors.profile.mock.levels.university")],
        rating: 4.9,
        reviewCount: 127,
        hourlyRate: 35,
        location: "Paris",
        languages: [t("tutors.profile.mock.languages.french"), t("tutors.profile.mock.languages.english")],
        experience: 8,
        description: "Professeur agrégé de mathématiques avec 8 ans d'expérience dans l'enseignement. Je me spécialise dans la préparation au baccalauréat et aux concours d'entrée aux grandes écoles. Ma méthode pédagogique s'adapte au rythme de chaque élève pour garantir une progression optimale.",
        availability: t("tutors.profile.mock.availability.available"),
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
      },
      "2": {
        id: 2,
        name: "Dr. Marie Leroy",
        avatar: "/placeholder.svg?height=120&width=120",
        subjects: [t("tutors.profile.mock.subjects.physics"), t("tutors.profile.mock.subjects.chemistry")],
        level: [t("tutors.profile.mock.levels.middleSchool"), t("tutors.profile.mock.levels.highSchool")],
        rating: 4.8,
        reviewCount: 89,
        hourlyRate: 40,
        location: "Lyon",
        languages: [t("tutors.profile.mock.languages.french")],
        experience: 12,
        description: "Docteur en physique, enseignante passionnée. Méthodes pédagogiques innovantes pour rendre les sciences accessibles.",
        availability: t("tutors.profile.mock.availability.available"),
        verified: true,
        responseTime: "< 2h",
        completedLessons: 320,
        education: [
          "Doctorat en Physique - Université de Lyon",
          "Master en Physique Théorique - ENS Lyon",
        ],
        certifications: ["Certification Enseignement Supérieur", "Formation Pédagogie Active"],
        specialties: ["Physique Quantique", "Thermodynamique", "Optique"],
        videoIntro: "/placeholder-video.mp4",
      },
      "3": {
        id: 3,
        name: "Mme. Sophie Rousseau",
        avatar: "/placeholder.svg?height=120&width=120",
        subjects: [t("tutors.profile.mock.subjects.french"), t("tutors.profile.mock.subjects.literature")],
        level: [t("tutors.profile.mock.levels.middleSchool"), t("tutors.profile.mock.levels.highSchool")],
        rating: 4.7,
        reviewCount: 156,
        hourlyRate: 30,
        location: "Marseille",
        languages: [t("tutors.profile.mock.languages.french"), t("tutors.profile.mock.languages.spanish")],
        experience: 6,
        description: "Professeure de français certifiée. Spécialisée dans l'analyse littéraire et la préparation aux examens.",
        availability: t("tutors.profile.mock.availability.busy"),
        verified: true,
        responseTime: "< 3h",
        completedLessons: 280,
        education: [
          "CAPES de Lettres Modernes - Université d'Aix-Marseille",
          "Master en Littérature Française - Sorbonne",
        ],
        certifications: ["Certification FLE", "Formation Dyslexie"],
        specialties: ["Analyse Littéraire", "Préparation Bac L", "Français Langue Étrangère"],
        videoIntro: "/placeholder-video.mp4",
      },
      "4": {
        id: 4,
        name: "M. Pierre Dubois",
        avatar: "/placeholder.svg?height=120&width=120",
        subjects: [t("tutors.profile.mock.subjects.history"), t("tutors.profile.mock.subjects.geography")],
        level: [t("tutors.profile.mock.levels.middleSchool"), t("tutors.profile.mock.levels.highSchool")],
        rating: 4.6,
        reviewCount: 73,
        hourlyRate: 28,
        location: "Toulouse",
        languages: [t("tutors.profile.mock.languages.french"), t("tutors.profile.mock.languages.english")],
        experience: 5,
        description: "Enseignant d'histoire-géographie passionné. Approche interactive et mémorisation facilitée.",
        availability: t("tutors.profile.mock.availability.available"),
        verified: false,
        responseTime: "< 4h",
        completedLessons: 190,
        education: [
          "CAPES Histoire-Géographie - Université Toulouse II",
          "Master en Histoire Contemporaine - Université Toulouse I",
        ],
        certifications: ["Formation Numérique Éducatif"],
        specialties: ["Histoire du XXe siècle", "Géographie Urbaine", "Préparation Brevet"],
        videoIntro: "/placeholder-video.mp4",
      }
    }
    
    return mockTutors[id as keyof typeof mockTutors] || mockTutors["1"]
  }

  const tutor = getTutorData(tutorId)

  const reviews = [
    {
      id: 1,
      student: "Marie D.",
      rating: 5,
      date: "Il y a 2 semaines",
      comment: "Excellent professeur ! Très pédagogue et patient. Mes notes en maths ont considérablement progressé.",
      subject: t("tutors.profile.mock.subjects.mathematics"),
    },
    {
      id: 2,
      student: "Pierre L.",
      rating: 5,
      date: "Il y a 1 mois",
      comment: "Explications très claires, méthodes efficaces. Je recommande vivement pour la préparation au bac.",
      subject: t("tutors.profile.mock.subjects.physics"),
    },
    {
      id: 3,
      student: "Sophie M.",
      rating: 4,
      date: "Il y a 2 mois",
      comment: "Bon professeur, disponible et à l'écoute. Les cours sont bien structurés.",
      subject: t("tutors.profile.mock.subjects.mathematics"),
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
                    <Badge variant="default">{t("tutors.profile.verified")}</Badge>
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
                    <span>{t("tutors.profile.respondsIn")} {tutor.responseTime}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="h-4 w-4 text-muted-foreground" />
                    <span>{tutor.experience} {t("tutors.profile.yearsExperience")}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{tutor.completedLessons} {t("tutors.profile.lessonsGiven")}</span>
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
                    {t("tutors.profile.bookLesson")}
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
          <TabsTrigger value="about">{t("tutors.profile.tabs.about")}</TabsTrigger>
          <TabsTrigger value="reviews">{t("tutors.profile.tabs.reviews")} ({tutor.reviewCount})</TabsTrigger>
          <TabsTrigger value="availability">{t("tutors.profile.tabs.availability")}</TabsTrigger>
          <TabsTrigger value="credentials">{t("tutors.profile.tabs.credentials")}</TabsTrigger>
        </TabsList>

        <TabsContent value="about" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>{t("tutors.profile.about.presentation")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{tutor.description}</p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>{t("tutors.profile.about.specialties")}</CardTitle>
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
                <CardTitle>{t("tutors.profile.about.languages")}</CardTitle>
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
                  <p className="text-muted-foreground">{t("tutors.profile.about.videoAvailable")}</p>
                  <Button variant="outline">
                    <Video className="h-4 w-4 mr-2" />
                    {t("tutors.profile.about.watchVideo")}
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
                  <p className="text-sm text-muted-foreground">{t("tutors.profile.reviews.basedOn")} {tutor.reviewCount} {t("tutors.profile.reviews.reviews")}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>{t("tutors.profile.reviews.distribution")}</CardTitle>
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
              <CardTitle>{t("tutors.profile.availability.thisWeek")}</CardTitle>
              <CardDescription>{t("tutors.profile.availability.timezone")}</CardDescription>
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
              <CardTitle>{t("tutors.profile.credentials.verifications")}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm">{t("tutors.profile.credentials.identityVerified")}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm">{t("tutors.profile.credentials.diplomasVerified")}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm">{t("tutors.profile.credentials.backgroundCheck")}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm">{t("tutors.profile.credentials.references")}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default TutorProfile
