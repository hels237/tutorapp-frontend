"use client"

import { useI18n } from '@/contexts/i18n-context'

export function DebugLanguage() {
  const { locale } = useI18n()

  if (process.env.NODE_ENV !== 'development') return null

  return (
    <div className="fixed bottom-4 right-4 bg-black text-white p-2 rounded text-xs z-50">
      Current locale: {locale}
    </div>
  )
}