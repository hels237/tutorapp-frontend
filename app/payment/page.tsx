"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { CreditCard, Lock, Shield, CheckCircle } from "lucide-react"

export default function PaymentPage() {
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState("card")

  const handlePayment = async () => {
    setIsProcessing(true)
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsProcessing(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Paiement Sécurisé</h1>
          <p className="text-gray-600">Finalisez votre réservation de cours</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Résumé de la commande */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-emerald-600" />
                Résumé de votre réservation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">Cours de Mathématiques</h3>
                  <p className="text-sm text-gray-600">avec Marie Dubois</p>
                  <p className="text-sm text-gray-600">Niveau: Terminale S</p>
                </div>
                <Badge variant="secondary">1h30</Badge>
              </div>

              <div className="text-sm text-gray-600">
                <p>📅 Lundi 15 janvier 2024</p>
                <p>🕐 14:00 - 15:30</p>
                <p>💻 Cours en ligne</p>
              </div>

              <Separator />

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Cours (1h30)</span>
                  <span>45,00 €</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Frais de service</span>
                  <span>2,25 €</span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>47,25 €</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Formulaire de paiement */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-emerald-600" />
                Informations de paiement
              </CardTitle>
              <CardDescription>Paiement sécurisé avec Stripe - Certifié PCI DSS</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Méthodes de paiement */}
              <div className="space-y-3">
                <Label>Méthode de paiement</Label>
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    variant={paymentMethod === "card" ? "default" : "outline"}
                    onClick={() => setPaymentMethod("card")}
                    className="h-12 justify-start"
                  >
                    <CreditCard className="h-4 w-4 mr-2" />
                    Carte bancaire
                  </Button>
                  <Button
                    variant={paymentMethod === "paypal" ? "default" : "outline"}
                    onClick={() => setPaymentMethod("paypal")}
                    className="h-12 justify-start"
                  >
                    <div className="w-4 h-4 mr-2 bg-blue-600 rounded-sm flex items-center justify-center text-white text-xs font-bold">
                      P
                    </div>
                    PayPal
                  </Button>
                </div>
              </div>

              {paymentMethod === "card" && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="cardNumber">Numéro de carte</Label>
                    <Input id="cardNumber" placeholder="1234 5678 9012 3456" className="mt-1" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiry">Date d'expiration</Label>
                      <Input id="expiry" placeholder="MM/AA" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="cvc">CVC</Label>
                      <Input id="cvc" placeholder="123" className="mt-1" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="cardName">Nom sur la carte</Label>
                    <Input id="cardName" placeholder="Jean Dupont" className="mt-1" />
                  </div>
                </div>
              )}

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Shield className="h-4 w-4" />
                <span>Vos données sont protégées par un chiffrement SSL 256-bit</span>
              </div>

              <Button onClick={handlePayment} disabled={isProcessing} className="w-full h-12 text-lg">
                {isProcessing ? "Traitement en cours..." : "Payer 47,25 €"}
              </Button>

              <p className="text-xs text-gray-500 text-center">
                En cliquant sur "Payer", vous acceptez nos conditions d'utilisation et notre politique de remboursement.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
