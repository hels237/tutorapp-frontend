import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { type Locale, locales, defaultLocale } from './i18n'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Utility functions for i18n
export function getLocaleFromPath(pathname: string): Locale {
  const segments = pathname.split('/')
  const locale = segments[1] as Locale
  return locales.includes(locale) ? locale : defaultLocale
}

export function createLocalizedPath(pathname: string, locale: Locale): string {
  const segments = pathname.split('/')
  if (locales.includes(segments[1] as Locale)) {
    segments[1] = locale
  } else {
    segments.splice(1, 0, locale)
  }
  return segments.join('/')
}

export function removeLocaleFromPath(pathname: string): string {
  const segments = pathname.split('/')
  if (locales.includes(segments[1] as Locale)) {
    segments.splice(1, 1)
  }
  return segments.join('/') || '/'
}