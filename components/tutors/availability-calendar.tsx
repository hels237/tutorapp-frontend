"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, Plus, X, Edit, Repeat } from "lucide-react"

interface TimeSlot {
  id: string
  day: string
  startTime: string
  endTime: string
  recurring: boolean
  available: boolean
  booked?: boolean
  studentName?: string
}

export default function AvailabilityCalendar() {
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([
    { id: "1", day: "Lundi", startTime: "09:00", endTime: "12:00", recurring: true, available: true },
    { id: "2", day: "Lundi", startTime: "14:00", endTime: "17:00", recurring: true, available: true },
    {
      id: "3",
      day: "Mardi",
      startTime: "10:00",
      endTime: "11:30",
      recurring: false,
      available: false,
      booked: true,
      studentName: "Marie Dupont",
    },
    { id: "4", day: "Mercredi", startTime: "09:00", endTime: "12:00", recurring: true, available: true },
    { id: "5", day: "Jeudi", startTime: "14:00", endTime: "16:00", recurring: true, available: true },
    { id: "6", day: "Vendredi", startTime: "09:00", endTime: "11:00", recurring: true, available: true },
  ])

  const [newSlot, setNewSlot] = useState({
    day: "",
    startTime: "",
    endTime: "",
    recurring: false,
  })

  const days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"]

  const addTimeSlot = () => {
    if (newSlot.day && newSlot.startTime && newSlot.endTime) {
      const slot: TimeSlot = {
        id: Date.now().toString(),
        day: newSlot.day,
        startTime: newSlot.startTime,
        endTime: newSlot.endTime,
        recurring: newSlot.recurring,
        available: true,
      }
      setTimeSlots([...timeSlots, slot])
      setNewSlot({ day: "", startTime: "", endTime: "", recurring: false })
    }
  }

  const removeTimeSlot = (id: string) => {
    setTimeSlots(timeSlots.filter((slot) => slot.id !== id))
  }

  const toggleAvailability = (id: string) => {
    setTimeSlots(timeSlots.map((slot) => (slot.id === id ? { ...slot, available: !slot.available } : slot)))
  }

  const getSlotsByDay = (day: string) => {
    return timeSlots.filter((slot) => slot.day === day).sort((a, b) => a.startTime.localeCompare(b.startTime))
  }

  const getStatusBadge = (slot: TimeSlot) => {
    if (slot.booked) {
      return <Badge className="bg-blue-100 text-blue-800">Réservé</Badge>
    }
    if (!slot.available) {
      return <Badge className="bg-red-100 text-red-800">Indisponible</Badge>
    }
    return <Badge className="bg-green-100 text-green-800">Disponible</Badge>
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Gestion des disponibilités
              </CardTitle>
              <CardDescription>Définissez vos créneaux de disponibilité pour les cours</CardDescription>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Ajouter un créneau
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Ajouter un nouveau créneau</DialogTitle>
                  <DialogDescription>Définissez un nouveau créneau de disponibilité</DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="day">Jour</Label>
                    <Select onValueChange={(value) => setNewSlot({ ...newSlot, day: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionner un jour" />
                      </SelectTrigger>
                      <SelectContent>
                        {days.map((day) => (
                          <SelectItem key={day} value={day}>
                            {day}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="startTime">Heure de début</Label>
                      <Input
                        id="startTime"
                        type="time"
                        value={newSlot.startTime}
                        onChange={(e) => setNewSlot({ ...newSlot, startTime: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="endTime">Heure de fin</Label>
                      <Input
                        id="endTime"
                        type="time"
                        value={newSlot.endTime}
                        onChange={(e) => setNewSlot({ ...newSlot, endTime: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="recurring"
                      checked={newSlot.recurring}
                      onChange={(e) => setNewSlot({ ...newSlot, recurring: e.target.checked })}
                      className="rounded"
                    />
                    <Label htmlFor="recurring">Créneau récurrent (chaque semaine)</Label>
                  </div>
                  <Button onClick={addTimeSlot} className="w-full">
                    Ajouter le créneau
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            {days.map((day) => {
              const daySlots = getSlotsByDay(day)
              return (
                <div key={day} className="border rounded-lg p-4">
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {day}
                    <span className="text-sm font-normal text-gray-500">
                      ({daySlots.length} créneau{daySlots.length > 1 ? "x" : ""})
                    </span>
                  </h3>

                  {daySlots.length === 0 ? (
                    <p className="text-gray-500 text-sm">Aucun créneau défini</p>
                  ) : (
                    <div className="space-y-2">
                      {daySlots.map((slot) => (
                        <div key={slot.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="font-medium">
                              {slot.startTime} - {slot.endTime}
                            </div>
                            {getStatusBadge(slot)}
                            {slot.recurring && (
                              <Badge variant="outline" className="text-xs">
                                <Repeat className="h-3 w-3 mr-1" />
                                Récurrent
                              </Badge>
                            )}
                            {slot.booked && slot.studentName && (
                              <span className="text-sm text-gray-600">avec {slot.studentName}</span>
                            )}
                          </div>
                          <div className="flex gap-2">
                            {!slot.booked && (
                              <>
                                <Button variant="outline" size="sm" onClick={() => toggleAvailability(slot.id)}>
                                  {slot.available ? "Rendre indisponible" : "Rendre disponible"}
                                </Button>
                                <Button variant="outline" size="sm">
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => removeTimeSlot(slot.id)}
                                  className="text-red-600"
                                >
                                  <X className="h-4 w-4" />
                                </Button>
                              </>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
