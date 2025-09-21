"use client"

import { useState, useEffect } from 'react'
import { type Locale, defaultLocale } from '@/lib/i18n'

export function useLanguage() {
  const [locale, setLocale] = useState<Locale>(defaultLocale)

  useEffect(() => {
    // Get locale from localStorage or browser
    const savedLocale = localStorage.getItem('locale') as Locale
    if (savedLocale) {
      setLocale(savedLocale)
    } else {
      // Detect browser language
      const browserLang = navigator.language.split('-')[0] as Locale
      const supportedLocale = ['fr', 'en', 'es'].includes(browserLang) ? browserLang : defaultLocale
      setLocale(supportedLocale)
    }
  }, [])

  const changeLocale = (newLocale: Locale) => {
    setLocale(newLocale)
    localStorage.setItem('locale', newLocale)
  }

  return { locale, changeLocale }
}