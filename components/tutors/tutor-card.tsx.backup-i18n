"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, MapPin, Clock, Euro, CheckCircle, Calendar } from "lucide-react"
import Link from "next/link"

interface TutorCardProps {
  tutor: {
    id: number
    name: string
    avatar: string
    subjects: string[]
    level: string[]
    rating: number
    reviewCount: number
    hourlyRate: number
    location: string
    languages: string[]
    experience: number
    description: string
    availability: string
    verified: boolean
    responseTime: string
    completedLessons: number
  }
}

export function TutorCard({ tutor }: TutorCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="pb-4">
        <div className="flex items-start space-x-4">
          <div className="relative">
            <Avatar className="h-16 w-16">
              <AvatarImage src={tutor.avatar || "/placeholder.svg"} alt={tutor.name} />
              <AvatarFallback>
                {tutor.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            {tutor.verified && (
              <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
                <CheckCircle className="h-3 w-3 text-white" />
              </div>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <CardTitle className="text-lg truncate">{tutor.name}</CardTitle>
            <div className="flex items-center space-x-1 mt-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium text-sm">{tutor.rating}</span>
              <span className="text-xs text-muted-foreground">({tutor.reviewCount})</span>
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <Badge variant={tutor.availability === "Disponible" ? "default" : "secondary"} className="text-xs">
                {tutor.availability}
              </Badge>
              {tutor.verified && (
                <Badge variant="outline" className="text-xs">
                  Vérifié
                </Badge>
              )}
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Subjects */}
        <div>
          <div className="flex flex-wrap gap-1">
            {tutor.subjects.map((subject) => (
              <Badge key={subject} variant="secondary" className="text-xs">
                {subject}
              </Badge>
            ))}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2">{tutor.description}</p>

        {/* Details */}
        <div className="space-y-2 text-xs text-muted-foreground">
          <div className="flex items-center space-x-2">
            <MapPin className="h-3 w-3" />
            <span>{tutor.location}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="h-3 w-3" />
            <span>Répond en {tutor.responseTime}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>{tutor.experience} ans d'expérience</span>
            <span>•</span>
            <span>{tutor.completedLessons} cours donnés</span>
          </div>
        </div>

        {/* Languages */}
        <div className="flex flex-wrap gap-1">
          {tutor.languages.map((language) => (
            <Badge key={language} variant="outline" className="text-xs">
              {language}
            </Badge>
          ))}
        </div>

        {/* Price and Actions */}
        <div className="flex items-center justify-between pt-4 border-t">
          <div className="flex items-center space-x-1">
            <Euro className="h-4 w-4 text-primary" />
            <span className="font-bold text-lg">{tutor.hourlyRate}€</span>
            <span className="text-sm text-muted-foreground">/heure</span>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" asChild>
              <Link href={`/tutors/${tutor.id}`}>Voir profil</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href={`/tutors/${tutor.id}/book`}>
                <Calendar className="h-4 w-4 mr-1" />
                Réserver
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
