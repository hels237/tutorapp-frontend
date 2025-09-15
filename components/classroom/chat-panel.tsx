"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Send, MoreVertical } from "lucide-react"

interface Message {
  id: number
  sender: string
  role: "tutor" | "student"
  message: string
  timestamp: string
  type: "text" | "system"
}

export function ChatPanel() {
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "Système",
      role: "tutor",
      message: "La session a commencé",
      timestamp: "14:00",
      type: "system",
    },
    {
      id: 2,
      sender: "Prof. Jean Martin",
      role: "tutor",
      message: "Bonjour Marie ! Prête pour notre cours de mathématiques ?",
      timestamp: "14:01",
      type: "text",
    },
    {
      id: 3,
      sender: "Marie Dubois",
      role: "student",
      message: "Bonjour ! Oui, j'ai préparé mes questions sur les dérivées.",
      timestamp: "14:01",
      type: "text",
    },
    {
      id: 4,
      sender: "Prof. Jean Martin",
      role: "tutor",
      message: "Parfait ! Commençons par revoir les règles de base. Je vais utiliser le tableau blanc.",
      timestamp: "14:02",
      type: "text",
    },
  ])

  const sendMessage = () => {
    if (!message.trim()) return

    const newMessage: Message = {
      id: messages.length + 1,
      sender: "Marie Dubois", // Would be dynamic based on current user
      role: "student",
      message: message.trim(),
      timestamp: new Date().toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" }),
      type: "text",
    }

    setMessages([...messages, newMessage])
    setMessage("")
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">Chat</h3>
          <Button variant="ghost" size="sm">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((msg) => (
            <div key={msg.id}>
              {msg.type === "system" ? (
                <div className="text-center">
                  <Badge variant="secondary" className="text-xs">
                    {msg.message}
                  </Badge>
                </div>
              ) : (
                <div className={`flex ${msg.role === "student" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`flex items-start space-x-2 max-w-[80%] ${
                      msg.role === "student" ? "flex-row-reverse space-x-reverse" : ""
                    }`}
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="text-xs">
                        {msg.sender
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div
                      className={`rounded-lg p-3 ${
                        msg.role === "student" ? "bg-primary text-primary-foreground" : "bg-muted"
                      }`}
                    >
                      <div className="text-xs opacity-70 mb-1">
                        {msg.sender} • {msg.timestamp}
                      </div>
                      <p className="text-sm">{msg.message}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* Input */}
      <div className="p-4 border-t">
        <div className="flex space-x-2">
          <Input
            placeholder="Tapez votre message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1"
          />
          <Button onClick={sendMessage} disabled={!message.trim()}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
