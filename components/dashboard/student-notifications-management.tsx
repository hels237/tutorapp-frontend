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
  Star
} from "lucide-react"

export function StudentNotificationsManagement() {
  const { t } = useI18n()
  const [activeTab, setActiveTab] = useState("all")

  // Mock data - Notifications
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "lesson",
      title: "Cours de Mathématiques confirmé",
      message: "Votre cours avec Prof. Jean Martin est confirmé pour demain à 14h00",
      time: "Il y a 2 heures",
      read: false,
      priority: "high",
      avatar: "/placeholder.svg?height=40&width=40",
      actionUrl: "/dashboard/student"
    },
    {
      id: 2,
      type: "payment",
      title: "Paiement effectué",
      message: "Votre paiement de 35€ pour le cours de Physique a été traité avec succès",
      time: "Il y a 5 heures",
      read: false,
      priority: "medium",
      avatar: null,
      actionUrl: "/dashboard/student?tab=payments"
    },
    {
      id: 3,
      type: "message",
      title: "Nouveau message de Dr. Marie Leroy",
      message: "Bonjour Marie, j'ai préparé des exercices supplémentaires pour notre prochain cours...",
      time: "Hier à 18:30",
      read: true,
      priority: "medium",
      avatar: "/placeholder.svg?height=40&width=40",
      actionUrl: "/messages"
    },
    {
      id: 4,
      type: "reminder",
      title: "Rappel: Cours dans 1 heure",
      message: "N'oubliez pas votre cours de Chimie avec Prof. Durand à 16h00",
      time: "Hier à 15:00",
      read: true,
      priority: "high",
      avatar: "/placeholder.svg?height=40&width=40",
      actionUrl: "/dashboard/student"
    },
    {
      id: 5,
      type: "system",
      title: "Mise à jour de votre profil",
      message: "Vos informations de profil ont été mises à jour avec succès",
      time: "Il y a 2 jours",
      read: true,
      priority: "low",
      avatar: null,
      actionUrl: "/dashboard/student/profile"
    },
    {
      id: 6,
      type: "achievement",
      title: "Félicitations ! Objectif atteint",
      message: "Vous avez terminé votre objectif 'Maîtriser les fonctions exponentielles'",
      time: "Il y a 3 jours",
      read: true,
      priority: "medium",
      avatar: null,
      actionUrl: "/dashboard/student/goals"
    }
  ])

  // Paramètres de notifications
  const [notificationSettings, setNotificationSettings] = useState({
    email: {
      lessons: true,
      messages: true,
      payments: true,
      reminders: true,
      marketing: false
    },
    push: {
      lessons: true,
      messages: true,
      payments: false,
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
    if (activeTab === "lessons") return notif.type === "lesson" || notif.type === "reminder"
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
      case "lesson": return <BookOpen className="h-4 w-4" />
      case "message": return <MessageCircle className="h-4 w-4" />
      case "payment": return <CreditCard className="h-4 w-4" />
      case "reminder": return <Clock className="h-4 w-4" />
      case "system": return <Settings className="h-4 w-4" />
      case "achievement": return <Star className="h-4 w-4" />
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
    lessons: notifications.filter(n => n.type === "lesson" || n.type === "reminder").length,
    messages: notifications.filter(n => n.type === "message").length,
    payments: notifications.filter(n => n.type === "payment").length
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" asChild>
            <Link href="/dashboard/student">
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
          <TabsTrigger value="lessons">Cours ({stats.lessons})</TabsTrigger>
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
                <Label htmlFor="email-lessons">Cours et rendez-vous</Label>
                <Switch
                  id="email-lessons"
                  checked={notificationSettings.email.lessons}
                  onCheckedChange={(checked) => 
                    setNotificationSettings(prev => ({
                      ...prev,
                      email: { ...prev.email, lessons: checked }
                    }))
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="email-messages">Messages des tuteurs</Label>
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
                <Label htmlFor="email-payments">Paiements et factures</Label>
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
              <div className="flex items-center justify-between">
                <Label htmlFor="email-marketing">Offres et promotions</Label>
                <Switch
                  id="email-marketing"
                  checked={notificationSettings.email.marketing}
                  onCheckedChange={(checked) => 
                    setNotificationSettings(prev => ({
                      ...prev,
                      email: { ...prev.email, marketing: checked }
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
                <Label htmlFor="push-lessons">Cours et rendez-vous</Label>
                <Switch
                  id="push-lessons"
                  checked={notificationSettings.push.lessons}
                  onCheckedChange={(checked) => 
                    setNotificationSettings(prev => ({
                      ...prev,
                      push: { ...prev.push, lessons: checked }
                    }))
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="push-messages">Messages des tuteurs</Label>
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

          {/* Paramètres généraux */}
          <div className="space-y-4">
            <h4 className="font-medium">Paramètres généraux</h4>
            <div className="grid gap-3 pl-6">
              <div className="flex items-center justify-between">
                <Label htmlFor="sound">Sons de notification</Label>
                <Switch
                  id="sound"
                  checked={notificationSettings.sound}
                  onCheckedChange={(checked) => 
                    setNotificationSettings(prev => ({ ...prev, sound: checked }))
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="dnd">Mode ne pas déranger</Label>
                <Switch
                  id="dnd"
                  checked={notificationSettings.doNotDisturb}
                  onCheckedChange={(checked) => 
                    setNotificationSettings(prev => ({ ...prev, doNotDisturb: checked }))
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
