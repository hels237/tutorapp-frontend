"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Calendar, Star, Users, Video, FileText, Settings, Bell, Euro, CheckCircle } from "lucide-react"
import { useI18n } from "@/contexts/i18n-context"
import Link from "next/link"

export function TutorDashboard() {
  const { t } = useI18n()
  const [activeTab, setActiveTab] = useState("overview")

  // Mock data
  const tutor = {
    name: "Prof. Jean Martin",
    email: "jean.martin@email.com",
    avatar: "/placeholder.svg?height=80&width=80",
    subjects: ["Mathématiques", "Physique"],
    rating: 4.9,
    totalStudents: 45,
    status: "verified",
  }

  const upcomingLessons = [
    {
      id: 1,
      student: "Marie D.",
      subject: "Mathématiques",
      date: "2024-01-15",
      time: "14:00",
      duration: "1h",
      status: "confirmed",
    },
    {
      id: 2,
      student: "Pierre L.",
      subject: "Physique",
      date: "2024-01-15",
      time: "16:00",
      duration: "1h30",
      status: "pending",
    },
  ]

  const earnings = {
    thisMonth: 1250,
    lastMonth: 1100,
    pending: 350,
    total: 8500,
  }

  const students = [
    {
      id: 1,
      name: "Marie Dubois",
      subject: "Mathématiques",
      level: "Terminale S",
      lessons: 12,
      lastLesson: "2024-01-10",
      progress: 85,
    },
    {
      id: 2,
      name: "Pierre Leroy",
      subject: "Physique",
      level: "1ère S",
      lessons: 8,
      lastLesson: "2024-01-12",
      progress: 70,
    },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="font-playfair text-3xl font-bold">{t('dashboard.tutor.title')}</h1>
          <p className="text-muted-foreground">{t('dashboard.tutor.welcome')} {tutor.name}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link href="/dashboard/tutor/notifications">
              <Bell className="h-4 w-4 mr-2" />
              {t('dashboard.tutor.notifications')}
            </Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link href="/dashboard/tutor/profile">
              <Settings className="h-4 w-4 mr-2" />
              {t('dashboard.tutor.settings')}
            </Link>
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">{t('dashboard.tutor.tabs.overview')}</TabsTrigger>
          <TabsTrigger value="schedule">{t('dashboard.tutor.tabs.schedule')}</TabsTrigger>
          <TabsTrigger value="students">{t('dashboard.tutor.tabs.students')}</TabsTrigger>
          <TabsTrigger value="earnings">{t('dashboard.tutor.tabs.earnings')}</TabsTrigger>
          <TabsTrigger value="profile">{t('dashboard.tutor.tabs.profile')}</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{t('dashboard.tutor.stats.lessonsThisMonth')}</CardTitle>
                <BookOpen className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">28</div>
                <p className="text-xs text-muted-foreground">+5 {t('dashboard.tutor.stats.lessonsCompare')}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{t('dashboard.tutor.stats.activeStudents')}</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{tutor.totalStudents}</div>
                <p className="text-xs text-muted-foreground">+3 {t('dashboard.tutor.stats.newStudents')}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{t('dashboard.tutor.stats.averageRating')}</CardTitle>
                <Star className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{tutor.rating}/5</div>
                <p className="text-xs text-muted-foreground">{t('dashboard.tutor.stats.basedOnReviews')} 127 {t('dashboard.tutor.stats.reviews')}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{t('dashboard.tutor.stats.earningsThisMonth')}</CardTitle>
                <Euro className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{earnings.thisMonth}€</div>
                <p className="text-xs text-muted-foreground">
                  +{earnings.thisMonth - earnings.lastMonth}€ {t('dashboard.tutor.stats.vsLastMonth')}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Status Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
{t('dashboard.tutor.profileStatus.title')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-green-600">{t('dashboard.tutor.profileStatus.verified')}</p>
                  <p className="text-sm text-muted-foreground">{t('dashboard.tutor.profileStatus.description')}</p>
                </div>
                <Badge variant="default" className="bg-green-100 text-green-800">
{t('dashboard.tutor.profileStatus.badge')}
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Lessons */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
{t('dashboard.tutor.upcomingLessons.title')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingLessons.map((lesson) => (
                  <div key={lesson.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <BookOpen className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{lesson.subject}</h4>
                        <p className="text-sm text-muted-foreground">{t('dashboard.tutor.upcomingLessons.with')} {lesson.student}</p>
                        <p className="text-xs text-muted-foreground">
                          {lesson.date} à {lesson.time} ({lesson.duration})
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={lesson.status === "confirmed" ? "default" : "secondary"}>
{lesson.status === "confirmed" ? t('dashboard.tutor.upcomingLessons.confirmed') : t('dashboard.tutor.upcomingLessons.pending')}
                      </Badge>
                      <Button size="sm">
                        <Video className="h-4 w-4 mr-2" />
{t('dashboard.tutor.upcomingLessons.start')}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="schedule" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>{t('dashboard.tutor.schedule.title')}</CardTitle>
              <CardDescription>{t('dashboard.tutor.schedule.description')}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{t('dashboard.tutor.schedule.calendar')}</h3>
                <p className="text-muted-foreground mb-4">{t('dashboard.tutor.schedule.calendarDescription')}</p>
                <Button asChild>
                  <Link href="/dashboard/tutor/availability">
                    <Calendar className="h-4 w-4 mr-2" />
                    {t('dashboard.tutor.schedule.openCalendar')}
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="students" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>{t('dashboard.tutor.students.title')}</CardTitle>
              <CardDescription>{t('dashboard.tutor.students.description')}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {students.map((student) => (
                  <div key={student.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg?height=40&width=40" />
                        <AvatarFallback>
                          {student.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold">{student.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {student.subject} - {student.level}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {student.lessons} {t('dashboard.tutor.students.lessons')} • {t('dashboard.tutor.students.lastLesson')} {student.lastLesson}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-sm font-medium">{t('dashboard.tutor.students.progress')}</span>
                        <span className="text-sm text-muted-foreground">{student.progress}%</span>
                      </div>
                      <Progress value={student.progress} className="w-24 h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="earnings" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>{t('dashboard.tutor.earnings.title')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">{t('dashboard.tutor.earnings.thisMonth')}</span>
                  <span className="font-semibold">{earnings.thisMonth}€</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">{t('dashboard.tutor.earnings.lastMonth')}</span>
                  <span className="font-semibold">{earnings.lastMonth}€</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">{t('dashboard.tutor.earnings.pending')}</span>
                  <span className="font-semibold text-orange-600">{earnings.pending}€</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t">
                  <span className="font-medium">{t('dashboard.tutor.earnings.totalEarned')}</span>
                  <span className="font-bold text-lg">{earnings.total}€</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t('dashboard.tutor.earnings.payments')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">{t('dashboard.tutor.earnings.paymentMethod')}</h4>
                    <p className="text-sm text-muted-foreground">{t('dashboard.tutor.earnings.bankTransfer')}</p>
                    <Button variant="outline" size="sm">
{t('dashboard.tutor.earnings.modify')}
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">{t('dashboard.tutor.earnings.nextPayment')}</h4>
                    <p className="text-sm text-muted-foreground">15 janvier 2024</p>
                    <p className="text-sm font-medium">{earnings.pending}€</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="profile" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>{t('dashboard.tutor.profile.publicProfile')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src={tutor.avatar || "/placeholder.svg"} />
                    <AvatarFallback>
                      {tutor.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-lg">{tutor.name}</h3>
                    <p className="text-muted-foreground">{tutor.subjects.join(", ")}</p>
                    <div className="flex items-center space-x-1 mt-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{tutor.rating}</span>
                    </div>
                  </div>
                </div>
                <Button className="w-full" asChild>
                  <Link href="/dashboard/tutor/profile">{t('dashboard.tutor.profile.editPublicProfile')}</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t('dashboard.tutor.profile.accountSettings')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-medium">{t('dashboard.tutor.profile.availability')}</h4>
                  <p className="text-sm text-muted-foreground">{t('dashboard.tutor.profile.availabilityDescription')}</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/dashboard/tutor/availability">{t('dashboard.tutor.profile.configure')}</Link>
                  </Button>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">{t('dashboard.tutor.profile.rates')}</h4>
                  <p className="text-sm text-muted-foreground">{t('dashboard.tutor.profile.ratesDescription')}</p>
                  <Button variant="outline" size="sm">
                    <Euro className="h-4 w-4 mr-2" />
{t('dashboard.tutor.earnings.modify')}
                  </Button>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">{t('dashboard.tutor.profile.documents')}</h4>
                  <p className="text-sm text-muted-foreground">{t('dashboard.tutor.profile.documentsDescription')}</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/dashboard/tutor/profile">
                      <FileText className="h-4 w-4 mr-2" />
                      {t('dashboard.tutor.profile.manage')}
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
