"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe, ChevronDown } from "lucide-react"
import { type Locale, locales } from "@/lib/i18n"

interface LanguageSwitcherProps {
  currentLocale: Locale
  onLocaleChange: (locale: Locale) => void
}

const languageNames = {
  fr: "Français",
  en: "English",
  es: "Español",
} as const

const languageFlags = {
  fr: "🇫🇷",
  en: "🇬🇧",
  es: "🇪🇸",
} as const

export function LanguageSwitcher({ currentLocale, onLocaleChange }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleLocaleChange = (locale: Locale) => {
    console.log('Language clicked:', locale)
    setIsOpen(false)
    onLocaleChange(locale)
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className="gap-2 h-9 px-3 border border-transparent hover:border-border"
          onClick={() => {
            console.log('Trigger clicked, current state:', isOpen)
            setIsOpen(!isOpen)
          }}
        >
          <span className="text-base">{languageFlags[currentLocale]}</span>
          <span className="hidden sm:inline">{languageNames[currentLocale]}</span>
          <ChevronDown className="h-3 w-3 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[140px] z-50">
        {locales.map((locale) => (
          <DropdownMenuItem
            key={locale}
            onClick={() => handleLocaleChange(locale)}
            className={`cursor-pointer flex items-center gap-2 ${currentLocale === locale ? "bg-accent text-accent-foreground" : ""}`}
          >
            <span>{languageFlags[locale]}</span>
            <span>{languageNames[locale]}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
