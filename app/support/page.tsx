"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { HelpCircle, MessageCircle, Phone, Mail, Search, Send, Clock } from "lucide-react"

export default function SupportPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [contactForm, setContactForm] = useState({
    subject: "",
    category: "",
    message: "",
    priority: "medium",
  })

  const faqItems = [
    {
      question: "Comment réserver un cours avec un tuteur ?",
      answer:
        "Pour réserver un cours, rendez-vous sur la page 'Trouver un tuteur', utilisez les filtres pour trouver le tuteur idéal, consultez son profil et cliquez sur 'Réserver un cours'. Choisissez un créneau disponible et procédez au paiement.",
    },
    {
      question: "Comment annuler ou reprogrammer un cours ?",
      answer:
        "Vous pouvez annuler ou reprogrammer un cours jusqu'à 24h avant le début. Rendez-vous dans votre tableau de bord, section 'Mes cours', et cliquez sur le cours concerné. Les annulations tardives peuvent entraîner des frais.",
    },
    {
      question: "Quels sont les moyens de paiement acceptés ?",
      answer:
        "Nous acceptons les cartes bancaires (Visa, Mastercard, American Express) et PayPal. Tous les paiements sont sécurisés par Stripe et certifiés PCI DSS.",
    },
    {
      question: "Comment fonctionne la salle de cours virtuelle ?",
      answer:
        "La salle de cours virtuelle intègre la visioconférence, un tableau blanc interactif, le partage d'écran et de fichiers. Vous recevrez un lien d'accès par email 15 minutes avant le début du cours.",
    },
    {
      question: "Puis-je obtenir un remboursement ?",
      answer:
        "Les remboursements sont possibles en cas d'annulation plus de 24h à l'avance ou si le tuteur annule le cours. Les remboursements sont traités sous 5-7 jours ouvrés.",
    },
    {
      question: "Comment devenir tuteur sur la plateforme ?",
      answer:
        "Pour devenir tuteur, créez un compte, complétez votre profil avec vos qualifications, définissez vos matières et tarifs, puis soumettez votre candidature. Notre équipe vérifiera vos informations avant validation.",
    },
  ]

  const tickets = [
    {
      id: "TICKET-001",
      subject: "Problème de connexion à la salle virtuelle",
      status: "open",
      priority: "high",
      date: "2024-01-15",
      lastUpdate: "2024-01-15",
    },
    {
      id: "TICKET-002",
      subject: "Question sur la facturation",
      status: "resolved",
      priority: "medium",
      date: "2024-01-12",
      lastUpdate: "2024-01-13",
    },
  ]

  const filteredFAQ = faqItems.filter(
    (item) =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Contact form submitted:", contactForm)
    setContactForm({ subject: "", category: "", message: "", priority: "medium" })
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "open":
        return <Badge className="bg-blue-100 text-blue-800">Ouvert</Badge>
      case "in-progress":
        return <Badge className="bg-yellow-100 text-yellow-800">En cours</Badge>
      case "resolved":
        return <Badge className="bg-green-100 text-green-800">Résolu</Badge>
      case "closed":
        return <Badge className="bg-gray-100 text-gray-800">Fermé</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return <Badge className="bg-red-100 text-red-800">Urgent</Badge>
      case "medium":
        return <Badge className="bg-yellow-100 text-yellow-800">Normal</Badge>
      case "low":
        return <Badge className="bg-gray-100 text-gray-800">Faible</Badge>
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Centre d'aide</h1>
          <p className="text-gray-600">Trouvez des réponses à vos questions ou contactez notre équipe</p>
        </div>

        {/* Contact rapide */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="text-center">
            <CardContent className="p-6">
              <MessageCircle className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Chat en direct</h3>
              <p className="text-sm text-gray-600 mb-4">Disponible 9h-18h, du lundi au vendredi</p>
              <Button className="w-full">Démarrer le chat</Button>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <Phone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Téléphone</h3>
              <p className="text-sm text-gray-600 mb-4">+33 1 23 45 67 89</p>
              <Button variant="outline" className="w-full bg-transparent">
                Appeler
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <Mail className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-sm text-gray-600 mb-4">support@tutoring-platform.fr</p>
              <Button variant="outline" className="w-full bg-transparent">
                Envoyer un email
              </Button>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="faq" className="space-y-6">
          <TabsList>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
            <TabsTrigger value="contact">Nous contacter</TabsTrigger>
            <TabsTrigger value="tickets">Mes tickets</TabsTrigger>
          </TabsList>

          <TabsContent value="faq" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="h-5 w-5" />
                  Questions fréquemment posées
                </CardTitle>
                <CardDescription>Trouvez rapidement des réponses à vos questions</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Barre de recherche */}
                <div className="relative mb-6">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Rechercher dans la FAQ..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>

                {/* FAQ Accordion */}
                <Accordion type="single" collapsible className="space-y-2">
                  {filteredFAQ.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4">
                      <AccordionTrigger className="text-left hover:no-underline">{item.question}</AccordionTrigger>
                      <AccordionContent className="text-gray-600 pb-4">{item.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                {filteredFAQ.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    <HelpCircle className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                    <p>Aucune question trouvée pour "{searchTerm}"</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contact" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Formulaire de contact</CardTitle>
                <CardDescription>Décrivez votre problème et nous vous répondrons rapidement</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="subject">Sujet</Label>
                      <Input
                        id="subject"
                        value={contactForm.subject}
                        onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                        placeholder="Résumé de votre demande"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="category">Catégorie</Label>
                      <Select onValueChange={(value) => setContactForm({ ...contactForm, category: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionner une catégorie" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="technical">Problème technique</SelectItem>
                          <SelectItem value="billing">Facturation</SelectItem>
                          <SelectItem value="booking">Réservation</SelectItem>
                          <SelectItem value="account">Compte utilisateur</SelectItem>
                          <SelectItem value="other">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="priority">Priorité</Label>
                    <Select
                      value={contactForm.priority}
                      onValueChange={(value) => setContactForm({ ...contactForm, priority: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Faible</SelectItem>
                        <SelectItem value="medium">Normal</SelectItem>
                        <SelectItem value="high">Urgent</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      placeholder="Décrivez votre problème en détail..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Envoyer la demande
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tickets" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Mes tickets de support
                </CardTitle>
                <CardDescription>Suivez l'état de vos demandes de support</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {tickets.map((ticket) => (
                    <div key={ticket.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="font-medium">{ticket.subject}</h3>
                          {getStatusBadge(ticket.status)}
                          {getPriorityBadge(ticket.priority)}
                        </div>
                        <p className="text-sm text-gray-600">
                          {ticket.id} • Créé le {new Date(ticket.date).toLocaleDateString("fr-FR")} • Dernière mise à
                          jour: {new Date(ticket.lastUpdate).toLocaleDateString("fr-FR")}
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        Voir détails
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
