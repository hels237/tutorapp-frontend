"use client"

import { useState } from "react"
import { useI18n } from "@/contexts/i18n-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  Calendar, 
  Clock, 
  Star,
  MapPin,
  BookOpen,
  Users,
  ChevronLeft,
  ChevronRight
} from "lucide-react"

interface TutorPublicAvailabilityProps {
  tutorId: string
}

interface TimeSlot {
  id: string
  day: string
  startTime: string
  endTime: string
  isAvailable: boolean
  availableSpots: number
  maxStudents: number
  subjects: string[]
}

export function TutorPublicAvailability({ tutorId }: TutorPublicAvailabilityProps) {
  const { t } = useI18n()
  const [selectedWeek, setSelectedWeek] = useState(new Date())
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null)

  // Mock data - normalement récupéré via API avec tutorId
  const tutorData = {
    id: tutorId,
    name: "Prof. Jean Martin",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 4.9,
    reviewCount: 127,
    subjects: ["Mathématiques", "Physique"],
    location: "Paris, France",
    experience: 8,
    responseTime: "2h",
    bio: "Professeur agrégé de mathématiques avec 8 ans d'expérience dans l'enseignement."
  }

  // Mock data pour les créneaux disponibles (vue publique)
  const availableSlots: TimeSlot[] = [
    {
      id: "1",
      day: "monday",
      startTime: "09:00",
      endTime: "12:00",
      isAvailable: true,
      availableSpots: 2,
      maxStudents: 3,
      subjects: ["mathematics", "physics"]
    },
    {
      id: "2", 
      day: "monday",
      startTime: "14:00",
      endTime: "18:00",
      isAvailable: true,
      availableSpots: 1,
      maxStudents: 2,
      subjects: ["mathematics"]
    },
    {
      id: "3",
      day: "tuesday",
      startTime: "10:00",
      endTime: "16:00",
      isAvailable: true,
      availableSpots: 4,
      maxStudents: 4,
      subjects: ["physics"]
    },
    {
      id: "4",
      day: "wednesday",
      startTime: "09:00",
      endTime: "17:00",
      isAvailable: false, // Complet
      availableSpots: 0,
      maxStudents: 5,
      subjects: ["mathematics", "physics"]
    },
    {
      id: "5",
      day: "thursday",
      startTime: "13:00",
      endTime: "17:00",
      isAvailable: true,
      availableSpots: 3,
      maxStudents: 3,
      subjects: ["mathematics", "physics"]
    },
    {
      id: "6",
      day: "friday",
      startTime: "09:00",
      endTime: "15:00",
      isAvailable: true,
      availableSpots: 2,
      maxStudents: 4,
      subjects: ["physics"]
    }
  ]

  const daysOfWeek = [
    { key: "monday", label: "Lundi", short: "Lun" },
    { key: "tuesday", label: "Mardi", short: "Mar" },
    { key: "wednesday", label: "Mercredi", short: "Mer" },
    { key: "thursday", label: "Jeudi", short: "Jeu" },
    { key: "friday", label: "Vendredi", short: "Ven" },
    { key: "saturday", label: "Samedi", short: "Sam" },
    { key: "sunday", label: "Dimanche", short: "Dim" }
  ]

  const getWeekDates = (startDate: Date) => {
    const week = []
    const start = new Date(startDate)
    start.setDate(start.getDate() - start.getDay() + 1) // Commencer le lundi
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(start)
      date.setDate(start.getDate() + i)
      week.push(date)
    }
    return week
  }

  const weekDates = getWeekDates(selectedWeek)

  const previousWeek = () => {
    const newDate = new Date(selectedWeek)
    newDate.setDate(newDate.getDate() - 7)
    setSelectedWeek(newDate)
  }

  const nextWeek = () => {
    const newDate = new Date(selectedWeek)
    newDate.setDate(newDate.getDate() + 7)
    setSelectedWeek(newDate)
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('fr-FR', { 
      day: 'numeric', 
      month: 'short' 
    })
  }

  const bookSlot = (slotId: string) => {
    // Ici on redirigerait vers la page de réservation
    console.log("Réserver le créneau:", slotId)
    // Exemple: router.push(`/booking/${tutorId}/${slotId}`)
  }

  return (
    <div className="space-y-8">
      {/* Header avec info tuteur */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex items-center space-x-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src={tutorData.avatar} />
                <AvatarFallback>
                  {tutorData.name.split(" ").map(n => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="font-playfair text-2xl font-bold">{tutorData.name}</h1>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{tutorData.rating}</span>
                    <span>({tutorData.reviewCount} avis)</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{tutorData.location}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {tutorData.subjects.map((subject, index) => (
                    <Badge key={index} variant="secondary">
                      {subject}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">{tutorData.experience}</div>
                <div className="text-sm text-muted-foreground">ans d'expérience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">{tutorData.responseTime}</div>
                <div className="text-sm text-muted-foreground">temps de réponse</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">
                  {availableSlots.filter(s => s.isAvailable).length}
                </div>
                <div className="text-sm text-muted-foreground">créneaux disponibles</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Calendrier des disponibilités */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Disponibilités
              </CardTitle>
              <CardDescription>
                Choisissez un créneau pour réserver votre cours
              </CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={previousWeek}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="font-medium min-w-[200px] text-center">
                {formatDate(weekDates[0])} - {formatDate(weekDates[6])} {weekDates[0].getFullYear()}
              </span>
              <Button variant="outline" size="sm" onClick={nextWeek}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Grille calendrier */}
          <div className="grid grid-cols-8 gap-2">
            {/* Header avec jours */}
            <div className="p-2"></div>
            {daysOfWeek.map((day, index) => (
              <div key={day.key} className="p-2 text-center">
                <div className="font-medium">{day.short}</div>
                <div className="text-sm text-muted-foreground">
                  {formatDate(weekDates[index])}
                </div>
              </div>
            ))}

            {/* Créneaux horaires */}
            {Array.from({ length: 12 }, (_, hour) => {
              const timeSlot = `${(hour + 8).toString().padStart(2, '0')}:00`
              return (
                <div key={hour} className="contents">
                  <div className="p-2 text-sm text-muted-foreground border-r">
                    {timeSlot}
                  </div>
                  {daysOfWeek.map((day) => {
                    const daySlots = availableSlots.filter(slot => slot.day === day.key)
                    
                    return (
                      <div key={`${day.key}-${hour}`} className="p-1 min-h-[60px] border border-gray-100">
                        {daySlots.map((slot) => {
                          const startHour = parseInt(slot.startTime.split(':')[0])
                          const endHour = parseInt(slot.endTime.split(':')[0])
                          if (hour + 8 >= startHour && hour + 8 < endHour) {
                            return (
                              <div
                                key={slot.id}
                                className={`text-xs p-2 rounded mb-1 cursor-pointer transition-colors ${
                                  slot.isAvailable 
                                    ? 'bg-green-100 text-green-800 hover:bg-green-200' 
                                    : 'bg-red-100 text-red-800'
                                } ${selectedSlot === slot.id ? 'ring-2 ring-primary' : ''}`}
                                onClick={() => slot.isAvailable && setSelectedSlot(slot.id)}
                              >
                                <div className="font-medium">
                                  {slot.startTime} - {slot.endTime}
                                </div>
                                <div className="flex items-center justify-between mt-1">
                                  <span>
                                    {slot.isAvailable 
                                      ? `${slot.availableSpots} places` 
                                      : 'Complet'
                                    }
                                  </span>
                                  {slot.isAvailable && (
                                    <Button 
                                      size="sm" 
                                      className="h-5 text-xs px-2"
                                      onClick={(e) => {
                                        e.stopPropagation()
                                        bookSlot(slot.id)
                                      }}
                                    >
                                      Réserver
                                    </Button>
                                  )}
                                </div>
                              </div>
                            )
                          }
                          return null
                        })}
                      </div>
                    )
                  })}
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Détails du créneau sélectionné */}
      {selectedSlot && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Détails du créneau
            </CardTitle>
          </CardHeader>
          <CardContent>
            {(() => {
              const slot = availableSlots.find(s => s.id === selectedSlot)
              if (!slot) return null
              
              return (
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div>
                        <span className="font-medium">Jour : </span>
                        {daysOfWeek.find(d => d.key === slot.day)?.label}
                      </div>
                      <div>
                        <span className="font-medium">Horaire : </span>
                        {slot.startTime} - {slot.endTime}
                      </div>
                      <div>
                        <span className="font-medium">Places disponibles : </span>
                        {slot.availableSpots} / {slot.maxStudents}
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <span className="font-medium">Matières : </span>
                        {slot.subjects.join(", ")}
                      </div>
                      <div>
                        <span className="font-medium">Format : </span>
                        Cours en groupe (max {slot.maxStudents} étudiants)
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 pt-4 border-t">
                    <Button 
                      className="flex-1"
                      onClick={() => bookSlot(slot.id)}
                    >
                      <BookOpen className="h-4 w-4 mr-2" />
                      Réserver ce créneau
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => setSelectedSlot(null)}
                    >
                      Annuler
                    </Button>
                  </div>
                </div>
              )
            })()}
          </CardContent>
        </Card>
      )}

      {/* Légende */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-100 border border-green-200 rounded"></div>
              <span>Disponible</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-100 border border-red-200 rounded"></div>
              <span>Complet</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gray-100 border border-gray-200 rounded"></div>
              <span>Indisponible</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
