"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import {
  Video,
  VideoOff,
  Mic,
  MicOff,
  Monitor,
  MonitorOff,
  Settings,
  Phone,
  Users,
  Volume2,
  VolumeX,
  Clock,
  CreditCard as Record,
  StopCircle,
} from "lucide-react"
import { Whiteboard } from "./whiteboard"
import { ChatPanel } from "./chat-panel"
import { FileSharing } from "./file-sharing"

interface VirtualClassroomProps {
  sessionId: string
}

export function VirtualClassroom({ sessionId }: VirtualClassroomProps) {
  const [isVideoOn, setIsVideoOn] = useState(true)
  const [isAudioOn, setIsAudioOn] = useState(true)
  const [isScreenSharing, setIsScreenSharing] = useState(false)
  const [isRecording, setIsRecording] = useState(false)
  const [activeTab, setActiveTab] = useState("whiteboard")
  const [participants, setParticipants] = useState([
    { id: 1, name: "Prof. Jean Martin", role: "tutor", isVideoOn: true, isAudioOn: true, isSpeaking: false },
    { id: 2, name: "Marie Dubois", role: "student", isVideoOn: true, isAudioOn: true, isSpeaking: true },
  ])
  const [sessionTime, setSessionTime] = useState(0)
  const [volume, setVolume] = useState([80])

  // Mock session data
  const session = {
    id: sessionId,
    subject: "Mathématiques",
    tutor: "Prof. Jean Martin",
    student: "Marie Dubois",
    startTime: "14:00",
    duration: "1h",
    status: "active",
  }

  // Timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setSessionTime((prev) => prev + 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const toggleVideo = () => setIsVideoOn(!isVideoOn)
  const toggleAudio = () => setIsAudioOn(!isAudioOn)
  const toggleScreenShare = () => setIsScreenSharing(!isScreenSharing)
  const toggleRecording = () => setIsRecording(!isRecording)

  const endSession = () => {
    if (confirm("Êtes-vous sûr de vouloir terminer la session ?")) {
      window.location.href = "/dashboard"
    }
  }

  return (
    <div className="h-screen flex flex-col bg-gray-900">
      {/* Header */}
      <div className="bg-gray-800 text-white p-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div>
            <h1 className="font-semibold">Cours de {session.subject}</h1>
            <p className="text-sm text-gray-300">
              {session.tutor} • {session.student}
            </p>
          </div>
          <Badge variant="secondary" className="bg-green-600 text-white">
            En cours
          </Badge>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-sm">
            <Clock className="h-4 w-4" />
            <span>{formatTime(sessionTime)}</span>
          </div>
          {isRecording && (
            <div className="flex items-center space-x-2 text-red-400">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-sm">Enregistrement</span>
            </div>
          )}
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Video Area */}
          <div className="bg-black relative h-1/2 min-h-[300px]">
            {/* Main Video (Screen Share or Tutor) */}
            <div className="w-full h-full bg-gray-800 flex items-center justify-center relative">
              {isScreenSharing ? (
                <div className="w-full h-full bg-blue-900 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Monitor className="h-16 w-16 mx-auto mb-4" />
                    <p className="text-lg">Partage d'écran actif</p>
                    <p className="text-sm text-gray-300">Écran de {session.tutor}</p>
                  </div>
                </div>
              ) : (
                <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Video className="h-16 w-16 mx-auto mb-4" />
                    <p className="text-lg">{session.tutor}</p>
                    <p className="text-sm text-gray-300">Caméra principale</p>
                  </div>
                </div>
              )}

              {/* Participant Videos */}
              <div className="absolute top-4 right-4 space-y-2">
                {participants.map((participant) => (
                  <div key={participant.id} className="relative">
                    <div className="w-32 h-24 bg-gray-600 rounded-lg flex items-center justify-center">
                      {participant.isVideoOn ? (
                        <div className="text-center text-white text-xs">
                          <Avatar className="h-8 w-8 mx-auto mb-1">
                            <AvatarFallback className="text-xs">
                              {participant.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <p className="truncate">{participant.name.split(" ")[0]}</p>
                        </div>
                      ) : (
                        <div className="text-center text-white">
                          <VideoOff className="h-6 w-6 mx-auto mb-1" />
                          <p className="text-xs">{participant.name.split(" ")[0]}</p>
                        </div>
                      )}
                    </div>
                    {participant.isSpeaking && (
                      <div className="absolute inset-0 border-2 border-green-400 rounded-lg animate-pulse" />
                    )}
                    <div className="absolute bottom-1 left-1 flex space-x-1">
                      {!participant.isAudioOn && (
                        <div className="bg-red-500 rounded-full p-1">
                          <MicOff className="h-2 w-2 text-white" />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Volume Control */}
              <div className="absolute bottom-4 left-4 bg-black/50 rounded-lg p-2">
                <div className="flex items-center space-x-2 text-white">
                  {volume[0] > 0 ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
                  <Slider value={volume} onValueChange={setVolume} max={100} step={1} className="w-20" />
                  <span className="text-xs w-8">{volume[0]}%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Tools Area */}
          <div className="flex-1 bg-white">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full flex flex-col">
              <div className="border-b px-4">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="whiteboard">Tableau Blanc</TabsTrigger>
                  <TabsTrigger value="files">Fichiers</TabsTrigger>
                  <TabsTrigger value="notes">Notes</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="whiteboard" className="flex-1 p-0">
                <Whiteboard />
              </TabsContent>

              <TabsContent value="files" className="flex-1 p-4">
                <FileSharing />
              </TabsContent>

              <TabsContent value="notes" className="flex-1 p-4">
                <div className="h-full">
                  <div className="mb-4">
                    <h3 className="font-semibold mb-2">Notes de cours</h3>
                    <p className="text-sm text-muted-foreground">
                      Prenez des notes pendant le cours. Elles seront automatiquement sauvegardées.
                    </p>
                  </div>
                  <textarea
                    className="w-full h-full resize-none border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Tapez vos notes ici..."
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Chat Panel */}
        <div className="w-80 border-l bg-white">
          <ChatPanel />
        </div>
      </div>

      {/* Control Bar */}
      <div className="bg-gray-800 text-white p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Button variant={isVideoOn ? "secondary" : "destructive"} size="sm" onClick={toggleVideo}>
              {isVideoOn ? <Video className="h-4 w-4" /> : <VideoOff className="h-4 w-4" />}
            </Button>
            <Button variant={isAudioOn ? "secondary" : "destructive"} size="sm" onClick={toggleAudio}>
              {isAudioOn ? <Mic className="h-4 w-4" /> : <MicOff className="h-4 w-4" />}
            </Button>
            <Button variant={isScreenSharing ? "default" : "secondary"} size="sm" onClick={toggleScreenShare}>
              {isScreenSharing ? <MonitorOff className="h-4 w-4" /> : <Monitor className="h-4 w-4" />}
            </Button>
            <Button variant={isRecording ? "destructive" : "secondary"} size="sm" onClick={toggleRecording}>
              {isRecording ? <StopCircle className="h-4 w-4" /> : <Record className="h-4 w-4" />}
            </Button>
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="secondary" size="sm">
              <Users className="h-4 w-4 mr-2" />
              {participants.length}
            </Button>
            <Button variant="secondary" size="sm">
              <Settings className="h-4 w-4" />
            </Button>
            <Button variant="destructive" size="sm" onClick={endSession}>
              <Phone className="h-4 w-4 mr-2" />
              Terminer
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
