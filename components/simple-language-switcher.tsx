"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { type Locale, locales } from "@/lib/i18n"

interface SimpleLanguageSwitcherProps {
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

export function SimpleLanguageSwitcher({ currentLocale, onLocaleChange }: SimpleLanguageSwitcherProps) {
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

  const handleLocaleChange = (locale: Locale) => {
    console.log('Language selected:', locale)
    setIsOpen(false)
    onLocaleChange(locale)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        variant="ghost"
        size="sm"
        className="gap-2 h-9 px-3"
        onClick={() => {
          console.log('Button clicked, toggling menu')
          setIsOpen(!isOpen)
        }}
      >
        <span className="text-base">{languageFlags[currentLocale]}</span>
        <span className="hidden sm:inline">{languageNames[currentLocale]}</span>
        <ChevronDown className="h-3 w-3 opacity-50" />
      </Button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-1 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50">
          {locales.map((locale) => (
            <button
              key={locale}
              onClick={() => handleLocaleChange(locale)}
              className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-100 flex items-center gap-2 ${
                currentLocale === locale ? "bg-gray-50 font-medium" : ""
              }`}
            >
              <span>{languageFlags[locale]}</span>
              <span>{languageNames[locale]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}