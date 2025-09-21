"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { TutorCard } from "./tutor-card"
import { Search, Filter, SlidersHorizontal, Euro, Languages, CheckCircle, Clock } from "lucide-react"
import { useI18n } from "@/contexts/i18n-context"

// Mock data
const mockTutors = [
  {
    id: 1,
    name: "Prof. Jean Martin",
    avatar: "/placeholder.svg?height=80&width=80",
    subjects: ["Mathématiques", "Physique"],
    level: ["Lycée", "Université"],
    rating: 4.9,
    reviewCount: 127,
    hourlyRate: 35,
    location: "Paris",
    languages: ["Français", "Anglais"],
    experience: 8,
    description:
      "Professeur agrégé de mathématiques avec 8 ans d'expérience. Spécialisé dans la préparation au baccalauréat et aux concours.",
    availability: "Disponible",
    verified: true,
    responseTime: "< 1h",
    completedLessons: 450,
  },
  {
    id: 2,
    name: "Dr. Marie Leroy",
    avatar: "/placeholder.svg?height=80&width=80",
    subjects: ["Physique", "Chimie"],
    level: ["Collège", "Lycée"],
    rating: 4.8,
    reviewCount: 89,
    hourlyRate: 40,
    location: "Lyon",
    languages: ["Français"],
    experience: 12,
    description:
      "Docteur en physique, enseignante passionnée. Méthodes pédagogiques innovantes pour rendre les sciences accessibles.",
    availability: "Disponible",
    verified: true,
    responseTime: "< 2h",
    completedLessons: 320,
  },
  {
    id: 3,
    name: "Mme. Sophie Rousseau",
    avatar: "/placeholder.svg?height=80&width=80",
    subjects: ["Français", "Littérature"],
    level: ["Collège", "Lycée"],
    rating: 4.7,
    reviewCount: 156,
    hourlyRate: 30,
    location: "Marseille",
    languages: ["Français", "Espagnol"],
    experience: 6,
    description:
      "Professeure de français certifiée. Spécialisée dans l'analyse littéraire et la préparation aux examens.",
    availability: "Occupé",
    verified: true,
    responseTime: "< 3h",
    completedLessons: 280,
  },
  {
    id: 4,
    name: "M. Pierre Dubois",
    avatar: "/placeholder.svg?height=80&width=80",
    subjects: ["Histoire", "Géographie"],
    level: ["Collège", "Lycée"],
    rating: 4.6,
    reviewCount: 73,
    hourlyRate: 28,
    location: "Toulouse",
    languages: ["Français", "Anglais"],
    experience: 5,
    description: "Enseignant d'histoire-géographie passionné. Approche interactive et mémorisation facilitée.",
    availability: "Disponible",
    verified: false,
    responseTime: "< 4h",
    completedLessons: 190,
  },
]

export function TutorSearch() {
  const { t } = useI18n()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSubject, setSelectedSubject] = useState("all")
  const [selectedLevel, setSelectedLevel] = useState("all")
  const [priceRange, setPriceRange] = useState([0, 100])
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([])
  const [onlyAvailable, setOnlyAvailable] = useState(false)
  const [onlyVerified, setOnlyVerified] = useState(false)
  const [sortBy, setSortBy] = useState("rating")
  const [showFilters, setShowFilters] = useState(false)

  // Listes avec clés et traductions dynamiques
  const subjects = [
    { key: "mathematics", label: t("tutors.subjects.mathematics") },
    { key: "physics", label: t("tutors.subjects.physics") },
    { key: "chemistry", label: t("tutors.subjects.chemistry") },
    { key: "french", label: t("tutors.subjects.french") },
    { key: "history", label: t("tutors.subjects.history") },
    { key: "geography", label: t("tutors.subjects.geography") },
    { key: "english", label: t("tutors.subjects.english") },
    { key: "spanish", label: t("tutors.subjects.spanish") }
  ]
  
  const levels = [
    { key: "primary", label: t("tutors.levels.primary") },
    { key: "middle", label: t("tutors.levels.middle") },
    { key: "high", label: t("tutors.levels.high") },
    { key: "university", label: t("tutors.levels.university") }
  ]
  
  const languages = [
    { key: "french", label: t("tutors.languages.french") },
    { key: "english", label: t("tutors.languages.english") },
    { key: "spanish", label: t("tutors.languages.spanish") },
    { key: "german", label: t("tutors.languages.german") },
    { key: "italian", label: t("tutors.languages.italian") }
  ]

  const filteredTutors = mockTutors.filter((tutor) => {
    const matchesSearch =
      tutor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tutor.subjects.some((subject) => {
        // Recherche dans les traductions des matières
        const subjectObj = subjects.find(s => s.label.toLowerCase() === subject.toLowerCase());
        return subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
               (subjectObj && subjectObj.label.toLowerCase().includes(searchQuery.toLowerCase()));
      })

    const matchesSubject = selectedSubject === "all" || tutor.subjects.includes(selectedSubject)
    const matchesLevel = selectedLevel === "all" || tutor.level.includes(selectedLevel)
    const matchesPrice = tutor.hourlyRate >= priceRange[0] && tutor.hourlyRate <= priceRange[1]
    const matchesLanguage =
      selectedLanguages.length === 0 || selectedLanguages.some((lang) => tutor.languages.includes(lang))
    const matchesAvailability = !onlyAvailable || tutor.availability === "Disponible"
    const matchesVerified = !onlyVerified || tutor.verified

    return (
      matchesSearch &&
      matchesSubject &&
      matchesLevel &&
      matchesPrice &&
      matchesLanguage &&
      matchesAvailability &&
      matchesVerified
    )
  })

  const sortedTutors = [...filteredTutors].sort((a, b) => {
    switch (sortBy) {
      case "rating":
        return b.rating - a.rating
      case "price-low":
        return a.hourlyRate - b.hourlyRate
      case "price-high":
        return b.hourlyRate - a.hourlyRate
      case "experience":
        return b.experience - a.experience
      default:
        return 0
    }
  })

  const handleLanguageChange = (language: string, checked: boolean) => {
    if (checked) {
      setSelectedLanguages([...selectedLanguages, language])
    } else {
      setSelectedLanguages(selectedLanguages.filter((lang) => lang !== language))
    }
  }

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder={t('tutors.search.placeholder')}
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <Select value={selectedSubject} onValueChange={setSelectedSubject}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder={t('tutors.search.subject')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t('tutors.allSubjects')}</SelectItem>
                {subjects.map((subject) => (
                  <SelectItem key={subject.key} value={subject.key}>
                    {subject.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedLevel} onValueChange={setSelectedLevel}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder={t('tutors.search.level')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t('tutors.allLevels')}</SelectItem>
                {levels.map((level) => (
                  <SelectItem key={level.key} value={level.key}>
                    {level.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="w-full md:w-auto">
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              {t("tutors.search.filters")}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Advanced Filters */}
      {showFilters && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              {t("tutors.search.advancedFilters")}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {/* Price Range */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Euro className="h-4 w-4 text-primary" />
                  <Label className="text-sm font-medium">{t("tutors.search.pricePerHour")}</Label>
                </div>
                <div className="bg-muted/30 rounded-lg p-4 space-y-3">
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={100}
                    min={0}
                    step={5}
                    className="w-full"
                  />
                  <div className="flex justify-between items-center">
                    <div className="bg-background px-3 py-1 rounded-md border text-sm font-medium">
                      {priceRange[0]}€
                    </div>
                    <span className="text-xs text-muted-foreground">{t("tutors.search.priceRange")}</span>
                    <div className="bg-background px-3 py-1 rounded-md border text-sm font-medium">
                      {priceRange[1]}€
                    </div>
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Languages className="h-4 w-4 text-primary" />
                  <Label className="text-sm font-medium">{t("tutors.search.spokenLanguages")}</Label>
                </div>
                <div className="bg-muted/30 rounded-lg p-4">
                  <div className="grid grid-cols-1 gap-3">
                    {languages.map((language) => (
                      <div key={language.key} className="flex items-center space-x-3 p-2 rounded-md hover:bg-background/50 transition-colors">
                        <Checkbox
                          id={language.key}
                          checked={selectedLanguages.includes(language.key)}
                          onCheckedChange={(checked) => handleLanguageChange(language.key, checked as boolean)}
                          className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                        />
                        <Label htmlFor={language.key} className="text-sm font-medium cursor-pointer flex-1">
                          {language.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Availability & Verification */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <Label className="text-sm font-medium">{t("tutors.search.options")}</Label>
                </div>
                <div className="bg-muted/30 rounded-lg p-4">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-3 rounded-md border bg-background/50 hover:bg-background transition-colors">
                      <Checkbox 
                        id="available" 
                        checked={onlyAvailable} 
                        onCheckedChange={setOnlyAvailable}
                        className="data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500"
                      />
                      <div className="flex items-center gap-2 flex-1">
                        <Clock className="h-4 w-4 text-green-600" />
                        <Label htmlFor="available" className="text-sm font-medium cursor-pointer">
                          {t("tutors.search.availableNow")}
                        </Label>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 rounded-md border bg-background/50 hover:bg-background transition-colors">
                      <Checkbox 
                        id="verified" 
                        checked={onlyVerified} 
                        onCheckedChange={setOnlyVerified}
                        className="data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
                      />
                      <div className="flex items-center gap-2 flex-1">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <Label htmlFor="verified" className="text-sm font-medium cursor-pointer">
                          {t("tutors.search.verifiedOnly")}
                        </Label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Active Filters Summary */}
            {(selectedLanguages.length > 0 || onlyAvailable || onlyVerified || priceRange[0] > 0 || priceRange[1] < 100) && (
              <div className="border-t pt-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Filter className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium text-muted-foreground">{t("tutors.search.activeFilters")}</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setSelectedLanguages([])
                      setOnlyAvailable(false)
                      setOnlyVerified(false)
                      setPriceRange([0, 100])
                    }}
                    className="text-xs"
                  >
                    {t("tutors.search.clearAll")}
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {selectedLanguages.map((langKey) => {
                    const language = languages.find(l => l.key === langKey);
                    return (
                      <div key={langKey} className="bg-primary/10 text-primary px-2 py-1 rounded-md text-xs font-medium flex items-center gap-1">
                        <Languages className="h-3 w-3" />
                        {language?.label || langKey}
                      </div>
                    );
                  })}
                  {onlyAvailable && (
                    <div className="bg-green-100 text-green-700 px-2 py-1 rounded-md text-xs font-medium flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {t("tutors.card.available")}
                    </div>
                  )}
                  {onlyVerified && (
                    <div className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md text-xs font-medium flex items-center gap-1">
                      <CheckCircle className="h-3 w-3" />
                      {t("tutors.card.verified")}
                    </div>
                  )}
                  {(priceRange[0] > 0 || priceRange[1] < 100) && (
                    <div className="bg-orange-100 text-orange-700 px-2 py-1 rounded-md text-xs font-medium flex items-center gap-1">
                      <Euro className="h-3 w-3" />
                      {priceRange[0]}€ - {priceRange[1]}€
                    </div>
                  )}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Results Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold">{sortedTutors.length} {t("tutors.search.tutorsFound")}</h2>
          <p className="text-muted-foreground">
            {selectedSubject !== "all" && `${t("tutors.search.subject_")} ${subjects.find(s => s.key === selectedSubject)?.label || selectedSubject}`}
            {selectedLevel !== "all" && ` • ${t("tutors.search.level_")} ${levels.find(l => l.key === selectedLevel)?.label || selectedLevel}`}
          </p>
        </div>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-full md:w-48">
            <SelectValue placeholder={t("tutors.search.sortBy")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="rating">{t("tutors.search.topRated")}</SelectItem>
            <SelectItem value="price-low">{t("tutors.search.priceLowToHigh")}</SelectItem>
            <SelectItem value="price-high">{t("tutors.search.priceHighToLow")}</SelectItem>
            <SelectItem value="experience">{t("tutors.search.mostExperienced")}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Tutors Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedTutors.map((tutor) => (
          <TutorCard key={tutor.id} tutor={tutor} />
        ))}
      </div>

      {sortedTutors.length === 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{t("tutors.search.noTutorsFound")}</h3>
                <p className="text-muted-foreground">{t("tutors.search.modifySearch")}</p>
              </div>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("")
                  setSelectedSubject("all")
                  setSelectedLevel("all")
                  setPriceRange([0, 100])
                  setSelectedLanguages([])
                  setOnlyAvailable(false)
                  setOnlyVerified(false)
                }}
              >
                {t("tutors.search.resetFilters")}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
