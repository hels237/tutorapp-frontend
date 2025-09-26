"use client"

import { useState } from "react"
import { useI18n } from "@/contexts/i18n-context"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { 
  Settings, 
  ArrowLeft, 
  User, 
  Shield, 
  Bell, 
  Globe, 
  CreditCard,
  Eye,
  EyeOff,
  Lock,
  Smartphone,
  Mail,
  Save,
  Trash2,
  Download,
  Upload,
  AlertTriangle,
  CheckCircle,
  Moon,
  Sun,
  Volume2,
  Calendar,
  Clock
} from "lucide-react"

export function StudentSettingsManagement() {
  const { t } = useI18n()
  const [activeTab, setActiveTab] = useState("account")
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)

  // Mock data - Paramètres utilisateur
  const [settings, setSettings] = useState({
    account: {
      email: "marie.dubois@email.com",
      phone: "+33 6 12 34 56 78",
      timezone: "Europe/Paris",
      language: "fr",
      theme: "light"
    },
    privacy: {
      profileVisibility: "public",
      showEmail: false,
      showPhone: false,
      allowMessages: true,
      allowReviews: true,
      dataSharing: false
    },
    notifications: {
      email: true,
      push: true,
      sms: false,
      marketing: false,
      reminders: true,
      quietHours: {
        enabled: true,
        start: "22:00",
        end: "08:00"
      }
    },
    learning: {
      autoBooking: false,
      favoriteSubjects: ["mathematics", "physics"],
      studyReminders: true,
      progressReports: true,
      weeklyGoals: true
    },
    billing: {
      autoPayment: true,
      currency: "EUR",
      invoiceEmail: true,
      paymentMethod: "card"
    }
  })

  const [passwordData, setPasswordData] = useState({
    current: "",
    new: "",
    confirm: ""
  })

  const handleSaveSettings = (category: string) => {
    // Simulation de sauvegarde
    console.log(`Sauvegarde des paramètres ${category}:`, settings[category as keyof typeof settings])
    // Ici on ferait un appel API
  }

  const handlePasswordChange = () => {
    if (passwordData.new !== passwordData.confirm) {
      alert("Les mots de passe ne correspondent pas")
      return
    }
    if (passwordData.new.length < 8) {
      alert("Le mot de passe doit contenir au moins 8 caractères")
      return
    }
    // Simulation de changement de mot de passe
    console.log("Changement de mot de passe")
    setPasswordData({ current: "", new: "", confirm: "" })
    alert("Mot de passe modifié avec succès")
  }

  const handleExportData = () => {
    // Simulation d'export de données
    const dataToExport = {
      profile: "Données de profil...",
      lessons: "Historique des cours...",
      payments: "Historique des paiements...",
      exportDate: new Date().toISOString()
    }
    
    const blob = new Blob([JSON.stringify(dataToExport, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'mes-donnees-tutorapp.json'
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleDeleteAccount = () => {
    if (confirm("Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible.")) {
      if (confirm("Dernière confirmation : toutes vos données seront définitivement supprimées.")) {
        // Simulation de suppression de compte
        alert("Compte supprimé. Vous allez être redirigé...")
        // Ici on redirigerait vers la page d'accueil
      }
    }
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
              <Settings className="h-8 w-8" />
              Paramètres du compte
            </h1>
            <p className="text-muted-foreground">
              Gérez vos préférences et paramètres de compte
            </p>
          </div>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="account">Compte</TabsTrigger>
          <TabsTrigger value="privacy">Confidentialité</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="learning">Apprentissage</TabsTrigger>
          <TabsTrigger value="data">Données</TabsTrigger>
        </TabsList>

        {/* Onglet Compte */}
        <TabsContent value="account" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Informations du compte
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Adresse email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={settings.account.email}
                    onChange={(e) => setSettings(prev => ({
                      ...prev,
                      account: { ...prev.account, email: e.target.value }
                    }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Numéro de téléphone</Label>
                  <Input
                    id="phone"
                    value={settings.account.phone}
                    onChange={(e) => setSettings(prev => ({
                      ...prev,
                      account: { ...prev.account, phone: e.target.value }
                    }))}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="timezone">Fuseau horaire</Label>
                  <Select
                    value={settings.account.timezone}
                    onValueChange={(value) => setSettings(prev => ({
                      ...prev,
                      account: { ...prev.account, timezone: value }
                    }))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Europe/Paris">Paris (UTC+1)</SelectItem>
                      <SelectItem value="Europe/London">Londres (UTC+0)</SelectItem>
                      <SelectItem value="America/New_York">New York (UTC-5)</SelectItem>
                      <SelectItem value="Asia/Tokyo">Tokyo (UTC+9)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="language">Langue</Label>
                  <Select
                    value={settings.account.language}
                    onValueChange={(value) => setSettings(prev => ({
                      ...prev,
                      account: { ...prev.account, language: value }
                    }))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fr">Français</SelectItem>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Español</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="theme">Thème d'affichage</Label>
                <Select
                  value={settings.account.theme}
                  onValueChange={(value) => setSettings(prev => ({
                    ...prev,
                    account: { ...prev.account, theme: value }
                  }))}
                >
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">
                      <div className="flex items-center gap-2">
                        <Sun className="h-4 w-4" />
                        Clair
                      </div>
                    </SelectItem>
                    <SelectItem value="dark">
                      <div className="flex items-center gap-2">
                        <Moon className="h-4 w-4" />
                        Sombre
                      </div>
                    </SelectItem>
                    <SelectItem value="system">Système</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button onClick={() => handleSaveSettings('account')}>
                <Save className="h-4 w-4 mr-2" />
                Sauvegarder
              </Button>
            </CardContent>
          </Card>

          {/* Changement de mot de passe */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5" />
                Sécurité du compte
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Mot de passe actuel</Label>
                <div className="relative">
                  <Input
                    id="current-password"
                    type={showCurrentPassword ? "text" : "password"}
                    value={passwordData.current}
                    onChange={(e) => setPasswordData(prev => ({ ...prev, current: e.target.value }))}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-2 top-1/2 -translate-y-1/2"
                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                  >
                    {showCurrentPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="new-password">Nouveau mot de passe</Label>
                  <div className="relative">
                    <Input
                      id="new-password"
                      type={showNewPassword ? "text" : "password"}
                      value={passwordData.new}
                      onChange={(e) => setPasswordData(prev => ({ ...prev, new: e.target.value }))}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-2 top-1/2 -translate-y-1/2"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                    >
                      {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirmer le mot de passe</Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    value={passwordData.confirm}
                    onChange={(e) => setPasswordData(prev => ({ ...prev, confirm: e.target.value }))}
                  />
                </div>
              </div>

              <Button onClick={handlePasswordChange}>
                Changer le mot de passe
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Onglet Confidentialité */}
        <TabsContent value="privacy" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Paramètres de confidentialité
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Visibilité du profil</Label>
                    <p className="text-sm text-muted-foreground">Qui peut voir votre profil</p>
                  </div>
                  <Select
                    value={settings.privacy.profileVisibility}
                    onValueChange={(value) => setSettings(prev => ({
                      ...prev,
                      privacy: { ...prev.privacy, profileVisibility: value }
                    }))}
                  >
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="public">Public</SelectItem>
                      <SelectItem value="tutors">Tuteurs seulement</SelectItem>
                      <SelectItem value="private">Privé</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Afficher l'email</Label>
                    <p className="text-sm text-muted-foreground">Les tuteurs peuvent voir votre email</p>
                  </div>
                  <Switch
                    checked={settings.privacy.showEmail}
                    onCheckedChange={(checked) => setSettings(prev => ({
                      ...prev,
                      privacy: { ...prev.privacy, showEmail: checked }
                    }))}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Afficher le téléphone</Label>
                    <p className="text-sm text-muted-foreground">Les tuteurs peuvent voir votre numéro</p>
                  </div>
                  <Switch
                    checked={settings.privacy.showPhone}
                    onCheckedChange={(checked) => setSettings(prev => ({
                      ...prev,
                      privacy: { ...prev.privacy, showPhone: checked }
                    }))}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Autoriser les messages</Label>
                    <p className="text-sm text-muted-foreground">Les tuteurs peuvent vous envoyer des messages</p>
                  </div>
                  <Switch
                    checked={settings.privacy.allowMessages}
                    onCheckedChange={(checked) => setSettings(prev => ({
                      ...prev,
                      privacy: { ...prev.privacy, allowMessages: checked }
                    }))}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Autoriser les avis</Label>
                    <p className="text-sm text-muted-foreground">Les tuteurs peuvent laisser des avis</p>
                  </div>
                  <Switch
                    checked={settings.privacy.allowReviews}
                    onCheckedChange={(checked) => setSettings(prev => ({
                      ...prev,
                      privacy: { ...prev.privacy, allowReviews: checked }
                    }))}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Partage de données</Label>
                    <p className="text-sm text-muted-foreground">Partager des données anonymes pour améliorer le service</p>
                  </div>
                  <Switch
                    checked={settings.privacy.dataSharing}
                    onCheckedChange={(checked) => setSettings(prev => ({
                      ...prev,
                      privacy: { ...prev.privacy, dataSharing: checked }
                    }))}
                  />
                </div>
              </div>

              <Button onClick={() => handleSaveSettings('privacy')}>
                <Save className="h-4 w-4 mr-2" />
                Sauvegarder
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Onglet Notifications */}
        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Préférences de notifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Notifications par email</Label>
                    <p className="text-sm text-muted-foreground">Recevoir des notifications par email</p>
                  </div>
                  <Switch
                    checked={settings.notifications.email}
                    onCheckedChange={(checked) => setSettings(prev => ({
                      ...prev,
                      notifications: { ...prev.notifications, email: checked }
                    }))}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Notifications push</Label>
                    <p className="text-sm text-muted-foreground">Recevoir des notifications sur votre appareil</p>
                  </div>
                  <Switch
                    checked={settings.notifications.push}
                    onCheckedChange={(checked) => setSettings(prev => ({
                      ...prev,
                      notifications: { ...prev.notifications, push: checked }
                    }))}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Notifications SMS</Label>
                    <p className="text-sm text-muted-foreground">Recevoir des SMS pour les cours urgents</p>
                  </div>
                  <Switch
                    checked={settings.notifications.sms}
                    onCheckedChange={(checked) => setSettings(prev => ({
                      ...prev,
                      notifications: { ...prev.notifications, sms: checked }
                    }))}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Rappels de cours</Label>
                    <p className="text-sm text-muted-foreground">Recevoir des rappels avant les cours</p>
                  </div>
                  <Switch
                    checked={settings.notifications.reminders}
                    onCheckedChange={(checked) => setSettings(prev => ({
                      ...prev,
                      notifications: { ...prev.notifications, reminders: checked }
                    }))}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Marketing</Label>
                    <p className="text-sm text-muted-foreground">Recevoir des offres et promotions</p>
                  </div>
                  <Switch
                    checked={settings.notifications.marketing}
                    onCheckedChange={(checked) => setSettings(prev => ({
                      ...prev,
                      notifications: { ...prev.notifications, marketing: checked }
                    }))}
                  />
                </div>
              </div>

              <Button onClick={() => handleSaveSettings('notifications')}>
                <Save className="h-4 w-4 mr-2" />
                Sauvegarder
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Onglet Apprentissage */}
        <TabsContent value="learning" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Préférences d'apprentissage
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Réservation automatique</Label>
                    <p className="text-sm text-muted-foreground">Réserver automatiquement avec vos tuteurs favoris</p>
                  </div>
                  <Switch
                    checked={settings.learning.autoBooking}
                    onCheckedChange={(checked) => setSettings(prev => ({
                      ...prev,
                      learning: { ...prev.learning, autoBooking: checked }
                    }))}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Rappels d'étude</Label>
                    <p className="text-sm text-muted-foreground">Recevoir des rappels pour étudier</p>
                  </div>
                  <Switch
                    checked={settings.learning.studyReminders}
                    onCheckedChange={(checked) => setSettings(prev => ({
                      ...prev,
                      learning: { ...prev.learning, studyReminders: checked }
                    }))}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Rapports de progression</Label>
                    <p className="text-sm text-muted-foreground">Recevoir des rapports hebdomadaires</p>
                  </div>
                  <Switch
                    checked={settings.learning.progressReports}
                    onCheckedChange={(checked) => setSettings(prev => ({
                      ...prev,
                      learning: { ...prev.learning, progressReports: checked }
                    }))}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Objectifs hebdomadaires</Label>
                    <p className="text-sm text-muted-foreground">Définir des objectifs d'apprentissage automatiquement</p>
                  </div>
                  <Switch
                    checked={settings.learning.weeklyGoals}
                    onCheckedChange={(checked) => setSettings(prev => ({
                      ...prev,
                      learning: { ...prev.learning, weeklyGoals: checked }
                    }))}
                  />
                </div>
              </div>

              <Button onClick={() => handleSaveSettings('learning')}>
                <Save className="h-4 w-4 mr-2" />
                Sauvegarder
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Onglet Données */}
        <TabsContent value="data" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Download className="h-5 w-5" />
                Gestion des données
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Exporter mes données</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Téléchargez une copie de toutes vos données personnelles
                  </p>
                  <Button onClick={handleExportData}>
                    <Download className="h-4 w-4 mr-2" />
                    Télécharger mes données
                  </Button>
                </div>

                <div className="p-4 border border-red-200 rounded-lg bg-red-50">
                  <h4 className="font-medium mb-2 text-red-800 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4" />
                    Zone de danger
                  </h4>
                  <p className="text-sm text-red-700 mb-4">
                    La suppression de votre compte est définitive et irréversible. Toutes vos données seront perdues.
                  </p>
                  <Button variant="destructive" onClick={handleDeleteAccount}>
                    <Trash2 className="h-4 w-4 mr-2" />
                    Supprimer mon compte
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
