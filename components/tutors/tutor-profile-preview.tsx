"use client"

import { useState } from "react"
import { useI18n } from "@/contexts/i18n-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Star, 
  MapPin, 
  Clock, 
  BookOpen, 
  Users, 
  Award, 
  Calendar,
  MessageCircle,
  Video,
  FileText,
  CheckCircle,
  Globe,
  GraduationCap,
  Languages
} from "lucide-react"

interface TutorProfilePreviewProps {
  tutorId: string
}

export function TutorProfilePreview({ tutorId }: TutorProfilePreviewProps) {
  const { t } = useI18n()
  const [activeTab, setActiveTab] = useState("about")

  // Mock data - normalement récupéré via API avec tutorId
  const tutorData = {
    id: tutorId,
    name: "Prof. Jean Martin",
    avatar: "/placeholder.svg?height=120&width=120",
    rating: 4.9,
    reviewCount: 127,
    totalLessons: 850,
    experience: 8,
    responseTime: "2h",
    location: "Paris, France",
    languages: ["Français", "Anglais", "Espagnol"],
    timezone: "Europe/Paris",
    isVerified: true,
    isOnline: true,
    subjects: [
      { name: "Mathématiques", levels: ["Collège", "Lycée", "Université"], rate: 35 },
      { name: "Physique", levels: ["Lycée", "Université"], rate: 40 },
      { name: "Chimie", levels: ["Lycée"], rate: 38 }
    ],
    bio: "Professeur agrégé de mathématiques avec 8 ans d'expérience dans l'enseignement. Passionné par la transmission du savoir et l'accompagnement personnalisé des étudiants. Spécialisé dans la préparation aux examens et le soutien scolaire.",
    specialties: [
      "Préparation aux examens",
      "Soutien scolaire personnalisé", 
      "Méthodologie de travail",
      "Cours de rattrapage"
    ],
    education: [
      {
        degree: "Agrégation de Mathématiques",
        institution: "École Normale Supérieure",
        year: "2016",
        verified: true
      },
      {
        degree: "Master en Mathématiques Appliquées",
        institution: "Université Pierre et Marie Curie",
        year: "2014",
        verified: true
      }
    ],
    certifications: [
      {
        name: "Certification pédagogique numérique",
        issuer: "Ministère de l'Éducation",
        year: "2022",
        verified: true
      },
      {
        name: "Formation aux troubles de l'apprentissage",
        issuer: "INSPE",
        year: "2021",
        verified: true
      }
    ],
    verifications: [
      { type: "Identité", verified: true },
      { type: "Diplômes", verified: true },
      { type: "Casier judiciaire", verified: true },
      { type: "Références professionnelles", verified: true }
    ],
    availability: {
      status: "available",
      nextSlot: "Aujourd'hui à 14h00",
      weeklyHours: 25
    },
    pricing: {
      baseRate: 35,
      groupDiscount: 15,
      packageDiscount: 10
    }
  }

  const reviews = [
    {
      id: "1",
      studentName: "Marie L.",
      rating: 5,
      date: "Il y a 2 jours",
      comment: "Excellent professeur ! Très pédagogue et patient. Mes notes en maths ont considérablement progressé.",
      subject: "Mathématiques",
      verified: true
    },
    {
      id: "2", 
      studentName: "Thomas B.",
      rating: 5,
      date: "Il y a 1 semaine",
      comment: "Prof Jean m'a aidé à décrocher mon bac S avec mention. Je le recommande vivement !",
      subject: "Physique",
      verified: true
    },
    {
      id: "3",
      studentName: "Sophie M.",
      rating: 4,
      date: "Il y a 2 semaines", 
      comment: "Très bon suivi, explications claires. Parfait pour la préparation aux concours.",
      subject: "Mathématiques",
      verified: true
    }
  ]

  const ratingDistribution = [
    { stars: 5, count: 89, percentage: 70 },
    { stars: 4, count: 25, percentage: 20 },
    { stars: 3, count: 10, percentage: 8 },
    { stars: 2, count: 2, percentage: 1.5 },
    { stars: 1, count: 1, percentage: 0.5 }
  ]

  return (
    <div className="space-y-8">
      {/* Header avec info tuteur */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Avatar et infos principales */}
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
              <div className="relative">
                <Avatar className="h-32 w-32">
                  <AvatarImage src={tutorData.avatar} />
                  <AvatarFallback className="text-2xl">
                    {tutorData.name.split(" ").map(n => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                {tutorData.isOnline && (
                  <div className="absolute -bottom-1 -right-1 h-6 w-6 bg-green-500 border-2 border-white rounded-full flex items-center justify-center">
                    <div className="h-2 w-2 bg-white rounded-full"></div>
                  </div>
                )}
              </div>
              
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                  <h1 className="font-playfair text-3xl font-bold">{tutorData.name}</h1>
                  {tutorData.isVerified && (
                    <CheckCircle className="h-6 w-6 text-blue-500" />
                  )}
                </div>
                
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{tutorData.rating}</span>
                    <span>({tutorData.reviewCount} avis)</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{tutorData.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>Répond en {tutorData.responseTime}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-4">
                  {tutorData.subjects.map((subject, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {subject.name} - {subject.rate}€/h
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    <Users className="h-3 w-3 mr-1" />
                    {tutorData.totalLessons} cours donnés
                  </Badge>
                  <Badge variant="outline" className="text-blue-600 border-blue-600">
                    <Award className="h-3 w-3 mr-1" />
                    {tutorData.experience} ans d'expérience
                  </Badge>
                  <Badge variant="outline" className="text-purple-600 border-purple-600">
                    <Languages className="h-3 w-3 mr-1" />
                    {tutorData.languages.join(", ")}
                  </Badge>
                </div>
              </div>
            </div>

            {/* Statistiques et actions */}
            <div className="flex-1 space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">{tutorData.rating}</div>
                  <div className="text-sm text-muted-foreground">Note moyenne</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">{tutorData.totalLessons}</div>
                  <div className="text-sm text-muted-foreground">Cours donnés</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">{tutorData.experience}</div>
                  <div className="text-sm text-muted-foreground">Années d'exp.</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">{tutorData.responseTime}</div>
                  <div className="text-sm text-muted-foreground">Temps de réponse</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <div className={`h-2 w-2 rounded-full ${tutorData.availability.status === 'available' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                  <span className="font-medium">
                    {tutorData.availability.status === 'available' ? 'Disponible' : 'Occupé'}
                  </span>
                  <span className="text-muted-foreground">
                    - Prochain créneau: {tutorData.availability.nextSlot}
                  </span>
                </div>
                
                <div className="flex gap-3">
                  <Button className="flex-1">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Réserver un cours
                  </Button>
                  <Button variant="outline">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Contacter
                  </Button>
                  <Button variant="outline">
                    <Video className="h-4 w-4 mr-2" />
                    Cours d'essai
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Onglets de contenu */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="about">À propos</TabsTrigger>
          <TabsTrigger value="reviews">Avis ({tutorData.reviewCount})</TabsTrigger>
          <TabsTrigger value="availability">Disponibilités</TabsTrigger>
          <TabsTrigger value="qualifications">Qualifications</TabsTrigger>
        </TabsList>

        {/* Onglet À propos */}
        <TabsContent value="about" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Présentation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{tutorData.bio}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Spécialités</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {tutorData.specialties.map((specialty, index) => (
                  <Badge key={index} variant="outline">
                    {specialty}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Matières enseignées</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {tutorData.subjects.map((subject, index) => (
                <div key={index} className="flex justify-between items-center p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium">{subject.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      Niveaux: {subject.levels.join(", ")}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-primary">{subject.rate}€/h</div>
                    <div className="text-sm text-muted-foreground">par heure</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Onglet Avis */}
        <TabsContent value="reviews" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Évaluations</CardTitle>
              <CardDescription>
                Basé sur {tutorData.reviewCount} avis vérifiés
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary">{tutorData.rating}</div>
                    <div className="flex justify-center space-x-1 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star} 
                          className={`h-5 w-5 ${star <= Math.floor(tutorData.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Note moyenne sur {tutorData.reviewCount} avis
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {ratingDistribution.map((dist) => (
                    <div key={dist.stars} className="flex items-center space-x-2 text-sm">
                      <span className="w-8">{dist.stars}★</span>
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-yellow-400 h-2 rounded-full" 
                          style={{ width: `${dist.percentage}%` }}
                        ></div>
                      </div>
                      <span className="w-8 text-muted-foreground">{dist.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            {reviews.map((review) => (
              <Card key={review.id}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback>{review.studentName[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="font-medium">{review.studentName}</span>
                          {review.verified && (
                            <CheckCircle className="h-4 w-4 text-blue-500" />
                          )}
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <span>{review.date}</span>
                          <span>•</span>
                          <span>{review.subject}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star} 
                          className={`h-4 w-4 ${star <= review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground">{review.comment}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Onglet Disponibilités */}
        <TabsContent value="availability" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Créneaux disponibles
              </CardTitle>
              <CardDescription>
                Consultez les créneaux disponibles et réservez directement
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Calendrier de réservation</h3>
                <p className="text-muted-foreground mb-4">
                  Consultez les disponibilités en temps réel
                </p>
                <Button>
                  <Calendar className="h-4 w-4 mr-2" />
                  Voir le calendrier complet
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Onglet Qualifications */}
        <TabsContent value="qualifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                Formation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {tutorData.education.map((edu, index) => (
                <div key={index} className="flex justify-between items-center p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium">{edu.degree}</h4>
                    <p className="text-sm text-muted-foreground">{edu.institution}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-muted-foreground">{edu.year}</span>
                    {edu.verified && (
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {tutorData.certifications.map((cert, index) => (
                <div key={index} className="flex justify-between items-center p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium">{cert.name}</h4>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-muted-foreground">{cert.year}</span>
                    {cert.verified && (
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                Vérifications effectuées
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-3">
                {tutorData.verifications.map((verification, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <span className="font-medium">{verification.type}</span>
                    {verification.verified ? (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    ) : (
                      <div className="h-5 w-5 border-2 border-gray-300 rounded-full"></div>
                    )}
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
