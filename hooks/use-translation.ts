"use client"

import { useState, useEffect } from 'react'
import { type Locale, defaultLocale, getTranslation } from '@/lib/i18n'
import { getLocaleFromPath } from '@/lib/utils'
import { usePathname } from 'next/navigation'

export function useTranslation() {
  const pathname = usePathname()
  const [locale, setLocale] = useState<Locale>(defaultLocale)

  useEffect(() => {
    const currentLocale = getLocaleFromPath(pathname)
    setLocale(currentLocale)
  }, [pathname])

  const t = (key: keyof typeof import('@/lib/i18n').translations.fr) => {
    return getTranslation(locale, key)
  }

  return { t, locale, setLocale }
}