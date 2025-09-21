"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { type Locale, defaultLocale, getTranslation } from '@/lib/i18n'

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

interface I18nProviderProps {
  children: ReactNode
}

export function I18nProvider({ children }: I18nProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale)
  const [isInitialized, setIsInitialized] = useState(false)

  // Initialiser la langue depuis localStorage au montage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLocale = localStorage.getItem('locale') as Locale
      if (savedLocale && ['fr', 'en', 'es'].includes(savedLocale)) {
        setLocaleState(savedLocale)
      }
      setIsInitialized(true)
    }
  }, [])

  // Fonction pour changer la langue
  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', newLocale)
    }
  }

  // Fonction de traduction
  const t = (key: string) => {
    return getTranslation(locale, key as any)
  }

  // Ne pas rendre les enfants tant que l'initialisation n'est pas terminée
  if (!isInitialized) {
    return null
  }

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider')
  }
  return context
}
