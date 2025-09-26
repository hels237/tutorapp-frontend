"use client"

import { useState } from "react"
import { useI18n } from "@/contexts/i18n-context"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  Star, 
  ArrowLeft, 
  Send, 
  BookOpen, 
  Calendar, 
  Clock, 
  User,
  CheckCircle,
  MessageCircle,
  ThumbsUp,
  ThumbsDown,
  Target,
  TrendingUp
} from "lucide-react"

interface StudentLessonRatingProps {
  lessonId: string
}

export function StudentLessonRating({ lessonId }: StudentLessonRatingProps) {
  const { t } = useI18n()
  const router = useRouter()
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const [feedback, setFeedback] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Mock data - Détails du cours à noter
  const lessonData = {
    id: lessonId,
    subject: "Mathématiques",
    topic: "Fonctions exponentielles et logarithmiques",
    tutor: {
      name: "Prof. Jean Martin",
      avatar: "/placeholder.svg?height=80&width=80",
      specialties: ["Mathématiques", "Physique"],
      experience: "5 ans"
    },
    date: "2024-01-15",
    time: "14:00",
    duration: "1h30",
    type: "individual",
    price: 35,
    status: "completed",
    materials: [
      "Livre de mathématiques - Chapitre 8",
      "Exercices supplémentaires",
      "Fiche de révision"
    ],
    objectives: [
      "Comprendre les propriétés des fonctions exponentielles",
      "Résoudre des équations exponentielles",
      "Applications pratiques des logarithmes"
    ],
    homework: "Exercices 15 à 20 page 142 pour le prochain cours"
  }

  const handleRatingClick = (value: number) => {
    setRating(value)
  }

  const handleSubmit = async () => {
    if (rating === 0) {
      alert("Veuillez donner une note avant de soumettre")
      return
    }

    setIsSubmitting(true)
    
    // Simulation d'envoi de la notation
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      const ratingData = {
        lessonId,
        rating,
        feedback,
        submittedAt: new Date().toISOString()
      }
      
      console.log("Notation soumise:", ratingData)
      setIsSubmitted(true)
      
      // Redirection après 2 secondes
      setTimeout(() => {
        router.push("/dashboard/student?tab=lessons")
      }, 2000)
      
    } catch (error) {
      console.error("Erreur lors de la soumission:", error)
      alert("Erreur lors de la soumission. Veuillez réessayer.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const getRatingText = (rating: number) => {
    switch (rating) {
      case 1: return "Très insatisfait"
      case 2: return "Insatisfait"
      case 3: return "Correct"
      case 4: return "Satisfait"
      case 5: return "Très satisfait"
      default: return "Cliquez pour noter"
    }
  }

  const getRatingColor = (rating: number) => {
    if (rating <= 2) return "text-red-500"
    if (rating === 3) return "text-yellow-500"
    return "text-green-500"
  }

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto space-y-8">
        <Card className="text-center py-12">
          <CardContent>
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Merci pour votre évaluation !</h2>
            <p className="text-muted-foreground mb-6">
              Votre note et commentaire ont été envoyés à {lessonData.tutor.name}
            </p>
            <div className="flex items-center justify-center gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-6 w-6 ${
                    i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
              <span className="ml-2 font-medium">{rating}/5</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Redirection vers vos cours dans quelques secondes...
            </p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm" asChild>
          <Link href="/dashboard/student?tab=lessons">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour aux cours
          </Link>
        </Button>
        <div>
          <h1 className="font-playfair text-3xl font-bold">Évaluer le cours</h1>
          <p className="text-muted-foreground">
            Partagez votre expérience pour aider à améliorer la qualité des cours
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Détails du cours */}
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Détails du cours
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg">{lessonData.subject}</h3>
                <p className="text-muted-foreground">{lessonData.topic}</p>
              </div>

              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={lessonData.tutor.avatar} />
                  <AvatarFallback>
                    {lessonData.tutor.name.split(" ").map(n => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{lessonData.tutor.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {lessonData.tutor.experience} d'expérience
                  </p>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  {new Date(lessonData.date).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  {lessonData.time} • {lessonData.duration}
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  {lessonData.type === "individual" ? "Cours individuel" : "Cours en groupe"}
                </div>
              </div>

              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                <CheckCircle className="h-3 w-3 mr-1" />
                Cours terminé
              </Badge>
            </CardContent>
          </Card>

          {/* Objectifs du cours */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Objectifs du cours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {lessonData.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    {objective}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Formulaire de notation */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                Votre évaluation
              </CardTitle>
              <CardDescription>
                Votre avis nous aide à maintenir la qualité de nos cours
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Système de notation par étoiles */}
              <div className="text-center space-y-4">
                <div>
                  <Label className="text-base font-medium">Note générale</Label>
                  <p className="text-sm text-muted-foreground">
                    Cliquez sur les étoiles pour noter le cours
                  </p>
                </div>
                
                <div className="flex items-center justify-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      className="transition-transform hover:scale-110"
                      onClick={() => handleRatingClick(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                    >
                      <Star
                        className={`h-10 w-10 ${
                          star <= (hoverRating || rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300 hover:text-yellow-200"
                        }`}
                      />
                    </button>
                  ))}
                </div>

                <div className="space-y-1">
                  <p className={`font-medium ${getRatingColor(hoverRating || rating)}`}>
                    {getRatingText(hoverRating || rating)}
                  </p>
                  {rating > 0 && (
                    <p className="text-sm text-muted-foreground">
                      {rating}/5 étoiles
                    </p>
                  )}
                </div>
              </div>

              {/* Commentaire */}
              <div className="space-y-2">
                <Label htmlFor="feedback">Commentaire (optionnel)</Label>
                <Textarea
                  id="feedback"
                  placeholder="Partagez votre expérience : qu'avez-vous appris ? Le tuteur était-il clair ? Recommanderiez-vous ce cours ?"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  rows={4}
                  className="resize-none"
                />
                <p className="text-xs text-muted-foreground">
                  Votre commentaire sera visible par le tuteur et pourra aider d'autres étudiants
                </p>
              </div>

              {/* Questions rapides */}
              <div className="grid md:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="text-center">
                  <p className="text-sm font-medium mb-2">Le cours était-il utile ?</p>
                  <div className="flex justify-center gap-2">
                    <Button variant="outline" size="sm">
                      <ThumbsUp className="h-4 w-4 mr-1" />
                      Oui
                    </Button>
                    <Button variant="outline" size="sm">
                      <ThumbsDown className="h-4 w-4 mr-1" />
                      Non
                    </Button>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium mb-2">Recommanderiez-vous ce tuteur ?</p>
                  <div className="flex justify-center gap-2">
                    <Button variant="outline" size="sm">
                      <ThumbsUp className="h-4 w-4 mr-1" />
                      Oui
                    </Button>
                    <Button variant="outline" size="sm">
                      <ThumbsDown className="h-4 w-4 mr-1" />
                      Non
                    </Button>
                  </div>
                </div>
              </div>

              {/* Matériaux et devoirs */}
              {lessonData.materials.length > 0 && (
                <div className="space-y-2">
                  <Label>Matériaux utilisés</Label>
                  <div className="space-y-1">
                    {lessonData.materials.map((material, index) => (
                      <div key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                        <BookOpen className="h-3 w-3" />
                        {material}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {lessonData.homework && (
                <div className="space-y-2">
                  <Label>Devoirs donnés</Label>
                  <p className="text-sm text-muted-foreground p-3 bg-blue-50 rounded border-l-4 border-blue-200">
                    {lessonData.homework}
                  </p>
                </div>
              )}

              {/* Boutons d'action */}
              <div className="flex gap-3 pt-4">
                <Button 
                  onClick={handleSubmit}
                  disabled={rating === 0 || isSubmitting}
                  className="flex-1"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Envoyer l'évaluation
                    </>
                  )}
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/dashboard/student?tab=lessons">
                    Passer
                  </Link>
                </Button>
              </div>

              <p className="text-xs text-muted-foreground text-center">
                Votre évaluation nous aide à améliorer la qualité de nos services
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
