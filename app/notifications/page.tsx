"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bell, Mail, Smartphone, Settings, Check, X, Calendar, CreditCard, MessageSquare } from "lucide-react"

interface Notification {
  id: string
  type: "booking" | "payment" | "message" | "reminder" | "system"
  title: string
  message: string
  date: string
  read: boolean
  priority: "low" | "medium" | "high"
}

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      type: "booking",
      title: "Nouvelle réservation",
      message: "Marie Dupont a réservé un cours de Mathématiques pour demain à 14h00",
      date: "2024-01-15T10:30:00",
      read: false,
      priority: "high",
    },
    {
      id: "2",
      type: "payment",
      title: "Paiement reçu",
      message: "Vous avez reçu un paiement de 47,25 € pour le cours avec Thomas Leroy",
      date: "2024-01-15T09:15:00",
      read: false,
      priority: "medium",
    },
    {
      id: "3",
      type: "reminder",
      title: "Rappel de cours",
      message: "Votre cours avec Emma Moreau commence dans 1 heure",
      date: "2024-01-15T08:00:00",
      read: true,
      priority: "high",
    },
    {
      id: "4",
      type: "message",
      title: "Nouveau message",
      message: "Lucas Bernard vous a envoyé un message concernant le cours de demain",
      date: "2024-01-14T16:45:00",
      read: true,
      priority: "medium",
    },
    {
      id: "5",
      type: "system",
      title: "Mise à jour de la plateforme",
      message: "Nouvelles fonctionnalités disponibles dans votre tableau de bord",
      date: "2024-01-14T12:00:00",
      read: true,
      priority: "low",
    },
  ])

  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    smsNotifications: false,
    bookingReminders: true,
    paymentAlerts: true,
    messageAlerts: true,
    systemUpdates: false,
  })

  const markAsRead = (id: string) => {
    setNotifications(notifications.map((notif) => (notif.id === id ? { ...notif, read: true } : notif)))
  }

  const markAllAsRead = () => {
    setNotifications(notifications.map((notif) => ({ ...notif, read: true })))
  }

  const deleteNotification = (id: string) => {
    setNotifications(notifications.filter((notif) => notif.id !== id))
  }

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "booking":
        return <Calendar className="h-5 w-5 text-blue-600" />
      case "payment":
        return <CreditCard className="h-5 w-5 text-green-600" />
      case "message":
        return <MessageSquare className="h-5 w-5 text-purple-600" />
      case "reminder":
        return <Bell className="h-5 w-5 text-orange-600" />
      case "system":
        return <Settings className="h-5 w-5 text-gray-600" />
      default:
        return <Bell className="h-5 w-5 text-gray-600" />
    }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return <Badge className="bg-red-100 text-red-800">Urgent</Badge>
      case "medium":
        return <Badge className="bg-yellow-100 text-yellow-800">Important</Badge>
      case "low":
        return <Badge className="bg-gray-100 text-gray-800">Info</Badge>
      default:
        return null
    }
  }

  const unreadCount = notifications.filter((n) => !n.read).length

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Notifications</h1>
          <p className="text-gray-600">Gérez vos notifications et préférences</p>
        </div>

        <Tabs defaultValue="notifications" className="space-y-6">
          <TabsList>
            <TabsTrigger value="notifications" className="relative">
              Notifications
              {unreadCount > 0 && (
                <Badge className="ml-2 bg-red-500 text-white text-xs px-1.5 py-0.5">{unreadCount}</Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="settings">Paramètres</TabsTrigger>
          </TabsList>

          <TabsContent value="notifications" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Bell className="h-5 w-5" />
                      Toutes les notifications ({notifications.length})
                    </CardTitle>
                    <CardDescription>
                      {unreadCount > 0
                        ? `${unreadCount} notification${unreadCount > 1 ? "s" : ""} non lue${unreadCount > 1 ? "s" : ""}`
                        : "Toutes les notifications sont lues"}
                    </CardDescription>
                  </div>
                  {unreadCount > 0 && (
                    <Button onClick={markAllAsRead} variant="outline">
                      <Check className="h-4 w-4 mr-2" />
                      Tout marquer comme lu
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {notifications.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                      <Bell className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                      <p>Aucune notification</p>
                    </div>
                  ) : (
                    notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className={`flex items-start gap-4 p-4 border rounded-lg ${
                          !notification.read ? "bg-blue-50 border-blue-200" : "bg-white"
                        }`}
                      >
                        <div className="flex-shrink-0 mt-1">{getNotificationIcon(notification.type)}</div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className={`font-medium ${!notification.read ? "text-blue-900" : "text-gray-900"}`}>
                              {notification.title}
                            </h3>
                            {getPriorityBadge(notification.priority)}
                            {!notification.read && <div className="w-2 h-2 bg-blue-600 rounded-full" />}
                          </div>
                          <p className="text-gray-600 text-sm mb-2">{notification.message}</p>
                          <p className="text-xs text-gray-500">{new Date(notification.date).toLocaleString("fr-FR")}</p>
                        </div>
                        <div className="flex gap-2">
                          {!notification.read && (
                            <Button size="sm" variant="ghost" onClick={() => markAsRead(notification.id)}>
                              <Check className="h-4 w-4" />
                            </Button>
                          )}
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => deleteNotification(notification.id)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Préférences de notification
                </CardTitle>
                <CardDescription>Configurez comment vous souhaitez recevoir les notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Canaux de notification */}
                <div>
                  <h3 className="font-semibold mb-4">Canaux de notification</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-blue-600" />
                        <div>
                          <p className="font-medium">Email</p>
                          <p className="text-sm text-gray-600">Recevoir les notifications par email</p>
                        </div>
                      </div>
                      <Switch
                        checked={settings.emailNotifications}
                        onCheckedChange={(checked) => setSettings({ ...settings, emailNotifications: checked })}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Bell className="h-5 w-5 text-green-600" />
                        <div>
                          <p className="font-medium">Notifications push</p>
                          <p className="text-sm text-gray-600">Recevoir les notifications dans le navigateur</p>
                        </div>
                      </div>
                      <Switch
                        checked={settings.pushNotifications}
                        onCheckedChange={(checked) => setSettings({ ...settings, pushNotifications: checked })}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Smartphone className="h-5 w-5 text-purple-600" />
                        <div>
                          <p className="font-medium">SMS</p>
                          <p className="text-sm text-gray-600">Recevoir les notifications par SMS</p>
                        </div>
                      </div>
                      <Switch
                        checked={settings.smsNotifications}
                        onCheckedChange={(checked) => setSettings({ ...settings, smsNotifications: checked })}
                      />
                    </div>
                  </div>
                </div>

                {/* Types de notifications */}
                <div>
                  <h3 className="font-semibold mb-4">Types de notifications</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Rappels de cours</p>
                        <p className="text-sm text-gray-600">Notifications avant le début des cours</p>
                      </div>
                      <Switch
                        checked={settings.bookingReminders}
                        onCheckedChange={(checked) => setSettings({ ...settings, bookingReminders: checked })}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Alertes de paiement</p>
                        <p className="text-sm text-gray-600">Notifications pour les paiements et factures</p>
                      </div>
                      <Switch
                        checked={settings.paymentAlerts}
                        onCheckedChange={(checked) => setSettings({ ...settings, paymentAlerts: checked })}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Messages</p>
                        <p className="text-sm text-gray-600">Notifications pour les nouveaux messages</p>
                      </div>
                      <Switch
                        checked={settings.messageAlerts}
                        onCheckedChange={(checked) => setSettings({ ...settings, messageAlerts: checked })}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Mises à jour système</p>
                        <p className="text-sm text-gray-600">Notifications pour les nouvelles fonctionnalités</p>
                      </div>
                      <Switch
                        checked={settings.systemUpdates}
                        onCheckedChange={(checked) => setSettings({ ...settings, systemUpdates: checked })}
                      />
                    </div>
                  </div>
                </div>

                <Button className="w-full">Sauvegarder les préférences</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
