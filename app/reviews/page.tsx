"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, ThumbsUp, Flag } from "lucide-react"

interface Review {
  id: string
  studentName: string
  studentAvatar: string
  tutorName: string
  subject: string
  rating: number
  comment: string
  date: string
  verified: boolean
  helpful: number
  status: "published" | "pending" | "rejected"
}

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: "1",
      studentName: "Marie Dupont",
      studentAvatar: "/avatars/marie.jpg",
      tutorName: "Pierre Martin",
      subject: "Mathématiques",
      rating: 5,
      comment:
        "Excellent professeur ! Pierre explique très bien les concepts complexes et s'adapte parfaitement à mon rythme. Grâce à lui, j'ai enfin compris les intégrales. Je le recommande vivement !",
      date: "2024-01-15",
      verified: true,
      helpful: 12,
      status: "published",
    },
    {
      id: "2",
      studentName: "Thomas Leroy",
      studentAvatar: "/avatars/thomas.jpg",
      tutorName: "Sophie Dubois",
      subject: "Physique-Chimie",
      rating: 4,
      comment:
        "Très bonne professeure, patiente et pédagogue. Les cours sont bien structurés et les exercices pratiques. Juste un petit bémol sur la ponctualité parfois.",
      date: "2024-01-12",
      verified: true,
      helpful: 8,
      status: "published",
    },
    {
      id: "3",
      studentName: "Emma Moreau",
      studentAvatar: "/avatars/emma.jpg",
      tutorName: "Jean Rousseau",
      subject: "Français",
      rating: 5,
      comment:
        "Professeur exceptionnel ! Jean m'a aidée à améliorer considérablement ma dissertation et mon analyse littéraire. Ses conseils sont précieux et ses corrections très détaillées.",
      date: "2024-01-10",
      verified: true,
      helpful: 15,
      status: "published",
    },
    {
      id: "4",
      studentName: "Lucas Bernard",
      studentAvatar: "/avatars/lucas.jpg",
      tutorName: "Marie Dubois",
      subject: "Anglais",
      rating: 2,
      comment: "Cours pas terrible, manque de préparation visible.",
      date: "2024-01-08",
      verified: false,
      helpful: 2,
      status: "pending",
    },
  ])

  const [filter, setFilter] = useState("all")
  const [newReview, setNewReview] = useState({
    rating: 0,
    comment: "",
  })

  const renderStars = (rating: number, interactive = false, onRatingChange?: (rating: number) => void) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-5 w-5 ${
              star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
            } ${interactive ? "cursor-pointer hover:text-yellow-400" : ""}`}
            onClick={() => interactive && onRatingChange && onRatingChange(star)}
          />
        ))}
      </div>
    )
  }

  const filteredReviews = reviews.filter((review) => {
    if (filter === "all") return true
    return review.status === filter
  })

  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length

  const approveReview = (id: string) => {
    setReviews(reviews.map((review) => (review.id === id ? { ...review, status: "published" as const } : review)))
  }

  const rejectReview = (id: string) => {
    setReviews(reviews.map((review) => (review.id === id ? { ...review, status: "rejected" as const } : review)))
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Évaluations & Commentaires</h1>
          <p className="text-gray-600">Consultez les avis des étudiants sur les tuteurs</p>
        </div>

        {/* Statistiques */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">{averageRating.toFixed(1)}</div>
              <div className="flex justify-center mb-2">{renderStars(Math.round(averageRating))}</div>
              <p className="text-sm text-gray-600">Note moyenne</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{reviews.length}</div>
              <p className="text-sm text-gray-600">Total des avis</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">{reviews.filter((r) => r.verified).length}</div>
              <p className="text-sm text-gray-600">Avis vérifiés</p>
            </CardContent>
          </Card>
        </div>

        {/* Filtres */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex gap-2 flex-wrap">
              <Button variant={filter === "all" ? "default" : "outline"} size="sm" onClick={() => setFilter("all")}>
                Tous ({reviews.length})
              </Button>
              <Button
                variant={filter === "published" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("published")}
              >
                Publiés ({reviews.filter((r) => r.status === "published").length})
              </Button>
              <Button
                variant={filter === "pending" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("pending")}
              >
                En attente ({reviews.filter((r) => r.status === "pending").length})
              </Button>
              <Button
                variant={filter === "rejected" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("rejected")}
              >
                Rejetés ({reviews.filter((r) => r.status === "rejected").length})
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Ajouter un avis */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Laisser un avis</CardTitle>
            <CardDescription>Partagez votre expérience avec un tuteur</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Note</label>
              {renderStars(newReview.rating, true, (rating) => setNewReview({ ...newReview, rating }))}
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Commentaire</label>
              <Textarea
                placeholder="Décrivez votre expérience avec le tuteur..."
                value={newReview.comment}
                onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                rows={4}
              />
            </div>
            <Button disabled={!newReview.rating || !newReview.comment.trim()}>Publier l'avis</Button>
          </CardContent>
        </Card>

        {/* Liste des avis */}
        <div className="space-y-4">
          {filteredReviews.map((review) => (
            <Card key={review.id}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Avatar>
                    <AvatarImage src={review.studentAvatar || "/placeholder.svg"} alt={review.studentName} />
                    <AvatarFallback>{review.studentName.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold">{review.studentName}</h3>
                      {review.verified && <Badge className="bg-green-100 text-green-800 text-xs">Vérifié</Badge>}
                      <Badge
                        variant="outline"
                        className={`text-xs ${
                          review.status === "published"
                            ? "bg-green-50"
                            : review.status === "pending"
                              ? "bg-yellow-50"
                              : "bg-red-50"
                        }`}
                      >
                        {review.status === "published"
                          ? "Publié"
                          : review.status === "pending"
                            ? "En attente"
                            : "Rejeté"}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      {renderStars(review.rating)}
                      <span className="text-sm text-gray-600">
                        • {review.subject} avec {review.tutorName}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-3">{review.comment}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>{new Date(review.date).toLocaleDateString("fr-FR")}</span>
                        <button className="flex items-center gap-1 hover:text-emerald-600">
                          <ThumbsUp className="h-4 w-4" />
                          Utile ({review.helpful})
                        </button>
                        <button className="flex items-center gap-1 hover:text-red-600">
                          <Flag className="h-4 w-4" />
                          Signaler
                        </button>
                      </div>
                      {review.status === "pending" && (
                        <div className="flex gap-2">
                          <Button size="sm" onClick={() => approveReview(review.id)}>
                            Approuver
                          </Button>
                          <Button size="sm" variant="outline" onClick={() => rejectReview(review.id)}>
                            Rejeter
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
