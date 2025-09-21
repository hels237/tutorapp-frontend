"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Users, Clock, Shield, Star, Search, ArrowRight, Play, Globe, Zap } from "lucide-react"
import Link from "next/link"
import { useI18n } from "@/contexts/i18n-context"
import { DebugLanguage } from "@/components/debug-language"

export default function HomePage() {
  const { t } = useI18n()

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative section-padding bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container safe-area">
          <div className="grid lg:grid-cols-2 grid-gap-lg items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  <Zap className="h-3 w-3 mr-1" />
                  {t('home.hero.badge')}
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                  {t('home.hero.title')}
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {t('home.hero.subtitle')}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8" asChild>
                  <Link href="/tutors">
                    {t('nav.findTutor')}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent" asChild>
                  <Link href="/become-tutor">
                    <Play className="mr-2 h-5 w-5" />
                    {t('nav.becomeTutor')}
                  </Link>
                </Button>
              </div>

              {/* Quick Search */}
              <div className="bg-card p-6 rounded-lg border shadow-sm">
                <h3 className="font-semibold mb-4">{t('common.quickSearch')}</h3>
                <div className="flex gap-2">
                  <Input placeholder={t('common.searchPlaceholder')} className="flex-1" />
                  <Button>
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {[t('subjects.mathematics'), t('subjects.languages'), 'English', t('subjects.sciences'), t('subjects.history')].map((subject) => (
                    <Badge
                      key={subject}
                      variant="secondary"
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {subject}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <Card className="transform rotate-2 hover:rotate-0 transition-transform duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarImage src="/smiling-female-teacher.png" />
                        <AvatarFallback>MC</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-sm">Marie Claire</CardTitle>
                        <CardDescription className="text-xs">{t('subjects.mathematics')}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center space-x-1 mb-2">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-medium">4.9</span>
                    </div>
                    <p className="text-xs text-muted-foreground">25€/h</p>
                  </CardContent>
                </Card>

                <Card className="transform -rotate-2 hover:rotate-0 transition-transform duration-300 mt-8">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarImage src="/male-teacher-professional.jpg" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-sm">Jean Dupont</CardTitle>
                        <CardDescription className="text-xs">{t('subjects.sciences')}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center space-x-1 mb-2">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-medium">4.8</span>
                    </div>
                    <p className="text-xs text-muted-foreground">30€/h</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-muted/30">
        <div className="container safe-area">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">{t('features.title')}</h2>
            <p className="text-xl text-muted-foreground content-width-md mx-auto">
              {t('features.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-gap-lg">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{t('features.qualifiedTutors')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t('features.qualifiedTutorsDesc')}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{t('features.flexibleSchedule')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t('features.flexibleScheduleDesc')}</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{t('features.securePayment')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t('features.securePaymentDesc')}</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{t('features.onlineClasses')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t('features.onlineClassesDesc')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding">
        <div className="container safe-area">
          <div className="grid md:grid-cols-4 grid-gap-lg text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">10,000+</div>
              <p className="text-muted-foreground">{t('stats.satisfiedStudents')}</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">2,500+</div>
              <p className="text-muted-foreground">{t('stats.qualifiedTutors')}</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">50+</div>
              <p className="text-muted-foreground">{t('stats.availableSubjects')}</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">4.9/5</div>
              <p className="text-muted-foreground">{t('stats.averageRating')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container safe-area text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t('cta.title')}
          </h2>
          <p className="text-xl opacity-90 content-width-md mx-auto">
            {t('cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
              <Link href="/register">
                {t('cta.startFree')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              asChild
            >
              <Link href="/demo">{t('cta.seeDemo')}</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <DebugLanguage />
    </div>
  )
}
