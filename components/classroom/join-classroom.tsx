"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Video, VideoOff, Mic, MicOff, Settings, Clock, Users, CheckCircle, AlertCircle } from "lucide-react"
import Link from "next/link"

interface JoinClassroomProps {
  sessionId: string
}

export function JoinClassroom({ sessionId }: JoinClassroomProps) {
  const [isVideoOn, setIsVideoOn] = useState(true)
  const [isAudioOn, setIsAudioOn] = useState(true)
  const [isJoining, setIsJoining] = useState(false)

  // Mock session data
  const session = {
    id: sessionId,
    subject: "Mathématiques",
    tutor: {
      name: "Prof. Jean Martin",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 4.9,
    },
    student: "Marie Dubois",
    startTime: "14:00",
    duration: "1h",
    status: "waiting",
  }

  const handleJoinSession = () => {
    setIsJoining(true)
    // Simulate joining process
    setTimeout(() => {
      window.location.href = `/classroom/${sessionId}`
    }, 2000)
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="font-playfair text-4xl font-bold">Rejoindre le cours</h1>
        <p className="text-xl text-muted-foreground">Préparez-vous avant d'entrer dans la salle de classe virtuelle</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Preview & Settings */}
        <div className="lg:col-span-2 space-y-6">
          {/* Video Preview */}
          <Card>
            <CardHeader>
              <CardTitle>Aperçu de votre caméra</CardTitle>
              <CardDescription>Vérifiez votre caméra et microphone avant de rejoindre</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-gray-900 rounded-lg relative overflow-hidden">
                {isVideoOn ? (
                  <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Avatar className="h-20 w-20 mx-auto mb-4">
                        <AvatarImage src="/placeholder.svg?height=80&width=80" />
                        <AvatarFallback className="text-2xl">MD</AvatarFallback>
                      </Avatar>
                      <p className="text-lg">Marie Dubois</p>
                      <p className="text-sm text-gray-300">Caméra activée</p>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                    <div className="text-center text-white">
                      <VideoOff className="h-16 w-16 mx-auto mb-4" />
                      <p className="text-lg">Caméra désactivée</p>
                    </div>
                  </div>
                )}

                {/* Controls */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
                  <Button
                    variant={isVideoOn ? "secondary" : "destructive"}
                    size="sm"
                    onClick={() => setIsVideoOn(!isVideoOn)}
                  >
                    {isVideoOn ? <Video className="h-4 w-4" /> : <VideoOff className="h-4 w-4" />}
                  </Button>
                  <Button
                    variant={isAudioOn ? "secondary" : "destructive"}
                    size="sm"
                    onClick={() => setIsAudioOn(!isAudioOn)}
                  >
                    {isAudioOn ? <Mic className="h-4 w-4" /> : <MicOff className="h-4 w-4" />}
                  </Button>
                  <Button variant="secondary" size="sm">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* System Check */}
          <Card>
            <CardHeader>
              <CardTitle>Vérification du système</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Connexion Internet</span>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-green-600">Excellente</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Caméra</span>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-green-600">Détectée</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Microphone</span>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-green-600">Détecté</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Haut-parleurs</span>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-green-600">Fonctionnels</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Session Info */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Informations du cours</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg">{session.subject}</h3>
                <Badge variant="secondary" className="mt-1">
                  {session.status === "waiting" ? "En attente" : "En cours"}
                </Badge>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">
                    {session.startTime} • {session.duration}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">2 participants</span>
                </div>
              </div>

              <div className="pt-4 border-t">
                <h4 className="font-medium mb-3">Votre tuteur</h4>
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src={session.tutor.avatar || "/placeholder.svg"} />
                    <AvatarFallback>
                      {session.tutor.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{session.tutor.name}</p>
                    <p className="text-sm text-muted-foreground">⭐ {session.tutor.rating}/5</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Join Button */}
          <Card>
            <CardContent className="p-6">
              {session.status === "waiting" ? (
                <Alert className="mb-4">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    Le tuteur n'a pas encore rejoint la session. Vous pouvez entrer et l'attendre.
                  </AlertDescription>
                </Alert>
              ) : (
                <Alert className="mb-4">
                  <CheckCircle className="h-4 w-4" />
                  <AlertDescription>La session est active. Vous pouvez rejoindre maintenant.</AlertDescription>
                </Alert>
              )}

              <Button className="w-full" size="lg" onClick={handleJoinSession} disabled={isJoining}>
                {isJoining ? "Connexion..." : "Rejoindre le cours"}
              </Button>

              <div className="text-center mt-4">
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/dashboard">Retour au tableau de bord</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Tips */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Conseils</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>• Utilisez des écouteurs pour éviter l'écho</li>
                <li>• Assurez-vous d'avoir un bon éclairage</li>
                <li>• Préparez vos questions à l'avance</li>
                <li>• Testez votre connexion Internet</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
