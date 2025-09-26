"use client"

import { useState } from "react"
import { useI18n } from "@/contexts/i18n-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { 
  Calendar, 
  Clock, 
  Plus, 
  X, 
  Save,
  Eye,
  Edit3,
  CalendarDays,
  Timer,
  Users,
  BookOpen
} from "lucide-react"
import Link from "next/link"

interface TimeSlot {
  id: string
  day: string
  startTime: string
  endTime: string
  isRecurring: boolean
  subjects?: string[]
  maxStudents?: number
  isAvailable: boolean
}

interface BookedSlot {
  id: string
  studentName: string
  subject: string
  date: string
  time: string
  duration: number
  status: "confirmed" | "pending" | "cancelled"
}

export function TutorAvailabilityManagement() {
  const { t } = useI18n()
  const [activeTab, setActiveTab] = useState("calendar")
  const [selectedWeek, setSelectedWeek] = useState(new Date())
  const [editingSlot, setEditingSlot] = useState<string | null>(null)
  const [notification, setNotification] = useState<{
    type: "success" | "error" | "info"
    message: string
  } | null>(null)

  // Mock data pour les créneaux disponibles
  const [availableSlots, setAvailableSlots] = useState<TimeSlot[]>([
    {
      id: "1",
      day: "monday",
      startTime: "09:00",
      endTime: "12:00",
      isRecurring: true,
      subjects: ["mathematics", "physics"],
      maxStudents: 3,
      isAvailable: true
    },
    {
      id: "2", 
      day: "monday",
      startTime: "14:00",
      endTime: "18:00",
      isRecurring: true,
      subjects: ["mathematics"],
      maxStudents: 2,
      isAvailable: true
    },
    {
      id: "3",
      day: "tuesday",
      startTime: "10:00",
      endTime: "16:00",
      isRecurring: true,
      subjects: ["physics"],
      maxStudents: 4,
      isAvailable: true
    },
    {
      id: "4",
      day: "wednesday",
      startTime: "09:00",
      endTime: "17:00",
      isRecurring: true,
      subjects: ["mathematics", "physics"],
      maxStudents: 5,
      isAvailable: false // Indisponible cette semaine
    }
  ])

  // Mock data pour les réservations
  const [bookedSlots, setBookedSlots] = useState<BookedSlot[]>([
    {
      id: "1",
      studentName: "Marie Dubois",
      subject: "Mathématiques",
      date: "2024-01-15",
      time: "10:00",
      duration: 60,
      status: "confirmed"
    },
    {
      id: "2",
      studentName: "Pierre Leroy",
      subject: "Physique",
      date: "2024-01-15",
      time: "14:30",
      duration: 90,
      status: "pending"
    },
    {
      id: "3",
      studentName: "Sophie Martin",
      subject: "Mathématiques",
      date: "2024-01-16",
      time: "11:00",
      duration: 60,
      status: "confirmed"
    },
    {
      id: "4",
      studentName: "Lucas Bernard",
      subject: "Physique",
      date: "2024-01-17",
      time: "15:00",
      duration: 90,
      status: "cancelled"
    }
  ])

  const daysOfWeek = [
    { key: "monday", label: "Lundi" },
    { key: "tuesday", label: "Mardi" },
    { key: "wednesday", label: "Mercredi" },
    { key: "thursday", label: "Jeudi" },
    { key: "friday", label: "Vendredi" },
    { key: "saturday", label: "Samedi" },
    { key: "sunday", label: "Dimanche" }
  ]

  const timeOptions = Array.from({ length: 24 }, (_, i) => {
    const hour = i.toString().padStart(2, '0')
    return `${hour}:00`
  })

  const addTimeSlot = () => {
    const newSlotId = Date.now().toString()
    const newSlot: TimeSlot = {
      id: newSlotId,
      day: "monday",
      startTime: "09:00",
      endTime: "10:00",
      isRecurring: true,
      subjects: [],
      maxStudents: 1,
      isAvailable: true
    }
    setAvailableSlots(prev => [...prev, newSlot])
    // Basculer vers l'onglet "Créneaux" pour voir le nouveau créneau
    setActiveTab("slots")
    // Marquer le nouveau créneau comme étant en cours d'édition
    setEditingSlot(newSlotId)
  }

  const removeTimeSlot = (id: string) => {
    setAvailableSlots(prev => prev.filter(slot => slot.id !== id))
  }

  const toggleSlotAvailability = (id: string) => {
    setAvailableSlots(prev => 
      prev.map(slot => 
        slot.id === id ? { ...slot, isAvailable: !slot.isAvailable } : slot
      )
    )
  }

  const updateTimeSlot = (id: string, updates: Partial<TimeSlot>) => {
    setAvailableSlots(prev => 
      prev.map(slot => 
        slot.id === id ? { ...slot, ...updates } : slot
      )
    )
  }

  const saveSlot = (id: string) => {
    setEditingSlot(null)
  }

  const cancelEdit = (id: string) => {
    // Si c'est un nouveau créneau (pas encore sauvegardé), on le supprime
    const slot = availableSlots.find(s => s.id === id)
    if (slot && slot.startTime === "09:00" && slot.endTime === "10:00" && slot.subjects?.length === 0) {
      removeTimeSlot(id)
    }
    setEditingSlot(null)
  }

  const showNotification = (type: "success" | "error" | "info", message: string) => {
    setNotification({ type, message })
    setTimeout(() => setNotification(null), 3000)
  }

  const acceptBooking = (bookingId: string) => {
    const booking = bookedSlots.find(b => b.id === bookingId)
    if (!booking) return

    if (confirm(`Êtes-vous sûr de vouloir accepter le cours avec ${booking.studentName} ?`)) {
      setBookedSlots(prev => 
        prev.map(booking => 
          booking.id === bookingId 
            ? { ...booking, status: "confirmed" as const }
            : booking
        )
      )
      showNotification("success", `Cours avec ${booking.studentName} accepté ! L'étudiant a été notifié.`)
      // Ici on enverrait une notification à l'étudiant
      console.log("Réservation acceptée:", bookingId)
    }
  }

  const rejectBooking = (bookingId: string) => {
    const booking = bookedSlots.find(b => b.id === bookingId)
    if (!booking) return

    if (confirm(`Êtes-vous sûr de vouloir refuser le cours avec ${booking.studentName} ?`)) {
      setBookedSlots(prev => 
        prev.map(booking => 
          booking.id === bookingId 
            ? { ...booking, status: "cancelled" as const }
            : booking
        )
      )
      showNotification("info", `Cours avec ${booking.studentName} refusé. L'étudiant a été notifié.`)
      // Ici on enverrait une notification à l'étudiant
      console.log("Réservation refusée:", bookingId)
    }
  }

  const cancelBooking = (bookingId: string) => {
    const booking = bookedSlots.find(b => b.id === bookingId)
    if (!booking) return

    if (confirm(`Êtes-vous sûr de vouloir annuler le cours avec ${booking.studentName} ?`)) {
      setBookedSlots(prev => 
        prev.map(booking => 
          booking.id === bookingId 
            ? { ...booking, status: "cancelled" as const }
            : booking
        )
      )
      showNotification("info", `Cours avec ${booking.studentName} annulé. L'étudiant a été notifié.`)
      // Ici on enverrait une notification à l'étudiant
      console.log("Réservation annulée:", bookingId)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed": return "bg-green-100 text-green-800"
      case "pending": return "bg-yellow-100 text-yellow-800"
      case "cancelled": return "bg-red-100 text-red-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "confirmed": return "Confirmé"
      case "pending": return "En attente"
      case "cancelled": return "Annulé"
      default: return status
    }
  }

  return (
    <div className="space-y-8">
      {/* Notification */}
      {notification && (
        <div className={`p-4 rounded-lg border ${
          notification.type === "success" ? "bg-green-50 border-green-200 text-green-800" :
          notification.type === "error" ? "bg-red-50 border-red-200 text-red-800" :
          "bg-blue-50 border-blue-200 text-blue-800"
        }`}>
          <div className="flex items-center justify-between">
            <span>{notification.message}</span>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setNotification(null)}
              className="h-6 w-6 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="font-playfair text-3xl font-bold">Gestion des disponibilités</h1>
          <p className="text-muted-foreground">Gérez vos créneaux disponibles et visualisez vos réservations</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link href="/tutors/availability/1" target="_blank">
              <Eye className="h-4 w-4 mr-2" />
              Vue publique
            </Link>
          </Button>
          <Button size="sm" onClick={addTimeSlot}>
            <Plus className="h-4 w-4 mr-2" />
            Nouveau créneau
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="calendar">Calendrier</TabsTrigger>
          <TabsTrigger value="slots">Créneaux</TabsTrigger>
          <TabsTrigger value="bookings">Réservations</TabsTrigger>
          <TabsTrigger value="settings">Paramètres</TabsTrigger>
        </TabsList>

        {/* Onglet Calendrier */}
        <TabsContent value="calendar" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarDays className="h-5 w-5" />
                Vue hebdomadaire
              </CardTitle>
              <CardDescription>
                Visualisez vos disponibilités et réservations pour la semaine
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Navigation semaine */}
              <div className="flex items-center justify-between mb-6">
                <Button variant="outline" size="sm">
                  ← Semaine précédente
                </Button>
                <h3 className="font-semibold">
                  Semaine du 15 au 21 janvier 2024
                </h3>
                <Button variant="outline" size="sm">
                  Semaine suivante →
                </Button>
              </div>

              {/* Grille calendrier */}
              <div className="grid grid-cols-8 gap-2">
                {/* Header avec heures */}
                <div className="p-2"></div>
                {daysOfWeek.map((day) => (
                  <div key={day.key} className="p-2 text-center font-medium border-b">
                    {day.label}
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
                        const dayBookings = bookedSlots.filter(booking => {
                          const bookingDay = new Date(booking.date).toLocaleDateString('en', { weekday: 'long' }).toLowerCase()
                          return bookingDay === day.key
                        })
                        
                        return (
                          <div key={`${day.key}-${hour}`} className="p-1 min-h-[60px] border border-gray-100">
                            {/* Créneaux disponibles */}
                            {daySlots.map((slot) => {
                              const startHour = parseInt(slot.startTime.split(':')[0])
                              const endHour = parseInt(slot.endTime.split(':')[0])
                              if (hour + 8 >= startHour && hour + 8 < endHour) {
                                return (
                                  <div
                                    key={slot.id}
                                    className={`text-xs p-1 rounded mb-1 ${
                                      slot.isAvailable 
                                        ? 'bg-green-100 text-green-800' 
                                        : 'bg-gray-100 text-gray-600'
                                    }`}
                                  >
                                    Disponible
                                  </div>
                                )
                              }
                              return null
                            })}
                            
                            {/* Réservations */}
                            {dayBookings.map((booking) => {
                              const bookingHour = parseInt(booking.time.split(':')[0])
                              if (hour + 8 === bookingHour) {
                                return (
                                  <div
                                    key={booking.id}
                                    className={`text-xs p-1 rounded mb-1 ${getStatusColor(booking.status)}`}
                                  >
                                    {booking.studentName}
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
        </TabsContent>

        {/* Onglet Créneaux */}
        <TabsContent value="slots" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Timer className="h-5 w-5" />
                Créneaux récurrents
              </CardTitle>
              <CardDescription>
                Définissez vos créneaux de disponibilité hebdomadaires
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {availableSlots.map((slot) => (
                <div key={slot.id} className={`p-4 border rounded-lg ${editingSlot === slot.id ? 'border-primary bg-primary/5' : ''}`}>
                  {editingSlot === slot.id ? (
                    // Mode édition
                    <div className="space-y-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold">Modification du créneau</h4>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => saveSlot(slot.id)}
                          >
                            <Save className="h-4 w-4 mr-2" />
                            Sauvegarder
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => cancelEdit(slot.id)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Jour de la semaine</Label>
                          <Select 
                            value={slot.day} 
                            onValueChange={(value) => updateTimeSlot(slot.id, { day: value })}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {daysOfWeek.map((day) => (
                                <SelectItem key={day.key} value={day.key}>
                                  {day.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label>Nombre max d'étudiants</Label>
                          <Select 
                            value={slot.maxStudents?.toString() || "1"} 
                            onValueChange={(value) => updateTimeSlot(slot.id, { maxStudents: parseInt(value) })}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                                <SelectItem key={num} value={num.toString()}>
                                  {num} étudiant{num > 1 ? 's' : ''}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Heure de début</Label>
                          <Select 
                            value={slot.startTime} 
                            onValueChange={(value) => updateTimeSlot(slot.id, { startTime: value })}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {timeOptions.map((time) => (
                                <SelectItem key={time} value={time}>
                                  {time}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label>Heure de fin</Label>
                          <Select 
                            value={slot.endTime} 
                            onValueChange={(value) => updateTimeSlot(slot.id, { endTime: value })}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {timeOptions.map((time) => (
                                <SelectItem key={time} value={time}>
                                  {time}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Mode affichage
                    <>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <Badge variant="outline">
                            {daysOfWeek.find(d => d.key === slot.day)?.label}
                          </Badge>
                          <span className="font-medium">
                            {slot.startTime} - {slot.endTime}
                          </span>
                          <Badge variant={slot.isAvailable ? "default" : "secondary"}>
                            {slot.isAvailable ? "Actif" : "Inactif"}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setEditingSlot(slot.id)}
                          >
                            <Edit3 className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleSlotAvailability(slot.id)}
                          >
                            {slot.isAvailable ? "Désactiver" : "Activer"}
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeTimeSlot(slot.id)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Matières : </span>
                          {slot.subjects?.join(", ") || "Toutes"}
                        </div>
                        <div>
                          <span className="text-muted-foreground">Max étudiants : </span>
                          {slot.maxStudents}
                        </div>
                        <div>
                          <span className="text-muted-foreground">Récurrent : </span>
                          {slot.isRecurring ? "Oui" : "Non"}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
              
              {availableSlots.length === 0 && (
                <div className="text-center py-8">
                  <Timer className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Aucun créneau défini</h3>
                  <p className="text-muted-foreground mb-4">
                    Commencez par ajouter vos premiers créneaux de disponibilité
                  </p>
                  <Button onClick={addTimeSlot}>
                    <Plus className="h-4 w-4 mr-2" />
                    Ajouter un créneau
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Onglet Réservations */}
        <TabsContent value="bookings" className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                  <div>
                    <p className="text-2xl font-bold">
                      {bookedSlots.filter(b => b.status === "confirmed").length}
                    </p>
                    <p className="text-sm text-muted-foreground">Cours confirmés</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <Clock className="h-8 w-8 text-yellow-600" />
                  <div>
                    <p className="text-2xl font-bold">
                      {bookedSlots.filter(b => b.status === "pending").length}
                    </p>
                    <p className="text-sm text-muted-foreground">En attente</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <Users className="h-8 w-8 text-green-600" />
                  <div>
                    <p className="text-2xl font-bold">
                      {new Set(bookedSlots.map(b => b.studentName)).size}
                    </p>
                    <p className="text-sm text-muted-foreground">Étudiants uniques</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Réservations récentes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {bookedSlots.map((booking) => (
                  <div key={booking.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <BookOpen className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{booking.subject}</h4>
                        <p className="text-sm text-muted-foreground">
                          avec {booking.studentName}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {booking.date} à {booking.time} ({booking.duration}min)
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className={getStatusColor(booking.status)}>
                        {getStatusLabel(booking.status)}
                      </Badge>
                      {booking.status === "pending" && (
                        <div className="flex space-x-1">
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => acceptBooking(booking.id)}
                            className="text-green-600 hover:text-green-700 hover:bg-green-50"
                          >
                            Accepter
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => rejectBooking(booking.id)}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            Refuser
                          </Button>
                        </div>
                      )}
                      {booking.status === "confirmed" && (
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => cancelBooking(booking.id)}
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                        >
                          Annuler
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Onglet Paramètres */}
        <TabsContent value="settings" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Paramètres généraux</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Durée minimale des cours</Label>
                  <Select defaultValue="60">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="30">30 minutes</SelectItem>
                      <SelectItem value="60">1 heure</SelectItem>
                      <SelectItem value="90">1h30</SelectItem>
                      <SelectItem value="120">2 heures</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label>Préavis minimum pour réservation</Label>
                  <Select defaultValue="24">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2">2 heures</SelectItem>
                      <SelectItem value="12">12 heures</SelectItem>
                      <SelectItem value="24">24 heures</SelectItem>
                      <SelectItem value="48">48 heures</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Délai d'annulation gratuite</Label>
                  <Select defaultValue="24">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="12">12 heures</SelectItem>
                      <SelectItem value="24">24 heures</SelectItem>
                      <SelectItem value="48">48 heures</SelectItem>
                      <SelectItem value="72">72 heures</SelectItem>
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
                    <Label>Nouvelles réservations</Label>
                    <p className="text-sm text-muted-foreground">
                      Être notifié des nouvelles demandes de cours
                    </p>
                  </div>
                  <Checkbox defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Rappels de cours</Label>
                    <p className="text-sm text-muted-foreground">
                      Recevoir un rappel 1h avant chaque cours
                    </p>
                  </div>
                  <Checkbox defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Annulations</Label>
                    <p className="text-sm text-muted-foreground">
                      Être notifié des annulations d'étudiants
                    </p>
                  </div>
                  <Checkbox defaultChecked />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
