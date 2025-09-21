"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { type Locale, locales } from "@/lib/i18n"
import { useI18n } from "@/contexts/i18n-context"

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

export function LanguageSwitcherNew() {
  const { locale, setLocale } = useI18n()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLocaleChange = (newLocale: Locale) => {
    setIsOpen(false)
    setLocale(newLocale)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        variant="ghost"
        size="sm"
        className="gap-2 h-9 px-3"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-base">{languageFlags[locale]}</span>
        <span className="hidden sm:inline">{languageNames[locale]}</span>
        <ChevronDown className="h-3 w-3 opacity-50" />
      </Button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-1 w-40 bg-background border border-border rounded-md shadow-lg z-50">
          {locales.map((localeOption) => (
            <button
              key={localeOption}
              onClick={() => handleLocaleChange(localeOption)}
              className={`w-full text-left px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground flex items-center gap-2 transition-colors ${
                locale === localeOption ? "bg-accent text-accent-foreground font-medium" : ""
              }`}
            >
              <span>{languageFlags[localeOption]}</span>
              <span>{languageNames[localeOption]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
