import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Clock, Euro, Users, CheckCircle, Upload, Globe, Shield, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function BecomeTutorPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container safe-area">
          <div className="grid lg:grid-cols-2 grid-gap-lg items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  <GraduationCap className="h-3 w-3 mr-1" />
                  Rejoignez notre équipe
                </Badge>
                <h1 className="heading-hero text-4xl lg:text-6xl text-balance leading-tight">
                  Devenez tuteur et
                  <span className="text-primary"> partagez vos connaissances</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Enseignez ce que vous aimez, aidez les étudiants à réussir et gagnez jusqu'à 50€/heure avec des horaires
                  flexibles.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm">Horaires flexibles</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm">Revenus attractifs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm">Support dédié</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm">Outils intégrés</span>
                </div>
              </div>

              <Button size="lg" className="text-lg px-8" asChild>
                <Link href="#candidature">
                  Postuler maintenant
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <Euro className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">15-50€/h</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Fixez vos tarifs selon votre expérience</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">2500+</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Tuteurs actifs sur la plateforme</p>
                </CardContent>
              </Card>

              <Card className="col-span-2">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">Horaires flexibles</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Choisissez vos créneaux selon votre disponibilité</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="section-padding bg-muted/30">
        <div className="container safe-area">
          <div className="text-center space-y-4 mb-16">
            <h2 className="heading-xl text-3xl lg:text-4xl">Critères pour devenir tuteur</h2>
            <p className="text-xl text-muted-foreground content-width-md mx-auto">
              Nous recherchons des tuteurs passionnés et qualifiés
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-gap-lg">
            <Card>
              <CardHeader>
                <GraduationCap className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Qualifications académiques</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Bac+3 minimum ou équivalent</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Expertise dans votre domaine</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Expérience pédagogique appréciée</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Globe className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Compétences techniques</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Connexion internet stable</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Webcam et micro de qualité</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Maîtrise des outils numériques</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Vérifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Vérification d'identité</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Vérification des diplômes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Entretien de validation</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section-padding">
        <div className="container safe-area content-width-xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="heading-xl text-3xl lg:text-4xl">Postulez maintenant</h2>
            <p className="text-xl text-muted-foreground content-width-md mx-auto">
              Remplissez ce formulaire pour commencer votre parcours de tuteur
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Informations personnelles</CardTitle>
              <CardDescription>Ces informations nous aideront à mieux vous connaître</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Prénom *</Label>
                  <Input id="firstName" placeholder="Votre prénom" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Nom *</Label>
                  <Input id="lastName" placeholder="Votre nom" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="votre@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone *</Label>
                  <Input id="phone" placeholder="+33 1 23 45 67 89" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Présentation personnelle *</Label>
                <Textarea
                  id="bio"
                  placeholder="Parlez-nous de vous, votre parcours, votre passion pour l'enseignement..."
                  className="min-h-[120px]"
                />
              </div>

              <div className="space-y-4">
                <Label>Matières que vous souhaitez enseigner *</Label>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    "Mathématiques",
                    "Physique",
                    "Chimie",
                    "Biologie",
                    "Français",
                    "Anglais",
                    "Espagnol",
                    "Histoire",
                    "Géographie",
                    "Philosophie",
                    "Économie",
                    "Informatique",
                  ].map((subject) => (
                    <div key={subject} className="flex items-center space-x-2">
                      <Checkbox id={subject} />
                      <Label htmlFor={subject} className="text-sm">
                        {subject}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="education">Niveau d'études *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez votre niveau" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bac+3">Bac+3 (Licence)</SelectItem>
                      <SelectItem value="bac+5">Bac+5 (Master)</SelectItem>
                      <SelectItem value="bac+8">Bac+8 (Doctorat)</SelectItem>
                      <SelectItem value="other">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="experience">Expérience d'enseignement</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Votre expérience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">Aucune expérience</SelectItem>
                      <SelectItem value="1-2">1-2 ans</SelectItem>
                      <SelectItem value="3-5">3-5 ans</SelectItem>
                      <SelectItem value="5+">Plus de 5 ans</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="hourlyRate">Tarif horaire souhaité (€) *</Label>
                <Input id="hourlyRate" type="number" placeholder="25" min="15" max="50" />
                <p className="text-sm text-muted-foreground">Tarif recommandé : 20-35€/h selon votre expérience</p>
              </div>

              <div className="space-y-4">
                <Label>Documents à fournir *</Label>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4">
                    <div className="flex items-center space-x-3">
                      <Upload className="h-8 w-8 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Pièce d'identité</p>
                        <p className="text-sm text-muted-foreground">Format PDF, max 5MB</p>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full mt-3 bg-transparent">
                      Télécharger
                    </Button>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-center space-x-3">
                      <Upload className="h-8 w-8 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Diplômes</p>
                        <p className="text-sm text-muted-foreground">Format PDF, max 10MB</p>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full mt-3 bg-transparent">
                      Télécharger
                    </Button>
                  </Card>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms" className="text-sm">
                    J'accepte les{" "}
                    <Link href="/terms" className="text-primary hover:underline">
                      conditions d'utilisation
                    </Link>{" "}
                    et la{" "}
                    <Link href="/privacy" className="text-primary hover:underline">
                      politique de confidentialité
                    </Link>
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="newsletter" />
                  <Label htmlFor="newsletter" className="text-sm">
                    Je souhaite recevoir des informations sur les opportunités d'enseignement
                  </Label>
                </div>
              </div>

              <Button className="w-full" size="lg">
                Soumettre ma candidature
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-muted/30">
        <div className="container safe-area">
          <div className="text-center space-y-4 mb-16">
            <h2 className="heading-xl text-3xl lg:text-4xl">Processus de sélection</h2>
            <p className="text-xl text-muted-foreground content-width-md mx-auto">
              Un processus simple et transparent en 4 étapes
            </p>
          </div>

          <div className="grid md:grid-cols-4 grid-gap-lg">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="font-semibold">Candidature</h3>
              <p className="text-sm text-muted-foreground">Remplissez le formulaire et téléchargez vos documents</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="font-semibold">Vérification</h3>
              <p className="text-sm text-muted-foreground">
                Nous vérifions vos qualifications et documents (2-3 jours)
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="font-semibold">Entretien</h3>
              <p className="text-sm text-muted-foreground">Entretien vidéo de 30 minutes pour valider votre profil</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="font-semibold">Activation</h3>
              <p className="text-sm text-muted-foreground">
                Votre profil est activé et vous pouvez commencer à enseigner
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container safe-area content-width-xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="heading-xl text-3xl lg:text-4xl">Questions fréquentes</h2>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Combien puis-je gagner en tant que tuteur ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Nos tuteurs gagnent entre 15€ et 50€ par heure selon leur expérience et leurs qualifications. La
                  plateforme prélève une commission de 15% sur chaque cours.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Combien de temps prend le processus de validation ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Le processus complet prend généralement 5-7 jours ouvrés, incluant la vérification des documents et
                  l'entretien de validation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Puis-je enseigner plusieurs matières ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Oui, vous pouvez enseigner plusieurs matières si vous avez les qualifications nécessaires pour chacune
                  d'entre elles.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Comment fonctionne le paiement ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Les paiements sont effectués automatiquement 48h après chaque cours via virement bancaire ou PayPal
                  selon votre préférence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
