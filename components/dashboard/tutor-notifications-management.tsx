"use client"

import { useState } from "react"
import { useI18n } from "@/contexts/i18n-context"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { 
  Bell, 
  ArrowLeft, 
  MessageCircle, 
  Calendar, 
  CreditCard, 
  BookOpen,
  Settings,
  Check,
  X,
  Trash2,
  Eye,
  EyeOff,
  Volume2,
  VolumeX,
  Mail,
  Smartphone,
  Clock,
  AlertCircle,
  CheckCircle,
  Info,
  Star,
  Users,
  DollarSign
} from "lucide-react"

export function TutorNotificationsManagement() {
  const { t } = useI18n()
  const [activeTab, setActiveTab] = useState("all")

  // Mock data - Notifications pour tuteur
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "booking",
      title: "Nouvelle réservation de cours",
      message: "Marie Dubois a réservé un cours de Mathématiques pour demain à 14h00",
      time: "Il y a 1 heure",
      read: false,
      priority: "high",
      avatar: "/placeholder.svg?height=40&width=40",
      actionUrl: "/dashboard/tutor/availability"
    },
    {
      id: 2,
      type: "payment",
      title: "Paiement reçu",
      message: "Vous avez reçu un paiement de 35€ pour le cours de Physique avec Pierre L.",
      time: "Il y a 3 heures",
      read: false,
      priority: "medium",
      avatar: null,
      actionUrl: "/dashboard/tutor?tab=earnings"
    },
    {
      id: 3,
      type: "message",
      title: "Nouveau message de Marie Dubois",
      message: "Bonjour Prof. Martin, j'ai une question sur l'exercice 15...",
      time: "Hier à 16:30",
      read: true,
      priority: "medium",
      avatar: "/placeholder.svg?height=40&width=40",
      actionUrl: "/messages"
    },
    {
      id: 4,
      type: "review",
      title: "Nouvel avis reçu",
      message: "Pierre L. vous a laissé un avis 5 étoiles avec un commentaire positif",
      time: "Hier à 14:20",
      read: true,
      priority: "low",
      avatar: "/placeholder.svg?height=40&width=40",
      actionUrl: "/dashboard/tutor/profile"
    },
    {
      id: 5,
      type: "reminder",
      title: "Rappel: Cours dans 30 minutes",
      message: "N'oubliez pas votre cours de Chimie avec Sophie M. à 16h00",
      time: "Il y a 2 jours",
      read: true,
      priority: "high",
      avatar: "/placeholder.svg?height=40&width=40",
      actionUrl: "/dashboard/tutor"
    },
    {
      id: 6,
      type: "system",
      title: "Mise à jour de profil approuvée",
      message: "Vos nouvelles qualifications ont été vérifiées et approuvées",
      time: "Il y a 3 jours",
      read: true,
      priority: "low",
      avatar: null,
      actionUrl: "/dashboard/tutor/profile"
    }
  ])

  // Paramètres de notifications
  const [notificationSettings, setNotificationSettings] = useState({
    email: {
      bookings: true,
      messages: true,
      payments: true,
      reviews: true,
      reminders: true,
      marketing: false
    },
    push: {
      bookings: true,
      messages: true,
      payments: false,
      reviews: true,
      reminders: true,
      marketing: false
    },
    sound: true,
    doNotDisturb: false,
    quietHours: {
      enabled: true,
      start: "22:00",
      end: "08:00"
    }
  })

  const filteredNotifications = notifications.filter(notif => {
    if (activeTab === "all") return true
    if (activeTab === "unread") return !notif.read
    if (activeTab === "bookings") return notif.type === "booking" || notif.type === "reminder"
    if (activeTab === "messages") return notif.type === "message"
    if (activeTab === "payments") return notif.type === "payment"
    return true
  })

  const markAsRead = (id: number) => {
    setNotifications(prev => prev.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ))
  }

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(notif => ({ ...notif, read: true })))
  }

  const deleteNotification = (id: number) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id))
  }

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "booking": return <Calendar className="h-4 w-4" />
      case "message": return <MessageCircle className="h-4 w-4" />
      case "payment": return <DollarSign className="h-4 w-4" />
      case "review": return <Star className="h-4 w-4" />
      case "reminder": return <Clock className="h-4 w-4" />
      case "system": return <Settings className="h-4 w-4" />
      default: return <Bell className="h-4 w-4" />
    }
  }

  const getNotificationColor = (type: string, priority: string) => {
    if (priority === "high") return "border-l-red-500 bg-red-50"
    if (priority === "medium") return "border-l-blue-500 bg-blue-50"
    return "border-l-gray-300 bg-gray-50"
  }

  const unreadCount = notifications.filter(n => !n.read).length
  const stats = {
    total: notifications.length,
    unread: unreadCount,
    bookings: notifications.filter(n => n.type === "booking" || n.type === "reminder").length,
    messages: notifications.filter(n => n.type === "message").length,
    payments: notifications.filter(n => n.type === "payment").length
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" asChild>
            <Link href="/dashboard/tutor">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour au dashboard
            </Link>
          </Button>
          <div>
            <h1 className="font-playfair text-3xl font-bold flex items-center gap-2">
              <Bell className="h-8 w-8" />
              Centre de notifications
              {unreadCount > 0 && (
                <Badge variant="destructive" className="ml-2">
                  {unreadCount}
                </Badge>
              )}
            </h1>
            <p className="text-muted-foreground">
              Gérez vos notifications et préférences
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          {unreadCount > 0 && (
            <Button variant="outline" size="sm" onClick={markAllAsRead}>
              <CheckCircle className="h-4 w-4 mr-2" />
              Tout marquer comme lu
            </Button>
          )}
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="all">Toutes ({stats.total})</TabsTrigger>
          <TabsTrigger value="unread">Non lues ({stats.unread})</TabsTrigger>
          <TabsTrigger value="bookings">Réservations ({stats.bookings})</TabsTrigger>
          <TabsTrigger value="messages">Messages ({stats.messages})</TabsTrigger>
          <TabsTrigger value="payments">Paiements ({stats.payments})</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="space-y-4">
          {filteredNotifications.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <Bell className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Aucune notification</h3>
                <p className="text-muted-foreground">
                  {activeTab === "unread" 
                    ? "Toutes vos notifications ont été lues"
                    : "Vous n'avez pas de notifications dans cette catégorie"
                  }
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-2">
              {filteredNotifications.map((notification) => (
                <Card 
                  key={notification.id} 
                  className={`transition-all hover:shadow-md border-l-4 ${
                    getNotificationColor(notification.type, notification.priority)
                  } ${!notification.read ? 'ring-1 ring-blue-200' : ''}`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3 flex-1">
                        <div className="flex-shrink-0 mt-1">
                          {notification.avatar ? (
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={notification.avatar} />
                              <AvatarFallback>
                                {getNotificationIcon(notification.type)}
                              </AvatarFallback>
                            </Avatar>
                          ) : (
                            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                              {getNotificationIcon(notification.type)}
                            </div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className={`font-medium ${!notification.read ? 'font-semibold' : ''}`}>
                              {notification.title}
                            </h4>
                            {!notification.read && (
                              <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {notification.message}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            {notification.time}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        {!notification.read && (
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => markAsRead(notification.id)}
                          >
                            <Check className="h-4 w-4" />
                          </Button>
                        )}
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => deleteNotification(notification.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>

      {/* Paramètres de notifications */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Préférences de notifications
          </CardTitle>
          <CardDescription>
            Configurez comment vous souhaitez recevoir vos notifications
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Notifications par email */}
          <div className="space-y-4">
            <h4 className="font-medium flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Notifications par email
            </h4>
            <div className="grid gap-3 pl-6">
              <div className="flex items-center justify-between">
                <Label htmlFor="email-bookings">Nouvelles réservations</Label>
                <Switch
                  id="email-bookings"
                  checked={notificationSettings.email.bookings}
                  onCheckedChange={(checked) => 
                    setNotificationSettings(prev => ({
                      ...prev,
                      email: { ...prev.email, bookings: checked }
                    }))
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="email-messages">Messages des étudiants</Label>
                <Switch
                  id="email-messages"
                  checked={notificationSettings.email.messages}
                  onCheckedChange={(checked) => 
                    setNotificationSettings(prev => ({
                      ...prev,
                      email: { ...prev.email, messages: checked }
                    }))
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="email-payments">Paiements reçus</Label>
                <Switch
                  id="email-payments"
                  checked={notificationSettings.email.payments}
                  onCheckedChange={(checked) => 
                    setNotificationSettings(prev => ({
                      ...prev,
                      email: { ...prev.email, payments: checked }
                    }))
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="email-reviews">Nouveaux avis</Label>
                <Switch
                  id="email-reviews"
                  checked={notificationSettings.email.reviews}
                  onCheckedChange={(checked) => 
                    setNotificationSettings(prev => ({
                      ...prev,
                      email: { ...prev.email, reviews: checked }
                    }))
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="email-reminders">Rappels de cours</Label>
                <Switch
                  id="email-reminders"
                  checked={notificationSettings.email.reminders}
                  onCheckedChange={(checked) => 
                    setNotificationSettings(prev => ({
                      ...prev,
                      email: { ...prev.email, reminders: checked }
                    }))
                  }
                />
              </div>
            </div>
          </div>

          {/* Notifications push */}
          <div className="space-y-4">
            <h4 className="font-medium flex items-center gap-2">
              <Smartphone className="h-4 w-4" />
              Notifications push
            </h4>
            <div className="grid gap-3 pl-6">
              <div className="flex items-center justify-between">
                <Label htmlFor="push-bookings">Nouvelles réservations</Label>
                <Switch
                  id="push-bookings"
                  checked={notificationSettings.push.bookings}
                  onCheckedChange={(checked) => 
                    setNotificationSettings(prev => ({
                      ...prev,
                      push: { ...prev.push, bookings: checked }
                    }))
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="push-messages">Messages des étudiants</Label>
                <Switch
                  id="push-messages"
                  checked={notificationSettings.push.messages}
                  onCheckedChange={(checked) => 
                    setNotificationSettings(prev => ({
                      ...prev,
                      push: { ...prev.push, messages: checked }
                    }))
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="push-reviews">Nouveaux avis</Label>
                <Switch
                  id="push-reviews"
                  checked={notificationSettings.push.reviews}
                  onCheckedChange={(checked) => 
                    setNotificationSettings(prev => ({
                      ...prev,
                      push: { ...prev.push, reviews: checked }
                    }))
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="push-reminders">Rappels de cours</Label>
                <Switch
                  id="push-reminders"
                  checked={notificationSettings.push.reminders}
                  onCheckedChange={(checked) => 
                    setNotificationSettings(prev => ({
                      ...prev,
                      push: { ...prev.push, reminders: checked }
                    }))
                  }
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <Button>
              Sauvegarder les préférences
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
