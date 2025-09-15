"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Download, Search, Filter, Receipt, CreditCard, Calendar } from "lucide-react"

export default function BillingPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const transactions = [
    {
      id: "TXN-001",
      date: "2024-01-15",
      description: "Cours de Mathématiques - Marie Dubois",
      amount: 47.25,
      status: "completed",
      invoice: "INV-2024-001",
    },
    {
      id: "TXN-002",
      date: "2024-01-10",
      description: "Cours de Physique - Pierre Martin",
      amount: 52.5,
      status: "completed",
      invoice: "INV-2024-002",
    },
    {
      id: "TXN-003",
      date: "2024-01-08",
      description: "Cours de Français - Sophie Leroy",
      amount: 40.0,
      status: "pending",
      invoice: null,
    },
  ]

  const invoices = [
    {
      id: "INV-2024-001",
      date: "2024-01-15",
      amount: 47.25,
      status: "paid",
      dueDate: "2024-01-15",
    },
    {
      id: "INV-2024-002",
      date: "2024-01-10",
      amount: 52.5,
      status: "paid",
      dueDate: "2024-01-10",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
      case "paid":
        return <Badge className="bg-green-100 text-green-800">Payé</Badge>
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800">En attente</Badge>
      case "failed":
        return <Badge className="bg-red-100 text-red-800">Échoué</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Facturation & Paiements</h1>
          <p className="text-gray-600">Gérez vos transactions et téléchargez vos factures</p>
        </div>

        {/* Statistiques */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total dépensé</p>
                  <p className="text-2xl font-bold text-gray-900">139,75 €</p>
                </div>
                <CreditCard className="h-8 w-8 text-emerald-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Ce mois-ci</p>
                  <p className="text-2xl font-bold text-gray-900">99,75 €</p>
                </div>
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Factures</p>
                  <p className="text-2xl font-bold text-gray-900">{invoices.length}</p>
                </div>
                <Receipt className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="transactions" className="space-y-6">
          <TabsList>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="invoices">Factures</TabsTrigger>
          </TabsList>

          <TabsContent value="transactions" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Historique des transactions</CardTitle>
                <CardDescription>Consultez l'historique complet de vos paiements</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Filtres et recherche */}
                <div className="flex gap-4 mb-6">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="Rechercher une transaction..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <Button variant="outline">
                    <Filter className="h-4 w-4 mr-2" />
                    Filtrer
                  </Button>
                </div>

                {/* Liste des transactions */}
                <div className="space-y-4">
                  {transactions.map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="font-medium">{transaction.description}</h3>
                          {getStatusBadge(transaction.status)}
                        </div>
                        <p className="text-sm text-gray-600">
                          {transaction.id} • {new Date(transaction.date).toLocaleDateString("fr-FR")}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-lg">{transaction.amount.toFixed(2)} €</p>
                        {transaction.invoice && (
                          <Button variant="ghost" size="sm" className="mt-1">
                            <Download className="h-4 w-4 mr-1" />
                            Facture
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="invoices" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Factures</CardTitle>
                <CardDescription>Téléchargez vos factures et reçus</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {invoices.map((invoice) => (
                    <div key={invoice.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="font-medium">Facture {invoice.id}</h3>
                          {getStatusBadge(invoice.status)}
                        </div>
                        <p className="text-sm text-gray-600">
                          Émise le {new Date(invoice.date).toLocaleDateString("fr-FR")} • Échéance:{" "}
                          {new Date(invoice.dueDate).toLocaleDateString("fr-FR")}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-lg">{invoice.amount.toFixed(2)} €</p>
                        <Button variant="outline" size="sm" className="mt-1 bg-transparent">
                          <Download className="h-4 w-4 mr-1" />
                          Télécharger PDF
                        </Button>
                      </div>
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
