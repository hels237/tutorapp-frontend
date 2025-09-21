"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { type Locale, defaultLocale } from '@/lib/i18n'
import { getLocaleFromPath } from '@/lib/utils'
import { usePathname } from 'next/navigation'

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const [locale, setLocale] = useState<Locale>(defaultLocale)

  useEffect(() => {
    const currentLocale = getLocaleFromPath(pathname)
    setLocale(currentLocale)
  }, [pathname])

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguageContext() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguageContext must be used within a LanguageProvider')
  }
  return context
}