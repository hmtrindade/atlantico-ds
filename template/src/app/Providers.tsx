import { createContext, useEffect, useState } from 'react'
import type { Theme } from '@/types'

interface ThemeContextValue {
  theme: Theme
  setTheme: (theme: Theme) => void
  isDark: boolean
}

export const ThemeContext = createContext<ThemeContextValue>({
  theme: 'system',
  setTheme: () => {},
  isDark: false,
})

function resolveIsDark(theme: Theme): boolean {
  if (theme === 'dark') return true
  if (theme === 'light') return false
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export function Providers({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    return (localStorage.getItem('atl-theme') as Theme) ?? 'system'
  })

  const [isDark, setIsDark] = useState(() => resolveIsDark(
    (localStorage.getItem('atl-theme') as Theme) ?? 'system'
  ))

  function applyTheme(next: Theme) {
    const dark = resolveIsDark(next)
    document.documentElement.classList.toggle('dark', dark)
    setIsDark(dark)
  }

  function setTheme(next: Theme) {
    setThemeState(next)
    localStorage.setItem('atl-theme', next)
    applyTheme(next)
  }

  useEffect(() => {
    applyTheme(theme)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (theme !== 'system') return
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (e: MediaQueryListEvent) => {
      document.documentElement.classList.toggle('dark', e.matches)
      setIsDark(e.matches)
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  )
}
