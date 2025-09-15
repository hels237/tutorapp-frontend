"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CalendarIcon, Clock, Euro, Star, CheckCircle, ArrowLeft, CreditCard } from "lucide-react"
import Link from "next/link"

interface BookingFormProps {
  tutorId: string
}

export function BookingForm({ tutorId }: BookingFormProps) {
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [selectedTime, setSelectedTime] = useState("")
  const [selectedDuration, setSelectedDuration] = useState("")
  const [selectedSubject, setSelectedSubject] = useState("")
  const [message, setMessage] = useState("")
  const [step, setStep] = useState(1)

  // Mock data
  const tutor = {
    id: 1,
    name: "Prof. Jean Martin",
    avatar: "/placeholder.svg?height=80&width=80",
    subjects: ["Mathématiques", "Physique"],
    rating: 4.9,
    reviewCount: 127,
    hourlyRate: 35,
    responseTime: "< 1h",
  }

  const availableSlots = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"]

  const durations = [
    { value: "60", label: "1 heure", price: tutor.hourlyRate },
    { value: "90", label: "1h30", price: Math.round(tutor.hourlyRate * 1.5) },
    { value: "120", label: "2 heures", price: tutor.hourlyRate * 2 },
  ]

  const selectedDurationData = durations.find((d) => d.value === selectedDuration)
  const totalPrice = selectedDurationData?.price || 0

  const handleBooking = () => {
    // Mock booking process
    setStep(3)
  }

  if (step === 3) {
    return (
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardContent className="text-center py-12">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="font-playfair text-2xl font-bold mb-4">Réservation confirmée !</h2>
            <p className="text-muted-foreground mb-6">Votre cours avec {tutor.name} a été réservé avec succès.</p>
            <div className="space-y-4">
              <div className="bg-muted p-4 rounded-lg">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Date:</span>
                    <p>{selectedDate?.toLocaleDateString("fr-FR")}</p>
                  </div>
                  <div>
                    <span className="font-medium">Heure:</span>
                    <p>{selectedTime}</p>
                  </div>
                  <div>
                    <span className="font-medium">Durée:</span>
                    <p>{selectedDurationData?.label}</p>
                  </div>
                  <div>
                    <span className="font-medium">Matière:</span>
                    <p>{selectedSubject}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link href="/dashboard/student">Voir mes cours</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/tutors">Trouver d'autres tuteurs</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="sm" asChild>
          <Link href={`/tutors/${tutorId}`}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour au profil
          </Link>
        </Button>
        <div>
          <h1 className="font-playfair text-3xl font-bold">Réserver un cours</h1>
          <p className="text-muted-foreground">avec {tutor.name}</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Booking Form */}
        <div className="lg:col-span-2 space-y-6">
          {step === 1 && (
            <>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CalendarIcon className="h-5 w-5" />
                    Choisir une date et heure
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label>Sélectionner une date</Label>
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        disabled={(date) => date < new Date() || date.getDay() === 0}
                        className="rounded-md border"
                      />
                    </div>

                    {selectedDate && (
                      <div className="space-y-4">
                        <Label>Créneaux disponibles</Label>
                        <div className="grid grid-cols-3 gap-2">
                          {availableSlots.map((slot) => (
                            <Button
                              key={slot}
                              variant={selectedTime === slot ? "default" : "outline"}
                              size="sm"
                              onClick={() => setSelectedTime(slot)}
                              className="text-xs"
                            >
                              {slot}
                            </Button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Détails du cours</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Durée du cours</Label>
                      <Select value={selectedDuration} onValueChange={setSelectedDuration}>
                        <SelectTrigger>
                          <SelectValue placeholder="Choisir la durée" />
                        </SelectTrigger>
                        <SelectContent>
                          {durations.map((duration) => (
                            <SelectItem key={duration.value} value={duration.value}>
                              {duration.label} - {duration.price}€
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Matière</Label>
                      <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                        <SelectTrigger>
                          <SelectValue placeholder="Choisir la matière" />
                        </SelectTrigger>
                        <SelectContent>
                          {tutor.subjects.map((subject) => (
                            <SelectItem key={subject} value={subject}>
                              {subject}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Message pour le tuteur (optionnel)</Label>
                    <Textarea
                      placeholder="Décrivez vos objectifs, difficultés ou questions spécifiques..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>

              <Button
                className="w-full"
                size="lg"
                onClick={() => setStep(2)}
                disabled={!selectedDate || !selectedTime || !selectedDuration || !selectedSubject}
              >
                Continuer vers le paiement
              </Button>
            </>
          )}

          {step === 2 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Paiement sécurisé
                </CardTitle>
                <CardDescription>Vos informations de paiement sont protégées et cryptées</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Alert>
                  <CheckCircle className="h-4 w-4" />
                  <AlertDescription>
                    Paiement sécurisé par Stripe. Vous ne serez débité qu'après confirmation du tuteur.
                  </AlertDescription>
                </Alert>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Récapitulatif de la commande</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Cours de {selectedSubject}</span>
                      <span>{selectedDurationData?.label}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Date et heure</span>
                      <span>
                        {selectedDate?.toLocaleDateString("fr-FR")} à {selectedTime}
                      </span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-medium">
                      <span>Total</span>
                      <span>{totalPrice}€</span>
                    </div>
                  </div>
                </div>

                <div className="text-center py-8 border-2 border-dashed border-muted rounded-lg">
                  <CreditCard className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground mb-4">Interface de paiement Stripe</p>
                  <p className="text-xs text-muted-foreground">Cartes acceptées: Visa, Mastercard, American Express</p>
                </div>

                <div className="flex space-x-4">
                  <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                    Retour
                  </Button>
                  <Button onClick={handleBooking} className="flex-1">
                    Confirmer et payer {totalPrice}€
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Tutor Summary */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Votre tuteur</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4 mb-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={tutor.avatar || "/placeholder.svg"} alt={tutor.name} />
                  <AvatarFallback>
                    {tutor.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{tutor.name}</h3>
                  <div className="flex items-center space-x-1 mt-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{tutor.rating}</span>
                    <span className="text-xs text-muted-foreground">({tutor.reviewCount})</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tarif horaire</span>
                  <span className="font-medium">{tutor.hourlyRate}€/h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Temps de réponse</span>
                  <span className="font-medium">{tutor.responseTime}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1 mt-4">
                {tutor.subjects.map((subject) => (
                  <Badge key={subject} variant="secondary" className="text-xs">
                    {subject}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {selectedDate && selectedTime && selectedDuration && (
            <Card>
              <CardHeader>
                <CardTitle>Récapitulatif</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2 text-sm">
                  <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                  <span>{selectedDate.toLocaleDateString("fr-FR")}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>
                    {selectedTime} ({selectedDurationData?.label})
                  </span>
                </div>
                {selectedSubject && (
                  <div className="flex items-center space-x-2 text-sm">
                    <span className="font-medium">{selectedSubject}</span>
                  </div>
                )}
                <Separator />
                <div className="flex items-center justify-between">
                  <span className="font-medium">Total</span>
                  <div className="flex items-center space-x-1">
                    <Euro className="h-4 w-4 text-primary" />
                    <span className="font-bold text-lg">{totalPrice}€</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
